# Counter Trial / Boss Rush Three.js Prototype

Version: v0.9.3

This browser prototype validates the Boss Rush / Counter Trial loop with one readable player, one three-phase boss, and one compact arena. All characters, architecture, props, and effects are assembled at runtime from original procedural geometry; there are no external art, audio, or copyrighted assets.

## Playable Loop

1. Read the Forge Warden's floor telegraph and hammer windup.
2. Move or dodge out of range, or parry during the active window.
3. Use the brief counter window to damage the boss.
4. Manage stamina through three faster, visually hotter phases.
5. Win, fall, and restart immediately.

## Controls

| Action | Keyboard | Touch |
|---|---|---|
| Move | `WASD` or arrow keys | Direction pad |
| Dodge | `Space` | Dodge button |
| Parry | `F` | Parry button |
| Counter | `J` | Counter button |
| Restart | `R` or `Enter` | Restart button |

## Architecture

- `src/simulation.ts`: deterministic fixed-step combat state and transitions with no DOM or Three.js dependency.
- `src/tuning.ts`: data-driven combat and phase parameters.
- `src/input.ts`: keyboard and pointer/touch input adapter.
- `src/world.ts`: Three.js arena, procedural character rigs, animation, effects, camera, and WebGL renderer.
- `src/ui.ts`: DOM HUD adapter.
- `src/main.ts`: composition and fixed-step browser loop.
- `tests/`: Vitest simulation coverage.
- `e2e/`: Playwright Chromium smoke, canvas-pixel, input, error, responsive, and screenshot checks.

The simulation uses a fixed 60 Hz step. Rendering is frame-rate independent and consumes simulation state; HUD and input do not own combat rules.

## Runtime Baseline

The production baseline for this scoped reference is WebGL2 through `THREE.WebGLRenderer`. This keeps automated browser validation deterministic and broadly available. A future renderer adapter may use `THREE.WebGPURenderer` after a project-specific capability matrix approves it, but WebGPU is optional here and no test depends on WebGPU availability.

## Run

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://127.0.0.1:4173`.

## Validation

```sh
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Playwright runs desktop Chromium at `1440x900` and mobile Chromium at `412x915`. The smoke test checks a nonblank, chromatic canvas; a rendered frame; keyboard-driven state change; responsive controls; horizontal overflow; screenshots; and the absence of page or console errors.

## Scope

Included:

- Procedural low-poly sentinel and Forge Warden rigs with readable weapons, armor, facing, and action poses.
- Arena architecture, lighting, shadows, phase presentation, attack telegraph, parry/counter feedback, and impact response.
- Movement, stamina, dodge, parry, counter, damage, three phases, victory, defeat, and restart.
- Desktop and mobile layouts with keyboard, pointer, and touch controls.
- Deterministic unit tests and Chromium browser smoke tests.

Not included:

- Final assets or audio.
- Multiple bosses, progression, equipment, persistence, telemetry, networking, or backend services.
- WebGPU-only delivery or tests.
- Godot, Unreal, or Unity implementation.
