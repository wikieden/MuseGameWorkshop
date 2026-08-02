## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

# Browser Playtest Checklist

## Build And Environment

- Build ID Or Commit:
- URL Or Local Command:
- Browser And Version:
- Operating System And Device:
- Renderer Requested:
- Renderer Observed:
- Input Method:
- Viewport And Device Pixel Ratio:
- Network Profile:
- Tester:
- Test Date:

## Preconditions

- [ ] The production build completed successfully.
- [ ] The tested build and configuration are recorded.
- [ ] WebGPU capability detection and WebGL 2 fallback expectations are known.
- [ ] Browser console, network panel, and renderer diagnostics are available.
- [ ] Test save data, cache state, and accessibility settings are recorded.

## Launch And Loading

- [ ] The page loads without a blank canvas, fatal console error, or unhandled rejection.
- [ ] Loading progress, slow loading, missing assets, and retry behavior are readable.
- [ ] Refresh, back/forward navigation, cache reuse, and a clean-cache launch behave as expected.
- [ ] Unsupported renderer or browser states show an actionable player-facing message.

## Rendering And Fallback

- [ ] The expected WebGPU or WebGL 2 renderer is active and recorded.
- [ ] The WebGL 2 fallback starts when WebGPU is unavailable or deliberately disabled.
- [ ] Canvas resize, orientation change, fullscreen, and device-pixel-ratio changes remain correctly framed.
- [ ] Context loss or device loss has a documented recovery or safe failure path.
- [ ] Materials, lighting, animation, UI, and text remain readable on each required renderer.

## Gameplay And Input

- [ ] The required core loop can be completed from start through retry or exit.
- [ ] Keyboard, pointer, touch, and gamepad behavior match the approved input scope.
- [ ] Focus loss, pointer-lock exit, pause, tab switching, and resume do not create stuck input.
- [ ] Gameplay timing and outcomes remain stable at the tested frame-rate limits.
- [ ] Rapid input, repeated retry, and boundary conditions do not duplicate events or leak state.

## UI, Audio, Localization, And Accessibility

- [ ] DOM and canvas UI do not overlap, clip, or become unreadable at required viewports.
- [ ] Keyboard focus order and visible focus states work for interactive DOM controls.
- [ ] Audio starts only after allowed user interaction and recovers from mute or device changes.
- [ ] Reduced motion, contrast, text scaling, captions, and remapping requirements are checked against scope.
- [ ] Required locales fit without truncation and use the expected fonts and input behavior.

## Performance And Stability

| Metric | Budget | Observed | Method | Pass Or Fail |
|---|---:|---:|---|---|
| Startup time |  |  |  |  |
| Frame time or FPS |  |  |  |  |
| Long tasks |  |  |  |  |
| JS heap |  |  |  |  |
| GPU memory proxy |  |  |  |  |
| Download size |  |  |  |  |

- [ ] Repeated start, retry, and exit cycles do not show unbounded memory or listener growth.
- [ ] Background throttling and foreground recovery preserve a valid game state.
- [ ] Slow CPU, slow network, and offline behavior match the approved support boundary.

## Defects And Evidence

| ID | Reproduction Steps | Expected | Actual | Severity | Screenshot, Video, Or Log | Owner | Status |
|---|---|---|---|---|---|---|---|

## Acceptance Decision

- Unit Test Status:
- Production Build Status:
- Browser Automation Status:
- Manual Browser Matrix Status:
- Console And Network Error Status:
- WebGPU Status:
- WebGL 2 Fallback Status:
- Accepted:
- Accepted With Risks:
- Blocked:
- Needs Revision:
- Reviewer:
- Notes:
