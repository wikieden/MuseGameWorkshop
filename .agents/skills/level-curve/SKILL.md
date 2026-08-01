---
name: level-curve
description: Use when player, unit, enemy, skill, equipment, or content levels need growth curves, unlock pacing, XP/resource requirements, catch-up, anti-grind, and validation anchors.
---

# Level Curve

## Use When

- Player, unit, enemy, skill, equipment, or content levels need planned growth.
- A Numerical Designer needs a level or unlock curve before implementation.
- Unlock pacing, XP requirements, resource requirements, or catch-up rules are unclear.
- A genre track needs progression anchors before content production.
- A vertical slice needs a small but reviewable progression sample.

## Do Not Use When

- The game has no level-like progression.
- The task is only moment combat timing or action readability.
- The request is final live balance without current telemetry or playtest evidence.

## Inputs

- Numerical planning brief.
- Progression map or economy model.
- Session length and target playtime.
- Content gates, unlocks, units, skills, equipment, or difficulty anchors.
- Playtest notes, if available.

## Outputs

- Level curve goal and progression axes.
- Anchor points for early, mid, late, or slice-specific content.
- XP, currency, resource, or unlock requirements.
- Catch-up, anti-grind, and failure compensation rules.
- Validation checks and retuning triggers.

## Workflow

1. Define what "level" means in this project: player, unit, enemy, skill, equipment, content, or account.
2. Set experience targets and anchor points before filling rows.
3. Use `templates/design/level-curve.md` for the table shape.
4. Link growth to combat, economy, rewards, UX, and content gates.
5. Identify grind, runaway growth, dead unlocks, and invalid difficulty spikes.
6. Define playtest checks for pacing, clarity, and meaningful choice.

## Quality Bar

- Growth supports readable player decisions, not only larger numbers.
- Unlocks have purpose and teaching order.
- Catch-up and failure compensation are explicit when relevant.
- Any formula includes units, windows, and assumptions.

## Common Failure Modes

- Treating the curve as pure XP math.
- Making early-game pacing too slow to validate.
- Creating content gates without explaining player learning.
- Ignoring how combat parameters and rewards affect progression.

## Next Skills

- `combat-parameters`
- `system-numerics`
- `numerical-planning`
- `playtest-report`
