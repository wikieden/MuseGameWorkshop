# Counter Window Flash Asset Brief

版本：v0.3

语言：中文

日期：2026-06-09

## 1. Asset Purpose

`counter_window_flash.svg` 是成功反击时出现的 prototype visual feedback / 原型视觉反馈。它的目的不是变成最终特效，而是验证反击命中是否有清楚的视觉确认。

## 2. Gameplay Context

- Trigger：玩家成功招架后，在反击窗口内按 J 命中 Boss。
- Duration：约 0.22 秒。
- Location：Boss 与玩家之间的战斗中心点附近。
- Player need：确认“反击已经命中”，并准备下一次读 Boss 起手。

## 3. Style And Readability

- 形状：圆环、十字、斜线，表达命中确认。
- 颜色：mint / gold / white，区别于 player cyan 和 boss red-orange。
- 不使用复杂纹理。
- 不遮挡 Boss 血量和 HUD。

## 4. Technical Specs

- File：`examples/godot-boss-rush/assets/visual/counter_window_flash.svg`
- Format：SVG
- Canvas：128x128
- Engine：Godot 4.6.3 stable
- Import state：prototype

## 5. Tool Inputs

- Tool：`examples/godot-boss-rush/tools/generate_v0_3_prototype_assets.py`
- Model / Service：None
- Prompt：None; deterministic local script.
- References：Boss Rush v0.2 placeholder shapes and v0.3 art direction.

## 6. Review Criteria

- 能在 Godot 主场景中被引用。
- 成功反击时可见。
- 不影响移动、招架、反击的输入验证。
- provenance 和 license 记录完整。
