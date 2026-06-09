# Muse Game Workshop

> 面向独立游戏的 AI tool-agnostic 制作工作流包，让 AI 参与 Godot / Unreal 游戏开发时仍然可计划、可审查、可追踪、可验证、可发布。

English version: [README.en.md](README.en.md)

## 这是什么

Muse Game Workshop 不是游戏引擎，也不是一键生成游戏工具。它是一套给独立游戏开发者和小团队使用的 AI 辅助制作工作流包，用来组织：

- 项目规则和 AI coding tool 启动方式。
- 游戏设计、机制规格、垂直切片、试玩和发布准备模板。
- 美术、动作、场景、音乐、音效、UI 等 AI-assisted assets 的 brief、provenance、review 和 engine validation。
- Godot 示例、Unreal 映射骨架、检查脚本和证据记录。

适合的使用者：

- Solo 独立游戏开发者。
- 2-5 人小型游戏团队。
- 想用 Codex、Claude Code、Kiro CLI、opencode 等 AI coding tools 做 Godot / Unreal 项目的人。
- 想把图像、音频、视频、3D、动作、UI、本地化等 creative AI tools 纳入可审查资产流程的人。

## 快速开始

```sh
git clone https://github.com/wikieden/MuseGameWorkshop.git
cd MuseGameWorkshop
tools/checks/check-doc-links
tools/checks/check-doc-pairs
tools/checks/check-startup-prompts
```

当前 GitHub 仓库是 private，clone 需要仓库权限。

## 使用路线

| 目标 | 入口 |
|---|---|
| 先理解项目 | [vision.zh.md](docs/muse-game-workshop-docs/vision.zh.md)、[prd.zh.md](docs/muse-game-workshop-docs/prd.zh.md) |
| 让 AI 工具接手 | 先读 `AGENTS.md`，再用本文的“推荐启动 Prompt” |
| 从新游戏点子开始 | `templates/design/pitch.md`、`core-loop.md`、`mechanic-spec.md` |
| 做垂直切片计划 | `templates/design/vertical-slice.md`、`templates/design/engine-mapping.md` |
| 跑 Godot 示例 | `examples/godot-boss-rush/project.godot` |
| 看 Unreal 映射状态 | `examples/unreal-boss-rush/README.md` |
| 检查仓库健康度 | 运行本文“检查与验证”里的命令 |

## 1. 配合 AI Coding Tools 使用

Muse Game Workshop 不是 Codex-only。Codex、Claude Code、Kiro CLI、opencode 或其他能读取项目规则和文件的 AI coding tools，都应该遵守同一套 Workflow Core / 工作流核心。

推荐流程：

1. 让 AI 先读 `AGENTS.md`。
2. 明确 target language / 目标语言、target audience / 目标用户群体、locale / 地区语境。
3. 让 AI 读取 Vision、PRD、technical architecture、bilingual audience strategy、v0.1 execution plan、P0 skill skeleton plan、v0.1 manifest、testing strategy 和 roadmap。
4. 任何实现任务或结构性改动，都必须先输出 design summary / 设计摘要、execution plan / 执行计划、impact scope / 影响范围、files to edit / 文件范围、review decisions / 需要评审的决策、validation plan / 验证计划。
5. 等 review gate 通过后再修改代码、资产或项目结构。
6. 修改后运行最小相关检查，并把证据写回 `docs/evidence/`。

### 推荐启动 Prompt

```text
我们要使用 Muse Game Workshop。目标语言：中文；目标用户群体：中国独立游戏开发者和小型游戏团队；地区语境：zh-CN。请先读取 README、overall project plan、Vision、PRD、technical architecture、workflow、skill spec、production language guide、bilingual audience strategy、terminology glossary、handoff contracts、templates、delivery plan、v0.1 execution plan、P0 skill skeleton plan、v0.1 manifest、testing strategy 和 roadmap。所有实现任务和结构性改动必须先输出设计摘要、执行计划、影响范围、文件范围、需要 review 的决策和验证计划，等待 review gate 通过后再动手。当前 v0.4 Unreal Mapping Slice review gate 已 Approved，静态骨架已落地；v0.5b AI art dry-run evidence 已落地但不代表资产已生成或导入；UE Editor 未安装时不要创建 .uasset 或 .umap。不要导入 final 或 release-candidate 资产。
```

## 2. 从一个新游戏想法开始

不要一上来就让 AI 写游戏代码。先把游戏的制作记忆落盘：

1. 用 `templates/design/pitch.md` 写一句话卖点、受众、平台、风险。
2. 用 `templates/design/core-loop.md` 写核心循环、玩家动机、失败和奖励。
3. 用 `templates/design/mechanic-spec.md` 写机制输入、状态转换、参数、反馈、边界情况和测试。
4. 用 `templates/design/vertical-slice.md` 定义最小垂直切片。
5. 用 `templates/design/engine-mapping.md` 把 engine-neutral 机制映射到 Godot 或 Unreal。
6. 用 `templates/production/review-gate.md` 记录 review 结论。
7. review gate 通过后，再进入 Godot / Unreal 实现。

建议把新项目证据放到：

```text
docs/evidence/<project-or-version>/
```

## 3. 使用模板

常用模板：

| 任务 | 模板 |
|---|---|
| 游戏点子 | `templates/design/pitch.md` |
| 核心循环 | `templates/design/core-loop.md` |
| 机制规格 | `templates/design/mechanic-spec.md` |
| 垂直切片 | `templates/design/vertical-slice.md` |
| 引擎映射 | `templates/design/engine-mapping.md` |
| 试玩记录 | `templates/design/playtest-log.md` |
| 评审节点 | `templates/production/review-gate.md` |
| 资产 brief | `templates/creative/asset-brief.md` |
| 资产来源 | `templates/creative/asset-provenance.md` |
| 资产 review | `templates/creative/asset-review.md` |
| 发布检查 | `templates/design/release-checklist.md` |
| 本地化准备 | `templates/publishing/localization-readiness.md` |

模板开头的 metadata block 不要删。它用于记录 Language、Target Audience、Locale、Terminology Source、Owner 和 Review Status。

## 4. 运行 Godot 示例

Godot 示例位于：

```text
examples/godot-boss-rush/
```

运行方式：

1. 安装 Godot，并确保命令行可使用 `godot`。
2. 用 Godot 打开 `examples/godot-boss-rush/project.godot`。
3. 运行 `scenes/TestArena.tscn`。
4. 使用方向键或 WASD 移动。
5. 使用 `F` 进行格挡/招架。
6. 在反击窗口使用 `J` 反击。
7. 使用 `R` 重开。

命令行验证：

```sh
tools/checks/check-v0.2-godot
tools/checks/check-v0.3-creative-assets
python3 examples/godot-boss-rush/tests/simulate_core_loop.py
```

## 5. Unreal 当前状态

Unreal 示例位于：

```text
examples/unreal-boss-rush/
```

当前状态是 static mapping scaffold / 静态映射骨架，包含 `.uproject`、配置、C++ 类、Data Asset 契约和调试 HUD 契约。由于本机暂未找到 Unreal Editor，PIE test map、Blueprint、UMG、Animation Montage placeholder 和 `.uasset` / `.umap` 需要等 UE 装好后补。

验证当前静态骨架：

```sh
tools/checks/check-v0.4-unreal
```

## 6. Creative Asset Pipeline / 创意资产流程

美术、动作、场景、音乐、音效、UI、本地化和其他 AI-assisted assets 不能直接丢进示例项目。进入项目之前至少需要：

- `templates/creative/art-direction.md`
- `templates/creative/asset-brief.md`
- `templates/creative/asset-provenance.md`
- `templates/creative/asset-review.md`
- `templates/creative/asset-integration.md`
- `templates/creative/ai-asset-disclosure.md`

资产记录必须说明：

- 使用的 AI 工具、模型或服务。
- prompt、参考来源或生成设置。
- 授权和使用权。
- 人类修改内容。
- 人工 review 结论。
- 引擎导入和运行验证。
- 平台披露风险。

没有 brief、provenance、review 和 engine validation 的资产，不能进入 example project。

## 7. 检查与验证

日常文档改动建议至少跑：

```sh
tools/checks/check-doc-links
tools/checks/check-doc-pairs
tools/checks/check-startup-prompts
```

模板或 skill 改动建议再跑：

```sh
tools/checks/check-template-metadata
tools/checks/check-v0.1-manifest
```

示例或资产改动建议跑全量：

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

## 常见任务

| 任务 | 入口 |
|---|---|
| 新游戏立项 | `game-intake` skill + `templates/design/pitch.md` |
| 核心循环设计 | `core-loop` skill + `templates/design/core-loop.md` |
| 机制规格 | `mechanic-spec` skill + `templates/design/mechanic-spec.md` |
| 垂直切片计划 | `vertical-slice-planner` skill + `templates/design/vertical-slice.md` |
| Godot 实现 | `godot-workflow` skill + `examples/godot-boss-rush/` |
| Unreal 映射 | `unreal-workflow` skill + `examples/unreal-boss-rush/` |
| 美术/音频资产 | `creative-asset-pipeline`、`asset-brief`、`asset-review` |
| 试玩记录 | `playtest-report` skill + `templates/design/playtest-log.md` |
| 发布准备 | `templates/design/release-checklist.md`、`templates/publishing/localization-readiness.md` |

## 项目远景

Muse Game Workshop 的远景是成为独立游戏团队可复用的 AI 制作工作流包：从一个游戏想法开始，经过概念阶段、预制作、原型验证、垂直切片、试玩测试、QA、打磨和发布准备，逐步形成可试玩、可审查、可复盘的 demo。

长期方向：

- 支持 Godot、Unreal 和其他可映射的游戏引擎工作流。
- 支持 Codex、Claude Code、Kiro CLI、opencode 等多种 AI coding tools。
- 支持图像、音频、视频、3D、动作、UI、本地化等 creative AI tools，但都必须通过 brief、provenance、human review 和 engine validation。
- 让中国游戏行业用户和英文用户都能用自然的制作语言理解同一套 workflow core。
- 让小团队在 AI 加速下仍然保留人类的创意判断、制作取舍、资产审批和发布责任。

它明确不做：

- 不做游戏引擎。
- 不做一键生成完整游戏的平台。
- 不替代制作人、策划、美术总监、程序、QA 或发布负责人。
- 不鼓励绕过 review gate 的“先生成再说”。

详细远景见：

- [vision.zh.md](docs/muse-game-workshop-docs/vision.zh.md)
- [vision.en.md](docs/muse-game-workshop-docs/vision.en.md)

## 当前状态

当前仓库已完成 v0.3 Creative Production Ready、v0.4 Unreal Mapping Slice 静态骨架，以及 v0.5b AI art dry-run evidence：

- `AGENTS.md`
- 14 个 P0 workflow skills：`.agents/skills/*/SKILL.md`
- 27 个模板：`templates/`，其中 22 个来自 v0.1，5 个来自 v0.3 creative templates
- 9 个检查入口：`tools/checks/`
- Boss Rush / 《反击试炼》无代码 dry-run evidence：`docs/evidence/dry-runs/`
- Godot Boss Rush prototype：`examples/godot-boss-rush/`
- v0.3 creative asset evidence：`docs/evidence/v0.3/`
- v0.4 Unreal static mapping scaffold：`examples/unreal-boss-rush/`
- v0.5b AI art asset dry-run evidence：`docs/evidence/v0.5/`

v0.4 Unreal Mapping Slice 已有 Approved review gate 和静态骨架，但本机未找到 Unreal Editor，因此 PIE 验证和二进制 `.uasset` / `.umap` 创建仍被阻塞。v0.5b 只完成 asset brief、provenance plan 和 review criteria 的 dry run，没有生成或导入正式资产；仍然没有正式或 release-candidate 美术/音频资产。

## 不要这样用

- 不要把 Muse Game Workshop 当作游戏引擎。
- 不要把它当作一键生成完整游戏的工具。
- 不要把它写成 Codex-only 流程。
- 不要在 review gate 之前修改代码、资产或项目结构。
- 不要导入没有 brief、provenance、license、review 和 engine validation 的 AI 资产。
- 不要把 prototype asset 当成 release-candidate asset。
- 不要在 UE Editor 不可用时伪造 PIE 验证或 `.uasset` / `.umap`。

## 文档

| Document | 中文 | English |
|---|---|---|
| Project README | [README.zh.md](README.zh.md) | [README.en.md](README.en.md) |
| Overall Project Plan | [muse-game-workshop-plan.zh.md](docs/muse-game-workshop-plan.zh.md) | [muse-game-workshop-plan.en.md](docs/muse-game-workshop-plan.en.md) |
| Vision | [vision.zh.md](docs/muse-game-workshop-docs/vision.zh.md) | [vision.en.md](docs/muse-game-workshop-docs/vision.en.md) |
| PRD | [prd.zh.md](docs/muse-game-workshop-docs/prd.zh.md) | [prd.en.md](docs/muse-game-workshop-docs/prd.en.md) |
| Technical Architecture | [technical-architecture.zh.md](docs/muse-game-workshop-docs/technical-architecture.zh.md) | [technical-architecture.en.md](docs/muse-game-workshop-docs/technical-architecture.en.md) |
| Godot / Unreal Workflow | [godot-unreal-workflow.zh.md](docs/muse-game-workshop-docs/godot-unreal-workflow.zh.md) | [godot-unreal-workflow.en.md](docs/muse-game-workshop-docs/godot-unreal-workflow.en.md) |
| AI Art Asset Pipeline | [ai-art-asset-pipeline.zh.md](docs/muse-game-workshop-docs/ai-art-asset-pipeline.zh.md) | [ai-art-asset-pipeline.en.md](docs/muse-game-workshop-docs/ai-art-asset-pipeline.en.md) |
| Skill Pack Spec | [skill-pack-spec.zh.md](docs/muse-game-workshop-docs/skill-pack-spec.zh.md) | [skill-pack-spec.en.md](docs/muse-game-workshop-docs/skill-pack-spec.en.md) |
| Production Language Guide | [production-language-guide.zh.md](docs/muse-game-workshop-docs/production-language-guide.zh.md) | [production-language-guide.en.md](docs/muse-game-workshop-docs/production-language-guide.en.md) |
| Bilingual Audience Strategy | [bilingual-audience-strategy.zh.md](docs/muse-game-workshop-docs/bilingual-audience-strategy.zh.md) | [bilingual-audience-strategy.en.md](docs/muse-game-workshop-docs/bilingual-audience-strategy.en.md) |
| Terminology Glossary | [terminology-glossary.zh.md](docs/muse-game-workshop-docs/terminology-glossary.zh.md) | [terminology-glossary.en.md](docs/muse-game-workshop-docs/terminology-glossary.en.md) |
| Handoff Contracts | [handoff-contracts.zh.md](docs/muse-game-workshop-docs/handoff-contracts.zh.md) | [handoff-contracts.en.md](docs/muse-game-workshop-docs/handoff-contracts.en.md) |
| Templates | [templates.zh.md](docs/muse-game-workshop-docs/templates.zh.md) | [templates.en.md](docs/muse-game-workshop-docs/templates.en.md) |
| Delivery Plan | [delivery-plan.zh.md](docs/muse-game-workshop-docs/delivery-plan.zh.md) | [delivery-plan.en.md](docs/muse-game-workshop-docs/delivery-plan.en.md) |
| v0.1 Execution Plan | [v0.1-execution-plan.zh.md](docs/muse-game-workshop-docs/v0.1-execution-plan.zh.md) | [v0.1-execution-plan.en.md](docs/muse-game-workshop-docs/v0.1-execution-plan.en.md) |
| P0 Skill Skeleton Plan | [p0-skill-skeleton-plan.zh.md](docs/muse-game-workshop-docs/p0-skill-skeleton-plan.zh.md) | [p0-skill-skeleton-plan.en.md](docs/muse-game-workshop-docs/p0-skill-skeleton-plan.en.md) |
| v0.1 Manifest | [v0.1-manifest.zh.md](docs/muse-game-workshop-docs/v0.1-manifest.zh.md) | [v0.1-manifest.en.md](docs/muse-game-workshop-docs/v0.1-manifest.en.md) |
| Testing Strategy | [testing-strategy.zh.md](docs/muse-game-workshop-docs/testing-strategy.zh.md) | [testing-strategy.en.md](docs/muse-game-workshop-docs/testing-strategy.en.md) |
| Versioned MVP Roadmap | [mvp-roadmap.zh.md](docs/muse-game-workshop-docs/mvp-roadmap.zh.md) | [mvp-roadmap.en.md](docs/muse-game-workshop-docs/mvp-roadmap.en.md) |
