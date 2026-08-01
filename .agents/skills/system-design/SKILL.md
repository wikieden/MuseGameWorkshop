---
name: system-design
description: Use when a game system needs rules, state model, triggers, parameters, data ownership, handoffs, and reviewable system specs before implementation.
---

# System Design

## Use When

- A feature is becoming a reusable game system rather than a single mechanic.
- A Technical Designer needs rules, states, triggers, parameters, and data ownership clarified.
- Multiple mechanics, UI states, rewards, or progression rules depend on the same system.
- A system needs to be reviewable before Godot, Unreal, or tool-specific implementation.

## Do Not Use When

- The task is only broad concept framing.
- The request is only combat feel or moment-to-moment combat tuning.
- The system is already specified and the next task is engine implementation.

## Inputs

- Pitch, core loop, or mechanic spec.
- Production stage.
- Target genre track, if known.
- Related economy, progression, combat, UX, level, or telemetry assumptions.
- Known engine or platform constraints, if relevant.

## Outputs

- System goal and player-facing value.
- State model and transition rules.
- Trigger and event list.
- Parameter and data ownership list.
- Dependency map across design, UI, level, economy, progression, and engineering.
- Review risks, open questions, and validation checks.

## Workflow

1. Confirm the production stage and whether the system belongs in concept, prototype, vertical slice, or production.
2. Define the player problem and the system boundary.
3. Map states, transitions, triggers, failure cases, and reset rules.
4. Separate tunable parameters from implementation details.
5. Link the system to `templates/design/system-design.md` and related numerical templates.
6. Identify handoff requirements for Game Designer, Technical Designer, Gameplay Programmer, UX, QA, and Producer review.
7. Recommend the smallest next specialist skill needed to continue.

## Quality Bar

- The spec uses game-industry language first, with AI workflow terms only where they clarify execution.
- A Gameplay Programmer can identify data structures and tests without the spec becoming engine-specific too early.
- All tunable values have owner, intent, and validation method.
- Structural or implementation changes still require a design summary, execution plan, impact scope, file scope, review decision, and validation plan.

## Common Failure Modes

- Calling a feature list a system.
- Hiding state transitions in prose.
- Mixing engine implementation with engine-neutral system intent.
- Omitting the owner of shared data or tunable parameters.

## Next Skills

- `mechanic-spec`
- `numerical-planning`
- `system-numerics`
- `engine-portability`
- `playtest-report`
