---
name: unity-workflow
description: Use when an approved engine-neutral plan needs a Unity production map, ScriptableObject data contract, EditMode or PlayMode test plan, build validation plan, or editor evidence gate.
---

# Unity Workflow

## Use When

- An approved mechanic or vertical slice is ready to map to Unity.
- A Unity project needs runtime, editor, data, scene, prefab, UI, test, and build boundaries.
- A team needs a ScriptableObject and Assembly Definition contract before implementation.
- Unity Editor, PlayMode, or player-build evidence must be planned or reviewed.

## Do Not Use When

- The design summary, execution plan, or review gate is not approved.
- The task only needs an engine-neutral mechanic specification.
- Static files or documentation are being used as substitutes for Unity Editor evidence.
- The user is asking for a Three.js, Unreal Engine, or Godot implementation map.

## Inputs

- Approved mechanic spec and vertical-slice acceptance criteria.
- Production Target Contract and completed `templates/design/production-target-mapping.md`.
- Unity editor version and render-pipeline assumption.
- Target platform, input, scene, UI, physics, animation, audio, accessibility, and performance constraints.
- Existing project manifest, packages lock, Assembly Definitions, test assemblies, and build settings when a project exists.

## Outputs

- Runtime and editor Assembly Definition responsibility map.
- MonoBehaviour, plain C# domain logic, ScriptableObject, scene, prefab, and UI mapping.
- Input, physics, animation, audio, save, and lifecycle notes.
- EditMode, PlayMode, scene smoke, and player-build validation plan.
- File impact list, platform assumptions, known risks, and review decision.
- Validation status that distinguishes static support from real Unity Editor execution.

## Workflow

1. Confirm the reviewed production target, Unity version, render pipeline, platform matrix, and acceptance criteria.
2. Preserve engine-neutral gameplay intent and isolate deterministic rules in testable plain C# where practical.
3. Map tunable data to ScriptableObject assets with ownership, defaults, valid ranges, and migration expectations.
4. Define runtime and editor Assembly Definitions so editor-only code and tests cannot enter player builds.
5. Map scenes, prefabs, components, input actions, UI, physics, animation, audio, persistence, and debug feedback.
6. Define lifecycle and edge-case behavior for domain reload, scene reload, pause, focus loss, retries, and missing references.
7. Add EditMode tests for deterministic contracts and PlayMode tests for scene, component, input, and presentation integration.
8. Open and smoke the project in the approved Unity Editor when available; fail on compile, import, serialization, or test errors.
9. Validate a target player build when release or platform readiness is claimed, and record the exact editor version and build target.
10. If Unity Editor is unavailable, mark editor, PlayMode, and player-build validation Blocked while allowing reviewed documentation and static workflow support to be complete.

## Quality Bar

- Gameplay intent matches the engine-neutral source and tunable values are not scattered through MonoBehaviours.
- Runtime assemblies do not depend on `UnityEditor`; editor tools and test assemblies remain isolated.
- ScriptableObject data has explicit ownership, validation, and migration expectations.
- EditMode, PlayMode, and build checks each have distinct acceptance claims.
- Missing scripts, broken serialized references, import errors, compile errors, and failing tests block editor acceptance.
- Static validation never claims that the Unity project opened, entered PlayMode, passed tests, or produced a player build.
- Evidence records the editor version, project path, command or UI path, platform, result, and blockers.

## Common Failure Modes

- Putting game rules, tunable values, presentation, and persistence into one MonoBehaviour.
- Referencing `UnityEditor` from runtime assemblies or shipping editor-only assets.
- Relying on scene object names or implicit execution order instead of explicit references and contracts.
- Treating an `.asmdef`, `ProjectSettings`, or documentation check as Unity Editor evidence.
- Skipping EditMode or PlayMode failures because the editor executable was discovered.
- Claiming platform readiness without a real player build and launch result.

## Next Skills

- `playtest-report`
- `ux-flow`
- `creative-asset-pipeline`
- `engine-portability`
