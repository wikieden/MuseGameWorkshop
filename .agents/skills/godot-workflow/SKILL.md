---
name: godot-workflow
description: Use when an approved engine-neutral plan needs a Godot-oriented implementation plan, test scene plan, or validation checklist.
---

# Godot Workflow

## Use When

- A mechanic spec is ready to map to Godot.
- A Godot prototype needs scenes, nodes, resources, signals, and tests planned.
- v0.2 or later is preparing a playable Godot loop.

## Do Not Use When

- v0.1 work is still in no-code workflow-pack delivery.
- The mechanic spec has not passed review.
- The user is asking for Unreal-specific mapping.

## Inputs

- Approved mechanic spec.
- Engine-portability notes.
- Slice plan.
- Godot version assumption.
- Test and playtest requirements.

## Outputs

- Scene and node plan.
- Script/resource/data plan.
- Signal and input map notes.
- Test scene plan.
- Godot validation checklist.

## Workflow

1. Confirm review approval and v0.2-or-later scope before implementation.
2. Map gameplay states to scenes, nodes, scripts, resources, and signals.
3. Define test scene and data-driven parameters.
4. Plan input, UI, animation, audio, and debug feedback.
5. List files that would be created or changed.
6. Wait for review approval before writing Godot files.

## Quality Bar

- The plan is concrete enough for a Godot developer to execute.
- Tunable values live in resources or data, not scattered code.
- A smoke test or manual validation path exists.
- In v0.1, this skill must produce planning only and no Godot project files.

## Common Failure Modes

- Creating Godot scenes before the mechanic is approved.
- Hardcoding tunables in scripts.
- Forgetting input maps, resources, or signals.
- Treating Godot planning as a reason to skip playtest criteria.

## Next Skills

- `playtest-report`
- `ux-flow`
- `level-blockout`
- `creative-asset-pipeline`
