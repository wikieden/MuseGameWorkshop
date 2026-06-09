# MVP 路线图

版本：v0.1

语言：中文

## 1. Roadmap Purpose

本路线图定义 Muse Game Workshop 从文档包走向可复用 workflow pack、Godot 可玩闭环、创意资产生产闭环、Unreal 映射切片和发布准备的版本顺序。

它不是功能愿望清单，而是取舍工具。每个版本都必须回答：

- 本版本解决哪个制作问题？
- 允许创建哪些交付物？
- 不允许提前做什么？
- 用什么 dry run、检查或引擎验证证明它完成？
- 下一个版本依赖什么证据继续推进？

v0.1 实际创建范围必须以 `v0.1-manifest.zh.md` / `.en.md` 为唯一真源。roadmap 可以描述更大目标，但不能越过 manifest 提前 scaffold。

## 2. MVP Definition

Muse Game Workshop 的 MVP 不是完整平台，也不是完整游戏。MVP 是一条被验证过的制作链路：

> 从一个游戏想法开始，经过 intake、core loop、mechanic spec、engine mapping、asset brief、UX/level planning、playtest report 和 release readiness，最终能稳定推进到 Godot 可玩闭环，并为 Unreal 映射和发布准备留下可复用证据。

MVP 成功定义：

- 文档能指导新项目启动。
- Workflow skills 能指导 Codex、Claude Code、Kiro CLI、opencode 等 AI coding tools 按制作阶段工作。
- 模板能记录策划、机制、引擎映射、资产来源、试玩和发布风险。
- 制作阶段和制作职能映射能被游戏行业用户理解。
- P0 creative asset pipeline 能记录 brief、review、provenance 和 engine integration。
- P1 发布、本地化、无障碍和平台 readiness 有明确设计入口。
- 一个 Godot 示例能跑通完整闭环。
- 一个 Unreal 示例能验证同一机制的 3D 表现映射。

## 3. Current State

当前状态：

- `README.md` 已作为项目入口。
- `AGENTS.md` 已按 v0.1 规则落地。
- 文档包已有中英文版本。
- `p0-skill-skeleton-plan.zh.md` / `.en.md` 的 review gate 已为 `Approved`。
- `.agents/skills/`、`templates/`、`tools/checks/` 和 Boss Rush dry-run evidence 已按 v0.1 manifest 创建。
- Godot Boss Rush Prototype 已在 `examples/godot-boss-rush/` 创建并通过 v0.2 检查。
- v0.3 prototype visual/audio assets、provenance、asset review 和 engine validation evidence 已落地。
- Unreal 游戏代码尚未创建。

v0.4 review gate 已 Approved，Unreal static mapping scaffold 已落地。下一步不是扩展完整 3D 游戏，而是在 Unreal Editor 可用后生成 PIE test map、Data Asset、UMG 和动画占位，并补 editor validation evidence。

## 4. Roadmap Layers

Muse Game Workshop 使用三层 roadmap：

| 层级 | 用途 | 主要文档 |
|---|---|---|
| Vision layer / 愿景层 | 说明为什么做、服务谁、长期不妥协什么 | `vision.zh.md` / `.en.md` |
| Product layer / 产品层 | 定义用户、范围、需求和成功指标 | `prd.zh.md` / `.en.md` |
| Delivery layer / 落地层 | 定义版本、交付物、验收和禁止范围 | `delivery-plan.zh.md` / `.en.md`、`v0.1-manifest.zh.md` / `.en.md`、本 roadmap |

当三层冲突时：

1. v0.1 实际文件创建以 `v0.1-manifest.*.md` 为准。
2. 版本顺序以 `delivery-plan.*.md` 和本 roadmap 为准。
3. 长期取舍以 `vision.*.md` 为准。

## 5. Version Map

| Version | 中文定位 | 目标交付物 | 主要验证 | 明确不做 |
|---|---|---|---|---|
| v0.0 | 文档基础 | Vision、PRD、架构、workflow、skill spec、manifest、testing、roadmap | 文档链接和中英文配对 | skills/templates/checks 实作 |
| v0.1 | Workflow Pack MVP / 工作流技能包 MVP | `AGENTS.md`、14 skills、22 templates、5 checks、Boss Rush 无代码 dry run | 静态检查 + dry run evidence | Godot/Unreal 游戏代码、商业 API、P2 |
| v0.2 | Godot 可玩闭环 | Godot Boss Rush Prototype | 本地启动、核心机制试玩、测试/检查、playtest report | Unreal 示例、发布自动化 |
| v0.3 | 创意资产生产就绪 | P0 creative pipeline、资产 brief/review/provenance、UX/level gate | 已完成：视觉和音频 prototype assets 各跑通一次 engine validation | 大规模资产生产、商业 API 深度接入 |
| v0.4 | Unreal 映射切片 | Unreal Third-person Combat Slice | 进行中：静态 C++/配置骨架已通过检查，PIE/editor validation 待 Unreal Editor | 完整 3D 游戏 |
| v0.5 | 发布准备 | release checklist、store/trailer brief、localization、accessibility、AI disclosure | demo release readiness report | 自动发布、账号系统、LiveOps |
| v0.6 | 策划流程细化 | game design deepening pack、system/combat/encounter/tuning specs | Boss Rush + Tactics 设计 dry run | 引擎新功能、复杂经济系统 |
| v0.7 | 叙事设计包 | world bible、narrative flow、character/quest/dialogue briefs | lore consistency check + narrative handoff review | 大规模剧情内容量产 |
| v0.8 | 类型流程分支 | Action、Tactics、RPG、Puzzle、Visual Novel tracks | Tactics / 战棋类 track dry run | 覆盖所有游戏类型 |
| v0.9 | 经济、成长与数据 | economy model、progression map、telemetry plan、playtest analytics | 数据字段和调优报告能回到设计决策 | 商业化后台、真实用户数据平台 |
| v0.10 | 程序化内容 | procedural rules、seed/evidence record、content validation | 生成内容可复现、可 review、可回退 | 无限内容生成、无人工审核 |
| v1.0 | 可复用制作包 | 稳定 docs、skills、templates、examples、checks | 新项目可快速 intake、spec、prototype | 重型平台化 |
| v1.1+ | 上线后运营与迭代 | patch plan、hotfix flow、feedback triage、update roadmap | 已发布项目能持续更新且风险可追踪 | 拖慢 v1.0 前的 demo 制作 |

## 6. v0.0: Documentation Foundation

目标：

- 建立 Muse Game Workshop 的愿景、产品定义、技术架构、制作语言、双语策略和测试策略。
- 明确 P0/P1/P2 边界。
- 明确 full target 和 v0.1 subset 的区别。
- 让后续 AI coding tools 知道必须先做设计摘要与执行计划，review 通过后再动手。

完成标准：

- 核心文档中英文成对存在。
- 根 README 能解释项目定位、工具策略、文档阅读顺序和当前状态。
- `AGENTS.md` 已存在且不允许提前写游戏代码。
- `p0-skill-skeleton-plan.*.md` 明确 14 个 P0 skills 的 skeleton 计划和禁止范围。

## 7. v0.1: Workflow Pack MVP

v0.1 的目标不是做游戏，而是把 Muse Game Workshop 变成可以被多种 AI coding tools 使用的 workflow pack。

### 7.1 v0.1a: Review Gate Baseline

允许产物：

- `v0.1-execution-plan.*.md` review gate。
- `p0-skill-skeleton-plan.*.md` review gate。
- README、AGENTS、CLAUDE 和文档索引中的状态对齐。

完成标准：

- 两个 review gate 对 v0.1 是否可以 materialize 有明确结论。
- 所有文档都声明 v0.1 以 manifest 为唯一真源。
- 禁止范围清楚：不创建游戏代码，不创建 manifest 外目录，不创建 examples。

### 7.2 v0.1b: P0 Skill Skeletons

允许产物：

- `.agents/skills/` 下 14 个 P0 workflow skills。
- 每个 skill 只有 `SKILL.md` skeleton。
- 每个 `SKILL.md` 包含 Use When、Do Not Use When、Inputs、Outputs、Workflow、Quality Bar、Common Failure Modes、Next Skills。

14 个 P0 skills：

- `game-intake`
- `core-loop`
- `mechanic-spec`
- `vertical-slice-planner`
- `engine-portability`
- `godot-workflow`
- `unreal-workflow`
- `playtest-report`
- `creative-asset-pipeline`
- `art-direction`
- `asset-brief`
- `asset-review`
- `ux-flow`
- `level-blockout`

完成标准：

- 每个 skill 都能被 AI coding tools 作为稳定流程读取。
- 每个 skill 都能对应游戏行业制作阶段或制作职能。
- 没有使用游戏行业看不懂的新奇角色名替代制作职能。

### 7.3 v0.1c: Templates And Checks

允许产物：

- `v0.1-manifest.*.md` 列出的 22 个模板。
- `v0.1-manifest.*.md` 列出的 5 个检查入口。
- 模板 metadata block。

完成标准：

- 模板覆盖 design、production、creative、UX、publishing 的第一批制作记忆。
- 检查入口能输出 `PASS <name>` 或 `FAIL <name>: <reason>`。
- 检查能阻止 Godot/Unreal 游戏代码提前进入 v0.1。

### 7.4 v0.1d: Boss Rush No-Code Dry Run

样板游戏：

> Boss Rush / 《反击试炼》：玩家通过闪避、反击和耐力管理击败一个阶段变化明显的 boss。

允许产物：

- manifest 规定的 3 个 dry-run evidence 文件。
- intake、core loop、mechanic spec、vertical slice plan、engine mapping、creative asset plan、UX/level plan、playtest planning 的合并证据。

完成标准：

- 不写 Godot/Unreal 游戏代码。
- 能证明 workflow skills 和模板可以从一个游戏想法推进到可实现计划。
- dry run 记录失败点、review 决策和下一步。

### 7.5 v0.1 Release Bar

v0.1 只有同时满足以下条件才算完成：

- 14 个 P0 skill skeleton 存在。
- 22 个模板存在。
- 5 个检查入口存在并通过。
- Boss Rush 无代码 dry run evidence 存在。
- README、AGENTS、CLAUDE、manifest、testing strategy 和 roadmap 状态一致。
- 未出现 Godot/Unreal 游戏代码。

## 8. v0.2: Godot Playable Loop

目标：

- 完成 Godot Boss Rush Prototype。
- 从 pitch、core loop、mechanic spec 到 Godot test scene 跑通。
- 引入 Godot 基础测试方式。
- 输出第一份 playtest report。

交付形态：

- Godot project。
- test scene。
- data-driven mechanic parameters。
- manual playtest script。
- minimal automated or scripted checks。
- playtest report。

发布标准：

- 可以本地启动。
- 可以重复游玩核心机制。
- 闪避/反击/耐力至少能形成 10 次以上可观察互动。
- 有可调参数。
- 有最小自动检查和人工试玩脚本。

## 9. v0.3: Creative Production Ready

目标：

- 完成 P0 creative asset pipeline。
- 落美术、动作、音乐、音效、asset provenance 和 asset review 模板。
- 建立 asset gate：没有 brief/provenance/review 的资产不得进入示例。
- 补 UX/onboarding/level blockout 检查。

交付形态：

- art direction。
- asset brief。
- animation / music / sfx brief。
- asset provenance record。
- asset review。
- engine import validation。
- AI usage disclosure 草案。

发布标准：

- placeholder、prototype、reviewed、release-candidate、rejected 状态可区分。
- 至少一个美术资产和一个音频资产完成从 brief 到 engine validation。
- 有资产来源、授权和 AI 使用披露记录。
- 资产服务玩法反馈，而不是只追求观感。

## 10. v0.4: Unreal Mapping Slice

状态：进行中。v0.4 review gate 已 Approved，静态骨架已落地；PIE/editor validation 需要 Unreal Editor。

目标：

- 完成 Unreal Third-person Combat Slice。
- 同一机制从 engine-neutral spec 映射到 Unreal。
- 验证 Blueprint、C++、Data Asset、UMG 和 Animation 的最小协作方式。

交付形态：

- Unreal project。
- PIE test map。
- Character / test enemy。
- dodge / counter mechanic mapping。
- Data Asset tuning。
- placeholder Animation Montage。
- debug UMG。
- Unreal check script or manual validation。

发布标准：

- 能在 PIE test map 中试玩。
- 能验证 Data Asset 参数。
- Blueprint/C++ 分工清楚。
- 同一机制能从 Godot/GDD 规格映射到 Unreal 表现。

## 11. v0.5: Publishing Readiness

目标：

- 补齐 P1 发布、本地化、无障碍、store readiness。
- 建立 demo release checklist。
- 完成 AI usage disclosure 和 platform checklist。

交付形态：

- store page brief。
- trailer brief。
- screenshot checklist。
- localization readiness。
- accessibility checklist。
- platform checklist。
- AI usage disclosure。
- demo package readiness report。

发布标准：

- 能判断 demo 是否具备公开试玩条件。
- 能列出发布前必须修复的问题。
- 能说明 AI 辅助内容的使用方式和披露状态。
- 能输出一份对外 demo 包准备报告。

## 12. v0.6: Game Design Deepening Pack

目标：

- 把策划流程从 pitch/core loop/mechanic spec 扩展到可交接的系统、战斗、关卡遭遇、数值调优和试玩假设。
- 明确 Game Designer / 游戏策划、Technical Designer / 技术策划、Combat Designer / 战斗策划、Level Designer / 关卡策划和 QA 之间的交付关系。
- 用 Boss Rush 和 Tactics / 战棋类作为验证案例，确认同一套策划流程能服务不同玩法结构。

交付形态：

- game pillars。
- system design brief。
- combat design brief。
- encounter design brief。
- tuning plan。
- playtest hypothesis。
- design review gate。

发布标准：

- 机制、系统、关卡、数值和试玩假设能交给程序、QA、美术和音频继续执行。
- 可调参数不会散落在实现里。
- 试玩反馈能回到明确的设计假设。
- Tactics / 战棋类至少完成一轮规则、格子、单位、技能和任务目标 dry run。

## 13. v0.7: Narrative Design Pack

目标：

- 把世界观、剧情动线、角色人物、任务、对白和环境叙事纳入正式 workflow。
- 让叙事产物能服务玩法、关卡、美术、音频和本地化，而不是停留在灵感文本。
- 记录 AI 参与叙事设计时的来源、正史状态、参考边界和文化/平台风险。

交付形态：

- world bible。
- narrative flow。
- character profile。
- faction design。
- quest brief。
- dialogue brief。
- environmental storytelling brief。
- lore consistency check。

发布标准：

- 主要设定有 canon status。
- 关键角色有动机、冲突、玩法角色和语言风格。
- 任务与关卡目标能互相解释。
- 对白、文本和环境叙事有本地化与剧透风险标记。

## 14. v0.8: Genre Tracks

目标：

- 在通用主流程之上建立类型流程分支。
- 首批支持 Action / 动作、Tactics / 战棋类、RPG、Puzzle / 解谜、Visual Novel / 视觉小说。
- 将 Tactics / 战棋类作为重点类型分支，优先验证规则、地图、单位、技能、任务和 AI 的交付链。

Tactics / 战棋类交付形态：

- tactics ruleset。
- grid map spec。
- unit matrix。
- ability spec。
- terrain rules。
- mission brief。
- encounter table。
- tactical AI brief。
- tactics balance report。
- tactics playtest checklist。

发布标准：

- 类型分支能复用 review gate、handoff、evidence 和 provenance。
- 类型分支能说明哪些策划重点、测试方式和资产需求不同。
- Tactics / 战棋类能从规则和任务 brief 推进到地图/单位/技能验证计划。

## 15. v0.9: Economy, Progression & Telemetry

目标：

- 在有可试玩循环和内容矩阵后补经济系统、成长线和数据埋点。
- 支持资源产出/消耗、奖励、成长、关卡/任务收益和试玩数据分析。
- 让数值调整有证据来源，而不是只靠主观感觉。

交付形态：

- economy model。
- resource flow table。
- progression map。
- reward table。
- telemetry event plan。
- playtest analytics report。
- tuning decision log。

发布标准：

- 每个关键数据点都能对应设计问题。
- 数据采集有隐私和平台边界。
- 调参报告能说明观察、假设、改动和下一轮验证。

## 16. v0.10: Procedural Content Pack

目标：

- 在机制、关卡规则和内容矩阵稳定后，再设计程序化内容。
- 支持地图、遭遇、掉落、任务变体等可控随机。
- 避免“无限生成”掩盖不可玩的规则。

交付形态：

- procedural content rules。
- seed/evidence record。
- content validation checklist。
- rejection rules。
- human review gate。
- rollback plan。

发布标准：

- 生成内容可复现。
- 生成结果能被人类 review。
- 难度、奖励、叙事和资产约束不会被随机性破坏。

## 17. v1.0: Reusable Production Pack

目标：

- workflow pack 可被其他 Godot/Unreal 项目复用。
- README、docs、skills、templates、examples、checks 完整稳定。
- 至少一个 Godot 示例和一个 Unreal 映射示例通过验收。

发布标准：

- 新项目可以在 30 分钟内完成 intake 和 core loop。
- 1 天内完成第一个 mechanic spec。
- 7 天内能推进到可试玩小切片。
- AI 辅助资产、代码、测试和发布决策都有证据记录。
- 中文和英文入口都自然、清楚、可执行。

## 18. v1.1+: LiveOps & Post-launch

目标：

- 支持上线后运营、补丁、热修、更新计划和玩家反馈 triage。
- 将 community、marketing、monetization、UGC、security/privacy 纳入发布后能力，而不是拖慢早期 demo。

交付形态：

- patch plan。
- hotfix flow。
- update roadmap。
- feedback triage。
- known issues policy。
- community risk record。

进入条件：

- v1.0 reusable production pack 已稳定。
- 至少一个 demo 或小版本进入公开试玩/发布阶段。
- telemetry、release readiness 和 feedback triage 已有基础证据。

## 19. Future Planning: P2

P2 暂不进入首批实现，只保留研究和路线方向：

- Community & Marketing：devlog、社区反馈、版本更新节奏。
- Monetization：定价、demo 策略、DLC、付费内容边界。
- LiveOps / Post-launch：补丁、热修、更新路线、玩家反馈 triage，进入 v1.1+。
- Modding / UGC：编辑器、用户内容、审核和版权边界。
- Security / Privacy：在线功能、第三方 SDK、数据采集和安全风险。

进入条件：

- v0.6-v0.10 的设计、叙事、类型、经济/成长/数据和程序化内容路线已经证明必要。
- 项目确实进入发布、增长、运营或玩家社区阶段。
- 有明确隐私、合规和维护责任。

## 14. Milestones

| Milestone | 中文名称 | 对应版本 | 完成信号 |
|---|---|---|---|
| M0 | 文档可用 | v0.0 | 文档包能指导 repo 和 workflow pack。 |
| M1 | Workflow Pack 可用 | v0.1 | skills、templates、checks、dry run evidence 完成。 |
| M2 | Godot 闭环 | v0.2 | Boss Rush Godot prototype 可试玩。 |
| M3 | Creative Production Ready | v0.3 | 资产 brief/provenance/review/engine validation 跑通。 |
| M4 | Unreal 映射 | v0.4 | 同一机制能映射到 Unreal 3D 动作切片。 |
| M5 | Publishing Readiness Ready | v0.5 | demo release readiness 可判断。 |
| M6 | 策划流程细化 | v0.6 | 系统、战斗、遭遇、调优和试玩假设可交接。 |
| M7 | 叙事设计就绪 | v0.7 | 世界观、角色、任务、对白和设定一致性可 review。 |
| M8 | 类型流程分支 | v0.8 | Tactics / 战棋类等首批类型分支完成 dry run。 |
| M9 | 经济成长数据闭环 | v0.9 | 经济、成长和 telemetry 能回到调优决策。 |
| M10 | 程序化内容就绪 | v0.10 | 生成内容可复现、可 review、可回退。 |
| M11 | Reusable Production Pack | v1.0 | 其他项目可以复用完整工作流。 |
| M12 | LiveOps Ready | v1.1+ | 已发布项目能持续更新并处理玩家反馈。 |

## 15. Recommended First Project Initialization Prompt

新建项目后，在选定的 AI coding tool 中输入第一条项目初始化 prompt：

```text
我们要创建 Muse Game Workshop。目标语言：中文；目标用户群体：中国独立游戏开发者和小型游戏团队；地区语境：zh-CN。请先读取 README、overall project plan、Vision、PRD、technical architecture、workflow、skill spec、production language guide、bilingual audience strategy、terminology glossary、handoff contracts、templates、delivery plan、v0.1 execution plan、P0 skill skeleton plan、v0.1 manifest、testing strategy 和 roadmap。先输出 repo 骨架、AGENTS.md、workflow skills 目录、模板文件和测试检查的设计摘要与执行计划，等待 review 通过后再动手。先不要实现游戏代码。
```

## 16. Risk Control

风险：

- 过早写示例游戏，忽略 workflow pack。
- 过早接 MCP 或商业工具 API，导致范围膨胀。
- Unreal 示例太重，拖慢 MVP。
- Workflow skills 写得像大段提示词，不像稳定流程。
- 对外文档使用 AI agent 术语过多，游戏行业用户看不懂。
- 把中英文用户当成同一套文案的翻译版本，导致中文不行业、英文不自然。
- 创意资产 pipeline 变成“生成很多图/音乐”，但缺少 brief、review 和授权记录。
- 过早做 P2 的运营/商业化，拖慢可试玩 demo。

控制：

- 先 docs，再 skills，再 templates/checks，再 dry run，再 examples。
- v0.1 以 manifest 为唯一真源。
- Godot 示例从 v0.2 开始。
- Unreal 示例只做一个小型 test map。
- MCP 和商业工具 API 放到 workflow 稳定之后。
- P0/P1 先做文档、模板和 review gate，不急着接入具体商业工具 API。
- P2 只有在 demo 和发布准备真实需要时再启动。
