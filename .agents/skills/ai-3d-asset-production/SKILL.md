---
name: ai-3d-asset-production
description: Use when an AI-assisted 3D asset needs a tool-agnostic brief-to-production-to-multi-view-review-to-runtime-validation workflow with provenance, cost, and fallback controls.
---

# AI 3D Asset Production

## Use When

- A game needs an AI-assisted 3D prop, character proxy, environment fixture, material-ready object, or procedural Three.js asset.
- A team must compare a code-native, mesh-native, manual, Blender, kitbash, or commercial AI 3D route.
- A candidate needs multi-view, gameplay-camera, runtime-hierarchy, cost, provenance, and engine-validation gates.
- A limited hard-surface pilot needs to produce reviewable evidence before broader adoption.

## Do Not Use When

- No approved art direction or asset brief exists.
- Reference ownership, license, or third-party upload permission is unclear.
- The request is only broad visual exploration; use `art-direction` first.
- The user expects one image to guarantee hidden geometry, production topology, rigging, or release readiness.
- The request is for unattended batch generation, final marketing art, or automatic release approval.

## Inputs

- Approved Art Direction / 美术方向.
- Asset Brief / 资产需求说明 and Asset ID.
- Gameplay or UX purpose.
- Target asset state.
- First Playable Target and Final Production Target.
- Reference manifest, ownership, license, and upload boundary.
- Gameplay camera and multi-view requirements.
- Runtime needs: pivot, socket, collider, rig, animation, destruction, state feedback, or interaction.
- Technical budget: triangle, draw call, material, texture, memory, LOD, collision, loading, and fallback constraints.
- Time, token, service-cost, and human-rework ceilings.
- Review owner and stop conditions.

## Outputs

- Tool-route decision and fallback route.
- Quality contract and cost ceiling.
- Production pass plan.
- Production spec or procedural 3D delivery record.
- Prompt/model/settings and provenance record.
- Human edit notes.
- Multi-view asset review.
- Runtime or engine validation plan and evidence.
- Cost record.
- Asset state decision and exactly one next action.

## Workflow

1. Confirm gameplay purpose, target state, art direction, asset family, target runtime, and review owner.
2. Admit references only after ownership, license, upload boundary, view coverage, and hidden-region policy are recorded.
3. Compare tool routes: procedural Three.js, mesh-native AI, manual modeling, Blender-assisted, kitbash, or licensed asset. Keep at least one fallback.
4. Define a quality contract: critical silhouette, proportions, parts, materials, gameplay readability, runtime hierarchy, technical budget, and rejection criteria.
5. Set maximum rounds, tokens, service cost, elapsed time, human edits, and stop conditions before production.
6. Build in controlled passes such as blockout, structure, form, material, surface, interaction, and optimization. Do not unlock future passes after a blocking failure.
7. Record tool, version, model, prompt, settings, source hashes, output hashes, human changes, elapsed time, and usage after each material change.
8. Review the reference view, gameplay-camera view, and at least two meaningful orbit views. A global similarity score cannot override a failed critical feature.
9. Validate the actual runtime contract: Three.js factory/runtime hierarchy, or mesh topology/UV/pivot/LOD/collision/rig plus target-engine import evidence.
10. Run the smallest relevant build, browser, editor, test scene, performance, fallback, and disposal checks.
11. Assign one state: `reference-only`, `structural-placeholder`, `readable-prototype`, `reviewed-demo`, `release-candidate`, `needs-revision`, or `rejected`.
12. Choose exactly one action: `continue`, `refine-brief`, `refine-spec`, `refine-asset`, `request-input`, `switch-tool`, or `stop`.

## Tool Adapter Rules

- An adapter implements production mechanics; it does not own art direction, asset state, or release approval.
- Pin a version or commit for pilots and record version drift.
- State whether references leave the local machine.
- Preserve the upstream brief and acceptance criteria when switching tools.
- `img2threejs` is a candidate for Three.js hard-surface procedural assets, not the default route for characters or cross-engine meshes.
- A hosted converter, commercial service, or model endpoint requires a data-boundary and terms review before upload.

## Multi-view Gate

- Include one reference view, one gameplay-camera view, and two non-degenerate orbit views.
- Verify silhouette, proportion, thickness, back structure, attachment correctness, seams, intersections, and material zones.
- Verify faction, facing, role, state, and interactability at gameplay distance.
- Verify critical parts are geometry where gameplay or animation depends on them.
- Record inferred and hidden regions with confidence or request more input.

## Quality Bar

- A Producer can compare quality, cost, schedule, and fallback options.
- Art can identify intentional style, approximations, and remaining mismatches.
- Technical Art can inspect source format, pivots, sockets, collision, LOD, materials, runtime hierarchy, and performance.
- Gameplay Programming can integrate without reverse-engineering an opaque asset.
- QA can reproduce multi-view and gameplay-camera checks.
- Provenance, human contribution, license, and disclosure status are reviewable.
- No asset is called engine-ready without validation in the named target runtime.
- No raw AI output becomes `reviewed-demo` or `release-candidate` automatically.

## Common Failure Modes

- Selecting a tool before defining gameplay purpose and rejection criteria.
- Judging only the reference angle or beauty render.
- Letting projected texture hide missing structure.
- Treating Three.js code as a portable GLB/FBX deliverable.
- Ignoring token, time, service, and human-rework cost.
- Uploading unreleased IP without permission.
- Regenerating indefinitely instead of switching tools or stopping.
- Approving visual appeal while ignoring collision, hierarchy, fallback, disposal, or gameplay readability.

## Next Skills

- `asset-review`
- `creative-asset-pipeline`
- `threejs-workflow`
- `unity-workflow`
- `godot-workflow`
- `unreal-workflow`
- `engine-portability`
- `playtest-report`
