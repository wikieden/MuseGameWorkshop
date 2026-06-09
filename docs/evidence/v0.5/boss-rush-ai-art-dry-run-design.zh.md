# v0.5b Boss Rush AI Art Dry Run Design And Execution Plan

版本：v0.5b

语言：中文

日期：2026-06-09

## 1. Design Summary

v0.5b 的目标是用 Boss Rush / 《反击试炼》跑通 AI Art Asset Pipeline / AI 美术资产流程的 dry run。这个版本不生成新资产、不接商业 API、不导入 Godot 或 Unreal 资产，而是验证从 art direction、asset list、asset brief、provenance plan、asset review 到 engine validation plan 的交付链路是否清楚。

本版本验证：

- AI 美术工作必须从 gameplay need / 玩法需求和 art direction / 美术方向出发。
- 每个 AI-assisted art asset 都必须有状态：`reference-only`、`placeholder`、`prototype`、`reviewed`、`release-candidate` 或 `rejected`。
- AI 输出默认不能直接成为 final art 或 release-candidate asset。
- Boss、场景、HUD、VFX、商店图草案等不同资产类型，都能用同一套 brief/provenance/review 字段管理。
- 平台披露、授权和人类修改记录从一开始就进入流程。

## 2. Execution Plan

允许创建或修改：

```text
docs/evidence/v0.5/
tools/checks/check-v0.5-ai-art-dry-run
README.md
README.zh.md
README.en.md
docs/muse-game-workshop-docs/testing-strategy.zh.md
docs/muse-game-workshop-docs/testing-strategy.en.md
```

不允许创建：

- 新 AI 生成图片、模型、贴图、UI 或商店图文件。
- 新 Godot 资产导入。
- 新 Unreal `.uasset` 或 `.umap`。
- 商业 creative AI API 集成。
- final art 或 release-candidate art。
- live-generated visual content。

## 3. Impact Scope

受影响范围：

- v0.5 evidence records。
- README 和 testing strategy 的检查入口说明。
- AI 美术资产流程的 dry run 验证脚本。

未影响范围：

- Godot Boss Rush 玩法代码不变。
- Unreal static mapping scaffold 不变。
- v0.3 prototype assets 不升级状态。
- 不新增任何真实美术资产文件。

## 4. Decisions For Review

| Decision | Result | Reason |
|---|---|---|
| v0.5b 只做 dry run，不生成资产 | Approved | 当前目标是验证流程，不是扩大资产量。 |
| Boss Rush 使用五类资产 brief | Approved | 覆盖 Boss、场景、HUD、VFX、商店图草案，足以验证美术资产分类。 |
| provenance 使用计划样例，不写虚假工具输出 | Approved | 没有实际生成资产时不能伪造 prompt、seed、license。 |
| review 结论只批准 reference/prototype planning | Approved | 没有候选文件，不可批准 release-candidate。 |
| UE 仍保持阻塞状态 | Approved | Unreal Editor 未安装前不创建 `.uasset` 或 `.umap`。 |

## 5. Validation Plan

自动检查：

```sh
tools/checks/check-doc-links
tools/checks/check-doc-pairs
tools/checks/check-startup-prompts
tools/checks/check-template-metadata
tools/checks/check-v0.1-manifest
tools/checks/check-v0.2-godot
tools/checks/check-v0.3-creative-assets
tools/checks/check-v0.4-unreal
tools/checks/check-v0.5-ai-art-dry-run
python3 examples/godot-boss-rush/tests/simulate_core_loop.py
```

人工 review：

- 检查每个 asset brief 是否有 gameplay purpose。
- 检查每个 asset brief 是否明确 AI use boundary。
- 检查 provenance plan 是否避免伪造不存在的生成证据。
- 检查 review verdict 是否没有越权批准 release-candidate。

## 6. Known Limits

- 本版本不验证真实 AI 工具输出质量。
- 本版本不验证 3D mesh topology、UV、LOD、collision 或 animation readiness。
- 本版本不验证 Steam store page 最终披露文案。
- 本版本不替代 v0.5 Publishing Readiness。

