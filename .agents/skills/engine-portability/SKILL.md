---
name: engine-portability
description: Use when an engine-neutral mechanic or slice needs to map cleanly to Godot and Unreal without losing gameplay intent.
---

# Engine Portability

## Use When

- A mechanic spec needs Godot and Unreal mapping.
- The team is choosing between Godot and Unreal.
- A dry run needs engine-specific planning without project creation.

## Do Not Use When

- The task is only implementation in one already-chosen engine.
- The design intent is not yet specified.
- The request is about creative asset generation.

## Inputs

- Mechanic spec.
- Vertical slice goal.
- Target platforms.
- Team skill constraints.
- Known performance or presentation needs.

## Outputs

- Engine-neutral behavior summary.
- Godot mapping notes.
- Unreal mapping notes.
- Engine risks and differences.
- Recommendation for first validation engine.

## Workflow

1. Preserve gameplay intent before mapping engine constructs.
2. Map states, parameters, events, UI, animation, and tests to Godot concepts.
3. Map states, parameters, events, UI, animation, and tests to Unreal concepts.
4. Identify differences in input, animation, camera, data assets, and testing.
5. Recommend Godot, Unreal, or staged validation.
6. Require review before creating engine files or examples.

## Quality Bar

- The mapping explains tradeoffs, not just feature availability.
- Godot and Unreal notes share the same design source.
- No `.gd`, `.tscn`, `.uproject`, C++, C#, asset, or import file appears in v0.1.
- The output can feed `godot-workflow` or `unreal-workflow`.

## Common Failure Modes

- Choosing an engine because it feels more professional.
- Hiding gameplay differences behind engine jargon.
- Overbuilding Unreal before Godot validates system fun.
- Creating engine files during a no-code planning phase.

## Next Skills

- `godot-workflow`
- `unreal-workflow`
- `vertical-slice-planner`
