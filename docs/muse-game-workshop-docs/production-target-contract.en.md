# Production Target Contract

Version: v0.9.3

Language: English

## 1. Purpose

v0.9.3 adds the Production Target Contract to Muse Game Workshop. It requires a team to declare the First Playable Target separately from the Final Production Target and to make responsibility, evidence, and handoff boundaries explicit from design specification through release-ready build.

Muse supports these final production delivery paths:

- Three.js WebGPU Web Runtime.
- Unity.
- Unreal Engine.
- Godot.

Three.js is a production Web runtime, not a prototype-only secondary option. Its capability boundary differs from a full game engine, but it can be the Final Production Target when the project meets browser compatibility, performance, accessibility, asset provenance, and release acceptance requirements.

## 2. Declare Two Targets Separately

| Decision | Question | Allowed outcome |
|---|---|---|
| First Playable Target | Which runtime can validate the core experience most quickly and reliably? | Three.js, Unity, Unreal, Godot, or another lightweight validation environment approved through review. |
| Final Production Target | Which runtime and platform will deliver the release-ready product to players? | Three.js Web, Unity, Unreal, or Godot. |

The targets may be the same or different. A team must not hide migration cost behind “decide later.” If they differ, the Review Gate must approve a migration plan that states what can be retained, what must be rebuilt, and when feature expansion on the First Playable Target stops.

Passing the First Playable Gate does not pass the Final Production Target. The final target needs independent build, performance, platform, asset, QA, and release evidence.

## 3. Target Decision Record

Every project records at least:

- Project name, current production stage, and contract owner.
- First Playable Target, selection rationale, and exit criteria.
- Final Production Target, target platforms, input devices, and release channels.
- Team skills, budget, schedule, content scale, and performance constraints.
- Shared boundaries and migration risks between the two targets.
- Decisions required from the Producer, Technical Lead, QA, and Release Manager.
- Decision date, review status, and alternatives considered.

## 4. Required Contract Surfaces

| Surface | Must define | First playable evidence | Final production evidence |
|---|---|---|---|
| Inputs | Action map, devices, rebinding, focus loss, and touch/gamepad/keyboard-mouse boundaries | Core actions work | Target device matrix, accessibility, and rebinding accepted |
| Simulation | States, clock, pause, random seed, save boundary, and determinism needs | Core loop and failure/retry are testable | Long-run, recovery, version migration, and critical regressions pass |
| Data | Schemas, tunable parameters, configuration ownership, serialization, and version rules | Critical values are not hardcoded in hot paths | Data migration, validation, compatibility, and content-build flow pass |
| Assets | Formats, import/loading, budgets, licenses, provenance, replacement, and degradation | Placeholder assets are readable and sourced | Final assets pass visual, performance, rights, and platform disclosure review |
| UI | HUD, menus, settings, resolution, scaling, input navigation, localization, and accessibility | Critical journeys are completable | Full journeys pass at target resolutions and input modes |
| Platform | OS, browser or console, graphics capability, storage, network, privacy, and lifecycle | Named validation environment runs | Supported and unsupported matrices have real environment evidence |
| Tests | Unit, integration, runtime, visual, performance, compatibility, and regression layers | Core mechanic tests and playtest checklist pass | Release candidate passes the complete target-platform suite |
| Package | Versioning, build configuration, environment variables, dependency lock, signing/hosting, and rollback | Test build is reproducible | Release candidate artifact is reproducible and traceable |
| Evidence | Commands, logs, test results, screenshots/video, performance data, and human decisions | Proves “playable” | Proves “releasable” and records failures |
| Handoff | Owners, inputs, outputs, blockers, next stage, and fallback plan | Design-to-implementation and playtest handoff is clear | Development, QA, release, and maintenance ownership is clear |

## 5. Shared Specification And Target Adaptation

Engine-neutral specifications preserve the source of truth for player experience and rules:

- Core loop, player verbs, and success/failure conditions.
- State transitions, events, parameters, data ownership, and save semantics.
- Feedback intent, UI flow, camera requirements, and accessibility goals.
- Test scenarios, observable outcomes, and performance budgets.

The target adapter maps those specifications into Three.js, Unity, Unreal, or Godot project structures. An engine class name or Scene/Node/Actor/MonoBehaviour hierarchy must not become the shared design source of truth.

## 6. First Playable To Final Production Handoff

When the targets differ, the handoff package includes:

1. Validated gameplay hypotheses and unresolved questions.
2. State machines, parameter tables, data schemas, and reference tests.
3. Input, UI, camera, audio, and feedback behavior records.
4. Reusable asset inventory with format, license, provenance, and import differences.
5. Runtime code that cannot migrate and its replacement plan.
6. Visual references, playtest recordings, performance baseline, and known deviations.
7. Migration owner, milestones, stop conditions, and fallback plan.

Migration acceptance is based on behavior and evidence, not on similar directory or API names.

## 7. Review And Stage Gates

| Gate | Required decision |
|---|---|
| Target Selection Gate | Why are these two targets selected, and are capability, cost, and migration risks acceptable? |
| First Playable Gate | Has the core experience passed repeatable tests and human playtesting? |
| Production Entry Gate | Are final-target architecture, content pipeline, platform matrix, and budgets executable? |
| Release Candidate Gate | Are build, compatibility, performance, asset, accessibility, disclosure, and rollback records complete? |

No AI coding tool or editor automation can replace approval by the human review owner.

## 8. v0.9.3 Scope And Deliverables

v0.9.3 covers:

- A contract separating the First Playable Target from the Final Production Target.
- Final-production status for Three.js, Unity, Unreal, and Godot.
- Input, simulation, data, asset, UI, platform, test, package, evidence, and handoff fields.
- A Three.js Web production runtime workflow.

v0.9.3 deliverables:

- `production-target-contract.zh.md` and `production-target-contract.en.md`.
- `threejs-web-runtime.zh.md` and `threejs-web-runtime.en.md`.

v0.9.3 does not approve:

- Creating or migrating a game project.
- Choosing the actual final target for a specific game.
- Commercial hosting, store submission, console certification, or production deployment.
- New asset generation, final asset import, or rights approval.
- A real telemetry service.

## 9. Acceptance Criteria

v0.9.3 passes documentation acceptance when:

- Chinese and English documents are paired in meaning.
- The contract clearly separates First Playable and Final Production targets.
- Four-target support includes Three.js WebGPU, Unity, Unreal, and Godot.
- All ten contract surfaces define minimum fields and evidence.
- Three.js is defined as a production Web runtime with its own release gates.
- Prohibited scope and human review ownership are explicit.

## 10. v0.9.4 And The Next Version

v0.9.4 adds the Unity Workflow on top of this contract and keeps Unity 6, exact project-version records, testing, builds, and editor-evidence boundaries aligned.

After v0.9.3 and v0.9.4, the next planned version remains v0.10 Telemetry & Playtest Analytics. v0.10 may reuse this contract's event, platform, build, and evidence fields, but real user-data services must not be pulled backward into v0.9.3 or v0.9.4.
