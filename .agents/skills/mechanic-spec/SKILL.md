---
name: mechanic-spec
description: Use when a core mechanic needs inputs, states, parameters, feedback, edge cases, and test criteria before implementation.
---

# Mechanic Spec

## Use When

- A core loop needs one mechanic specified for implementation planning.
- A designer needs an engine-neutral spec.
- A programmer needs testable behavior before coding.
- A prototype design gate needs the core mechanic readiness portion filled in.

## Do Not Use When

- The task is a broad game concept with no selected mechanic.
- The request is engine-specific project setup.
- The user only wants post-playtest analysis.

## Inputs

- Core loop.
- Target mechanic.
- Player input assumptions.
- Feedback needs.
- Engine and platform constraints, if known.

## Outputs

- Mechanic purpose.
- Inputs and state model.
- Parameters and tunable values.
- Feedback events.
- Edge cases and failure behavior.
- Test and acceptance criteria.
- Prototype design risks and readiness gaps.

## Workflow

1. State what player problem the mechanic solves.
2. Define inputs, state transitions, timing, and cancel rules.
3. List tunable parameters with default values or ranges.
4. Define visual, audio, UI, haptic, and camera feedback needs.
5. Identify failure cases, exploits, and accessibility risks.
6. Produce implementation-neutral tests.
7. Identify whether the mechanic is ready for a prototype design gate.
8. Recommend `prototype-design` before `engine-portability`, `godot-workflow`, or `unreal-workflow` when implementation is next.

## Quality Bar

- A Gameplay Programmer can implement a minimal version from the spec.
- Tunable values are not buried in prose.
- Tests prove the mechanic's intended feel and boundaries.
- Prototype implementation does not start until the mechanic can feed a prototype goal, playable promise, content scope, placeholder policy, and validation plan.
- Any code or project-file change must wait for review approval after a design summary and execution plan.

## Common Failure Modes

- Writing flavor text instead of behavior.
- Omitting timing windows or input priority.
- Forgetting feedback events.
- Letting engine details replace gameplay intent too early.

## Next Skills

- `system-design`
- `combat-design`
- `combat-parameters`
- `numerical-planning`
- `engine-portability`
- `prototype-design`
- `vertical-slice-planner`
- `godot-workflow`
- `unreal-workflow`
