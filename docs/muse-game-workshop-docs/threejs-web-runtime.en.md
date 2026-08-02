# Three.js Web Production Runtime

Version: v0.9.3

Language: English

## 1. Positioning

This document defines the production workflow for using Three.js as a Final Web Production Target in Muse Game Workshop. The default technical baseline is TypeScript + Vite + Three.js. WebGPU is the primary graphics target, with an explicitly tested WebGL2 fallback.

Three.js provides rendering and Web-platform composition capabilities. It does not provide every editor, asset database, scene-authoring, input, save, test, or release-management facility of a full game engine. A project must own those responsibilities explicitly. This difference does not reduce its status as a production runtime.

## 2. Good-Fit Conditions

Prefer a Three.js Web production runtime when the project needs:

- URL-first play, Web distribution, or embedding in an existing Web product.
- Deep composition with the DOM, Web APIs, Web UI, account systems, or content platforms.
- A team whose primary engineering capability is TypeScript and Web development.
- Custom rendering, interactive presentation, light-to-medium 3D games, or a Web-first experience.
- A release flow that browser automation can validate repeatedly.

Before selection, evaluate target-device graphics capability, memory budget, long-session stability, mobile heat and battery, asset download, offline needs, browser policy, IME behavior, privacy, and hosting cost.

## 3. Recommended Engineering Boundaries

```text
src/
  simulation/   # rules, state, clock, randomness, save semantics
  data/         # schemas, configuration, content definitions, validation
  input/        # DOM/Pointer/Keyboard/Gamepad to player actions
  renderer/     # Three.js scene, camera, materials, effects
  ui/           # DOM or canvas UI; does not own gameplay rules
  platform/     # lifecycle, storage, audio, capabilities
  app/          # composition root, scene flow, dependency assembly
tests/
  unit/
  integration/
  browser/
public/         # only static files that must be served unchanged
```

Directory names may change, but the responsibility boundaries must remain.

### 3.1 Simulation

- The simulation does not depend directly on Three.js objects, materials, cameras, or DOM elements.
- Use an explicit fixed-step strategy or a documented variable-step strategy.
- Pause, slow motion, focus loss, resume, random seed, and save behavior are testable.
- Data reaches rendering and UI through command/event/state contracts or an equally observable boundary.

### 3.2 Renderer

- The renderer consumes simulation snapshots or events; it is not the gameplay source of truth.
- Camera, lighting, materials, post-processing, LOD, instancing, and resource disposal have separate budgets.
- Resize, device pixel ratio, context/device loss, and reconstruction paths are tested.
- Frame rate is not used as the gameplay clock.

### 3.3 UI

- DOM UI suits menus, settings, rich text, localization, and accessibility. Canvas UI suits HUD elements tightly coupled to the scene. The project records its selection or mixed boundary.
- UI emits player intent and reads view state through application contracts.
- Keyboard, mouse, touch, gamepad, focus order, zoom, and screen-reader boundaries are accepted for the target audience.

## 4. TypeScript And Vite Baseline

- Enable strict TypeScript rules and record justified exceptions.
- Lock the package manager and dependency versions; commit the lockfile.
- Provide reproducible development, test, preview, and production-build scripts.
- Separate client-visible environment values from secrets; secrets must never enter the browser bundle.
- Release configuration owns chunks, source maps, asset hashing, base path, cache, and CDN behavior.
- Review third-party packages for maintenance, license, bundle size, and browser compatibility.

## 5. WebGPU Primary Target And WebGL2 Fallback

WebGPU is the primary graphics target. WebGL2 is a compatibility fallback, not an untested emergency switch.

Startup performs capability detection and maps the result to approved tiers:

| Tier | Runtime | Expectation |
|---|---|---|
| Tier A | WebGPU | Full target quality within the performance budget. |
| Tier B | WebGL2 | Core gameplay and UI remain; materials, lighting, particles, post-processing, or unit density may degrade according to the approved matrix. |
| Unsupported | Below minimum capability | Show an understandable blocking state instead of entering a broken or blank scene. |

Record:

- The WebGPU/WebGL2 feature-parity matrix.
- Presentation features that may degrade and gameplay information that may not.
- Renderer initialization failure, adapter/device/context loss, and recovery policy.
- Supported and unsupported browser, OS, GPU, and driver combinations.
- The locked Three.js version, `WebGPURenderer` maturity, known feature gaps, and upgrade-validation plan; automatic fallback is not proof of complete project compatibility.

## 6. Browser And Canvas Validation

Browser acceptance covers at least:

- Initial load, loading, error, and retry states.
- A nonblank canvas with correct size, aspect ratio, DPR, and resize behavior.
- Tab changes, window focus loss, pause/resume, and audio policy.
- Approved keyboard-mouse, touch, and gamepad combinations.
- WebGPU, WebGL2 fallback, and unsupported paths.
- Save, refresh, version upgrade, cache invalidation, and offline boundaries.
- Console errors, unhandled rejections, asset 404s, and shader failures.

Playwright or equivalent browser automation should validate critical journeys, screenshots, and nonblank canvas pixels. Pixel checks prove that a frame exists; they do not replace visual review or gameplay acceptance.

## 7. Testing And Performance

| Layer | Focus |
|---|---|
| Unit | Simulation rules, state transitions, data validation, random seeds, and save conversion. |
| Integration | Input to command, simulation to view state, asset loading, and scene flow. |
| Browser | Startup, critical journeys, UI, canvas, fallback, storage, and lifecycle. |
| Visual | Critical cameras, readability, HUD, target resolutions, and degraded-path differences. |
| Performance | Frame time, CPU/GPU time, memory, draw calls, asset download, startup, and long-session stability. |

Define budgets by target device and scene. Do not replace them with average FPS from one development machine. Record at least cold start, warm start, a representative high-load scene, 1% low or frame-time distribution, peak memory, download size, and sustained-run observations.

## 8. Assets And Provenance

Every production asset needs:

- An Asset Brief and design purpose.
- Source file, export file, format, dimensions, compression, color space, and version.
- Tool, model/service, prompt/source description, generation settings, and human modifications.
- License, commercial scope, attribution, platform disclosure, and human review decision.
- Loading path, fallback, memory/GPU budget, and browser validation.

Select glTF/GLB, texture, audio, font, shader, and compression formats from the target browser matrix. An asset without provable rights or provenance cannot enter a release candidate.

## 9. AI Coding Tools And Adapters

Codex, Claude Code, Kimi Code, Kiro, opencode, robocode, and CliHub can execute the same shared workflow. They are adapter entry points, not project runtime dependencies.

Every tool must:

- Read the same Production Target Contract, design specifications, and review status.
- Report impact scope and validation plan before changing code.
- Use repository scripts for typecheck, test, build, preview, and browser validation.
- Return commands, logs, screenshots, performance records, and skipped checks.
- Preserve human review even when browser control, MCP, or multi-agent execution is available.

Tool-specific prompts, commands, or routing may live in adapter documentation but must not change shared deliverables or evidence formats.

## 10. Package And Release Gates

A release candidate passes at least:

1. Dependency Gate: lockfile, license, vulnerability, and dependency changes are reviewed.
2. Build Gate: typecheck, tests, and production build pass reproducibly.
3. Browser Gate: target browser matrix, WebGPU, WebGL2, and unsupported paths have evidence.
4. Experience Gate: input, UI, audio, save, error recovery, and accessibility pass.
5. Performance Gate: download, startup, frame time, memory, and sustained run meet approved budgets.
6. Asset Gate: provenance, rights, compression, loading, and visual review pass.
7. Hosting Gate: base path, headers, MIME types, cache, CDN, HTTPS, rollback, and version identity are correct.
8. Human Release Gate: the Release Manager approves the build and known issues.

## 11. v0.9.3 Scope, Deliverables, And Prohibited Scope

This version delivers the bilingual Three.js Web production runtime workflow and connects it to the Production Target Contract.

This document does not approve:

- Creating a Three.js project or installing dependencies.
- Choosing a specific game's Final Production Target.
- Deploying to real hosting or a release channel.
- Generating or importing production assets.
- Treating WebGL1 as the default compatibility target.
- Integrating real telemetry, accounts, payments, ads, or a commercial backend.

## 12. Acceptance And Next Version

Documentation acceptance requires:

- A clear TypeScript/Vite baseline.
- Separate ownership for simulation, renderer, and UI.
- Testable WebGPU, WebGL2 fallback, and unsupported paths.
- Complete browser, canvas, Playwright, performance, asset-provenance, and release gates.
- All seven AI coding tools map to the same shared contract.
- Prohibited scope is explicit and Three.js is not limited to prototypes.

v0.9.4 adds the Unity Workflow. The next planned version after that remains v0.10 Telemetry & Playtest Analytics. v0.10 will define event plans and tuning evidence without changing this document's runtime, privacy, or release responsibilities.
