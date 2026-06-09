# Muse Game Workshop Vision

版本：v0.1

语言：中文

## 1. Vision Statement

Muse Game Workshop 的愿景，是把 AI 从“能写代码、能生成素材的工具”，提升为独立游戏开发者和小团队可以信任的 **AI 辅助游戏制作操作系统**。

它不是游戏引擎，不是一键生成游戏工具，也不是某个 AI coding tool 的插件。它是一套用游戏行业能理解的语言组织起来的制作工作流：从概念、预制作、原型验证、垂直切片、正式制作、试玩迭代、QA、打磨到发布，把策划、工程、美术、动作、场景、音乐、音效、UX、QA 和发行协作，沉淀成可复用的 workflow skills、模板、评审节点和证据记录。

一句话：

> Muse Game Workshop 是面向独立游戏的 AI tool-agnostic 制作操作系统，让 AI 参与游戏开发时仍然可计划、可审查、可追踪、可发布。

## 2. North Star

Muse Game Workshop 的北极星不是“生成更多内容”，而是：

> 帮助一个独立游戏想法，在清晰的制作判断、可审查的交付物和可追踪的证据记录下，稳定推进到可试玩、可迭代、可发布的版本。

所有 roadmap 和版本计划都应该回到这个判断：

- 这一步是否让游戏方向更清楚？
- 这一步是否产生了最小可验证产出？
- 这一步是否减少了 AI 参与带来的混乱，而不是增加新工具噪声？
- 这一步是否让后续制作人、策划、美术、程序、音频、QA 或发行能继续接手？
- 这一步是否有 review gate 和 evidence，而不是只留在聊天记录里？

## 3. Why It Exists

AI 已经能快速生成原型代码、概念图、音效方向、关卡想法、测试脚本和发布文案。真正的问题不再只是“能不能生成”，而是：

- 生成的内容是否服务于同一个游戏方向。
- 玩法是否真的更好玩，而不是内容更多。
- 美术、动作、场景、音乐、音效和 UI 是否能进入同一条 production pipeline。
- AI 生成或 AI 辅助资产的工具、prompt、模型/服务版本、授权、人工修改和使用范围是否可追踪。
- Codex、Claude Code、Kiro CLI、opencode 等不同 AI coding tools 是否能在同一套项目规则下工作。
- 创意 AI tools 产生的素材是否能被制作人、美术、技术美术、程序、音频和 QA 共同判断。
- 每次结构性改动是否先经过设计和计划，而不是直接进入不可控的 vibe coding。

独立游戏最稀缺的不是更多生成内容，而是稳定的制作判断、可执行的迭代节奏和不会丢失的项目记忆。Muse Game Workshop 要解决的是这个断层。

## 4. Target Users

第一阶段优先服务：

- Solo 独立游戏开发者。
- 2-5 人小型游戏团队。
- 想用 AI coding tools 做 Godot 或 Unreal 项目的创意开发者。
- 需要把图像、音频、视频、3D、动作、UI、本地化等 creative AI tools 纳入资产流程的团队。
- 中文独立游戏开发者和中文游戏行业从业者。
- English-speaking indie developers and small teams。

这些用户不一定需要重型制片系统，但需要一套轻量、明确、能落盘、能 review 的制作秩序。

## 5. Product Thesis

当 AI 进入游戏制作，小团队需要的不是更多彼此孤立的 agent，而是一套用游戏行业语言组织起来的工作系统。

这套系统必须持续帮助团队回答三个问题：

1. 我们到底在做什么游戏？
2. 下一步最小可验证产出是什么？
3. 每一次 AI 参与的设计、代码、资产、测试和发布决策，是否有依据、可追踪、能被人类批准？

当这三个问题能被稳定回答，AI 才会从“临时帮手”变成真正的制作增幅器。

## 6. What It Should Feel Like

对 solo 开发者来说，它应该像一个轻量但可靠的制作搭档：帮助把模糊灵感变成可试玩目标，把试玩反馈变成下一轮任务，把 AI 生成内容变成可检查的生产资产。

对小团队来说，它应该像一个共享制作语言：制作人、策划、美术、程序、音频、QA 和发行可以围绕同一组文档、workflow skills、模板、检查清单和证据记录协作，而不是各自把上下文丢在不同聊天记录里。

对 AI coding tools 来说，它应该提供清晰的项目规则：先读取文档，先输出设计摘要和执行计划，等待 review 通过后再动手；所有实现都必须回到玩法目标、引擎约束、资产来源和测试证据。

对 creative AI tools 来说，它应该提供可落地的资产工作流：先有 art direction 和 asset brief，再生成和筛选，再记录来源和授权，再做人工 review，最后才进入 Godot/Unreal 的导入和验证流程。

## 7. Core Principles

### 7.1 Industry Language, AI-Native Workflow

对外定义必须使用游戏行业能理解的语言：概念阶段、预制作、原型验证、垂直切片、正式制作、试玩测试、打磨、QA、发布、复盘，以及制作人、游戏策划、技术策划、美术总监、动画师、技术美术、玩法程序、音频设计、QA、发布负责人等制作职能。

内部可以有 workflow skills、tool adapters、review gates、evidence records、asset provenance 和 dry runs，但不要把产品包装成一堆陌生 agent 角色。推广时，行业用户应该先看到他们熟悉的制作流程；落地时，AI workflow 的特色也必须保留。

Muse 的语言策略是“双层命名”：文档标题、用户旅程和制作责任使用行业叫法；目录、skill slug、adapter 和测试检查使用稳定的 AI workflow 叫法。这样既能让游戏行业用户理解，也能让 Codex、Claude Code、Kiro CLI、opencode 等 AI coding tools 稳定执行。

### 7.2 Human Creative Control

AI 可以提出建议、拆分任务、写代码、整理反馈、生成资产方向和提出检查项，但不能替代人类的创意判断。

关键决策必须有 review gate：

- 游戏方向。
- 核心循环。
- 机制规格。
- 美术方向。
- 资产是否进入项目。
- 试玩后是否改方向。
- 是否进入发布准备。

### 7.3 Smallest Verifiable Output

每一轮工作都应该收敛到最小可验证产出，而不是扩散成更多文档、更多内容或更多工具接入。

典型产出包括：

- 一句话 pitch。
- 核心循环。
- 一个机制规格。
- 一个可试玩 prototype。
- 一个 asset brief。
- 一个 level blockout。
- 一份 playtest report。
- 一个 release checklist。

### 7.4 Tool-Agnostic By Design

Muse Game Workshop 不绑定单一 AI coding tool。Codex、Claude Code、Kiro CLI、opencode 和其他 coding agents 都应该能读取同一套项目规则、文档模板和 workflow skills。

它也不绑定单一 creative AI tool。图像、音频、视频、3D、动作、材质、UI、本地化和语音工具都可以进入流程，但必须通过 brief、来源记录、人工 review、授权检查和引擎验证。

### 7.5 Evidence Over Chat Memory

游戏制作不能依赖聊天记录里的上下文记忆。关键内容必须落盘：

- 设计决策。
- 机制参数。
- 资产来源。
- prompt 和工具记录。
- 授权状态。
- playtest feedback。
- QA 结果。
- 发布风险。

项目记忆应该存在于 repo 文档和可审查记录里。

### 7.6 Engine-Aware, Engine-Neutral

Godot 和 Unreal 是首要目标引擎，但早期策划和机制规格必须尽量保持 engine-neutral。

工作流应该先定义玩法意图，再映射到具体引擎：

- Godot：scene、node、signal、resource、input map、animation、test scene。
- Unreal：Actor、Component、Blueprint、C++、Data Asset、UMG、Animation Blueprint、test map。

不要过早让引擎实现细节吞掉玩法设计。

### 7.7 Bilingual By Design

Muse Game Workshop 面向中文和英文两类用户群体。中文文档不是英文文档的附属翻译，英文文档也不是中文文档的直译。

核心原则：

- 中文面向文档优先使用中国游戏行业能理解的叫法。
- 英文面向文档优先使用自然英文游戏制作术语。
- 结构、决策点、版本状态和验收标准要保持一致。
- 术语差异进入 terminology glossary，而不是在主文案里反复解释。

## 8. Production Model

Muse Game Workshop 使用游戏制作阶段组织 workflow：

1. Concept / 概念阶段：创意、玩家幻想、目标体验。
2. Pre-production / 预制作：核心循环、机制规格、技术风险、艺术方向。
3. Prototype / 原型验证：最小可玩验证。
4. Vertical Slice / 垂直切片：一个接近最终质量的小切片。
5. Production / 正式制作：内容、资产、关卡、系统扩展。
6. Playtest & Iteration / 试玩测试与迭代：反馈、假设、调参、取舍。
7. Polish & QA / 打磨与测试：手感、表现、稳定性、性能、可访问性。
8. Release / 发布：商店、平台、构建、发布素材、风险检查。
9. Postmortem / 项目复盘：经验沉淀、下一项目复用。

每个阶段都应该有：

- 输入。
- 输出。
- 负责人或制作职能。
- 适用 workflow skills。
- review gate。
- 完成标准。

## 9. Version Horizon

Vision 必须指导版本取舍。当前版本地平线如下：

| Version | 中文定位 | 主要问题 | 成功信号 |
|---|---|---|---|
| v0.0 | Documentation Foundation / 文档基础 | 这套理念是否能被读懂、复用、审查？ | Vision、PRD、架构、roadmap、manifest 和测试策略成对存在。 |
| v0.1 | Workflow Pack MVP / 工作流技能包 MVP | 多种 AI coding tools 是否能按同一套规则工作？ | 14 个 P0 skills、22 个模板、5 个 checks 和 Boss Rush 无代码 dry run 通过。 |
| v0.2 | Godot Playable Loop / Godot 可玩闭环 | 从机制规格到 Godot prototype 是否能跑通？ | Boss Rush Godot 示例可玩，有参数、测试和试玩报告。 |
| v0.3 | Creative Production Ready / 创意资产生产就绪 | AI 辅助资产是否能从 brief 进入 engine validation？ | 至少视觉和音频资产各完成一次 brief、provenance、review、engine validation。 |
| v0.4 | Unreal Mapping Slice / Unreal 映射切片 | 同一机制是否能映射到 3D 动作表现？ | Unreal PIE test map 可玩，Data Asset、UMG、动画占位和检查入口存在。 |
| v0.5 | Publishing Readiness / 发布准备 | Demo 是否能判断公开试玩条件？ | release checklist、store/trailer brief、localization、accessibility、AI disclosure 完整。 |
| v0.6 | Game Design Deepening Pack / 策划流程细化包 | 核心玩法、系统、战斗、关卡、数值和试玩假设是否能形成可交接规格？ | system design、combat design、encounter design、tuning plan 和 playtest hypothesis 能交给程序、QA 和创意职能。 |
| v0.7 | Narrative Design Pack / 叙事设计包 | 世界观、剧情动线、角色、任务和对白是否能服务玩法与关卡？ | world bible、narrative flow、character profile、quest brief、dialogue brief 和 lore consistency check 可审查。 |
| v0.8 | Genre Tracks / 类型流程分支 | 通用流程是否能适配不同类型游戏？ | 首批支持 Action / 动作、Roguelike / 肉鸽、RPG、Puzzle / 解谜、Visual Novel / 视觉小说、Tactics / 战棋类、Adventure / AVG 冒险；Tactics 作为重点验证分支。 |
| v0.9 | Economy, Progression & Telemetry / 经济、成长与数据 | 奖励、成长、资源循环和试玩数据是否能闭环调优？ | economy model、progression map、reward table、telemetry plan 和 playtest analytics report 成立。 |
| v0.10 | Procedural Content Pack / 程序化内容设计包 | 稳定规则能否生成可控内容变体？ | procedural rules、content validation、seed/evidence record 和人工 review gate 完整。 |
| v1.0 | Reusable Production Pack / 可复用制作包 | 其他项目是否能拿来启动？ | 新项目能快速完成 intake、core loop、mechanic spec，并推进到可试玩切片。 |
| v1.1+ | LiveOps & Post-launch / 上线后运营与迭代 | 已发布项目如何持续更新和响应玩家反馈？ | patch plan、hotfix flow、feedback triage、update roadmap 和运营风险记录可用。 |

## 10. P0 / P1 / P2 Scope

### P0: Current Design Must Cover

- Creative Asset Pipeline：美术、动作、VFX、音乐、音效、UI 资产从 brief 到引擎验证。
- Asset Provenance：AI 工具、prompt、参考、授权、人工 review、使用范围。
- UX/UI & Onboarding：菜单、HUD、设置、新手引导、反馈层级、基础可访问性。
- Level Design：blockout、encounter、节奏、导航、视线引导和关卡 review。

### P1: Near-Term Design

- Game Design Deepening：设计支柱、系统策划、战斗策划、关卡遭遇、数值调优和试玩假设。
- Narrative & Worldbuilding：世界观、剧情动线、角色、任务、对白和文本一致性。
- Genre Tracks：类型流程分支，首批包含 Action / 动作、Roguelike / 肉鸽、RPG、Puzzle / 解谜、Visual Novel / 视觉小说、Tactics / 战棋类和 Adventure / AVG 冒险。
- Economy / Progression / Telemetry：经济系统、成长线和试玩数据分析，进入 v0.9。
- Platform & Store Readiness：商店页、trailer brief、截图、平台差异、基础认证检查。
- Localization：文本外置、术语表、翻译风险、字体和布局。
- Bilingual Audience Strategy：中文和英文用户入口、术语风格、模板元数据和双语测试。
- Accessibility：输入、字幕、色彩、难度辅助和可读性。

### P2: Future Planning

- Community & Marketing。
- Monetization。
- LiveOps & Post-launch。
- Modding / UGC。
- Procedural Content advanced tooling。
- Security & Privacy。

P2 不应拖慢首个可试玩 demo。Analytics / Telemetry、经济系统和成长系统的基础能力从 v0.9 开始；复杂商业化、LiveOps、UGC 和安全隐私能力保留到 v1.1+ 或更晚。

## 11. Non-Negotiables

- 先做设计摘要与执行计划，review 通过后再动手。
- v0.1 实际创建范围以 `v0.1-manifest.zh.md` / `.en.md` 为唯一真源。
- 不提前写 Godot/Unreal 游戏代码。
- 不绕过资产 brief、provenance、license 和人工 review。
- 不把中文用户和英文用户当成同一份文案的机器翻译版本。
- 不用新奇 agent 叫法替代游戏行业已经理解的制作职能。
- 不让 P2 运营、商业化或社区功能拖慢 workflow pack 和可试玩闭环。

## 12. What This Is Not

Muse Game Workshop 不是：

- 游戏引擎。
- 一键生成游戏工具。
- 单一 AI coding tool 的插件。
- 重型制片管理系统。
- 49 个 agent 起步的组织模拟。
- 替代制作人、策划、美术、程序、音频、QA 或发行判断的自动化系统。

它应该保持轻量、可执行、能落盘、能 review。

## 13. Long-Term Success

如果 Muse Game Workshop 成功，一个独立团队应该能够：

- 从模糊点子进入可试玩 prototype，而不是停留在聊天灵感里。
- 用游戏行业熟悉的语言让 AI coding tools 和 creative AI tools 协作。
- 把美术、动作、场景、音乐、音效等 AI 辅助资产纳入可审查 production pipeline。
- 在 Godot 和 Unreal 之间复用策划、机制、QA 和发布工作流。
- 让中文用户读到中国游戏界自然的制作文档，让英文用户读到自然英文的 production docs。
- 让每一轮 AI 辅助改动都有计划、有 review、有证据、有复盘。
- 更快判断一个游戏是否值得继续做。

最终，Muse Game Workshop 的价值不是让团队少思考，而是让团队在更短周期里做出更好的制作判断，并留下足够清楚的制作记忆。
