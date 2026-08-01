# Numerical Planning

Version: v0.9.1

Language: English

## 1. Purpose

v0.9.1 adds the Numerical Planning addendum for Muse Game Workshop. It turns level curves, combat values, and system numbers into reviewable production records before implementation.

This addendum extends v0.9 Economy & Progression. It does not replace the economy model, progression map, resource/reward table, or tuning loop. It adds a practical layer for planning:

- Level curve.
- Combat parameter table.
- System numerical plan.
- Tactics numerical dry run.

## 2. Production Terms

| Term | Meaning |
|---|---|
| Numerical planning | The design process for level, combat, economy, progression, and system parameters before implementation. |
| Level curve | The expected growth of player, unit, skill, equipment, enemy, and content values over time. |
| Combat parameter table | The parameter set that makes combat measurable: HP, damage, defense, hit rate, crit, action points, cooldowns, stamina, range, speed, and turn economy. |
| System numerical plan | The cross-system parameter plan for economy, rewards, costs, unlocks, retry, failure compensation, difficulty, and pacing. |
| Anchor point | A known target point such as level 1, first boss, chapter 2 start, or first build milestone. |
| TTK | Turns or time to kill. |
| EHP | Effective HP after defense, mitigation, shields, or resistance. |
| DPR | Damage per round or damage per rotation. |

Chinese-facing docs should map these to `数值规划`, `等级曲线`, `战斗参数表`, `系统数值规划`, `锚点`, `击杀回合/击杀时间`, `有效生命`, and `每回合伤害`.

## 3. Scope

v0.9.1 covers:

- Level, unit, skill, enemy, and content anchor points.
- Combat formulas and measurable targets.
- Economy/progression parameters that affect pacing.
- Tactics validation for unit level, enemy level, HP, damage, action points, stamina, cooldowns, mission rewards, upgrade costs, and failure compensation.
- No-code dry-run evidence and static checks.

v0.9.1 does not cover:

- Engine implementation.
- Real telemetry services.
- Monetization, payment, gacha, battle pass, or paid-content design.
- LiveOps economy operation.
- Full spreadsheet tooling.
- Final balance values for release.

## 4. Planning Order

Use this order:

1. Define player experience targets.
2. Define anchor points.
3. Draft level curve.
4. Draft combat parameter table.
5. Draft system numerical plan.
6. Run a dry-run or spreadsheet simulation.
7. Record a tuning-loop hypothesis.
8. Review, adjust, and repeat.

Do not start with a complete spreadsheet. Start with targets and anchor points.

## 5. Experience Targets

Before numbers, define:

- Session length.
- Expected mission length.
- Expected combat rounds.
- Normal enemy TTK.
- Elite enemy TTK.
- Boss phase length.
- Frequency of new skill, unit, equipment, or system unlocks.
- Failure cost and failure compensation.
- Difficulty ramp.

These targets keep numbers tied to player-facing experience.

## 6. Anchor Points

Use anchor points before filling the curve:

| Anchor | Required decision |
|---|---|
| Level 1 | Starting stats, starting verbs, first failure risk. |
| First upgrade | What changes after the first meaningful growth. |
| First boss | Whether core combat, economy, and progression are understandable. |
| Chapter 2 start | What new system or build option opens. |
| Midgame benchmark | Whether the player has enough decisions without excessive complexity. |
| Vertical slice cap | The highest value range used by the first playable slice. |

Fill the values between anchors only after the anchors are coherent.

## 7. Combat Formulas

Keep formulas simple at first:

```text
Effective HP = HP / (1 - Damage Reduction)
Expected Damage = Base Damage * Hit Rate * Action Frequency
Turns To Kill = Effective HP / Expected Damage Per Round
```

For turn-based tactics, track:

- Action points.
- Move range.
- Attack range.
- Skill cost.
- Cooldown.
- Stamina cost and recovery.
- Enemy threat range.
- Cover, armor, shield, or resistance.

Every formula must state why the player can read it. Hidden complexity should not carry the first prototype.

## 8. System Number Links

The system numerical plan should connect:

- Level curve.
- Combat parameter table.
- Economy model.
- Progression map.
- Resource/reward table.
- Tuning loop.
- Playtest hypotheses.

If a cost changes, the reward table and progression pacing should be reviewed. If damage changes, enemy HP, healing, reward pacing, and failure compensation may also need review.

## 9. Review Gate

v0.9.1 is approved only for design, templates, evidence, and checks.

Any engine code, real telemetry, commercial backend, payment, monetization, asset generation, or release balance requires separate review.

## 10. Completion Evidence

v0.9.1 is complete when:

- `numerical-planning.zh.md` and `numerical-planning.en.md` exist.
- Level curve, combat parameter table, and system numerical plan templates exist.
- Tactics numerical dry-run evidence exists.
- `tools/checks/check-v0.9.1-numerical-planning` passes.
- Existing v0.9 and documentation checks still pass.

After v0.9.1, the next planned version remains v0.10 Telemetry & Playtest Analytics.
