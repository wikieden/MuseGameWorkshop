---
name: unreal-workflow
description: Use when an approved engine-neutral plan needs an Unreal-oriented mapping plan, PIE test map plan, or validation checklist.
---

# Unreal Workflow

## Use When

- A mechanic spec needs Unreal Actor, Component, Blueprint, C++, Data Asset, UMG, or Animation Blueprint mapping.
- v0.4 or later is preparing an Unreal mapping slice.
- A team needs to understand Unreal-specific production risks.

## Do Not Use When

- v0.1 work is still in no-code workflow-pack delivery.
- The mechanic spec has not passed review.
- The user is asking for Godot-specific implementation.

## Inputs

- Approved mechanic spec.
- Engine-portability notes.
- Slice plan.
- Unreal version assumption.
- Animation, camera, and input constraints.

## Outputs

- Actor/Component plan.
- Blueprint/C++ responsibility split.
- Data Asset plan.
- UMG/debug UI plan.
- PIE test map and validation checklist.

## Workflow

1. Confirm review approval and v0.4-or-later scope before implementation.
2. Map states, inputs, parameters, UI, animation, and tests to Unreal concepts.
3. Decide Blueprint versus C++ responsibility boundaries.
4. Define Data Asset fields and PIE test map scope.
5. List files that would be created or changed.
6. Wait for review approval before writing Unreal files.

## Quality Bar

- The mapping keeps the same gameplay intent as the engine-neutral spec.
- Data Assets carry tunable parameters.
- Animation, camera, collision, input, and packaging risks are visible.
- In v0.1, this skill must produce planning only and no Unreal project files.

## Common Failure Modes

- Overbuilding a full Unreal project before the Godot loop proves the mechanic.
- Mixing Blueprint and C++ responsibilities without rationale.
- Forgetting PIE validation.
- Letting 3D presentation hide mechanic uncertainty.

## Next Skills

- `playtest-report`
- `creative-asset-pipeline`
- `ux-flow`
- `level-blockout`
