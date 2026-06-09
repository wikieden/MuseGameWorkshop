# Boss Rush v0.5b AI Art Provenance Plan

版本：v0.5b

语言：中文

日期：2026-06-09

## 1. Provenance Goal

本文件定义 Boss Rush AI 美术 dry run 的来源与授权记录方式。v0.5b 没有实际生成资产，因此本文件不填写虚假的 prompt、seed、license 或 output path，只定义后续候选资产必须记录的字段。

## 2. Required Fields For Future Candidates

| Field | Required | Notes |
|---|---|---|
| Asset ID | Yes | 对应 `BR-AIART-*`。 |
| Asset state | Yes | reference-only、placeholder、prototype、reviewed、release-candidate、rejected。 |
| Tool | Yes | 工具名，如 Scenario、Firefly、ComfyUI、Meshy、Blender add-on。 |
| Model/service | Yes | 模型或服务名。 |
| Version/date | Yes | 工具版本、模型版本或生成日期。 |
| Prompt | Yes | 原始 prompt。 |
| Negative prompt | If applicable | 如工具支持。 |
| Seed/settings | If available | seed、steps、CFG、aspect ratio、style preset、mesh settings 等。 |
| Reference sources | Yes | 参考图、草图、文本来源。 |
| Input ownership | Yes | 自有、授权、公共领域、未知。 |
| Output license | Yes | 商用权、署名要求、限制。 |
| Plan tier | If relevant | 免费/付费计划可能影响授权。 |
| Human edits | Yes | 选择、重绘、矢量化、修图、重拓扑、导入整理。 |
| Source files | If available | PSD、blend、SVG、PNG、GLB 等。 |
| Content Credentials | If available | C2PA 或类似凭证。 |
| Reviewer | Yes | 人类 review owner。 |
| Engine validation | If imported | Godot/Unreal 验证记录。 |
| Disclosure risk | Yes | Steam/itch/store/trailer/player-facing 风险。 |

## 3. Tool Policy Notes

| Tool Category | Recording Requirement |
|---|---|
| Text-to-image | prompt、model、settings、reference source、license、human edits。 |
| Image-to-image | 输入图所有权、转换强度、输出 license、人类编辑。 |
| Custom model | 训练数据清单、训练授权、模型归属、输出限制。 |
| Text/image-to-3D | 输入来源、mesh settings、texture source、retopology/UV/collision edits。 |
| C2PA-enabled tool | 保留原始文件、Content Credentials 和项目 provenance record。 |

## 4. Dry Run Asset Records

| Asset ID | Current Record |
|---|---|
| `BR-AIART-001` | No candidate generated. Provenance fields defined only. |
| `BR-AIART-002` | No candidate generated. Provenance fields defined only. |
| `BR-AIART-003` | No candidate generated. Provenance fields defined only. |
| `BR-AIART-004` | No candidate generated. Provenance fields defined only. |
| `BR-AIART-005` | No candidate generated. Provenance fields defined only. |

## 5. Release Risk Rule

If any future candidate asset is used in a player-facing build, screenshot, store page, trailer, press kit, or public demo, it must be reviewed for AI usage disclosure. Steamworks distinguishes pre-generated AI content from live-generated AI content; v0.5b only covers pre-generated planning and blocks live-generated visual content.

