---
name: engine-portability
description: Use when an engine-neutral mechanic or slice needs to map cleanly to Three.js WebGPU, Unity, Unreal, or Godot without losing gameplay intent.
---

# Engine Portability

## Use When

- A mechanic spec needs production-target mapping.
- The team is choosing among Three.js WebGPU, Unity, Unreal, and Godot.
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
- Three.js Web mapping notes.
- Unity mapping notes.
- Godot mapping notes.
- Unreal mapping notes.
- Production-target risks and differences.
- Recommendation for first playable and final production target.

## Workflow

1. Preserve gameplay intent before mapping engine constructs.
2. Map states, parameters, events, UI, assets, storage, and tests to the shared Production Target Contract.
3. Map the contract to Three.js Web, Unity, Godot, and Unreal where relevant.
4. Identify differences in input, animation, camera, data assets, browser/platform support, packaging, and testing.
5. Recommend a first playable target and a final production target; they may differ.
6. Require review before creating engine files or examples.

## Quality Bar

- The mapping explains tradeoffs, not just feature availability.
- All target notes share the same design source.
- No `.gd`, `.tscn`, `.uproject`, C++, C#, asset, or import file appears in v0.1.
- The output can feed `threejs-workflow`, `unity-workflow`, `godot-workflow`, or `unreal-workflow`.

## Common Failure Modes

- Choosing a production target because it feels more professional.
- Hiding gameplay differences behind engine jargon.
- Committing to a costly final production pipeline before the first playable has validated the core risk.
- Creating engine files during a no-code planning phase.

## Next Skills

- `godot-workflow`
- `unreal-workflow`
- `threejs-workflow`
- `unity-workflow`
- `vertical-slice-planner`
