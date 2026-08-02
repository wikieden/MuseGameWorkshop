export interface PhaseTuning {
  readonly threshold: number;
  readonly name: string;
  readonly attackInterval: number;
  readonly windup: number;
  readonly strike: number;
  readonly recovery: number;
  readonly attackRadius: number;
}

export interface CombatTuning {
  readonly fixedStep: number;
  readonly arenaRadius: number;
  readonly player: {
    readonly maxHealth: number;
    readonly moveSpeed: number;
    readonly maxStamina: number;
    readonly staminaRegen: number;
    readonly dodgeCost: number;
    readonly dodgeDuration: number;
    readonly dodgeSpeed: number;
    readonly parryCost: number;
    readonly parryActive: number;
    readonly parryRecovery: number;
    readonly counterCost: number;
    readonly counterDuration: number;
    readonly counterDamage: number;
  };
  readonly boss: {
    readonly maxHealth: number;
    readonly counterWindow: number;
    readonly staggerDuration: number;
    readonly phases: readonly [PhaseTuning, PhaseTuning, PhaseTuning];
  };
}

export const COMBAT_TUNING: CombatTuning = {
  fixedStep: 1 / 60,
  arenaRadius: 7.2,
  player: {
    maxHealth: 4,
    moveSpeed: 4.2,
    maxStamina: 100,
    staminaRegen: 27,
    dodgeCost: 24,
    dodgeDuration: 0.28,
    dodgeSpeed: 9.5,
    parryCost: 18,
    parryActive: 0.2,
    parryRecovery: 0.28,
    counterCost: 10,
    counterDuration: 0.38,
    counterDamage: 14,
  },
  boss: {
    maxHealth: 100,
    counterWindow: 0.85,
    staggerDuration: 1.0,
    phases: [
      { threshold: 0.66, name: 'Tempered', attackInterval: 1.15, windup: 0.72, strike: 0.18, recovery: 0.58, attackRadius: 4.5 },
      { threshold: 0.33, name: 'Overheat', attackInterval: 0.88, windup: 0.56, strike: 0.2, recovery: 0.48, attackRadius: 4.8 },
      { threshold: 0, name: 'Rupture', attackInterval: 0.64, windup: 0.43, strike: 0.24, recovery: 0.38, attackRadius: 5.1 },
    ],
  },
};
