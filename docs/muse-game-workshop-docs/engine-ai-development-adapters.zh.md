# 引擎 AI 开发适配层研究与设计

调研日期：2026-06-10

语言：中文

状态：研究与设计输入，不是最终实现规范。

## 1. 文档定位

本文件定义 Muse Game Workshop 如何研究和吸收 Godot / Unreal 方向的 AI editor control、MCP、技能包和官方自动化能力。它不是某个工具的接入计划，也不是要求项目马上集成 MCP。它的目标是建立一个统一判断框架，帮助后续决定哪些外部项目值得深挖、哪些设计可以进入 Muse 的 Engine AI Development Adapter / 引擎 AI 开发适配层。

Muse 的基本边界不变：

- Muse 不是游戏引擎。
- Muse 不是一键生成游戏工具。
- Muse 先保留 Design Spec / 策划规格、Review Gate / 评审门和 Evidence / 验证证据，再让 AI 工具进入 Godot 或 Unreal。
- Godot / Unreal 自动化能力属于 Tool Adapter Layer / 工具适配层，不替代 Workflow Core / 工作流核心。

## 2. 研究对象

本轮优先研究 7 个项目：

| 优先级 | 项目 | Muse 借鉴定位 |
|---|---|---|
| P0 | Godot AI | Godot live editor control / 实时编辑器控制的第一参考。 |
| P0 | UE-MCP | Unreal 全面编辑器自动化和 Blueprint / C++ / Data Asset 工具面的第一参考。 |
| P0 | GodotPrompter | Godot 专项 workflow skill / 工作流技能包组织方式的第一参考。 |
| P0 | GenOrca Unreal MCP | Unreal Python-first / Python 优先轻量适配路线参考。 |
| P1 | GodotIQ | 项目理解层、空间理解、信号流、依赖图和影响分析参考。 |
| P1 | Ziva | in-editor product experience / 编辑器内产品体验与自验证闭环参考。 |
| P1 | ee0pdt/Godot-MCP | 基础 Godot MCP 命令面、Node / Script / Scene / Project 分类参考。 |

官方基础能力作为底座参考：

- Godot CLI、GdUnit4 / GUT。
- Unreal Editor Scripting、Python Editor Script Plugin、Automation Test Framework。

## 3. 总体判断

最值得 Muse 借鉴的不是“谁能生成更多代码”，而是以下 8 个能力：

1. Live editor state / 实时编辑器状态：AI 能看到当前打开场景、选中节点、运行状态、日志和报错。
2. Scene tree / Actor graph / 场景树与 Actor 图：AI 不只读文件，还能理解引擎中的实际对象关系。
3. Text + binary boundary / 文本与二进制边界：代码、配置和规格可文本化；`.uasset`、`.umap` 等二进制资产必须通过编辑器 API 或人工确认。
4. Test and debug loop / 测试与调试闭环：运行、读日志、看截图、复现、修正、再运行。
5. Tool surface design / 工具面设计：工具数量、参数 schema、批处理、回滚、错误结构会直接影响 AI 可靠性。
6. Project understanding / 项目理解：依赖图、信号图、调用链、资源引用和空间布局比单次编辑更重要。
7. Role split / 职责拆分：策划规格、技术策划实现映射、玩法程序实现、QA 验证不能混在一个“万能 agent”里。
8. Evidence contract / 证据合同：每次自动化结果都要留下日志、截图、测试结果、变更范围和人工 review 结论。

## 4. Muse 适配层设计原则

### 4.1 先设计，再控制编辑器

AI editor control 只能执行已经过 review 的任务包。任务包至少需要：

- Design intent / 设计意图。
- Mechanic spec / 机制规格。
- Engine mapping / 引擎映射。
- Files and assets affected / 影响文件和资产。
- Validation plan / 验证计划。
- Rollback plan / 回退计划。

如果没有这些输入，AI 只能做调研、读取、诊断或计划，不应直接创建场景、蓝图、节点、资源或资产。

### 4.2 统一适配合同

每个引擎适配器都应该输出同一类 evidence：

| Evidence | Godot 例子 | Unreal 例子 |
|---|---|---|
| Project context | project.godot、autoload、scene tree | `.uproject`、plugins、level outliner |
| Runtime state | running scene tree、debug console | PIE state、Output Log |
| Code validation | GDScript parse、C# build、GdUnit4/GUT | C++ build、Blueprint compile、Automation Test |
| Visual validation | editor/game screenshot | viewport/PIE screenshot |
| Asset validation | import status、resource references | asset registry、Data Asset、UMG compile |
| Review record | human approval / rejection | human approval / rejection |

### 4.3 Godot 适配重点

Godot 方向应该重点支持：

- Scene / 场景。
- Node / 节点。
- Script / 脚本，包含 GDScript 和 C#。
- Resource / 资源。
- Signal / 信号。
- Input Map / 输入映射。
- Autoload / 自动加载单例。
- Test scene / 测试场景。
- Godot CLI、GdUnit4 / GUT 验证。
- Editor screenshot / 编辑器截图与 game screenshot / 游戏截图。

### 4.4 Unreal 适配重点

Unreal 方向应该重点支持：

- Actor / Component / Pawn / Controller / GameMode / Subsystem。
- Blueprint / 蓝图。
- C++ gameplay module / C++ 玩法模块。
- Data Asset / 数据资产。
- Data Table / 数据表。
- UMG / UI。
- Animation Blueprint / Montage。
- PIE test map / PIE 测试地图。
- Automation Test / Functional Test。
- Editor Utility、Python automation、官方 Editor Scripting。

### 4.5 不绑定单一工具

Godot AI、UE-MCP、GodotPrompter、GenOrca Unreal MCP、GodotIQ、Ziva、Godot-MCP 都只能作为 adapter candidate / 适配候选或参考样本。Muse 文档不应写成“必须安装某个工具才能使用”。正确方式是：

1. 定义 Muse 的任务包和证据合同。
2. 定义 Godot / Unreal 的通用适配能力。
3. 让具体工具声明自己支持哪些能力。
4. 对每个工具建立 risk / license / maturity / validation 记录。

## 5. 借鉴矩阵

| 维度 | Godot AI | UE-MCP | GodotPrompter | GenOrca Unreal MCP | GodotIQ | Ziva | ee0pdt/Godot-MCP |
|---|---|---|---|---|---|---|---|
| Live editor control | 强 | 强 | 无 | 强 | 强 | 强 | 中 |
| 技能/流程组织 | 中 | 中 | 强 | 中 | 中 | 中 | 弱 |
| 项目理解层 | 中 | 中 | 中 | 中 | 强 | 中 | 弱 |
| 测试/调试闭环 | 强 | 强 | 中 | 中 | 强 | 强 | 弱到中 |
| Godot GDScript | 强 | 不适用 | 强 | 不适用 | 中 | 强 | 中 |
| Godot C# | 中 | 不适用 | 强 | 不适用 | 弱到中 | 中 | 弱 |
| Unreal Blueprint | 不适用 | 强 | 不适用 | 强 | 不适用 | 不适用 | 不适用 |
| Unreal C++ | 不适用 | 强 | 不适用 | 中 | 不适用 | 不适用 | 不适用 |
| 商业/许可风险 | 低 | 高 | 低 | 中低 | 中 | 高 | 低 |
| Muse 借鉴价值 | 高 | 高 | 高 | 高 | 高 | 中高 | 中 |

说明：该矩阵是 2026-06-10 的资料快照。项目版本、许可证和能力变化很快，后续若进入实现评审，必须重新验证。

## 6. 版本落点建议

这些报告不应改变当前“策划和系统朝前、美术和深度工具适配靠后”的原则。建议版本落点：

- 近期：只作为 research notes / 调研记录和 adapter design input / 适配层设计输入。
- 中期：在 Godot / Unreal 基础流程稳定后，新增 `engine-ai-development-adapter` skill 或 adapter spec。
- 后期：如果要实际接入 MCP，先选一个 Godot 方向工具和一个 Unreal 方向工具做 dry run，不直接作为默认依赖。

## 7. Godot 对接决策

Godot 方向采用三层策略：

| 顺序 | 工具 | Muse 定位 | 近期动作 |
|---|---|---|---|
| 1 | Godot AI | 第一对接对象，用于 Godot live editor control / 实时编辑器控制。 | 设计 `Godot AI Adapter Dry Run`，验证 scene tree、节点操作、signal、GDScript/C#、运行、日志和截图证据。 |
| 2 | GodotIQ | 第二层预留能力，用于 project understanding / 项目理解层。 | 研究 context tools / 上下文工具，重点看依赖图、信号流、空间理解、影响范围和 playtest evidence 增强。 |
| 3 | GodotPrompter | 内部 Godot workflow skill / 工作流技能设计参考，不作为运行时对接工具。 | 吸收其 skill 组织、GDScript/C# parity、Godot version awareness 和 validator 思路。 |

该决策只确定 Godot 方向的优先研究和后续 dry-run 顺序，不表示 Muse 必须依赖这些工具。对接原则如下：

- Godot AI 承担 execution adapter / 执行适配层验证，但必须先经过 review gate。
- GodotIQ 作为 context adapter / 上下文适配层候选，不应替代 Godot AI 的编辑器执行能力。
- GodotPrompter 作为 workflow skill design reference / 工作流技能设计参考，用来增强 Muse 自己的 Godot 技能包。
- Ziva 暂时只作为产品体验和初学者闭环参考。
- ee0pdt/Godot-MCP 暂时只作为 Level 1 baseline / 基础命令面备选。

Godot AI Adapter Dry Run 的最小验证目标应包括：

1. 读取项目和当前 scene tree / 场景树。
2. 在测试场景中创建或修改一个节点。
3. 创建或修改一个 GDScript 或 C# 脚本。
4. 连接一个 signal / 信号。
5. 运行测试场景并返回 log / 日志。
6. 捕获截图或可验证的运行证据。
7. 生成 human review / 人工评审记录和 rollback / 回退说明。

## 8. 后续独立报告

本总纲对应以下独立报告：

- [Godot AI 调研报告](research/godot-ai-research.zh.md)
- [UE-MCP 调研报告](research/ue-mcp-research.zh.md)
- [GodotPrompter 调研报告](research/godotprompter-research.zh.md)
- [GenOrca Unreal MCP 调研报告](research/genorca-unreal-mcp-research.zh.md)
- [GodotIQ 调研报告](research/godotiq-research.zh.md)
- [Ziva 调研报告](research/ziva-research.zh.md)
- [ee0pdt/Godot-MCP 调研报告](research/ee0pdt-godot-mcp-research.zh.md)
- [引擎 AI 工具用户反馈扫描](research/engine-ai-user-feedback-scan.zh.md)

## 9. 主要资料来源

- Godot AI: https://github.com/hi-godot/godot-ai
- Godot AI tools: https://github.com/hi-godot/godot-ai/blob/main/docs/TOOLS.md
- UE-MCP: https://github.com/db-lyon/ue-mcp
- UE-MCP architecture: https://github.com/db-lyon/ue-mcp/blob/main/docs/architecture.md
- GodotPrompter: https://github.com/jame581/GodotPrompter
- GenOrca Unreal MCP: https://github.com/GenOrca/unreal-mcp
- GodotIQ tools: https://godotiq.com/tools/
- Ziva: https://ziva.sh/
- ee0pdt/Godot-MCP: https://github.com/ee0pdt/Godot-MCP
- Godot CLI: https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html
- GdUnit4: https://github.com/godot-gdunit-labs/gdUnit4
- Unreal Editor Scripting: https://dev.epicgames.com/documentation/en-us/unreal-engine/scripting-and-automating-the-unreal-editor
- Unreal Python: https://dev.epicgames.com/documentation/unreal-engine/scripting-the-unreal-editor-using-python
- Unreal Automation Test Framework: https://dev.epicgames.com/documentation/unreal-engine/automation-test-framework-in-unreal-engine
