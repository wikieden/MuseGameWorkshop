# BR-AIART-004 HUD Combat Icon Asset Brief

版本：v0.5b

语言：中文

日期：2026-06-09

## 1. Asset Summary

- Asset ID: `BR-AIART-004`
- Asset Name: HUD combat icons
- Asset Type: UI / HUD icon
- Target State: `prototype`
- Target Engine: Godot HUD
- Owner: UX Designer + UI Artist
- Review Status: Approved for dry run brief

## 2. Gameplay Purpose

HUD combat icons / 战斗 HUD 图标用于表达 parry、stamina、counter window 等战斗状态。它们必须帮助玩家理解当前可做什么，而不是装饰界面。

## 3. Visual Requirements

- 32px 和 64px 下仍可读。
- 使用简单形状和明确轮廓。
- 图标语言应与 combat feedback 色彩一致。
- 同一组图标线宽、圆角、填充方式一致。

## 4. Forbidden Directions

- 不使用复杂纹样或过细线条。
- 不依赖文字解释图标含义。
- 不使用未经授权字体或商标形状。
- 不使用与平台按钮图标冲突的符号。

## 5. AI Use Boundary

AI 可用于生成 icon concept sheet。最终进入 HUD 的候选图标必须由人类重绘、矢量化或像素级整理，并记录 source file。v0.5b 不生成实际 icon。

## 6. Provenance Requirements

- Tool and model/service.
- Prompt and negative prompt.
- Icon set constraints.
- Human redraw/vectorization notes.
- Font and symbol license notes.
- Export format and source file path if candidate later exists.

## 7. Review Criteria

- 是否在小尺寸可读。
- 是否和 HUD 层级一致。
- 是否能区分 parry、stamina、counter。
- 是否符合无障碍和色盲风险基础检查。
- 是否有完整 provenance。

## 8. Engine Validation Notes

如果后续出现候选文件，需要在 `examples/godot-boss-rush/scenes/ui/HUD.tscn` 中验证尺寸、布局、对比度、状态切换和文本不重叠。v0.5b 不修改 HUD。

