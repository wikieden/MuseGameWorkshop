import { describe, expect, it } from 'vitest';
import { CombatSimulation, EMPTY_INPUT, type InputFrame } from '../src/simulation';

const frame = (input: Partial<InputFrame> = {}): InputFrame => ({ ...EMPTY_INPUT, ...input });
const run = (simulation: CombatSimulation, seconds: number, input: InputFrame = EMPTY_INPUT): void => {
  const steps = Math.ceil(seconds / simulation.tuning.fixedStep);
  for (let index = 0; index < steps; index += 1) simulation.step(input);
};

describe('Counter Trial deterministic combat loop', () => {
  it('produces identical state for the same fixed-step input sequence', () => {
    const first = new CombatSimulation();
    const second = new CombatSimulation();
    const inputs = [
      ...Array.from({ length: 45 }, () => frame({ moveX: 1 })),
      frame({ dodge: true, moveZ: -1 }),
      ...Array.from({ length: 90 }, () => frame()),
    ];

    for (const input of inputs) {
      first.step(input);
      second.step(input);
    }

    expect(first.state).toEqual(second.state);
  });

  it('moves the player, spends dodge stamina, and keeps movement inside the arena', () => {
    const simulation = new CombatSimulation();
    run(simulation, 4, frame({ moveX: 1 }));
    expect(Math.hypot(simulation.state.player.x, simulation.state.player.z)).toBeLessThanOrEqual(simulation.tuning.arenaRadius + 0.001);

    const stamina = simulation.state.player.stamina;
    simulation.step(frame({ dodge: true, moveZ: -1 }));
    expect(simulation.state.player.action).toBe('dodge');
    expect(simulation.state.player.stamina).toBeLessThan(stamina);
  });

  it('rewards an active parry with a counter window and damage', () => {
    const simulation = new CombatSimulation();
    simulation.state.boss.action = 'windup';
    simulation.state.boss.actionTime = 0.01;
    simulation.step(frame({ parry: true }), 0.02);

    expect(simulation.state.boss.action).toBe('stagger');
    expect(simulation.state.counterWindow).toBeGreaterThan(0);
    const health = simulation.state.boss.health;

    simulation.step(frame({ counter: true }));
    expect(simulation.state.boss.health).toBe(health - simulation.tuning.player.counterDamage);
    expect(simulation.state.counterWindow).toBe(0);
  });

  it('advances phases at health thresholds and reaches victory', () => {
    const simulation = new CombatSimulation();
    simulation.state.boss.health = 65;
    simulation.step(frame());
    expect(simulation.state.boss.phase).toBe(2);

    simulation.state.boss.health = 32;
    simulation.step(frame());
    expect(simulation.state.boss.phase).toBe(3);

    simulation.state.boss.health = 0;
    simulation.step(frame());
    expect(simulation.state.status).toBe('victory');
  });

  it('reaches defeat after four clean boss hits and can restart', () => {
    const simulation = new CombatSimulation();
    for (let hit = 0; hit < simulation.tuning.player.maxHealth; hit += 1) {
      simulation.state.player.action = 'idle';
      simulation.state.boss.action = 'windup';
      simulation.state.boss.actionTime = 0.001;
      simulation.step(frame(), 0.01);
    }

    expect(simulation.state.status).toBe('defeat');
    simulation.step(frame({ restart: true }));
    expect(simulation.state.status).toBe('playing');
    expect(simulation.state.player.health).toBe(simulation.tuning.player.maxHealth);
    expect(simulation.state.boss.health).toBe(simulation.tuning.boss.maxHealth);
  });
});
