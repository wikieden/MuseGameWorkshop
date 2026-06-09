# Counter Hit SFX Asset Brief

版本：v0.3

语言：中文

日期：2026-06-09

## 1. Asset Purpose

`counter_hit_prototype.wav` 是成功反击时播放的 prototype SFX / 原型音效。它用于确认反击命中，不代表最终战斗音效。

## 2. Gameplay Context

- Trigger：`counter_landed` signal。
- Timing：反击命中同一帧播放。
- Loop：不循环。
- Duration：约 0.24 秒。
- Volume hierarchy：低于未来的 boss defeat cue，高于普通 HUD text update。

## 3. Sound Direction

- 短促。
- 明亮。
- 不混淆为受击失败或 UI 点击。
- 允许使用简单合成音作为 prototype。

## 4. Technical Specs

- File：`examples/godot-boss-rush/assets/audio/counter_hit_prototype.wav`
- Format：WAV
- Channels：mono
- Sample rate：44100 Hz
- Engine：Godot 4.6.3 stable
- Import state：prototype

## 5. Tool Inputs

- Tool：`examples/godot-boss-rush/tools/generate_v0_3_prototype_assets.py`
- Model / Service：None
- Prompt：None; deterministic local script.
- References：Counter timing from v0.2 playable loop.

## 6. Engine Validation

- Scene node：`CounterHitSfx`
- Trigger function：`_on_counter_landed`
- Expected behavior：反击成功时播放一次，不循环。

## 7. Review Criteria

- 音效触发时机与 counter feedback 一致。
- 不遮盖未来的核心战斗音频层级。
- provenance 和 license 记录完整。
