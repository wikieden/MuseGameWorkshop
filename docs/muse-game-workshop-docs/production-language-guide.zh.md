# Muse Game Workshop 制作语言与命名规范

版本：v0.1

语言：中文

## 1. 目标

Muse Game Workshop 的对外语言必须让游戏行业用户一眼看懂，同时保留 AI workflow 的新能力。

核心原则：

> 对外用游戏行业熟悉的制作语言，对内保留 AI-native 的 workflow primitives。

不要把产品包装成一堆行业用户不熟悉的 agent 角色；也不要为了贴近传统制片流程，把 AI 辅助开发的新优势全部藏起来。

同时，Muse Game Workshop 面向中文和英文两类用户。中文文档要优先使用中国游戏行业叫法；英文文档要优先使用自然的英文游戏制作语言。两者共享同一套 workflow core，但 user-facing surface 必须按受众本地化。

## 2. 命名原则

### 2.0 Terms Must Have A Chinese Game Industry Mapping

所有核心英文术语都必须在术语表中给出中国游戏行业能理解的中文对应。优先查 `terminology-glossary.zh.md` / `terminology-glossary.en.md`。

中文面向文档中新英文术语第一次出现时，必须给出中文行业叫法。英文面向文档保持自然英文表达，不需要在正文里强行插入中文解释，除非内容正在讨论术语、本地化或中国市场语境。

推荐格式：

```text
Vertical Slice / 垂直切片
Level Blockout / 关卡灰盒
Asset Provenance / 资产来源与授权记录
Review Gate / 评审节点
```

如果术语表没有对应项，先补术语表，再写入其他文档。

### 2.1 Surface Language: Game Industry First

面向用户、README、PRD、官网、教程和推广材料时，优先使用游戏行业常见说法：

- 制作阶段：Concept / 概念阶段、Pre-production / 预制作、Prototype / 原型验证、Vertical Slice / 垂直切片、Production / 正式制作、Playtest / 试玩测试、Polish / 打磨、QA / 测试、Release / 发布、Postmortem / 项目复盘。
- 制作职能：Producer / 制作人、Game Designer / 游戏策划、Technical Designer / 技术策划、Art Director / 美术总监、Concept Artist / 原画、Environment Artist / 场景美术、Animator / 动作设计、Technical Artist / 技术美术、Gameplay Programmer / 玩法程序、QA / 测试、Release Manager / 发布负责人。
- 制作产物：Pitch / 项目提案、Core Loop / 核心循环、GDD Slice / 设计案切片、Mechanic Spec / 机制规格、Content Matrix / 内容矩阵、Level Blockout / 关卡灰盒、Asset Brief / 资产需求说明、Playtest Report / 试玩报告、Release Checklist / 发布检查表。
- 质量门：Greenlight / 立项放行、Review / 评审、Milestone Review / 里程碑评审、Content Lock / 内容锁定、Release Readiness / 发布准备。

用户应该先看到“这是一个帮我做游戏的制作流程”，而不是“这是一个复杂 agent 系统”。

### 2.2 Internal Language: AI Workflow Native

内部实现和技术文档可以保留 AI workflow 的专用概念：

- workflow skill。
- tool adapter。
- review gate。
- evidence record。
- dry run。
- asset provenance。
- prompt/tool record。
- AI usage disclosure。
- automation hook。
- doctor/check command。

这些词不是问题。问题是不要把它们当成对外主叙事。

### 2.3 Hybrid Naming

推荐采用“双层命名”：

```text
行业名称 / AI workflow capability
```

例子：

- Art Direction / `art-direction`
- Mechanic Spec / `mechanic-spec`
- Level Blockout / `level-blockout`
- Playtest Report / `playtest-report`
- Asset Provenance / `asset-provenance`
- Release Readiness / `release-checklist`

文档标题可以用行业名；目录、文件和 skill slug 可以用稳定的英文 kebab-case。

## 3. 不要过度拘泥传统流程

Muse Game Workshop 参考传统游戏制作阶段，但不应该完全复制大型工作室流程。

传统流程里可能需要：

- 完整 GDD。
- 大量跨部门审批。
- 长周期 pre-production。
- alpha、beta、gold master 等正式 milestone。
- 专职 producer、QA、release、localization 团队。

独立开发和 AI-assisted workflow 不一定需要这些重量。我们要保留的是制作判断和质量门，不是组织负担。

因此，Muse 的流程应该允许：

- 小团队用 7-14 天跑一个 playable slice。
- 先做最小可验证产出，而不是完整设计大文档。
- 用 AI 快速生成候选方案，但必须经过人工 review。
- 用 dry run 验证 workflow，而不是一开始就写游戏代码。
- 用 evidence record 替代冗长会议纪要。
- 用 asset provenance gate 管理 AI 资产，而不是禁止使用 AI 资产。

## 4. 推荐叫法

### 4.1 阶段

| 推荐叫法 | 中文解释 | 说明 |
|---|---|---|
| Concept | 概念阶段 | 判断方向、玩家幻想和核心风险。 |
| Pre-production | 预制作 | 形成核心循环、机制规格、技术/美术方向。 |
| Prototype | 原型验证 | 低成本验证核心乐趣。 |
| Vertical Slice | 垂直切片 | 验证接近最终体验的一小段完整链路。 |
| Production | 正式制作 | 扩展内容、系统、资产和关卡。 |
| Playtest & Iteration | 试玩与迭代 | 用反馈和证据推动下一轮改动。 |
| Polish & QA | 打磨与测试 | 修体验、稳定性、性能和可访问性。 |
| Release Readiness | 发布准备 | 检查构建、商店、平台、素材、披露和风险。 |
| Postmortem | 复盘 | 沉淀经验和模板改进。 |

不建议把流程硬拆成大型商业项目的 alpha/beta/gold，除非项目真的进入对应规模。

### 4.2 职能

| 推荐叫法 | 避免叫法 | 说明 |
|---|---|---|
| Producer / 制作人 | Project Agent | 管范围、风险、里程碑和 review gate。 |
| Game Designer / 游戏策划 | Design Agent | 管玩家体验、核心循环、机制和内容。 |
| Technical Designer / 技术策划 | Spec Agent | 把设计转成参数、状态机、数据结构和测试点。 |
| Art Director / 美术指导 | Art Agent | 管视觉方向和风格一致性。 |
| Concept Artist / 概念美术 | Image Agent | 负责概念探索，不等同于 AI 图像生成器。 |
| Animator / 动作设计 | Motion Agent | 管动作节奏、反馈和可读性。 |
| Technical Artist / 技术美术 | Asset Import Agent | 管材质、VFX、导入规格和性能预算。 |
| Composer / 作曲 | Music Agent | 管音乐主题、loop、情绪和结构。 |
| Sound Designer / 音效设计 | SFX Agent | 管反馈音效、环境声和混音意图。 |
| Gameplay Programmer / 玩法程序 | Coding Agent | 实现已 review 的玩法计划。 |
| QA / 测试 | Test Agent | 管测试、复现、回归和质量风险。 |
| Release Manager / 发布负责人 | Publish Agent | 管构建、版本、平台和披露。 |

内部可以用 agent/subagent 做执行，但对外不要把它们当成主要角色名。

### 4.3 产物

| 推荐产物 | AI workflow 补充 |
|---|---|
| Pitch | prompt/source 记录。 |
| Core Loop | 假设、验证方式和下一步最小产出。 |
| Mechanic Spec | 参数、边界情况、测试方式和 engine mapping。 |
| Level Blockout | 截图、导航、视线和 encounter evidence。 |
| Asset Brief | 工具输入、参考、禁用方向和验收标准。 |
| Asset Review | provenance、license、人工修改和是否可进入引擎。 |
| Playtest Report | 反馈、假设、改动优先级和下一轮任务。 |
| Release Checklist | AI usage disclosure、platform risk、known issues。 |

## 5. Skill 命名规则

Skill slug 用英文 kebab-case，保持短、可组合、可安装。

推荐：

- `game-intake`
- `core-loop`
- `mechanic-spec`
- `vertical-slice-planner`
- `creative-asset-pipeline`
- `art-direction`
- `asset-brief`
- `asset-review`
- `level-blockout`
- `playtest-report`
- `release-checklist`

避免：

- `super-game-designer-agent`
- `ultimate-art-agent`
- `auto-make-game`
- `one-click-release`
- `boss-fight-ai-brain`

Skill 是工作流能力，不是虚拟员工，也不是营销称号。

## 6. AI-Native 特性必须保留

虽然对外使用行业语言，但 Muse 不能退回纯传统流程。以下 AI-native 特性必须保留：

- Tool-agnostic adapters：Codex、Claude Code、Kiro CLI、opencode 等工具都能使用同一套 workflow。
- Review-first execution：实现前必须有设计摘要和执行计划。
- Evidence-first memory：关键结果必须落盘，不能只留在聊天里。
- Asset provenance：AI 生成资产必须记录工具、prompt、来源、license、人工修改和使用范围。
- Workflow dry run：可以先验证流程链条，不必先写游戏代码。
- Human creative control：AI 可以建议、生成和整理，但不能替代创意、审美、玩法和发布判断。

## 7. 写作指南

写 Muse 文档时：

- 第一层讲游戏制作：阶段、职能、产物、质量门。
- 第二层讲 AI 辅助：skills、adapters、evidence、provenance、checks。
- 先说人类要做什么判断，再说 AI 如何辅助。
- 先说可试玩产出，再说自动化。
- 避免把 AI 描述成“自主制作团队”。
- 避免把传统流程描述成唯一正确路径。

一句话判断标准：

> 游戏行业用户能看懂，AI coding tool 能执行，小团队不会被流程压垮。
