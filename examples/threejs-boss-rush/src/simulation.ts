import { COMBAT_TUNING, type CombatTuning } from './tuning';

export type GameStatus = 'playing' | 'victory' | 'defeat';
export type PlayerAction = 'idle' | 'dodge' | 'parry' | 'counter' | 'hurt';
export type BossAction = 'idle' | 'windup' | 'strike' | 'recovery' | 'stagger';

export interface InputFrame {
  moveX: number;
  moveZ: number;
  dodge: boolean;
  parry: boolean;
  counter: boolean;
  restart: boolean;
}

export interface CombatEvent {
  readonly id: number;
  readonly type: 'dodge' | 'parry' | 'counter' | 'hit' | 'phase' | 'victory' | 'defeat' | 'restart';
}

export interface SimulationState {
  tick: number;
  elapsed: number;
  status: GameStatus;
  player: {
    x: number;
    z: number;
    health: number;
    stamina: number;
    action: PlayerAction;
    actionTime: number;
    dodgeX: number;
    dodgeZ: number;
  };
  boss: {
    x: number;
    z: number;
    health: number;
    phase: 1 | 2 | 3;
    action: BossAction;
    actionTime: number;
    idleTime: number;
    attackSerial: number;
  };
  counterWindow: number;
  banner: string;
  bannerTime: number;
  event: CombatEvent;
}

export const EMPTY_INPUT: InputFrame = {
  moveX: 0,
  moveZ: 0,
  dodge: false,
  parry: false,
  counter: false,
  restart: false,
};

const magnitude = (x: number, z: number) => Math.hypot(x, z);
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export class CombatSimulation {
  readonly tuning: CombatTuning;
  state: SimulationState;
  private eventId = 0;

  constructor(tuning: CombatTuning = COMBAT_TUNING) {
    this.tuning = tuning;
    this.state = this.createInitialState();
  }

  reset(): void {
    this.state = this.createInitialState();
    this.emit('restart');
  }

  step(input: InputFrame, dt = this.tuning.fixedStep): SimulationState {
    if (input.restart) {
      this.reset();
      return this.state;
    }
    if (this.state.status !== 'playing') return this.state;

    const step = clamp(dt, 0, 0.05);
    this.state.tick += 1;
    this.state.elapsed += step;
    this.state.bannerTime = Math.max(0, this.state.bannerTime - step);
    this.state.counterWindow = Math.max(0, this.state.counterWindow - step);

    this.updatePlayer(input, step);
    this.updateBoss(step);
    this.updatePhase();
    this.resolveOutcome();
    return this.state;
  }

  private createInitialState(): SimulationState {
    return {
      tick: 0,
      elapsed: 0,
      status: 'playing',
      player: {
        x: 0,
        z: 3.3,
        health: this.tuning.player.maxHealth,
        stamina: this.tuning.player.maxStamina,
        action: 'idle',
        actionTime: 0,
        dodgeX: 0,
        dodgeZ: -1,
      },
      boss: {
        x: 0,
        z: -0.85,
        health: this.tuning.boss.maxHealth,
        phase: 1,
        action: 'idle',
        actionTime: 0,
        idleTime: 0.7,
        attackSerial: 0,
      },
      counterWindow: 0,
      banner: 'READ THE FORGE',
      bannerTime: 1.8,
      event: { id: this.eventId, type: 'restart' },
    };
  }

  private updatePlayer(input: InputFrame, dt: number): void {
    const player = this.state.player;
    player.actionTime = Math.max(0, player.actionTime - dt);

    if (player.actionTime <= 0 && player.action !== 'idle') player.action = 'idle';

    const canAct = player.action === 'idle';
    if (canAct && input.dodge && player.stamina >= this.tuning.player.dodgeCost) {
      const length = magnitude(input.moveX, input.moveZ);
      player.dodgeX = length > 0.1 ? input.moveX / length : 0;
      player.dodgeZ = length > 0.1 ? input.moveZ / length : -1;
      player.stamina -= this.tuning.player.dodgeCost;
      player.action = 'dodge';
      player.actionTime = this.tuning.player.dodgeDuration;
      this.emit('dodge');
    } else if (canAct && input.parry && player.stamina >= this.tuning.player.parryCost) {
      player.stamina -= this.tuning.player.parryCost;
      player.action = 'parry';
      player.actionTime = this.tuning.player.parryActive + this.tuning.player.parryRecovery;
    } else if (canAct && input.counter && this.state.counterWindow > 0 && player.stamina >= this.tuning.player.counterCost) {
      player.stamina -= this.tuning.player.counterCost;
      player.action = 'counter';
      player.actionTime = this.tuning.player.counterDuration;
      this.state.boss.health = Math.max(0, this.state.boss.health - this.tuning.player.counterDamage);
      this.state.counterWindow = 0;
      this.setBanner('COUNTER STRIKE', 0.7);
      this.emit('counter');
    }

    if (player.action === 'dodge') {
      player.x += player.dodgeX * this.tuning.player.dodgeSpeed * dt;
      player.z += player.dodgeZ * this.tuning.player.dodgeSpeed * dt;
    } else if (player.action === 'idle') {
      const length = Math.max(1, magnitude(input.moveX, input.moveZ));
      player.x += (input.moveX / length) * this.tuning.player.moveSpeed * dt;
      player.z += (input.moveZ / length) * this.tuning.player.moveSpeed * dt;
    }

    const radius = magnitude(player.x, player.z);
    if (radius > this.tuning.arenaRadius) {
      player.x = (player.x / radius) * this.tuning.arenaRadius;
      player.z = (player.z / radius) * this.tuning.arenaRadius;
    }

    const regenMultiplier = player.action === 'idle' ? 1 : 0.45;
    player.stamina = Math.min(
      this.tuning.player.maxStamina,
      player.stamina + this.tuning.player.staminaRegen * regenMultiplier * dt,
    );
  }

  private updateBoss(dt: number): void {
    const boss = this.state.boss;
    const phase = this.tuning.boss.phases[boss.phase - 1];

    switch (boss.action) {
      case 'idle':
        boss.idleTime -= dt;
        if (boss.idleTime <= 0) {
          boss.action = 'windup';
          boss.actionTime = phase.windup;
          boss.attackSerial += 1;
          this.setBanner(boss.phase === 3 ? 'RUPTURE SWING' : 'FORGE SWING', phase.windup);
        }
        break;
      case 'windup':
        boss.actionTime -= dt;
        if (boss.actionTime <= 0) this.resolveBossStrike(phase.strike, phase.attackRadius);
        break;
      case 'strike':
        boss.actionTime -= dt;
        if (boss.actionTime <= 0) {
          boss.action = 'recovery';
          boss.actionTime = phase.recovery;
        }
        break;
      case 'recovery':
        boss.actionTime -= dt;
        if (boss.actionTime <= 0) {
          boss.action = 'idle';
          boss.idleTime = phase.attackInterval;
        }
        break;
      case 'stagger':
        boss.actionTime -= dt;
        if (boss.actionTime <= 0) {
          boss.action = 'idle';
          boss.idleTime = phase.attackInterval;
          this.state.counterWindow = 0;
        }
        break;
    }
  }

  private resolveBossStrike(strikeDuration: number, attackRadius: number): void {
    const boss = this.state.boss;
    const player = this.state.player;
    boss.action = 'strike';
    boss.actionTime = strikeDuration;

    const distance = magnitude(player.x - boss.x, player.z - boss.z);
    if (distance > attackRadius || player.action === 'dodge') {
      this.setBanner('EVADED', 0.45);
      return;
    }

    const parryActiveUntil = this.tuning.player.parryRecovery;
    if (player.action === 'parry' && player.actionTime > parryActiveUntil) {
      player.action = 'idle';
      player.actionTime = 0;
      boss.action = 'stagger';
      boss.actionTime = this.tuning.boss.staggerDuration;
      this.state.counterWindow = this.tuning.boss.counterWindow;
      this.setBanner('PARRY - COUNTER NOW', this.tuning.boss.counterWindow);
      this.emit('parry');
      return;
    }

    player.health = Math.max(0, player.health - 1);
    player.action = 'hurt';
    player.actionTime = 0.42;
    this.setBanner('ARMOR BREACHED', 0.7);
    this.emit('hit');
  }

  private updatePhase(): void {
    const boss = this.state.boss;
    const healthRatio = boss.health / this.tuning.boss.maxHealth;
    const nextPhase: 1 | 2 | 3 = healthRatio <= this.tuning.boss.phases[1].threshold
      ? 3
      : healthRatio <= this.tuning.boss.phases[0].threshold
        ? 2
        : 1;

    if (nextPhase > boss.phase) {
      boss.phase = nextPhase;
      boss.action = 'recovery';
      boss.actionTime = 0.7;
      this.setBanner(`PHASE ${nextPhase}: ${this.tuning.boss.phases[nextPhase - 1].name.toUpperCase()}`, 1.4);
      this.emit('phase');
    }
  }

  private resolveOutcome(): void {
    if (this.state.boss.health <= 0) {
      this.state.status = 'victory';
      this.setBanner('TRIAL CLEARED', Number.POSITIVE_INFINITY);
      this.emit('victory');
    } else if (this.state.player.health <= 0) {
      this.state.status = 'defeat';
      this.setBanner('SENTINEL FALLEN', Number.POSITIVE_INFINITY);
      this.emit('defeat');
    }
  }

  private setBanner(message: string, duration: number): void {
    this.state.banner = message;
    this.state.bannerTime = duration;
  }

  private emit(type: CombatEvent['type']): void {
    this.eventId += 1;
    this.state.event = { id: this.eventId, type };
  }
}
