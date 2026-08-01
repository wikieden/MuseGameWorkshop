# GodotIQ 调研报告

调研日期：2026-06-10

语言：中文

对象：GodotIQ

结论等级：P1，Godot 项目理解层第一参考。

## 1. 结论

GodotIQ 对 Muse 的价值不是“更多编辑器命令”，而是 project understanding / 项目理解层。它强调 spatial intelligence / 空间理解、dependency graph / 依赖图、signal map / 信号图、flow tracing / 流程追踪、project memory / 项目记忆、日志和截图。这正好补齐 Godot AI / Godot-MCP 偏执行工具面的缺口。

对 Muse 最重要的启发是：

- AI 进入引擎后，最难的不是创建节点，而是理解当前项目为什么这样组织。
- Scene tree / 场景树只是一层；还需要信号流、资源引用、脚本依赖、输入流、UI 状态和空间关系。
- 项目理解层应该先读、解释、定位风险，再进入编辑。
- Muse 未来 adapter 不应只有 execution tools，还应有 context tools / 上下文工具。

## 2. 项目定位

GodotIQ 是面向 Godot 的 AI 辅助工具，公开资料强调项目上下文、空间理解、信号关系、依赖分析和运行调试。它更像：

- Project intelligence layer / 项目智能层。
- Godot context provider / Godot 上下文提供器。
- Signal and dependency map / 信号与依赖图。
- Debug and screenshot evidence layer / 调试与截图证据层。

它不是 Muse 的 workflow core，也不是单纯 MCP 命令工具。它展示了 Muse 后续“AI 如何理解已有游戏项目”的方向。

## 3. 项目理解层拆解

GodotIQ 的设计启发可以拆成 5 类：

### 3.1 结构理解

- 场景树。
- 节点层级。
- Autoload。
- Resource 引用。
- Script 附加关系。

### 3.2 行为理解

- Signal 连接。
- 输入事件。
- 脚本调用流。
- 状态转换。
- UI 交互流。

### 3.3 空间理解

- 节点在 2D / 3D 空间中的位置。
- Camera、collision、navigation 和 interactable 的关系。
- 场景中对象的可见性和交互范围。

### 3.4 调试理解

- 运行日志。
- 错误和 warning。
- 截图。
- 运行状态。
- 可能的复现路径。

### 3.5 项目记忆

- 历史决策。
- 常见结构。
- 命名模式。
- 复用组件。
- 已知风险。

## 4. 对 Muse 的可借鉴设计

### 4.1 Context before action

Muse 的 Godot adapter 后续应分成两类工具：

| 类型 | 目标 |
|---|---|
| Context tools / 上下文工具 | 读取项目、场景、信号、依赖、日志、截图。 |
| Action tools / 操作工具 | 创建、修改、运行、导入、连接、编译。 |

所有高风险 Action tools 之前都应先运行相关 Context tools。

### 4.2 影响范围分析

GodotIQ 的依赖图思路可以转成 Muse 的 impact analysis / 影响范围分析：

- 改一个 script 会影响哪些 scene？
- 改一个 signal 会影响哪些 UI / gameplay 节点？
- 改一个 Resource 会影响哪些敌人、关卡或技能？
- 删除一个 node 会破坏哪些引用？

这对 AI coding 特别重要，因为 AI 往往容易只看当前文件。

### 4.3 Playtest evidence 增强

GodotIQ 的截图和运行上下文启发 Muse 在 playtest report 里加入：

- Screenshot / 截图。
- Scene path / 场景路径。
- Runtime node snapshot / 运行时节点快照。
- Input sequence / 输入序列。
- Error log / 错误日志。
- Impacted systems / 影响系统。

## 5. 风险与限制

| 风险 | 说明 | Muse 对策 |
|---|---|---|
| 商业/产品形态变化 | GodotIQ 可能是商业工具或服务，能力和访问方式会变化。 | 只吸收设计理念，不绑定实现。 |
| 资料不如 GitHub 项目透明 | 部分能力来自官网描述，源码细节有限。 | 实现前必须补源码/安装验证。 |
| 理解层不等于执行层 | 它帮助 AI 理解项目，但不一定覆盖全部编辑能力。 | 与 Godot AI / Godot-MCP 互补。 |
| 项目记忆风险 | 记忆可能过期或误导。 | 每次执行前用当前项目状态校验。 |

## 6. 后续深挖问题

1. GodotIQ 如何表示 signal map？
2. dependency graph 是否能映射到具体文件和节点？
3. spatial intelligence 如何处理 2D 与 3D？
4. project memory 是否本地存储，是否可导出？
5. 它能否输出适合 Muse evidence record 的 JSON 或 Markdown？
6. 它与 Godot AI 的工具面是否可以互补？

## 7. Muse 借鉴结论

GodotIQ 应作为 Muse Godot 项目理解层的重点参考。它提醒我们：AI editor automation 如果没有项目理解，很容易变成“能改但不懂为什么”的工具。

建议后续产物：

- Godot project context schema。
- Scene / signal / dependency evidence template。
- Impact analysis checklist。
- Context-before-action safety rule。
- Playtest evidence enhancement。

## 8. 资料来源

- GodotIQ tools: https://godotiq.com/tools/
- GodotIQ: https://godotiq.com/
- Godot CLI official docs: https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html
