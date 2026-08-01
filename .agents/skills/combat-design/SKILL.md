---
name: combat-design
description: Use when combat needs verbs, timing windows, enemy/player actions, feedback, risk/reward, encounter assumptions, and handoff-ready combat specs before implementation.
---

# Combat Design

## Use When

- A game needs its combat verbs, timing, readability, and risk/reward specified.
- A Combat Designer or Game Designer needs to align player actions, enemy actions, encounter assumptions, and feedback.
- A prototype needs combat design quality above placeholder-only behavior.
- Combat specs must feed parameters, level curve, encounter design, or engine implementation.

## Do Not Use When

- The task is only numeric balance with existing combat rules.
- The game has no combat or conflict resolution system.
- The request is only art, animation, VFX, or audio production without gameplay behavior.

## Inputs

- Pitch, core loop, and mechanic spec.
- Genre track and camera/control assumptions.
- Player fantasy and target difficulty.
- Existing combat parameters, if any.
- Prototype or vertical slice scope.

## Outputs

- Combat experience target.
- Player verbs, enemy verbs, and response rules.
- Timing windows, priority, cancel, interrupt, and recovery rules.
- Feedback requirements for animation, VFX, SFX, UI, camera, and haptics.
- Risk/reward and readable failure model.
- Tuning handles and acceptance checks.

## Workflow

1. State the intended combat experience in production language.
2. Define player action set, enemy action set, and readable decision points.
3. Map timing windows, priority, cancel rules, interrupts, recovery, and failure states.
4. Identify feedback needed for anticipation, execution, hit confirmation, damage, defense, and recovery.
5. Separate combat rules from numeric tuning.
6. Route numeric work to `combat-parameters` and growth pacing to `level-curve`.
7. Define playtest questions before implementation.

## Quality Bar

- Combat can be reviewed for feel, readability, fairness, and production cost.
- Placeholder assets must still communicate character, enemy, and action intent.
- Numeric values are not used to hide unclear combat rules.
- Implementation waits for review approval when code, assets, or project structure would change.

## Common Failure Modes

- Treating combat as only damage numbers.
- Omitting enemy intent and readable telegraphs.
- Using final animation or VFX as a prerequisite for prototype proof.
- Failing to define failure and recovery.

## Next Skills

- `combat-parameters`
- `mechanic-spec`
- `level-curve`
- `playtest-report`
- `engine-portability`
