---
name: system-numerics
description: Use when cross-system numbers such as rewards, costs, resource sources/sinks, upgrade pacing, retry costs, failure compensation, economy pressure, and dependency checks need planning or tuning.
---

# System Numerics

## Use When

- Rewards, costs, sources, sinks, upgrade pacing, retry costs, or failure compensation affect multiple systems.
- Economy, progression, combat, level, UX, or LiveOps assumptions need shared numeric ownership.
- A Technical Designer or Numerical Designer needs cross-system dependency checks.
- A playtest reveals a pacing or resource-pressure issue spanning more than one table.

## Do Not Use When

- The task is only moment-to-moment combat damage or timing.
- The request is only narrative, art, or audio production.
- The user is asking for commercial backend, payment, or real telemetry implementation.

## Inputs

- Numerical planning brief.
- Economy model, progression map, resource/reward table, or tuning loop.
- Level curve and combat parameter assumptions.
- Session length, fail/retry model, and reward cadence.
- Playtest evidence, if available.

## Outputs

- System numerical plan.
- Cross-system parameter list.
- Source/sink, reward/cost, and pacing links.
- Dependency checks and failure compensation rules.
- Tuning hypotheses and next validation method.

## Workflow

1. Define the system scope and which tables or templates own each number.
2. Use `templates/design/system-numerical-plan.md` for the cross-system view.
3. Map sources, sinks, rewards, costs, upgrades, retries, failure compensation, and progression gates.
4. Check that numbers support the desired loop rather than creating grind, runaway growth, or dead choices.
5. Record assumptions that later telemetry or playtest analytics should verify.
6. Route combat-specific numbers to `combat-parameters` and growth curves to `level-curve`.

## Quality Bar

- Cross-system dependencies are visible and reviewable.
- Reward and cost pressure uses player-facing units and time windows.
- Tuning proposals change one controllable hypothesis at a time when possible.
- No commercial, payment, backend, or real telemetry implementation is implied.

## Common Failure Modes

- Optimizing one table while breaking the surrounding economy.
- Omitting failure compensation and retry costs.
- Hiding tuning decisions in formulas without design intent.
- Treating LiveOps assumptions as approved implementation.

## Next Skills

- `numerical-planning`
- `level-curve`
- `combat-parameters`
- `playtest-report`
