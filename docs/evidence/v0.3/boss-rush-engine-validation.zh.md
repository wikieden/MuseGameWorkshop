# Boss Rush v0.3 Engine Validation

版本：v0.3

语言：中文

日期：2026-06-09

## 1. Validation Goal

验证 v0.3 prototype visual asset 和 prototype audio asset 是否能进入 Godot 示例项目，并在核心机制触发时运行。

## 2. Expected Engine Wiring

| Asset | Godot Path | Node | Trigger |
|---|---|---|---|
| Counter flash | `res://assets/visual/counter_window_flash.svg` | `CounterFlash` | `_on_counter_landed` |
| Counter hit SFX | `res://assets/audio/counter_hit_prototype.wav` | `CounterHitSfx` | `_on_counter_landed` |

## 3. Automated Validation

Required commands:

```sh
python3 examples/godot-boss-rush/tests/simulate_core_loop.py
tools/checks/check-v0.3-creative-assets
```

Expected result:

```text
PASS simulate-core-loop
PASS check-v0.3-creative-assets
```

## 4. Manual Validation Script

1. Open `examples/godot-boss-rush/project.godot` in Godot 4.6.3 stable.
2. Run `scenes/TestArena.tscn`.
3. Use F to parry a Boss attack.
4. Use J in the counter window.
5. Confirm the counter flash appears briefly.
6. Confirm the counter hit SFX plays once.
7. Confirm R still retries.

## 5. Result

Engine Validation Status: Passed by static checks, core-loop simulation, and Godot headless smoke launch.

The assets are accepted for prototype validation only.
