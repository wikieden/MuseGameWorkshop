# v0.3 Boss Rush Creative Production Design And Execution Plan

版本：v0.3

语言：中文

日期：2026-06-09

## 1. Design Summary

v0.3 的目标是完成 Creative Production Ready：证明 Boss Rush / 《反击试炼》的 prototype 级创意资产可以从 art direction、asset brief、provenance、asset review 进入 Godot engine validation。

本版本验证：

- 资产进入示例项目前必须有 brief、provenance 和 review。
- placeholder、prototype、reviewed、release-candidate、rejected 状态可区分。
- 至少一个视觉资产和一个音频资产完成从 brief 到 engine validation。
- 资产服务玩法反馈，不追求最终美术或最终音频品质。
- UX/onboarding/level blockout 有基础检查。

## 2. Execution Plan

允许创建或修改：

```text
templates/creative/animation-brief.md
templates/creative/music-brief.md
templates/creative/sfx-brief.md
templates/creative/asset-integration.md
templates/creative/ai-asset-disclosure.md
examples/godot-boss-rush/assets/
examples/godot-boss-rush/tools/generate_v0_3_prototype_assets.py
examples/godot-boss-rush/scenes/TestArena.tscn
examples/godot-boss-rush/scripts/test_arena.gd
examples/godot-boss-rush/README.md
tools/checks/check-v0.3-creative-assets
docs/evidence/v0.3/
```

不允许创建：

- Unreal 项目。
- 商业 creative AI API 集成。
- final art、final animation、final music、final SFX。
- store page、trailer 或发布构建。
- release-candidate 资产。

## 3. Asset Scope

| Asset | Type | State | Purpose |
|---|---|---|---|
| `counter_window_flash.svg` | Visual feedback / 视觉反馈 | prototype | 成功反击时给玩家明确的视觉确认。 |
| `counter_hit_prototype.wav` | SFX / 音效 | prototype | 成功反击时给玩家短促、清楚、不抢 HUD 的听觉确认。 |

两个资产都由本仓库确定性脚本生成，不调用外部 AI 模型或商业素材库。

## 4. Impact Scope

受影响范围：

- v0.3 evidence records。
- creative templates。
- Godot Boss Rush 示例的反馈节点。
- v0.3 检查入口。
- README、版本状态和测试说明。

未影响范围：

- v0.1 skills 清单不变。
- v0.2 机制规格和核心循环不变。
- Unreal 范围不变。
- 没有导入最终美术或最终音频。

## 5. Decisions For Review

| Decision | Result | Reason |
|---|---|---|
| v0.3 使用 prototype assets 而不是 final assets | Approved | 当前阶段验证资产流程，不追求最终品质。 |
| 使用本地确定性生成脚本而不是商业 AI API | Approved | 降低 license、平台披露和外部依赖风险。 |
| 视觉与音频只绑定 counter feedback | Approved | 反击是当前核心机制，最能验证 gameplay readability。 |
| 资产状态不升级为 release-candidate | Approved | 仍缺少正式美术方向、完整音频混音和外部试玩。 |

## 6. Validation Plan

自动/脚本检查：

- `tools/checks/check-doc-links`
- `tools/checks/check-doc-pairs`
- `tools/checks/check-startup-prompts`
- `tools/checks/check-template-metadata`
- `tools/checks/check-v0.1-manifest`
- `tools/checks/check-v0.2-godot`
- `tools/checks/check-v0.3-creative-assets`
- `python3 examples/godot-boss-rush/tests/simulate_core_loop.py`

Godot validation：

- Godot 4.6.3 stable headless 打开 `examples/godot-boss-rush`。
- 主场景引用视觉反馈和音频反馈资产。
- 成功反击时触发 `CounterFlash` 和 `CounterHitSfx`。

## 7. Known Limits

- 本版本只有 prototype asset，不代表美术风格最终确定。
- 音效是机制反馈验证音，不代表最终混音。
- 视觉反馈只覆盖 counter，不覆盖完整 dodge、parry、boss windup 和 hit reaction。
