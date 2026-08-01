# Godot AI 调研报告

调研日期：2026-06-10

语言：中文

对象：Godot AI / `hi-godot/godot-ai`

结论等级：P0，Godot live editor control / 实时编辑器控制第一参考。

## 1. 结论

Godot AI 是本轮 Godot 方向最值得深挖的项目。它的价值不只是“能让 AI 写 Godot 脚本”，而是把 AI coding tools 接到 Godot Editor 的实时上下文中，让 AI 可以读取场景树、节点、脚本、信号、日志、截图和运行状态，再执行受控的编辑器操作。

对 Muse 最重要的启发是：

- Godot 适配器不应只读写 `.gd` 或 `.tscn` 文件，还要能拿到 editor state / 编辑器状态。
- 工具面要以 Godot 开发者熟悉的对象组织：Scene / 场景、Node / 节点、Script / 脚本、Signal / 信号、Resource / 资源、UI、Animation、Material。
- AI 操作结果需要形成 logs、screenshots、test output、changed files 的 evidence / 证据记录。
- 多 AI 客户端支持应该通过 adapter 层完成，不应让 Muse 绑定到某一个 AI coding tool。

## 2. 项目定位

Godot AI 是一个面向 Godot Editor 的 AI 辅助开发集成。公开资料显示，它使用 MCP server 与 Godot Editor plugin 连接，让 Claude Code、Codex、Kiro、OpenCode 等 AI coding tools 与 Godot 编辑器协作。

它的定位接近：

- Godot Editor AI Bridge / Godot 编辑器 AI 桥。
- Godot MCP Adapter / Godot MCP 适配器。
- Live project context provider / 实时项目上下文提供者。
- Editor automation toolkit / 编辑器自动化工具箱。

它不是游戏制作流程本身，也不是策划系统。它更像 Muse 未来 Godot adapter 的候选执行层。

## 3. 架构观察

从公开文档看，Godot AI 的核心结构大致是：

1. AI coding tool 作为 MCP client。
2. Python MCP server 负责工具调用和协议转换。
3. Godot Editor plugin 在 Godot 内部执行编辑器操作。
4. WebSocket 或类似通信层连接 server 与 editor。

这种结构对 Muse 有三个重要意义：

- AI 不直接猜测 Godot 状态，而是通过 editor plugin 获取真实状态。
- 文件修改和编辑器修改可以结合，降低 `.tscn` 手写错误风险。
- 运行、截图、日志和错误可以回传给 AI，形成闭环。

## 4. 工具面设计

Godot AI 的工具分类非常值得借鉴。它不是把每个小动作都暴露成一个独立工具，而是把能力归类到 Godot 开发者理解的工作面：

- Project / 项目读取。
- Scene / 场景管理。
- Node / 节点创建、删除、移动、属性设置。
- Script / 脚本生成、编辑、附加。
- Signal / 信号连接和检查。
- Resource / 资源管理。
- UI / 控件创建。
- Material / 材质。
- Animation / 动画。
- Particles / 粒子。
- Camera / 相机。
- Environment / 环境。
- Test / 运行、日志、截图。

Muse 后续设计 Godot adapter spec 时，应避免把工具命名成“agent 内部动作”，而应该使用 Godot 生产语言。例如：

- `create_node` 比 `ai_generate_object` 更清楚。
- `connect_signal` 比 `wire_behavior` 更符合 Godot 习惯。
- `run_scene_and_capture` 比 `verify_game` 更具体。

## 5. 对 Muse 的可借鉴设计

### 5.1 能力声明

Godot AI 给 Muse 的第一个启发是：adapter 应该声明能力，而不是承诺万能自动开发。

建议 Muse 后续 Godot adapter profile 包含：

- `can_read_project`
- `can_read_scene_tree`
- `can_edit_scene_tree`
- `can_create_script`
- `can_edit_script`
- `can_attach_script`
- `can_connect_signal`
- `can_run_scene`
- `can_capture_screenshot`
- `can_read_logs`
- `can_report_errors`

### 5.2 证据回传

Godot AI 的实时编辑器控制能力说明 Muse 不能只检查文件是否存在。一次 Godot AI 自动化任务的 evidence 应该包括：

- 开始前 scene tree snapshot / 场景树快照。
- 结束后 scene tree snapshot。
- 变更的文件列表。
- Godot console log。
- 运行截图。
- 测试场景或主场景运行结果。
- 人工 review 决定。

### 5.3 GDScript 与 C# 边界

Godot AI 支持多语言上下文，但 Muse 后续必须更明确：

- GDScript 适合作为默认原型脚本语言。
- C# 适合需要强类型、团队已有 .NET 经验、或复用 C# 库的项目。
- 同一机制不应该在 GDScript 和 C# 中重复实现，除非是在做迁移或技术验证。

## 6. 风险与限制

| 风险 | 说明 | Muse 对策 |
|---|---|---|
| 版本漂移 | Godot 插件、MCP server、AI client 都可能快速变化。 | 每个 adapter profile 记录 Godot 版本、插件版本、AI client 版本。 |
| 过度自动化 | AI 可能直接改场景结构而没有策划规格。 | 强制 Design Spec + Review Gate。 |
| 场景文件风险 | `.tscn` 可文本编辑，但手写仍容易破坏引用。 | 优先通过编辑器 API 或插件操作；保留 diff 和运行验证。 |
| 调试证据不足 | 只看成功消息无法证明场景可玩。 | 要求截图、日志、run scene 结果。 |
| 工具绑定 | 工作流可能被 Godot AI 的具体命令 shape 绑定。 | Muse 只吸收能力模型，不复制命令名作为规范。 |

## 7. Muse 后续研究问题

后续如果深入 Godot AI，应重点验证：

1. 它如何表示 scene tree / 场景树快照？
2. 它是否能稳定处理 nested scene / 嵌套场景？
3. 它如何处理 signal connection / 信号连接错误？
4. 它对 C# 的支持是否与 GDScript 对等？
5. 它运行场景后能否稳定返回日志和截图？
6. 它如何限制 destructive operation / 破坏性操作？
7. 它的工具 schema 是否适合被 Muse adapter profile 抽象？

## 8. Muse 借鉴结论

Godot AI 应作为 Muse Godot live editor adapter 的第一深挖样本。Muse 不应直接把 Godot AI 写成默认依赖，但应该吸收它的三层结构：

```text
Workflow Core / 工作流核心
  -> Godot Adapter Contract / Godot 适配合同
    -> Concrete Tool / 具体工具，例如 Godot AI
```

最先可落入 Muse 的不是工具集成，而是：

- Godot adapter capability matrix。
- Godot editor evidence record。
- Godot AI automation dry-run checklist。
- Godot live editor safety rules。

## 9. 资料来源

- GitHub: https://github.com/hi-godot/godot-ai
- Tool reference: https://github.com/hi-godot/godot-ai/blob/main/docs/TOOLS.md
- Godot CLI official docs: https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html
- GdUnit4: https://github.com/godot-gdunit-labs/gdUnit4
