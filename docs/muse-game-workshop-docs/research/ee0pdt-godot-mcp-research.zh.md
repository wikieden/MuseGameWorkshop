# ee0pdt/Godot-MCP 调研报告

调研日期：2026-06-10

语言：中文

对象：ee0pdt/Godot-MCP

结论等级：P1，Godot MCP 基础命令面参考。

## 1. 结论

ee0pdt/Godot-MCP 是 Godot 方向较轻量的 MCP 参考。它的价值不在于复杂项目理解或产品体验，而在于基础命令面清晰：围绕项目、场景、节点、脚本、资源和编辑器命令提供可调用能力。

对 Muse 最有价值的是：

- Godot adapter 的最小能力可以从 Project / Scene / Node / Script / Resource / Editor 这几个类别开始。
- 基础 MCP 命令面适合做最小 dry run，不需要一开始就追求 Godot AI 或 GodotIQ 的完整体验。
- 开源轻量项目适合帮助 Muse 定义 baseline / 基线能力。
- 它可以作为 Godot AI 的下限参考：什么是最小能用，什么是需要进一步增强。

## 2. 项目定位

ee0pdt/Godot-MCP 是一个 Godot MCP server / adapter。公开文档显示它关注：

- Project access / 项目访问。
- Script modification / 脚本修改。
- Scene and node operations / 场景和节点操作。
- Resource handling / 资源处理。
- Editor command / 编辑器命令。
- AI 与 Godot 的双向通信。

它适合作为 Muse 的基础 adapter shape / 基础适配器形态参考。

## 3. 命令面启发

一个最小 Godot MCP adapter 不需要一开始覆盖所有 Godot 功能。可以先定义：

| 类别 | 最小能力 |
|---|---|
| Project | 读取项目路径、Godot 版本、主场景、autoload。 |
| Scene | 打开、保存、创建测试场景。 |
| Node | 创建节点、移动节点、设置属性、删除节点。 |
| Script | 创建、读取、修改、附加脚本。 |
| Resource | 创建或引用 Resource。 |
| Editor | 运行场景、读取日志、返回错误。 |

Muse 可以把这个作为 Godot Adapter Level 1。

## 4. 对 Muse 的可借鉴设计

### 4.1 Baseline capability

Godot-MCP 适合作为 baseline capability / 基线能力：

```text
Level 1: Basic command surface
  Project, Scene, Node, Script, Resource, Editor command

Level 2: Live editor state and evidence
  Logs, screenshots, run scene, signal map

Level 3: Project understanding
  Dependency graph, flow tracing, impact analysis
```

这样 Muse 可以清楚地区分“工具能操作 Godot”和“工具能理解项目”。

### 4.2 命令面不要过早复杂化

轻量 MCP 项目提醒 Muse：最小可用工具面很重要。过早设计 100+ 个操作会让适配器难以验证。建议 Muse 先定义 10-20 个高频命令，再逐步扩展。

### 4.3 与 Godot AI / GodotIQ 的互补

Godot-MCP 可以做执行下限，Godot AI 可以做 live editor control 上限，GodotIQ 可以做项目理解层。Muse 不需要在一个工具里找到所有能力，而是建立 capability matrix / 能力矩阵。

## 5. 风险与限制

| 风险 | 说明 | Muse 对策 |
|---|---|---|
| 能力较基础 | 可能缺少深度项目理解、截图、复杂测试。 | 作为 Level 1，不当成完整方案。 |
| 文档和维护不确定 | 小项目维护节奏可能变化。 | 实现前重新验证仓库状态。 |
| scene 修改风险 | 基础命令若没有 evidence，容易误改。 | 绑定 review gate 和运行验证。 |
| C# 支持可能不足 | 重点可能更偏 GDScript 和场景操作。 | 在 Muse profile 中显式标注语言支持。 |

## 6. 后续深挖问题

1. 它的 command reference 覆盖哪些 Project / Scene / Node / Script 操作？
2. 它是否支持运行场景和读取日志？
3. 它是否能稳定处理 signal connection？
4. 它如何处理脚本 parse errors？
5. 它是否支持 C# 项目？
6. 它与 Godot AI 的工具 schema 哪些可以抽象成 Muse 共用能力？

## 7. Muse 借鉴结论

ee0pdt/Godot-MCP 应作为 Muse Godot 基础 MCP 命令面的参考。它适合帮助 Muse 定义：

- Godot Adapter Level 1 capability。
- Minimum Godot MCP dry-run scope。
- Basic scene/node/script command schema。
- Adapter capability matrix 的下限。

它不是最强方案，但能帮助 Muse 避免一开始就把适配层设计得过重。

## 8. 资料来源

- GitHub: https://github.com/ee0pdt/Godot-MCP
- Command reference: https://github.com/ee0pdt/Godot-MCP/blob/main/docs/command-reference.md
- Godot CLI official docs: https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html
