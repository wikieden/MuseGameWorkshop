# BR-AIART-003 Counter VFX Asset Brief

版本：v0.5b

语言：中文

日期：2026-06-09

## 1. Asset Summary

- Asset ID: `BR-AIART-003`
- Asset Name: Counter VFX direction
- Asset Type: VFX / visual feedback
- Target State: `prototype`
- Target Engine: Godot test scene
- Owner: Technical Artist + Game Designer
- Review Status: Approved for dry run brief

## 2. Gameplay Purpose

Counter VFX / 反击特效用于确认玩家成功抓住反击窗口。它必须在极短时间内告诉玩家“反击成功”，同时不能遮挡下一次 Boss 行动。

## 3. Visual Requirements

- 显示时间短，建议 120-250ms。
- 颜色优先使用 mint/gold，不与 player cyan 或 boss red-orange 混淆。
- 形状围绕命中点或玩家-Boss 中线出现。
- 必须在小分辨率和暗背景下可读。

## 4. Forbidden Directions

- 不使用长时间屏幕闪白。
- 不使用高噪声粒子遮挡 Boss 起手。
- 不用复杂纹理表达成功反馈。
- 不与受击、格挡失败或普通攻击反馈混淆。

## 5. AI Use Boundary

AI 可用于探索 VFX shape sheet、frame thumbnails 或 motion concept。候选文件进入 Godot 前必须有人类重绘、简化或重新组装。v0.5b 不生成实际文件，仅记录 brief。

## 6. Provenance Requirements

- Tool and model/service.
- Prompt, negative prompt, seed/settings.
- Frame count or timing intent.
- Reference source policy.
- Human redraw/edit notes.
- License and commercial-use notes.
- Engine import path if a candidate later exists.

## 7. Review Criteria

- 是否一眼能读成成功反击。
- 是否不遮挡下一个危险动作。
- 是否与 v0.3 counter flash 不冲突。
- 是否能以 SVG、PNG strip 或 Godot node 形式导入。
- 是否有完整 provenance。

## 8. Engine Validation Notes

如果后续出现候选文件，需要在 `examples/godot-boss-rush/scenes/TestArena.tscn` 中验证触发时机、显示时长、层级、颜色和重开流程。v0.5b 不修改场景。

