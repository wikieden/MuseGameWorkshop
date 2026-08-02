---
name: threejs-workflow
description: Use when an approved engine-neutral plan needs a Three.js WebGPU implementation map, WebGL 2 fallback, browser test plan, or deployable web-runtime validation checklist.
---

# Three.js Workflow

## Use When

- An approved mechanic or vertical slice is ready to map to a browser runtime.
- A Three.js project needs clear simulation, rendering, input, UI, asset, test, and packaging boundaries.
- A team needs to validate WebGPU production direction while retaining a WebGL 2 fallback.
- Browser compatibility, loading, performance, or deployment evidence must be planned.

## Do Not Use When

- The design summary, execution plan, or review gate is not approved.
- The task only needs an engine-neutral mechanic specification.
- The target is Unity, Unreal Engine, or Godot with no browser runtime.
- A visual browser smoke test is being treated as proof of deterministic gameplay behavior.

## Inputs

- Approved mechanic spec and vertical-slice acceptance criteria.
- Production Target Contract and completed `templates/design/production-target-mapping.md`.
- Browser and device matrix, including input methods and minimum WebGL 2 fallback coverage.
- Performance, loading, asset, accessibility, localization, and deployment constraints.
- Existing package scripts, dependency lockfile, and test configuration when a project already exists.

## Outputs

- Simulation, renderer, input, DOM UI, data, asset, and packaging responsibility map.
- WebGPU capability path and explicit WebGL 2 fallback behavior.
- Data-driven parameter and save-state boundaries.
- Unit, build, browser automation, and manual playtest plan.
- Browser evidence using `templates/production/browser-playtest-checklist.md`.
- File impact list, deployment assumptions, known risks, and review decision.

## Workflow

1. Confirm the reviewed production target, gameplay intent, browser matrix, and deployment boundary.
2. Keep deterministic simulation and tunable data independent from Three.js scene objects and frame rate.
3. Map presentation to scene lifecycle, cameras, lights, materials, animation, audio, DOM UI, and renderer ownership.
4. Define input normalization, focus/pointer-lock behavior, pause handling, resize behavior, and touch or gamepad scope.
5. Feature-detect WebGPU and document the WebGL 2 fallback, unsupported state, and user-facing recovery path.
6. Define asset loading, progress/error states, cache/version strategy, memory budget, disposal, and lost-context recovery.
7. Preserve existing package-manager and test conventions; do not replace the lockfile or scripts without review.
8. Run deterministic unit tests and the production build when dependencies are installed; treat any failure as blocking.
9. Run browser automation only when its configured browser is available, then complete the manual browser playtest matrix.
10. Record exact commands, environment, results, skipped checks, screenshots or logs, and the review gate before release claims.

## Quality Bar

- Gameplay results do not depend on display frame rate or renderer availability.
- Tunable values live in typed data or configuration instead of renderer hot paths.
- WebGPU is the production direction, with a tested WebGL 2 fallback until the reviewed browser matrix permits removal.
- Unit tests cover simulation contracts; browser tests cover startup, interaction, rendering, resize, and error states.
- A successful build is not described as a successful browser playtest.
- Console errors, unhandled rejections, missing assets, blank canvases, and fallback failures block acceptance.
- Runtime, test, browser, and deployment evidence states exactly what was executed and what remains unavailable.

## Common Failure Modes

- Coupling game rules to `requestAnimationFrame`, scene objects, or renderer-specific state.
- Assuming WebGPU support without capability detection and WebGL 2 fallback validation.
- Silently skipping failed tests because `node_modules` or a browser executable exists in a broken state.
- Testing only the canvas while ignoring DOM UI, focus, resize, loading, audio, and accessibility.
- Leaking geometries, materials, textures, listeners, or animation loops across retries and route changes.
- Treating a local development server as production packaging or deployment evidence.

## Next Skills

- `playtest-report`
- `ux-flow`
- `creative-asset-pipeline`
- `engine-portability`
