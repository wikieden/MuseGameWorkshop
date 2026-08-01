---
name: combat-parameters
description: Use when combat numbers such as HP, EHP, damage, DPR, TTK, AP, stamina, cooldown, range, accuracy, threat, or difficulty benchmarks need planning or tuning.
---

# Combat Parameters

## Use When

- Combat rules exist but HP, EHP, damage, DPR, TTK, AP, stamina, cooldowns, range, accuracy, threat, or difficulty benchmarks are unclear.
- A Combat Designer or Numerical Designer needs a parameter table before implementation.
- Playtest feedback points to tuning problems rather than rule problems.
- A Tactics, Action, RPG, Roguelike, or Adventure combat slice needs numeric anchors.

## Do Not Use When

- Combat verbs and readable states are not defined yet.
- The request is only economy or progression pacing.
- The team is asking for release balance approval without implementation/playtest evidence.

## Inputs

- Combat design brief or mechanic spec.
- Level curve or content tier assumptions.
- Target difficulty and player skill assumptions.
- Existing formulas, if any.
- Playtest observations or benchmark targets.

## Outputs

- Combat parameter table.
- Formula notes and assumptions.
- Actor benchmarks and action economy anchors.
- TTK, EHP, DPR, cooldown, range, and threat targets where relevant.
- Tuning hypotheses and validation checks.

## Workflow

1. Confirm combat rules, verbs, and feedback are specified.
2. Define target combat experience and difficulty anchors.
3. Use `templates/design/combat-parameter-table.md` for the working table.
4. Separate base values, scaling values, formulas, and designer-facing tuning handles.
5. Identify dominant strategies, meaningless choices, difficulty spikes, and unreadable failures.
6. Feed test questions into `playtest-report`.

## Quality Bar

- Every major number has design intent and player-facing effect.
- TTK, EHP, DPR, AP, stamina, and cooldowns use consistent units.
- The table can be tuned without code edits.
- Balance claims are marked as hypotheses until tested.

## Common Failure Modes

- Tuning damage before defining enemy behavior.
- Confusing difficulty with inflated HP.
- Ignoring action economy and recovery windows.
- Treating benchmark numbers as truth without local playtest evidence.

## Next Skills

- `combat-design`
- `level-curve`
- `system-numerics`
- `playtest-report`
