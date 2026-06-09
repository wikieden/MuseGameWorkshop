---
name: vertical-slice-planner
description: Use when an approved mechanic or loop needs a small reviewable slice plan with scope, cuts, risks, and acceptance criteria.
---

# Vertical Slice Planner

## Use When

- A prototype needs a 7-14 day playable slice plan.
- A team needs to separate must-have, should-have, and cuttable work.
- A dry run needs an implementation plan without writing code.

## Do Not Use When

- The mechanic is not specified.
- The task is only asset provenance or playtest analysis.
- The user is asking to ship a full game.

## Inputs

- Game intake.
- Core loop.
- Mechanic spec.
- Engine preference.
- Team/time constraints.

## Outputs

- Slice goal.
- Included and excluded scope.
- Work breakdown by discipline.
- Review gates.
- Test plan and playtest script.
- Cut list and risks.

## Workflow

1. Restate the smallest playable promise.
2. Split work by design, engineering, art, audio, UX, level, QA, and release.
3. Mark what is required, optional, and explicitly cut.
4. Define acceptance tests and playtest questions.
5. Identify engine and asset dependencies.
6. Require review approval before any structure, code, or asset work.

## Quality Bar

- The plan can be reviewed by a Producer in one pass.
- The cut list is explicit.
- The slice proves gameplay, not content volume.
- The plan can move to Godot or Unreal without rewriting the design.

## Common Failure Modes

- Planning a milestone instead of a slice.
- Treating final art as required too early.
- Missing QA and playtest gates.
- Letting the sample game become the whole product.

## Next Skills

- `engine-portability`
- `creative-asset-pipeline`
- `ux-flow`
- `level-blockout`
