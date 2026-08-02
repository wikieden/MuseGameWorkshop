# Unity Production Workflow

Version: v0.9.4

Language: English

## 1. Purpose And Baseline

v0.9.4 adds the Unity Final Production Target workflow to Muse Game Workshop. Unity 6 is the default product baseline, but every project must record and follow its exact editor version from project files. “Unity 6” is not a substitute for reproducible version evidence.

This workflow reads First Playable Target, Final Production Target, platform, input, asset, test, package, evidence, and handoff requirements from `production-target-contract.en.md`. Unity may serve as both targets or only one of them.

## 2. Project Record

Before Unity implementation begins, record at least:

- Unity major version, exact editor version, and revision or available installation identity.
- Render pipeline and its version.
- Target platform, Scripting Backend, API Compatibility Level, and build architecture.
- Package Manager dependencies, lock state, private registries, and license risks.
- Decisions for input, UI, test framework, and Addressables or another asset-loading approach.
- Editor-path resolution for local and CI environments; personal absolute paths must not become the shared source of truth.

Use `ProjectSettings/ProjectVersion.txt` and actual project records as the exact-version source. If the editor is unavailable, report only what the file declares; do not claim that the version opens the project successfully.

## 3. Directory And Ownership Boundaries

| Area | Ownership |
|---|---|
| `Assets/` | Game code, scenes, prefabs, ScriptableObject data, project tests, and project-owned assets. |
| `Packages/` | `manifest.json`, lock records, embedded/local packages, and package dependency decisions. |
| `ProjectSettings/` | Version-specific project settings, input/graphics/quality/platform configuration, and editor-serialized settings. |
| `UserSettings/` | Local user preferences; not shared production configuration unless the team explicitly approves it. |
| `Library/`, `Temp/`, `Logs/`, `obj/` | Regenerable or local output, not source files. |
| Build output | Outside the source project or in an approved artifact directory managed by CI and release records. |

Keep gameplay, UI, editor tooling, assets, tests, and release scripts under clear ownership. Do not flatten everything into one `Scripts/` hierarchy that loses module responsibility.

## 4. Assembly Definitions

Use `.asmdef` files to establish compile, dependency, and test boundaries:

- Runtime assembly: player code with no `UnityEditor` reference.
- Editor assembly: compiled only for the Editor and owning import, menu, build, and validation tools.
- Test assemblies: separate EditMode and PlayMode tests.
- Feature/domain assemblies: split only when module scale and dependency benefits justify them.

Requirements:

- Dependency direction is clear and acyclic.
- Editor-only APIs do not leak into player builds.
- Test assemblies reference the code under test through assembly references.
- Do not create one `.asmdef` per file; boundaries should improve incremental compilation, ownership, and testability.

## 5. Data And ScriptableObject

ScriptableObject suits designer-editable static definitions, parameter sets, catalogs, and configuration assets. It is not the default owner for all runtime state.

Distinguish:

- Authoring data: ScriptableObjects or imported read-only definitions.
- Runtime state: owned by an explicit session, simulation, or save model.
- Save data: a versioned serializable schema that does not use editor object references as its only identity.
- Remote or generated data: enters runtime only through validation, versioning, and fallback contracts.

Do not accidentally mutate production ScriptableObject assets in PlayMode and treat the mutation as reliable save data. Every tunable value needs design intent, default, range, unit, and validation method.

## 6. Input System

New work uses the Unity Input System as the default input layer and records the package version and project enablement mode. The input specification needs:

- Action Maps, Actions, bindings, control schemes, and device matrix.
- Ownership for gameplay, UI, menu, pause, and debug input.
- Rebinding, conflicts, persistence, and restore-default behavior.
- Device hot-plug, focus loss, multiplayer pairing, and unsupported-device behavior.
- Approved keyboard-mouse, gamepad, touch, and assistive-input scope.

Gameplay code consumes semantic actions rather than treating physical keys as mechanic rules.

## 7. uGUI And UI Toolkit Decision

Record a choice instead of mixing systems by default:

| Option | Strong fit | Must validate |
|---|---|---|
| uGUI | Runtime HUD, World Space UI, and established prefab/animation workflows | Canvas rebuilds, layout, resolution, input navigation, and performance. |
| UI Toolkit | Structured UI, style systems, editor tools, and runtime interfaces validated for the target version | Target-platform feature support, complex interaction, text, localization, and runtime performance. |
| Hybrid | Clear product and technical ownership exists for both | Input focus, visual consistency, event bridge, maintenance cost, and test ownership. |

The decision record includes user journeys, target platforms, team experience, accessibility, localization, performance, and tooling rationale.

## 8. Scenes, Prefabs, And Runtime Structure

- Scenes own composable environments and bootstrap boundaries, not all global logic.
- Prefab variants need readable inheritance rules; avoid deep overrides that are difficult to review.
- MonoBehaviours own Unity lifecycle and view/platform bridges; pure rules and values should remain independently testable where practical.
- Global services, `DontDestroyOnLoad` objects, and static state need explicit lifetimes and reset tests.
- Scene transitions, asynchronous loading, failure recovery, and exit behavior belong in PlayMode and build validation.

## 9. Test Layers

| Layer | Validation target |
|---|---|
| EditMode | Pure C# rules, data validation, serialization, importers, and editor logic that does not need a player loop. |
| PlayMode | MonoBehaviour lifecycle, Scenes/Prefabs, physics, input, UI, loading, and player journeys. |
| Build Validation | A player build starts, reaches the target scene, completes a smoke flow, writes logs, and exits correctly. |
| Visual/Performance | Game View or real-build captures, profiler/performance records, target-device budgets, and long-session stability. |

EditMode does not replace PlayMode; PlayMode does not replace a player build. Mark every unexecuted layer as `Not Run`, never as a pass by implication.

## 10. Batchmode Command Patterns

The local or CI adapter supplies the Unity executable, project path, platform, and result paths. Recommended patterns:

```text
<Unity> -batchmode \
  -projectPath <ProjectPath> \
  -runTests -testPlatform EditMode \
  -testResults <EditModeResults.xml> \
  -logFile <EditMode.log>

<Unity> -batchmode \
  -projectPath <ProjectPath> \
  -runTests -testPlatform PlayMode \
  -testResults <PlayModeResults.xml> \
  -logFile <PlayMode.log>

<Unity> -batchmode -nographics -quit \
  -projectPath <ProjectPath> \
  -executeMethod <BuildEntryPoint> \
  -buildTarget <Target> \
  -logFile <Build.log>
```

`<BuildEntryPoint>` is a project-owned, reviewable Editor build method that defines build scenes, output path, version, options, and failure exit codes. Validate command arguments against the project's exact Unity version. A command starting is not evidence of success.

Let the Unity Test Framework finish `-runTests` and write its results; do not copy the build command's `-quit` assumption into test runs. Add `-nographics` only when the suite is known not to need rendering. Visual, GPU, Game View, and graphics-dependent PlayMode tests need a graphics-capable worker. Validate termination behavior, result XML, and process exit codes against the project's locked Test Framework version.

## 11. MCP And Editor Automation

MCP, Editor scripting, menu commands, custom windows, and other automation are optional adapters, not prerequisites for the Unity workflow.

Automation executes only approved task packages and returns:

- The exact project and editor version opened.
- Every modified Scene, Prefab, asset, script, and setting.
- Console, compilation, test, and build results.
- Game View or player-build screenshots/video.
- Failure, partial completion, undo/rollback, and human review decisions.

Automation may improve execution speed but cannot bypass Unity serialization, version control, human visual review, or the Release Gate.

## 12. Evidence Boundary Without An Installed Editor

When no executable Unity Editor is available, the environment can prove:

- Directories and text files exist.
- The version declared by `ProjectVersion.txt`.
- `Packages/manifest.json` and lock data can be parsed.
- Static structure checks for C#, `.asmdef`, YAML, and settings files.
- Planned commands, expected artifacts, and missing dependencies.

It cannot prove:

- The target Editor opens or upgrades the project successfully.
- Scripts, shaders, Scenes, Prefabs, or assets import and compile.
- EditMode or PlayMode tests pass.
- A player build succeeds, starts, or meets performance targets.
- Game View, target-device, or release-candidate visuals are correct.

Reports must state `Blocked: Unity Editor unavailable` or an equally explicit status and preserve the pending validation checklist. File presence is not runtime evidence.

## 13. Package, Evidence, And Handoff

Release evidence includes at least:

- Exact editor version, package lock, source revision, and build number.
- EditMode, PlayMode, and build-validation results and logs.
- Target-platform settings, build command, artifact hash/identity, and startup smoke result.
- Performance, memory, loading, resolution, input, UI, and accessibility records.
- Asset provenance, licenses, import settings, platform disclosure, and human review.
- Known issues, rollback version, Release Manager decision, and maintenance owner.

When Unity receives a First Playable from Three.js, Godot, or Unreal, hand off behavior, data, assets, and reference tests. Do not treat the previous runtime's directories as the Unity architecture.

## 14. v0.9.4 Scope, Deliverables, And Prohibited Scope

v0.9.4 delivers:

- `unity-workflow.zh.md` and `unity-workflow.en.md`.
- The Unity 6 baseline and exact-version contract.
- Project structure, assemblies, data, input, UI, testing, batchmode, automation, and evidence boundaries.

v0.9.4 does not approve:

- Creating, upgrading, or migrating a Unity project.
- Installing Unity Hub, Unity Editor, packages, MCP, or plugins.
- Modifying Scenes, Prefabs, ScriptableObjects, ProjectSettings, or assets.
- Producing a player build, production assets, or a release candidate.
- Integrating real telemetry, a commercial backend, payments, ads, or LiveOps.

## 15. Acceptance And Next Version

Documentation acceptance requires:

- Clear responsibility for Unity 6 and the project's exact version.
- Explicit boundaries for `Assets/`, `Packages/`, `ProjectSettings/`, and generated directories.
- Actionable `.asmdef`, ScriptableObject, Input System, and UI decisions.
- Complete EditMode, PlayMode, build-validation, and batchmode patterns.
- MCP/editor automation remains optional.
- An unavailable Editor cannot produce false runtime evidence.
- Prohibited scope and the human Release Gate are explicit.

After v0.9.4, the next planned version remains v0.10 Telemetry & Playtest Analytics. v0.10 should define event schemas, playtest analysis, and tuning decision records; it does not automatically approve Unity Analytics, third-party SDKs, or real user-data collection.
