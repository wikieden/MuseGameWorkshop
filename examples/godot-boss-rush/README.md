# Counter Trial / Boss Rush Godot Prototype

Version: v0.3

This is the v0.2 Godot Playable Loop and v0.3 Creative Production Ready example for Muse Game Workshop. It validates the Boss Rush / Counter Trial loop:

- Read boss windup.
- Dodge or parry.
- Open a counter window.
- Counter while managing stamina.
- Push the boss through three phases.

## Scope

Included:

- `project.godot`
- `scenes/TestArena.tscn`
- `scenes/Player.tscn`
- `scenes/Boss.tscn`
- `scenes/ui/HUD.tscn`
- `resources/combat_data.tres`
- data-driven GDScript logic under `scripts/`
- prototype visual/audio assets under `assets/`
- static and simulation checks under `tests/`

Not included:

- Final art assets.
- Final audio assets.
- Release-candidate assets.
- Store page or release build.
- Unreal project files.

## v0.3 Prototype Assets

- `assets/visual/counter_window_flash.svg`: prototype visual feedback for a successful counter.
- `assets/audio/counter_hit_prototype.wav`: prototype SFX for a successful counter.
- `tools/generate_v0_3_prototype_assets.py`: deterministic local generator for the prototype assets.

These assets are approved only for prototype engine validation. Provenance, asset review, UX/level gate, and engine validation evidence live under `../../docs/evidence/v0.3/`.

## Controls

- `WASD`: move
- `Space`: dodge
- `F`: parry
- `J`: counter
- `R`: retry

## Run

Open `project.godot` in Godot 4.6.3 stable and run the main scene.

Current local environment note: this repository's v0.2/v0.3 checks can run without Godot CLI, but they perform Godot import and smoke validation when `godot` or `godot4` is installed. As of 2026-06-09, the latest stable Godot release used for validation is Godot 4.6.3.

## Local Checks

```sh
python3 tests/simulate_core_loop.py
../../tools/checks/check-v0.2-godot
../../tools/checks/check-v0.3-creative-assets
```
