# BR-AIART-001 Boss Silhouette Asset Brief

版本：v0.5b

语言：中文

日期：2026-06-09

## 1. Asset Summary

- Asset ID: `BR-AIART-001`
- Asset Name: Boss silhouette exploration
- Asset Type: Character / Boss visual exploration
- Target State: `reference-only`
- Target Engine: None
- Owner: Art Director
- Review Status: Approved for dry run brief

## 2. Gameplay Purpose

Boss silhouette / Boss 轮廓用于验证 Boss 是否能在没有细节贴图的情况下表达威胁、阶段变化和攻击起手。玩家应能快速区分 Boss 的 idle、windup、recovery 和 phase change。

## 3. Visual Requirements

- 轮廓必须明显大于玩家。
- 阶段变化可通过肩部、武器、角、背部结构或外轮廓变化表达。
- 黑白剪影下仍能读出方向和攻击意图。
- 形体应锋利、低噪声、高识别度。

## 4. Forbidden Directions

- 不复刻任何商业游戏 Boss 或角色。
- 不使用特定在世艺术家风格。
- 不依赖复杂纹理表达威胁。
- 不使用恐怖、血腥或成人内容方向。

## 5. AI Use Boundary

AI 可用于生成 6-12 个 silhouette direction thumbnails / 轮廓方向小图。输出只能作为 `reference-only`，不得导入引擎，不得作为最终角色设计。

## 6. Provenance Requirements

- Tool and model/service.
- Prompt and negative prompt.
- Version or date of generation.
- Seed/settings if available.
- Reference source policy.
- Human selection notes.
- Human redraw/edit notes if any.
- License and commercial-use notes.

## 7. Review Criteria

- 是否能表达 Boss 威胁感。
- 是否能表达阶段变化。
- 是否在小尺寸下仍可读。
- 是否与 Boss Rush 的竞技试炼方向一致。
- 是否存在未授权相似性风险。

## 8. Engine Validation Notes

当前状态为 `reference-only`，不进入引擎。若后续转为 prototype sprite 或 3D model，必须重新创建 asset brief，并补 import spec、animation readiness 和 engine validation。

