# Muse Game Workshop PRD

版本：v0.1

语言：中文

## 1. 产品概述

Muse Game Workshop 是一套面向 Godot 和 Unreal Engine 独立游戏开发的 AI 辅助制作工作流系统。它不是游戏引擎，也不是一键生成游戏的平台，而是帮助开发者把游戏从概念、预制作、原型验证、垂直切片、正式制作、试玩迭代、QA、打磨到发布准备的全过程结构化，并沉淀为工具无关的 workflow skills、模板、规则、检查清单、示例项目和 AI tool 适配层。

本项目的最终目标是成为 Godot 与 Unreal 项目的 AI 制作层：

- 上层：创意、GDD、机制规格、内容矩阵、数值、试玩反馈、发布决策。
- 中层：workflow core、制作阶段、制作职能、模板、工作流规则、review gate、项目阶段检测。
- 适配层：Codex、Claude Code、Kiro CLI、opencode 等 AI coding tools，以及图像、音频、视频、3D、动作和本地化 AI tools 的 brief、规则、命令和审查约定。
- 下层：Godot/Unreal 引擎适配、创意资产管线、编辑器自动化、测试、构建、资产导入与验证。

一句话定位：

> 面向 Godot 和 Unreal 的 AI tool-agnostic 游戏策划、内容制作、工程实现、验证与发布工作流系统。

### 1.1 Vision

Muse Game Workshop 的愿景是把 AI 从“会写代码、会生成素材的工具”，提升为独立开发者和小团队可以信任的 AI-assisted game production operating model。它用游戏行业已有的制作阶段、制作职能和质量门组织工作，用 AI 扩展策划、工程、美术、动作、场景、音乐、音效、QA 和发布能力，同时用 review gate、证据记录和资产来源追踪保持人类创意控制。

它要帮助团队持续回答三个制作问题：我们到底在做什么游戏；下一步最小可验证产出是什么；每一次 AI 参与的设计、代码、资产、测试和发布决策，是否有依据、可追踪、能被人类批准。它不替代制作人、策划、美术、程序、音频、QA 或发行判断，而是让这些职能在 AI 辅助下更清晰、更快、更可复盘。一个团队应该能从模糊创意出发，逐步形成玩法规格、工程计划、创意资产 brief、AI 生成资产记录、Godot/Unreal 接入方案和可发布 demo 清单。

## 2. 背景与问题

AI coding tools 和 creative AI tools 已经能帮助独立开发者快速生成原型、代码和资产方向，但独立游戏真正难点不只是写代码，而是持续判断“是否好玩”、稳定推进内容生产、控制技术债、验证手感、记录决策、管理资产与发布风险。

现有工具常见问题：

- 一键生成游戏工具原型快，但难以进入正式生产。
- 通用 coding agent 会写代码，创意 AI 工具会生成资产，但它们通常不理解游戏策划流程、引擎边界、资产授权和发布约束。
- Godot/Unreal 编辑器操作、场景、蓝图、资源、测试和打包流程复杂。
- 策划文档、实现任务、试玩反馈、数值调整经常脱节。
- AI 生成代码和资产容易造成 comprehension debt 与 provenance debt，开发者后期看不懂、改不动，也说不清来源、授权和发布风险。

因此，本项目要解决的是：

> 让 AI 不再只是临时写代码，而是成为独立游戏制作流程中的可控协作者。

## 3. 目标用户

第一阶段目标用户：

- Solo 独立游戏开发者。
- 2-5 人小型游戏团队。
- 使用 Godot 做 2D 或轻量 3D 游戏的开发者。
- 使用 Unreal 做 3D 动作、探索、射击或高表现原型的开发者。
- 想从 vibe coding 进入可维护制作流程的 AI 辅助开发者。
- 有创意和策划能力，但需要工程推进、文档化和验证流程的人。
- 中文独立游戏开发者和中国游戏行业用户，需要中国游戏界能理解的术语和制作文档。
- English-speaking indie developers and small teams，需要自然英文 game-production docs，而不是中文文档的直译副本。

暂不优先服务：

- 大型商业团队完整制片管线。
- MMO、开放世界、重联网、重 live ops 项目。
- 纯自动生成游戏平台。
- 无人工试玩和设计判断的全自动代理系统。

## 4. 产品目标

v0.1 目标：

- 提供一套可复制的 Godot/Unreal 双引擎游戏工作流文档。
- 提供第一批工具无关 workflow skills 规格。
- 定义游戏行业可理解的制作阶段和制作职能映射。
- 提供策划、机制、内容、试玩、引擎映射模板。
- 纳入创意资产、UX/UI、关卡设计、资产来源追踪的 P0 工作流设计。
- 提供 v0.1 manifest，明确首批 skills、templates、checks 和 dry run 证据。
- 用 Boss Rush / 《反击试炼》完成一次无代码 dry run。
- 明确 Godot 与 Unreal 的引擎选择和迁移策略。
- 明确中文和英文两类用户群体的文档入口、术语规则和本地化策略。

v0.2 目标：

- 完成 Godot Boss Rush playable loop。
- 从 pitch、core loop、mechanic spec 到 Godot test scene 跑通。
- 增加 Godot 基础测试命令和人工试玩脚本。
- 输出第一份 playtest report。

v0.3 目标：

- 完成 P0 creative asset pipeline 的 engine validation。
- 落美术、动作、音乐、音效、asset provenance 和 asset review 模板。
- 建立没有 brief/provenance/review 的资产不得进入示例项目的 asset gate。

v0.4 目标：

- 完成 Unreal Third-person Combat mapping slice。
- 验证同一机制从 engine-neutral spec 到 Unreal PIE test map 的映射成本。
- 记录 Blueprint、C++、Data Asset、UMG、Animation 和打包风险。

v0.5 目标：

- 补齐 P1 发布、本地化、无障碍和 store readiness。
- 建立 demo release checklist。
- 完成 AI usage disclosure 和 platform checklist。

v0.6 目标：

- 完成 Game Design Deepening Pack / 策划流程细化包。
- 把设计支柱、系统策划、战斗策划、关卡遭遇、数值调优和试玩假设变成可交接规格。
- 用 Boss Rush 和 Tactics / 战棋类验证“通用策划流程能支撑不同玩法结构”。

v0.7 目标：

- 完成 Narrative Design Pack / 叙事设计包。
- 支持世界观、剧情动线、角色人物设计、任务设计、对白设计、环境叙事和设定一致性检查。
- 明确 AI 参与叙事设计时的 canon status、prompt record、reference boundary、spoiler level 和文化/平台风险。

v0.8 目标：

- 建立 Genre Tracks / 类型流程分支。
- 首批支持 Action / 动作、Tactics / 战棋类、RPG、Puzzle / 解谜、Visual Novel / 视觉小说。
- 将 Tactics / 战棋类作为重点分支，覆盖格子规则、单位矩阵、技能规格、地形规则、任务目标、战术 AI 和战棋试玩检查。

v0.9 目标：

- 完成 Economy, Progression & Telemetry Pack / 经济、成长与数据包。
- 支持资源产出/消耗、奖励结构、成长线、关卡/任务奖励、试玩数据埋点和调优报告。
- 只做可验证的设计与分析闭环，不做商业化后台或真实用户数据平台。

v0.10 目标：

- 完成 Procedural Content Pack / 程序化内容设计包。
- 支持基于稳定规则的地图、遭遇、掉落、任务变体和内容质量检查。
- 程序化内容必须有 seed/evidence record、人工 review gate 和可回退方案。

v1.0 目标：

- 形成可安装、可复用、可扩展的 AI tool-agnostic game workflow pack。
- 支持 Godot 与 Unreal 的项目阶段检测、任务拆分、QA、发布检查。
- 可接入 Codex、Claude Code、Kiro CLI、opencode 等 AI coding tools，常见创意生成/编辑 AI tools，以及 Godot/Unreal MCP 或官方编辑器自动化能力。

v1.1+ 目标：

- 进入 LiveOps / 上线后运营与迭代能力。
- 支持 patch plan、hotfix flow、玩家反馈 triage、更新路线、社区反馈和运营风险记录。
- 不在首个可试玩 demo 或 v1.0 前置范围中实现。

## 5. 非目标

本项目不做：

- 游戏引擎。
- 游戏资产生成平台。
- 一键生成完整游戏工具。
- 替代策划、制作人、创意总监的自主代理。
- 强绑定某一个商业 AI 平台。
- 第一阶段支持 Unity。

## 6. 核心原则

1. 人类决定游戏方向，AI tools 辅助结构化、拆解、验证、实现和内容制作。
2. 先写引擎无关机制规格和执行计划，review 通过后再进入 Godot 或 Unreal 实现。
3. 所有机制必须包含输入、状态、参数、反馈、边界情况和测试方式。
4. 所有可调数值必须数据驱动，不散落在热路径代码里。
5. 每次实现后必须有最小可试玩验证。
6. 每轮试玩反馈必须转成问题、原因假设、改动方案和优先级。
7. AI 生成或辅助制作的资产必须有 brief、来源、授权、版本和人工 review 记录。
8. AI 可以提方案，但不能替代人工试玩、审美判断和发行判断。
9. 一个 workflow core，两套 user-facing surfaces：中文文档服务中文游戏行业用户，英文文档服务英文游戏制作用户。

## 7. 制作阶段与制作职能

Muse Game Workshop 对外使用游戏行业语言，而不是独立定义一套难以理解的 agent 头衔。AI 工具只是在制作职能下提供辅助能力。

但这不意味着完全照搬传统大型工作室流程。Muse 应该保留 AI workflow 的特色：workflow skills、tool adapters、review gates、evidence records、asset provenance、dry runs 和自动检查。对外说“制作阶段、制作职能、产物、质量门”；对内保留“skill、adapter、check、provenance、evidence”等可执行机制。

命名规则详见 `production-language-guide.zh.md` / `production-language-guide.en.md`，双语用户策略详见 `bilingual-audience-strategy.zh.md` / `bilingual-audience-strategy.en.md`。

### 7.1 游戏制作阶段

| 阶段 | 目标 | 主要产出 |
|---|---|---|
| Concept / 概念 | 判断方向是否值得继续 | pitch、玩家幻想、参考作品、风险假设 |
| Pre-production / 预制作 | 把方向变成可执行规格 | core loop、机制规格、内容矩阵、引擎选择 |
| Prototype / 原型验证 | 低成本验证核心乐趣 | 原型范围、测试场景、可砍列表 |
| Vertical Slice / 垂直切片 | 证明完整体验链路成立 | 切片任务、验收标准、试玩检查点 |
| Production / 正式制作 | 按 review 通过的计划实现 | 玩法、内容、资产接入、测试命令 |
| Playtest & Iteration / 试玩与迭代 | 用证据推动下一轮调整 | 试玩报告、问题分类、改动假设 |
| Polish & QA / 打磨与测试 | 消除发布阻塞问题 | bug 清单、回归验证、性能和体验 polish |
| Release / 发布 | 准备对外 demo 或正式发布 | 构建、商店素材、版本记录、AI 使用披露 |
| Postmortem / 复盘 | 把经验反馈到流程 | 复盘、模板更新、下一阶段风险 |

### 7.2 制作职能映射

| 制作职能 | 典型职责 | 可调用 workflow skills |
|---|---|---|
| Producer / 制作人 | 控范围、里程碑、风险和 review gate | `game-intake`、`vertical-slice-planner`、`postmortem` |
| Game Designer / 游戏策划 | 定义玩家体验、规则、机制和内容节奏 | `core-loop`、`mechanic-spec`、`content-matrix` |
| Technical Designer / 技术策划 | 把设计转成状态机、参数、数据结构和测试点 | `mechanic-spec`、`implementation-bridge`、`engine-portability` |
| Gameplay Programmer / 玩法程序 | 在 review 通过后实现输入、状态、交互、反馈和验证 | `implementation-bridge`、`godot-workflow`、`unreal-workflow` |
| Engine Specialist / 引擎专项 | 处理 Godot/Unreal 场景、资源、蓝图、构建约束 | `godot-workflow`、`unreal-workflow`、`engine-portability` |
| Art Director / 美术指导 | 定义视觉方向、风格一致性和资产审查标准 | `art-direction`、`asset-review` |
| Concept Artist / 概念美术 | 角色、怪物、武器、道具、UI 概念探索 | `asset-brief`、`asset-review` |
| Environment Artist / 场景美术 | blockout、场景氛围、灯光、地形和场景资产 | `level-blockout`、`asset-brief` |
| Animator / 动作设计 | 移动、攻击、受击、交互动作节奏 | `animation-brief`、`asset-review` |
| Technical Artist / 技术美术 | 材质、shader、VFX、导入规格和性能预算 | `asset-integration`、`asset-review` |
| Composer / 作曲 | 主题、战斗、探索、菜单和过场音乐 | `music-brief`、`asset-review` |
| Sound Designer / 音效设计 | UI、脚步、攻击、命中、环境和反馈音效 | `sfx-brief`、`asset-review` |
| Audio Implementer / 音频集成 | 音频事件、混音、触发规则和引擎接入 | `asset-integration`、`release-checklist` |
| QA / 测试 | 设计测试、复现问题、回归验证 | `playtest-report`、`release-checklist` |
| Release Manager / 发布负责人 | 管理构建、版本、平台清单、商店素材和披露 | `release-checklist`、`postmortem` |

### 7.3 Creative & Publishing Production Coverage

P0 必须纳入当前设计：

- Creative Asset Pipeline：美术、动作、VFX、音乐、音效、UI 资产从 brief、生成、人工审查、落库、引擎接入到验证的完整流程。
- Asset Provenance：所有 AI 生成或 AI 辅助资产必须记录工具、prompt、模型/服务、版本、license、人工修改、授权风险和平台披露状态。
- UX/UI 与 Onboarding：菜单、设置、教程、新手引导、可读性、反馈层级和基础无障碍开关。
- Level Design：blockout、遭遇设计、视线引导、节奏、导航、难度曲线和关卡 review。

P1 纳入 v0.6-v0.8 设计：

- Game Design Deepening：设计支柱、系统策划、战斗策划、关卡遭遇、数值调优和试玩假设。
- Narrative / Worldbuilding / Quest：世界观、剧情动线、角色人物、对白、任务结构、文本风格和叙事一致性。
- Genre Tracks：类型流程分支，首批支持 Action、Tactics / 战棋类、RPG、Puzzle、Visual Novel。
- Platform & Store Readiness：Steam/itch demo、capsule、截图、trailer brief、build branches、手柄支持、崩溃日志和平台披露。
- Localization：文本 key、字体、UI 溢出、翻译工作流、文化风险和本地化回归。
- Accessibility：字幕、色盲/对比度、按键重映射、震动开关、难度辅助、文字大小。

v0.9-v0.10 中期能力：

- Economy / Progression / Telemetry：经济系统、成长线、奖励结构、试玩数据、调优报告和隐私边界。
- Procedural Content：规则稳定后的程序化地图、遭遇、掉落和任务变体。

P2 放入 v1.1+ 或更晚未来规划：

- Community & Marketing：devlog、社区反馈、版本更新节奏。
- Monetization：定价、demo 策略、DLC、付费内容边界。
- LiveOps / Post-launch：补丁、热修、更新路线、玩家反馈 triage。
- Modding / UGC：编辑器、用户内容、审核和版权边界。
- Security / Privacy：在线功能、第三方 SDK、数据采集和安全风险。

## 8. 核心用户旅程

### 8.1 从模糊想法到可验证方向

输入：

- 一句话想法。
- 参考游戏。
- 目标平台。
- 引擎倾向。
- 可投入时间。

AI 工具辅助工作：

- 使用 `game-intake` 追问。
- 生成 pitch、目标玩家、核心玩家动词。
- 生成 3 个必须验证的设计假设。
- 推荐 Godot 或 Unreal。

输出：

- `docs/design/00_pitch.md`
- `docs/design/01_core_loop.md`
- 第一轮风险清单。

### 8.2 从玩法描述到机制规格

输入：

- 玩法描述，例如“完美闪避反击”。

AI 工具辅助工作：

- 使用 `mechanic-spec` 拆状态机、输入、判定窗口、参数、反馈、边界情况。
- 使用 `engine-portability` 生成 Godot/Unreal 映射差异。

输出：

- 引擎无关机制规格。
- Godot 实现任务。
- Unreal 实现任务。

### 8.3 从机制规格到垂直切片

输入：

- 核心循环。
- 机制规格。
- 内容矩阵。

AI 工具辅助工作：

- 使用 `vertical-slice-planner` 限定 7-14 天范围。
- 使用 `godot-workflow` 或 `unreal-workflow` 生成具体实现计划。
- 生成测试地图、试玩检查点和砍功能列表。

输出：

- 垂直切片任务列表。
- 引擎实现计划。
- 试玩验收标准。

### 8.4 从试玩反馈到下一轮迭代

输入：

- 试玩笔记。
- 截图或录像观察。
- bug 和手感问题。
- 数值数据。

AI 工具辅助工作：

- 使用 `playtest-report` 分类反馈。
- 使用 `balance-check` 找出数值和体验问题。
- 生成下一轮低成本改动。

输出：

- 试玩报告。
- 下一轮任务列表。
- 决策日志。

## 9. 功能需求

### 9.1 文档模板

产品最终目标应提供这些模板方向。v0.1 实际 scaffold 以 `v0.1-manifest.zh.md` 的 22 个模板为准：

- Pitch 模板。
- Player fantasy 模板。
- Game pillars 模板。
- Core loop 模板。
- Mechanic spec 模板。
- System design 模板。
- Combat design 模板。
- Content matrix 模板。
- Encounter design 模板。
- Tuning plan 模板。
- Engine mapping 模板。
- Playtest log 模板。
- Balance report 模板。
- Release checklist 模板。
- Decision log 模板。
- Art direction 模板。
- Asset brief 模板。
- Animation brief 模板。
- Music brief 模板。
- SFX brief 模板。
- Asset provenance 模板。
- Asset review 模板。
- UX flow 模板。
- Level blockout 模板。
- World bible 模板。
- Narrative flow 模板。
- Character profile 模板。
- Quest brief 模板。
- Dialogue brief 模板。
- Lore consistency check 模板。
- Tactics ruleset / grid map / unit matrix / ability spec 模板。
- Economy model、progression map、telemetry plan 模板。
- Procedural content rule 模板。
- Localization readiness 模板。
- Accessibility checklist 模板。

### 9.2 Workflow Skills

产品最终目标中的基础 workflow skills 包括：

- `game-intake`
- `core-loop`
- `mechanic-spec`
- `content-matrix`
- `vertical-slice-planner`
- `implementation-bridge`
- `godot-workflow`
- `unreal-workflow`
- `engine-portability`
- `playtest-report`
- `balance-check`
- `release-checklist`
- `postmortem`

P0/P1 扩展方向包括：

- `creative-asset-pipeline`
- `art-direction`
- `asset-brief`
- `animation-brief`
- `music-brief`
- `sfx-brief`
- `asset-review`
- `asset-integration`
- `ai-asset-disclosure`
- `ux-flow`
- `tutorial-design`
- `settings-accessibility`
- `ui-review`
- `level-blockout`
- `encounter-design`
- `level-review`
- `narrative-brief`
- `character-brief`
- `dialogue-pass`
- `quest-design`
- `store-page-brief`
- `trailer-brief`
- `platform-cert-check`
- `localization-readiness`
- `accessibility-check`

### 9.3 Godot 支持

MVP 必须支持：

- GDScript 优先，C# 可选。
- Scene、Script、Resource、Autoload、Signal 的边界建议。
- 输入映射。
- HUD/UI 场景拆分。
- 测试场景和最小复现。
- headless export 与脚本检查建议。
- GdUnit4 或 GUT 测试建议。

### 9.4 Unreal 支持

MVP 必须支持：

- Blueprint 与 C++ 分工建议。
- Actor、Component、Pawn、Controller、GameMode、Subsystem 边界建议。
- Enhanced Input 映射。
- Data Asset 与 Data Table 设计。
- UMG、Animation Blueprint、Montage、Niagara、Sound Cue 需求拆分。
- PIE 测试地图。
- Automation Test Framework 和 Functional Testing 建议。
- 打包、cook、性能预算检查。

### 9.5 QA 与发布

MVP 必须支持：

- 人工试玩记录。
- 自动化测试建议。
- 构建检查。
- 性能检查。
- 存档检查。
- 输入设备检查。
- AI 使用披露记录。
- itch/Steam demo 发布检查。

### 9.6 Creative Asset Pipeline

P0 必须支持：

- Art direction 和 art bible 摘要。
- 美术、动作、VFX、音乐、音效、UI 的资产 brief。
- AI 生成工具、prompt、模型/服务和版本记录。
- 人工审查、授权风险和平台披露状态。
- 资产格式、尺寸、命名、压缩、导入路径和性能预算。
- Godot/Unreal 引擎内验证检查点。

### 9.7 UX、关卡、叙事、本地化与无障碍

P0/P1 必须支持：

- 菜单、设置、教程、新手引导和 UI review。
- 关卡 blockout、遭遇设计、导航、视线引导和难度曲线。
- 世界观、角色、对白、任务结构和文本风格。
- 文本 key、字体、UI 溢出、翻译工作流和文化风险。
- 字幕、对比度、按键重映射、震动开关、难度辅助和文字大小。

### 9.8 策划、叙事、类型分支与中期系统

v0.6-v0.10 必须按依赖顺序推进：

- v0.6 Game Design Deepening：设计支柱、系统策划、战斗策划、关卡遭遇、数值调优、试玩假设。
- v0.7 Narrative Design：世界观、剧情动线、角色人物、任务、对白、环境叙事、设定一致性。
- v0.8 Genre Tracks：首批类型分支覆盖 Action、Tactics / 战棋类、RPG、Puzzle、Visual Novel；Tactics 是重点分支。
- v0.9 Economy / Progression / Telemetry：经济系统、成长线、奖励结构和试玩数据分析。
- v0.10 Procedural Content：规则稳定后再做可控随机、内容变体和质量检查。

### 9.9 Future Planning

P2 暂不进入首批实现，但需要在 roadmap 保留：

- Community & Marketing。
- Monetization。
- LiveOps / Post-launch，进入 v1.1+。
- Modding / UGC。
- Security / Privacy。

## 10. 成功指标

短期指标：

- 30 分钟内把模糊想法转成 pitch 和 core loop。
- 1 天内产出第一个机制规格。
- 7-14 天内完成一个可试玩垂直切片。
- 每个机制都有 Godot/Unreal 映射。
- 每轮试玩后都有结构化复盘。

长期指标：

- 新项目启动成本降低。
- AI 生成代码返工率降低。
- 设计文档与实现任务同步。
- Godot/Unreal 项目都能复用同一套策划规格。
- 开发者能清楚解释 AI 生成的代码和引擎结构。

## 11. 风险

主要风险：

- 工作流过重，solo 开发者不愿使用。
- Skill 太泛，无法真正指导 Godot/Unreal 实现。
- 过早引入 Unreal 重型管线，拖慢原型验证。
- MCP/编辑器自动化不稳定。
- AI 资产和代码带来版权、披露、质量风险。

缓解策略：

- 第一版只保留高频核心 skills。
- 所有模板保持短、明确、可执行。
- 默认先写 engine-neutral spec。
- Godot 优先用于系统验证，Unreal 用于表现验证。
- 每次 AI 输出都要求人工试玩、测试或审查证据。

## 12. 参考项目和工具

- Claude Code Game Studios：https://github.com/Donchitos/Claude-Code-Game-Studios
- GodotPrompter：https://github.com/jame581/GodotPrompter
- funplay MCP：https://gamebooom.ai/en
- Godot command line docs：https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html
- GdUnit4：https://github.com/godot-gdunit-labs/gdUnit4
- Unreal Editor Scripting：https://dev.epicgames.com/documentation/en-us/unreal-engine/scripting-and-automating-the-unreal-editor
- Unreal Automation Test Framework：https://dev.epicgames.com/documentation/unreal-engine/automation-test-framework-in-unreal-engine
- mcp-unreal：https://github.com/remiphilippe/mcp-unreal
