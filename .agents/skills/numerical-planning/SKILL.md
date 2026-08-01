---
name: numerical-planning
description: Use when level, combat, economy, progression, reward, cost, or system numbers need anchor points, formulas, tuning hypotheses, and reviewable numerical planning before implementation.
---

# Numerical Planning

## Use When

- A design needs level, combat, economy, progression, reward, cost, or system numbers.
- A Numerical Designer needs anchor points before detailed tables are created.
- A team needs to decide which numerical specialist skill should run next.
- Tuning hypotheses must be connected to playtest evidence.

## Do Not Use When

- The request is only qualitative concept or narrative design.
- Values already exist and the task is only implementation.
- The user is asking for final release balance approval.

## Inputs

- Core loop, mechanic spec, system design, economy/progression doc, or playtest report.
- Target experience and difficulty curve.
- Genre track and session length.
- Known formulas, tables, or benchmark games.
- Production stage and validation constraints.

## Outputs

- Numerical experience target.
- Anchor points and assumed formulas.
- Specialist routing: `level-curve`, `combat-parameters`, or `system-numerics`.
- Tuning hypotheses and expected player-facing effects.
- Validation plan and playtest questions.

## Workflow

1. Clarify which experience problem the numbers should solve.
2. Identify the numerical domain: level, combat, economy, progression, reward, cost, or cross-system dependency.
3. Define anchor points before filling full tables.
4. Record formulas, assumptions, risk ranges, and uncertainty.
5. Route detailed work to the appropriate specialist skill.
6. Link results back to playtest evidence and review decisions.

## Quality Bar

- Numbers have design intent, not only spreadsheet shape.
- Anchor points are readable to designers, programmers, and QA.
- Formulas name units, windows, denominators, and excluded cases.
- Release balance is not approved without implementation evidence and playtest evidence.

## Common Failure Modes

- Creating complete-looking tables without experience targets.
- Mixing economy, combat, and level numbers without ownership.
- Using opaque formulas that cannot be reviewed.
- Changing many variables after one weak playtest signal.

## Next Skills

- `level-curve`
- `combat-parameters`
- `system-numerics`
- `playtest-report`
