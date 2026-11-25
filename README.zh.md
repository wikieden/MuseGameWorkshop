# Muse Game Workshop

> 面向独立游戏的 AI tool-agnostic 制作工作流包，支持 Three.js WebGPU、Unity、Unreal Engine 和 Godot 生产交付。

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
- 想用 Codex、Claude Code、Kimi Code、Kiro CLI、opencode、RoboCode 或 CliHub 制作 Three.js、Unity、Unreal 或 Godot 游戏的人。
- 想把图像、音频、视频、3D、动作、UI、本地化等 creative AI tools 纳入可审查资产流程的人。

## 快速开始

```sh
git clone https://github.com/wikieden/MuseGameWorkshop.git
cd MuseGameWorkshop
tools/checks/check-doc-links
tools/checks/check-doc-pairs
tools/checks/check-startup-prompts
```

GitHub 仓库已公开，可以直接 clone。

## 使用路线

| 目标 | 入口 |
|---|---|
| 先理解项目 | [vision.zh.md](docs/muse-game-workshop-docs/vision.zh.md)、[prd.zh.md](docs/muse-game-workshop-docs/prd.zh.md) |
| 理解 `mgw-init` / `mgw init` 产品入口 | [product-entry-and-mgw-init.zh.md](docs/muse-game-workshop-docs/product-entry-and-mgw-init.zh.md) |
| 从 0 到 1 创建新游戏 | [zero-to-one-game-creation.zh.md](docs/muse-game-workshop-docs/zero-to-one-game-creation.zh.md)：建目录，输入 `mgw-init`，再在 AI coding tool 里继续 |
| 按用户流程创作游戏 | [user-journey.zh.md](docs/muse-game-workshop-docs/user-journey.zh.md) |
| 让 AI 工具接手 | 先读 `AGENTS.md`，再用本文的“推荐启动 Prompt” |
| 从新游戏点子开始 | `templates/design/pitch.md`、`core-loop.md`、`mechanic-spec.md` |
| 深化策划和系统设计 | [game-design-systems.zh.md](docs/muse-game-workshop-docs/game-design-systems.zh.md)、`templates/design/system-design.md` |
| 设计经济与成长 | [economy-progression.zh.md](docs/muse-game-workshop-docs/economy-progression.zh.md)、`templates/design/economy-model.md` |
| 规划等级、战斗和系统数值 | [numerical-planning.zh.md](docs/muse-game-workshop-docs/numerical-planning.zh.md)、`templates/design/level-curve.md` |
| 组合专业策划 skills | [agent-skill-composition.zh.md](docs/muse-game-workshop-docs/agent-skill-composition.zh.md)、`system-design`、`combat-design`、`numerical-planning` |
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
我们要使用 Muse Game Workshop。目标语言：中文；目标用户群体：中国独立游戏开发者和小型游戏团队；地区语境：zh-CN。请先读取 README、overall project plan、Vision、PRD、Product Entry & mgw init、Zero-to-One Game Creation / 从 0 到 1 创建游戏、User Journey、technical architecture、Production Target Contract / 生产目标契约、Three.js Web Runtime / Three.js 网页运行时、Unity Workflow / Unity 工作流、workflow、skill spec、production language guide、bilingual audience strategy、terminology glossary、handoff contracts、templates、game design systems、Genre Tracks / 类型流程分支、Economy & Progression / 经济与成长、Numerical Planning / 数值规划、Agent Skill Composition / Agent 与 Skill 组合设计、delivery plan、testing strategy 和 roadmap。`mgw-init` 是问答式初始化入口，`continue mgw-init` 用于继续初始化会话。所有实现与结构改动必须先经过设计摘要、执行计划和 review gate。当前已完成 v0.9.3 Multi-target Production Foundation / 多生产目标基础与 Three.js Web Runtime，以及 v0.9.4 Unity Workflow / Unity 工作流；下一步进入 v0.10 Telemetry & Playtest Analytics / 数据埋点与试玩分析。
```

## 2. 从一个新游戏想法开始

不要一上来就让 AI 写游戏代码。完整第一天流程见 [zero-to-one-game-creation.zh.md](docs/muse-game-workshop-docs/zero-to-one-game-creation.zh.md)。先用轻量向导入口开始：

```sh
mkdir my-game
cd my-game
mgw-init
```

然后用 Codex、Claude Code、Kiro CLI、opencode 或其他 AI coding tool 打开目录，并输入：

```text
continue mgw-init
```

如果 CLI 还不可用，也可以直接在空目录里打开 AI coding tool 并输入：

```text
mgw-init
```

第一步只应该生成最小内容：

```text
README.md
muse.project.yaml
docs/00-game-start.md
docs/evidence/README.md
```

用户确认后，再展开制作记忆：

1. 用 `templates/design/pitch.md` 写一句话卖点、受众、平台、风险。
2. 用 `templates/design/core-loop.md` 写核心循环、玩家动机、失败和奖励。
3. 用 `templates/design/mechanic-spec.md` 写机制输入、状态转换、参数、反馈、边界情况和测试。
4. 用 `templates/design/vertical-slice.md` 定义最小垂直切片。
5. 用 `templates/design/engine-mapping.md` 把 engine-neutral 机制映射到 Godot 或 Unreal。
6. 用 `templates/production/review-gate.md` 记录 review 结论。
7. review gate 通过后，再进入 Three.js、Unity、Godot 或 Unreal 实现。

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
| 系统策划 | `templates/design/system-design.md` |
| 战斗策划 | `templates/design/combat-design.md` |
| 遭遇设计 | `templates/design/encounter-design.md` |
| 调优计划 | `templates/design/tuning-plan.md` |
| 经济模型 | `templates/design/economy-model.md` |
| 成长线地图 | `templates/design/progression-map.md` |
| 资源与奖励表 | `templates/design/resource-reward-table.md` |
| 数值调优闭环 | `templates/design/tuning-loop.md` |
| 等级曲线 | `templates/design/level-curve.md` |
| 战斗参数表 | `templates/design/combat-parameter-table.md` |
| 系统数值规划 | `templates/design/system-numerical-plan.md` |
| 试玩假设 | `templates/design/playtest-hypothesis.md` |
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
tools/checks/check-v0.9.2-design-skills
tools/checks/check-v0.9.3-threejs-runtime
tools/checks/check-v0.9.4-unity
tools/checks/check-creative-ai-pilot
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
tools/checks/check-v0.5-consolidation
tools/checks/check-v0.6-game-design-systems
tools/checks/check-v0.7-product-entry
tools/checks/check-v0.8-genre-tracks
tools/checks/check-v0.9-economy-progression
tools/checks/check-v0.9.1-numerical-planning
tools/checks/check-v0.9.2-design-skills
python3 examples/godot-boss-rush/tests/simulate_core_loop.py
```

## 常见任务

| 任务 | 入口 |
|---|---|
| 新游戏立项 | `game-intake` skill + `templates/design/pitch.md` |
| 核心循环设计 | `core-loop` skill + `templates/design/core-loop.md` |
| 机制规格 | `mechanic-spec` skill + `templates/design/mechanic-spec.md` |
| 系统策划 | `system-design` skill + `templates/design/system-design.md` |
| 战斗策划 | `combat-design` skill + `templates/design/combat-design.md` |
| 数值策划 | `numerical-planning`、`level-curve`、`combat-parameters`、`system-numerics` |
| Prototype Design Gate / 原型设计门 | 进入 Three.js / Unity / Godot / Unreal 玩法代码前使用 `prototype-design` skill |
| 垂直切片计划 | `vertical-slice-planner` skill + `templates/design/vertical-slice.md` |
| Godot 实现 | `godot-workflow` skill + `examples/godot-boss-rush/` |
| Unreal 映射 | `unreal-workflow` skill + `examples/unreal-boss-rush/` |
| 美术/音频资产 | `creative-asset-pipeline`、`asset-brief`、`asset-review` |
| 试玩记录 | `playtest-report` skill + `templates/design/playtest-log.md` |
| AI 3D 资产生产 | `ai-3d-asset-production` skill + `templates/creative/procedural-3d-delivery.md` |
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

当前仓库已完成 v0.9.3 Multi-target Production Foundation / 多生产目标基础与 Three.js Web Runtime，以及 v0.9.4 Unity Workflow / Unity 工作流：

- `AGENTS.md`
- 25 个 workflow skills，包含 `threejs-workflow`、`unity-workflow` 和 `ai-3d-asset-production`
- 44 个模板：`templates/`，其中 22 个来自 v0.1，5 个来自 v0.3 creative templates，5 个来自 v0.6 design systems templates，4 个来自 v0.9 economy/progression templates，3 个来自 v0.9.1 numerical planning templates，2 个来自 v0.9.3 production-target templates，3 个来自 Creative AI Production Pilot
- 19 个检查入口：`tools/checks/`
- Boss Rush / 《反击试炼》无代码 dry-run evidence：`docs/evidence/dry-runs/`
- Godot Boss Rush prototype：`examples/godot-boss-rush/`
- v0.3 creative asset evidence：`docs/evidence/v0.3/`
- v0.4 Unreal static mapping scaffold：`examples/unreal-boss-rush/`
- v0.5b AI art asset dry-run evidence：`docs/evidence/v0.5/`
- v0.5 engine AI adapter research：`docs/muse-game-workshop-docs/research/`
- v0.5 Roadmap Rebase & Research Consolidation / 路线重排与研究收口证据：`docs/evidence/v0.5/`
- v0.6 Game Design & Systems / 策划与系统设计总纲：`docs/muse-game-workshop-docs/game-design-systems.zh.md`
- v0.6 Boss Rush 与 Tactics design dry-run evidence：`docs/evidence/v0.6/`
- v0.7 product entry 和 user journey docs：`docs/muse-game-workshop-docs/`
- v0.8 Genre Tracks / 类型流程分支总纲和 7 个类型分支：`docs/muse-game-workshop-docs/`
- v0.8 Tactics / 战棋类 dry-run evidence：`docs/evidence/v0.8/`
- v0.9 Economy & Progression / 经济与成长 docs、templates 和 Tactics / 战棋类 dry-run evidence：`docs/evidence/v0.9/`
- v0.9.1 Numerical Planning / 数值规划 docs、templates 和 Tactics / 战棋类 dry-run evidence：`docs/evidence/v0.9.1/`
- v0.9.2 Specialized Design Skills / 专业策划 Skill 包和 Agent Skill Composition / Agent 与 Skill 组合设计 docs：`.agents/skills/` 和 `docs/muse-game-workshop-docs/`
- v0.9.3 生产目标契约、Three.js workflow、浏览器验证 evidence 和 Three.js Boss Rush 可玩样板
- v0.9.4 Unity workflow、静态映射验证和 evidence；真实 Editor/PlayMode 验证取决于本机 Unity Editor
- Creative AI Production Pilot / 创意 AI 生产试点研究、AI 3D 生产契约、Grey Tide 计划证据和工具无关专业 skill；当前不批准安装工具或生成资产

本机未找到 Unreal Editor 或 Unity Editor，因此对应编辑器、PIE/PlayMode 和 player build 验证仍待补充。Three.js 生产方向使用 WebGPU，并保留 WebGL 2 fallback。v0.9.4 不实现真实 `mgw` CLI、商业化后台、支付或真实 telemetry service，也不批准 release balance / 发布版本最终平衡。下一步进入 v0.10 Telemetry & Playtest Analytics / 数据埋点与试玩分析。

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
| Product Entry & mgw init | [product-entry-and-mgw-init.zh.md](docs/muse-game-workshop-docs/product-entry-and-mgw-init.zh.md) | [product-entry-and-mgw-init.en.md](docs/muse-game-workshop-docs/product-entry-and-mgw-init.en.md) |
| Zero-to-One Game Creation | [zero-to-one-game-creation.zh.md](docs/muse-game-workshop-docs/zero-to-one-game-creation.zh.md) | [zero-to-one-game-creation.en.md](docs/muse-game-workshop-docs/zero-to-one-game-creation.en.md) |
| User Journey | [user-journey.zh.md](docs/muse-game-workshop-docs/user-journey.zh.md) | [user-journey.en.md](docs/muse-game-workshop-docs/user-journey.en.md) |
| Technical Architecture | [technical-architecture.zh.md](docs/muse-game-workshop-docs/technical-architecture.zh.md) | [technical-architecture.en.md](docs/muse-game-workshop-docs/technical-architecture.en.md) |
| Godot / Unreal Workflow | [godot-unreal-workflow.zh.md](docs/muse-game-workshop-docs/godot-unreal-workflow.zh.md) | [godot-unreal-workflow.en.md](docs/muse-game-workshop-docs/godot-unreal-workflow.en.md) |
| Production Target Contract / 生产目标契约 | [production-target-contract.zh.md](docs/muse-game-workshop-docs/production-target-contract.zh.md) | [production-target-contract.en.md](docs/muse-game-workshop-docs/production-target-contract.en.md) |
| Three.js Web Runtime / Three.js 网页运行时 | [threejs-web-runtime.zh.md](docs/muse-game-workshop-docs/threejs-web-runtime.zh.md) | [threejs-web-runtime.en.md](docs/muse-game-workshop-docs/threejs-web-runtime.en.md) |
| Unity Workflow / Unity 工作流 | [unity-workflow.zh.md](docs/muse-game-workshop-docs/unity-workflow.zh.md) | [unity-workflow.en.md](docs/muse-game-workshop-docs/unity-workflow.en.md) |
| AI Art Asset Pipeline | [ai-art-asset-pipeline.zh.md](docs/muse-game-workshop-docs/ai-art-asset-pipeline.zh.md) | [ai-art-asset-pipeline.en.md](docs/muse-game-workshop-docs/ai-art-asset-pipeline.en.md) |
| AI 3D Asset Production Contract / AI 3D 资产生产契约 | [ai-3d-asset-production.zh.md](docs/muse-game-workshop-docs/ai-3d-asset-production.zh.md) | [ai-3d-asset-production.en.md](docs/muse-game-workshop-docs/ai-3d-asset-production.en.md) |
| Godot Prototype Asset Kit | [godot-prototype-asset-kit.zh.md](docs/muse-game-workshop-docs/godot-prototype-asset-kit.zh.md) | [godot-prototype-asset-kit.en.md](docs/muse-game-workshop-docs/godot-prototype-asset-kit.en.md) |
| Genre Tracks | [genre-tracks.zh.md](docs/muse-game-workshop-docs/genre-tracks.zh.md) | [genre-tracks.en.md](docs/muse-game-workshop-docs/genre-tracks.en.md) |
| Economy & Progression | [economy-progression.zh.md](docs/muse-game-workshop-docs/economy-progression.zh.md) | [economy-progression.en.md](docs/muse-game-workshop-docs/economy-progression.en.md) |
| Numerical Planning | [numerical-planning.zh.md](docs/muse-game-workshop-docs/numerical-planning.zh.md) | [numerical-planning.en.md](docs/muse-game-workshop-docs/numerical-planning.en.md) |
| Agent Skill Composition | [agent-skill-composition.zh.md](docs/muse-game-workshop-docs/agent-skill-composition.zh.md) | [agent-skill-composition.en.md](docs/muse-game-workshop-docs/agent-skill-composition.en.md) |
| Game Design & Systems | [game-design-systems.zh.md](docs/muse-game-workshop-docs/game-design-systems.zh.md) | [game-design-systems.en.md](docs/muse-game-workshop-docs/game-design-systems.en.md) |
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
