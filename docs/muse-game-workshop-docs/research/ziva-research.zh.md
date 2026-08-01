# Ziva 调研报告

调研日期：2026-06-10

语言：中文

对象：Ziva / `ziva.sh`

结论等级：P1，Godot in-editor AI product experience / 编辑器内 AI 产品体验参考。

## 1. 结论

Ziva 对 Muse 的主要价值不是开源架构，而是产品体验。它展示了 Godot 开发者可能如何在编辑器内与 AI 协作：读场景树、读 live errors、写 GDScript / C#、跑测试、看截图、引用 Godot 文档，并在同一界面中完成 prompt -> edit -> run -> fix 的闭环。

对 Muse 最有价值的是：

- AI 工具的体验应贴近游戏开发者日常编辑器工作，而不是只停留在终端。
- 产品应主动把“运行、报错、截图、修复建议”放入同一个闭环。
- 文档引用和 Godot 版本上下文能降低幻觉风险。
- 商业闭源工具更适合做 UX / product flow 参考，不应成为 Muse 规范依赖。

## 2. 项目定位

Ziva 是 Godot 方向的 AI 插件/产品，公开页面强调：

- 在 Godot Editor 内使用。
- 可理解 scene tree / 场景树。
- 可处理 live errors / 实时报错。
- 支持 GDScript 和 C#。
- 可运行测试和调试。
- 可引用当前 Godot 文档。
- 可辅助生成或编辑项目内容。

它适合被视为：

- Godot AI IDE experience / Godot AI IDE 体验样本。
- In-editor assistant / 编辑器内助手。
- AI debug loop product / AI 调试闭环产品。
- 产品体验参考，而不是开源架构参考。

## 3. 产品体验启发

Ziva 的主要启发来自用户路径：

```text
Developer intent / 开发者意图
  -> Editor context / 编辑器上下文
  -> AI suggestion or edit / AI 建议或修改
  -> Run / Test / Screenshot / 运行测试截图
  -> Live error / 实时报错
  -> Fix / 修复
  -> Human approval / 人工确认
```

这条路径非常适合 Muse 的 Playtest / QA / Evidence 思路。Muse 后续不一定做自己的 UI，但文档和模板应支持这种闭环。

## 4. 对 Muse 的可借鉴设计

### 4.1 编辑器内上下文

Ziva 说明 Muse 不能只假设用户在终端工作。Godot 和 Unreal 开发者很多时候在编辑器里处理场景、动画、UI、资源和调试。

Muse 后续 adapter 设计应能记录：

- 当前打开场景。
- 当前选中节点或 Actor。
- 当前运行状态。
- 当前错误。
- 当前截图。
- 当前文档版本。

### 4.2 文档上下文

Ziva 强调引用 Godot 文档，这对 Muse 很重要。后续 engine adapter 应包含：

- Engine version / 引擎版本。
- Documentation source / 文档来源。
- API availability / API 是否存在。
- Deprecated API warning / 废弃 API 警告。

这对 Godot 4.x 和 Unreal 5.x 都重要。

### 4.3 产品化检查点

Muse 可以从 Ziva 借鉴“用户看得懂”的检查点：

- Did it run? / 能运行吗？
- What changed? / 改了什么？
- What failed? / 哪里失败？
- What does the screenshot show? / 截图说明什么？
- What should the developer approve? / 开发者要确认什么？

这些比内部 agent 状态更适合游戏团队沟通。

## 5. 风险与限制

| 风险 | 说明 | Muse 对策 |
|---|---|---|
| 商业闭源 | 公开资料无法完整验证内部架构。 | 只借鉴 UX 和产品闭环。 |
| 能力声明需验证 | 官网能力可能随版本和订阅变化。 | 实现前必须安装或试用验证。 |
| 工具绑定 | 容易把 Muse 写成 Ziva 使用说明。 | Muse 保留 tool-agnostic adapter contract。 |
| 数据和隐私 | 编辑器内 AI 可能读取项目内容。 | 后续 adapter 需有 data boundary / 数据边界。 |

## 6. 后续深挖问题

1. Ziva 是否本地运行，还是需要云端服务？
2. 它如何读取和展示 scene tree？
3. 它对 GDScript 与 C# 的支持是否对等？
4. 测试运行结果和截图是否可导出为文件？
5. 它如何处理错误、撤销和用户确认？
6. 它的隐私、授权和数据使用条款是否适合商业游戏项目？

## 7. Muse 借鉴结论

Ziva 应作为 Muse 的 Godot AI 产品体验参考。它最适合启发：

- Editor-context evidence record。
- Run -> error -> fix -> screenshot 的验证闭环。
- Godot documentation-aware adapter note。
- Human approval UI / UX wording。
- Data boundary checklist。

Muse 不应依赖 Ziva，也不应把它列为默认工具。它适合指导“好用的 AI editor workflow 长什么样”。

## 8. 资料来源

- Ziva official site: https://ziva.sh/
- Godot Asset Store page: https://store.godotengine.org/asset/ziva/ziva/
- Ziva Godot plugin repository: https://github.com/ziva-sh/ziva-agent-plugin-godot
- Godot CLI official docs: https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html
