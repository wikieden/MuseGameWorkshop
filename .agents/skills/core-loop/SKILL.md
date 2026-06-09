---
name: core-loop
description: Use when a game direction needs to become a clear repeatable play loop across moment, session, and progression scales.
---

# Core Loop

## Use When

- A pitch needs a playable structure.
- A prototype needs its repeated action, feedback, reward, and reset cycle defined.
- A team is unsure whether a mechanic supports a game loop.

## Do Not Use When

- The task is only engine implementation.
- The mechanic spec already defines inputs, states, parameters, feedback, and tests.
- The user is evaluating assets, UX flow, or level blockout.

## Inputs

- Intake brief or pitch.
- Player fantasy.
- Reference games.
- Target session length.
- Known constraints or platform assumptions.

## Outputs

- 5-second loop.
- 30-second loop.
- 5-minute loop.
- 60-minute or meta loop, if relevant.
- Loop risks and validation questions.

## Workflow

1. Define the player's repeated verb sequence.
2. Map action, feedback, decision, reward, and reset.
3. Separate moment-to-moment, encounter, session, and progression loops.
4. Identify what can be tested without full content production.
5. Mark loops that depend on assets, level design, UI, or audio.
6. Recommend `mechanic-spec` for the highest-risk loop element.

## Quality Bar

- The loop is playable and testable, not only thematic.
- Each loop has a clear player decision.
- The output can feed a mechanic spec or vertical slice plan.
- No implementation starts until a design summary, execution plan, file impact scope, and review approval exist.

## Common Failure Modes

- Calling a feature list a loop.
- Ignoring feedback and reward.
- Designing only long-term progression while moment play is unclear.
- Making the first loop too content-heavy to test.

## Next Skills

- `mechanic-spec`
- `vertical-slice-planner`
- `playtest-report`
