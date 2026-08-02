# AI 3D Asset Production Contract

Version: Creative AI Production Pilot

Language: English

## 1. Purpose

This contract defines the shared delivery boundary for AI-assisted 3D assets from gameplay need through runtime validation. It supports procedural Three.js, conventional meshes, manual modeling, Blender, commercial AI 3D services, and future engine adapters without binding Muse to `img2threejs` or any single tool.

It answers five production questions:

1. Why does the asset exist?
2. Are its inputs and outputs lawful and traceable?
3. Does it hold up from multiple gameplay-relevant views?
4. Does it have the structure and performance required by the target runtime?
5. Can the team repair, switch tools, or fall back instead of generating forever?

## 2. Roles

| Role | Decision responsibility |
|---|---|
| Producer | Scope, cost ceiling, version state, and stop conditions |
| Art Director | Visual direction, asset family, silhouette, and rejection criteria |
| Game Designer | Gameplay purpose, interaction states, and camera readability |
| 3D Artist | Structure, proportion, materials, human edits, and source files |
| Technical Artist | Pivots, sockets, rig, LOD, collision, shaders, import, and performance |
| Gameplay Programmer | Runtime hierarchy, state mapping, interaction, and destruction interfaces |
| QA / Playtest | Multi-view, gameplay-camera, device, and regression validation |
| Release Manager | License, AI disclosure, platform, and release-package eligibility |

An AI tool is a production tool, not the asset owner, review owner, or release approver.

## 3. Asset States

| State | Allowed use |
|---|---|
| `reference-only` | Visual development only; never enters the runtime |
| `structural-placeholder` | Blockout, collision, and scale validation |
| `readable-prototype` | Internal playtests and gameplay validation |
| `reviewed-demo` | Approved external demos, screenshots, and playtests |
| `release-candidate` | Candidate package after full license, technical, and platform checks |
| `needs-revision` | Evidence retained; returns to production and review |
| `rejected` | Must not enter the project or release package |

Raw tool output may reach `readable-prototype` at most by default. It cannot automatically become `reviewed-demo` or `release-candidate`.

## 4. Input Contract

Every production task requires:

- Asset ID.
- Gameplay or UX purpose.
- Approved art direction or an explicit prototype visual baseline.
- Asset brief.
- Target asset state.
- Target runtime and delivery form: Three.js code, GLB, glTF, FBX, Blender source, or undecided.
- Gameplay camera, scale, faction, facing, and state-readability requirements.
- Reference manifest, ownership, license, and allowed usage.
- Multi-view requirements and hidden-region policy.
- Triangle, draw-call, material, texture, memory, LOD, and collision budgets; unknown values must be marked for Technical Art review.
- Time, token, service-cost, and human-rework ceilings.
- Review owner and stop condition.

Generation cannot begin without gameplay purpose, reference rights, target state, or a review owner.

## 5. Tool Adapter Contract

Every Creative Tool Adapter must describe:

- Tool, version, installation method, and repeatable invocation.
- Whether inputs reach a third-party service and its retention policy.
- Output formats, source files, editability, and proprietary-format risk.
- Available seed, prompt, model, settings, usage, and cost evidence.
- Capability boundaries for characters, hard surfaces, environments, materials, animation, rigging, LOD, collision, and export.
- Fallbacks for failure, timeout, quota, version drift, and service outage.
- Which validations are deterministic and which require human or vision-capable AI assistance.

An adapter may not rewrite the upstream asset brief or approve the asset state.

## 6. Production And Review Flow

```text
art-direction
  -> asset-brief
  -> reference and license admission
  -> tool adapter selection
  -> quality contract and cost ceiling
  -> blockout / structural pass
  -> form / material / surface passes
  -> human edit
  -> provenance record
  -> multi-view asset review
  -> technical-art validation
  -> engine integration
  -> gameplay-camera playtest
  -> approved state / needs revision / rejected
```

Each review round chooses exactly one next action:

- `continue`
- `refine-brief`
- `refine-spec`
- `refine-asset`
- `request-input`
- `switch-tool`
- `stop`

## 7. Multi-view Quality Gate

A non-planar 3D asset cannot pass from its reference view alone. Minimum evidence includes:

- Reference view.
- Gameplay-camera view.
- Orbit view A from a front-side or rear-side angle.
- Orbit view B exposing thickness, back structure, or attachment relationships.

Review covers:

- Silhouette, proportion, and scale.
- Facing, faction, role, and interaction state.
- Whether critical parts exist as structure rather than texture-only illusion.
- Seams, floating parts, intersections, thin planes, and degenerate views.
- Material zones, color, roughness, metalness, and lighting dependence.
- Pivots, sockets, colliders, destruction groups, or rig interfaces.
- Readability at gameplay-camera distance.
- Performance budgets and fallback presentation.

A global similarity score cannot override failure of a critical feature or gameplay readability.

## 8. Delivery Contract

Every candidate asset delivers:

- Asset brief.
- Input reference manifest.
- Production spec.
- Tool/model/prompt/settings record.
- Human edit notes.
- Source deliverable.
- Runtime deliverable.
- Multi-view review.
- Technical validation.
- Cost record.
- License and disclosure decision.
- Asset-state decision.

A procedural Three.js asset also delivers its factory API, runtime hierarchy, disposal strategy, renderer compatibility, and draw-call/material statistics.

A mesh asset also delivers topology, UVs, texture channels, scale, orientation, pivot, LOD, collision, rig/animation compatibility, and target-engine import evidence.

## 9. Runtime Validation

| Target | Minimum validation |
|---|---|
| Three.js Web | TypeScript/build, WebGPU/WebGL 2 fallback, loading, disposal, draw calls, materials, browser multi-view, and gameplay camera |
| Unity | Import logs, scale/pivot, Prefab, materials, collider, LOD, EditMode/PlayMode, and player build |
| Unreal | Import report, Actor/Component, material instance, collision, LOD/Nanite decision, PIE, and packaging |
| Godot | glTF/import settings, Scene, materials, collision, animation, test scene, and export smoke |

Without validation in the target runtime, the asset remains `validation-pending` and cannot be described as engine-ready.

## 10. Cost And Stop Rules

Pilots and production work define in advance:

- Maximum generation rounds.
- Maximum token or service cost.
- Maximum elapsed time.
- Maximum human-rework time.
- Minimum acceptable asset state.
- Conditions for switching to manual work, kitbashing, licensed assets, or another tool.

Crossing any hard ceiling requires a stop and review. Automation cannot expand the budget by itself.

## 11. Current Boundary

The Creative AI Production Pilot approves only research, this contract, a skill, templates, and a Grey Tide pilot plan. It does not approve:

- Installing `img2threejs` or another creative tool.
- Uploading references to a third party.
- Generating, importing, or releasing assets.
- Changing Grey Tide game code.
- Promoting pilot output to release-candidate.
- Changing the v0.10, v0.11, and v0.12 main-version order.
