# Three.js Runtime Validation

Version: v0.9.3

Language: English

Validation Status: PASS for automated unit, build, and browser scope

## Validation Layers

| Layer | Expected Command Or Procedure | Current Status | Acceptance Rule |
|---|---|---|---|
| Static contract | `tools/checks/check-v0.9.3-threejs-runtime` | PASS | Required files and meaningful tokens pass. |
| Unit tests | `npm test` | PASS: 1 file, 5 tests | Must pass when dependencies are installed. |
| Production build | `npm run build` | PASS: 11 modules transformed | Must pass when dependencies are installed. |
| Browser automation | `npm run test:e2e` | PASS: 4 Chromium tests | Must pass when the configured browser executable is available. |
| Manual browser playtest | Browser matrix checklist | Not Run | Requires a completed checklist and human review. |

## Environment Evidence

- Project: `examples/threejs-boss-rush/`
- Package manager contract: npm with a committed lockfile.
- Renderer contract: WebGPU production direction with WebGL 2 fallback.
- Browser evidence must record the actual browser, renderer, viewport, console state, and test result.
- Execution date: 2026-08-02.
- Runtime: Node.js v24.16.0 and npm 11.13.0.
- Installed test/build stack: Three.js 0.180.0, Vitest 3.2.7, Vite 7.3.6, TypeScript 5.9.3, and Playwright 1.62.1.
- Browser projects: desktop Chromium at 1440 x 900 and mobile Chromium at 412 x 915.

## Failure And Skip Policy

- If `node_modules` exists, unit and build failures are blocking.
- If the configured Playwright browser executable exists, browser-test failure is blocking.
- A missing dependency installation or browser executable may skip only that unavailable runtime layer; it cannot turn a failed installed project into PASS.
- Static contract validation remains required in every environment.

## Final Result

- `tools/checks/check-v0.9.3-threejs-runtime`: PASS, including unit, build, and browser execution.
- `npm test`: PASS, 5 of 5 simulation tests.
- `npm run build`: PASS. Vite reported a non-blocking warning that the 505.31 kB minified JavaScript chunk exceeds 500 kB; gzip size was 129.36 kB. Code splitting remains a follow-up performance task.
- `npm run test:e2e`: PASS, 4 of 4 tests across desktop and mobile Chromium. The suite checked nonblank responsive rendering, keyboard-driven simulation changes, stamina cost, and restart recovery.
- `npm audit --omit=dev` and `npm audit`: PASS, 0 known vulnerabilities reported for the installed lockfile.
- Human screenshot review: PASS for the captured 1440 x 900 desktop and 412 x 915 mobile states. The player and boss use readable low-poly character proxies rather than naked primitive placeholders; HUD and touch controls do not overlap in the reviewed captures.
- Manual interactive browser matrix: Not Run. No human audio, accessibility, gamepad, Safari/Firefox, WebGPU-device, or cross-browser acceptance claim is made by this evidence.
