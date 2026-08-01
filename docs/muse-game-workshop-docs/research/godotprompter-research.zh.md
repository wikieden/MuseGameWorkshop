# GodotPrompter 调研报告

调研日期：2026-06-10

语言：中文

对象：GodotPrompter / `jame581/GodotPrompter`

结论等级：P0，Godot 专项 workflow skill / 工作流技能包组织第一参考。

## 1. 结论

GodotPrompter 对 Muse 的价值与 Godot AI 不同。它不是 live editor control 工具，而是一个 Godot 领域技能体系。它更接近 Muse 当前 `.agents/skills/` 的思路：用一组面向 Godot 开发问题的 skill / 技能，把需求、设计、实现、review、优化和发布组织起来。

对 Muse 最重要的启发是：

- 不是所有 AI game dev 能力都应该放在 MCP/editor automation 里。
- Godot 专项知识可以先沉淀成 workflow skills，再由具体 AI coding tool 调用。
- C# 与 GDScript parity / 对等性需要明确检查，而不能默认只服务 GDScript。
- 技能包需要 validator / 校验脚本，避免 prompt 文件膨胀、结构失控和内容漂移。

## 2. 项目定位

GodotPrompter 是面向 Godot 的 agentic skills framework / 智能体技能框架。它为 Godot 4.x 项目组织专项技能，覆盖架构、玩法系统、输入、物理、动画、UI、多人、发布、优化、GDScript、C# 等方向。

它对 Muse 的对应关系：

| GodotPrompter | Muse |
|---|---|
| Godot-specific skill set | Godot workflow skill pack |
| skill metadata and categories | skill-pack-spec |
| Design / Implementation / Review flows | Review Gate + Execution Plan |
| C# parity attention | bilingual / multi-language engine adapter concerns |
| validator | tools/checks |

它不是 Muse 的替代品，因为 Muse 要覆盖 Godot、Unreal、策划、资产、叙事、经济、LiveOps 等更大生产流程。但它是“Godot 子领域技能如何组织”的好样本。

## 3. 技能组织启发

GodotPrompter 的核心启发是：技能包应该按真实开发工作组织，而不是按 AI 内部能力组织。Muse 后续可以把 Godot skill 扩展分成：

- Godot project setup / 项目设置。
- Scene architecture / 场景架构。
- Node composition / 节点组合。
- Script style / 脚本风格。
- Signal architecture / 信号架构。
- Input and camera / 输入与镜头。
- UI and HUD / UI 与 HUD。
- Physics and collision / 物理与碰撞。
- Animation and state / 动画与状态。
- Audio events / 音频事件。
- Save data / 存档。
- Export and platform checks / 导出与平台检查。
- Testing and debug / 测试与调试。

这些可以先作为文档和 skill skeleton，不需要马上控制 Godot Editor。

## 4. 对 Muse 的可借鉴设计

### 4.1 Skill-first，再 editor automation

Muse 的 Godot 流程可以分两层：

```text
Godot Workflow Skill / Godot 工作流技能
  -> 产出场景/脚本/测试计划
Godot Editor Adapter / Godot 编辑器适配器
  -> 执行已 review 的计划
```

这样可以避免一个常见错误：还没有清楚的场景架构和机制规格，就直接让 MCP 改编辑器。

### 4.2 C# 与 GDScript 对等性

GodotPrompter 对 C# 的关注提醒 Muse：Godot 适配不能只写“Godot = GDScript”。在中国和英文用户群里，都会有团队使用 C#。

建议 Muse 后续 Godot 文档补充：

- GDScript default path / 默认路径。
- C# supported path / 支持路径。
- Mixed-language caution / 混用警告。
- Migration checklist / 迁移检查表。
- Test command differences / 测试命令差异。

### 4.3 技能质量门

GodotPrompter 的 validator 思路适合 Muse：

- 每个 skill 必须有 use when / do not use。
- 每个 skill 必须有 inputs / outputs。
- 每个 skill 必须有 workflow。
- 每个 skill 必须有 quality bar。
- 每个 skill 必须有 common failure modes。

Muse 现在已有类似结构，后续 Godot 专项扩展可以沿用。

## 5. 风险与限制

| 风险 | 说明 | Muse 对策 |
|---|---|---|
| 没有 live editor control | GodotPrompter 更偏知识和工作流，不负责编辑器执行。 | 与 Godot AI / Godot-MCP 互补。 |
| 可能过度细分技能 | 太多技能会增加维护成本。 | Muse 只吸收高频生产面。 |
| Godot 专项范围 | 它不能覆盖 Unreal 或完整游戏生产流程。 | 作为 Godot 子包参考，不作为总架构。 |
| prompt drift | 技能内容可能随 Godot 版本变化。 | 增加版本字段和检查脚本。 |

## 6. 后续深挖问题

1. GodotPrompter 如何定义技能目录、命名和触发条件？
2. 它如何保证 C# 与 GDScript 的内容一致性？
3. validator 检查哪些结构和长度？
4. 哪些 Godot 技能可以映射到 Muse P1/P2？
5. 它是否有真实项目 dry run 或案例？
6. Muse 是否需要一个 `godot-implementation-adapter` skill family？

## 7. Muse 借鉴结论

GodotPrompter 是 Muse 设计 Godot 专项技能包的第一参考。它提醒我们：即使以后接入 Godot AI 或 MCP，也仍然需要稳定的 workflow skills 来定义“应该做什么、为什么做、验收什么”。

建议后续产物：

- Godot skill extension matrix。
- GDScript / C# support policy。
- Godot implementation planning template。
- Godot skill validator rule set。

## 8. 资料来源

- GitHub: https://github.com/jame581/GodotPrompter
- Godot CLI official docs: https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html
- GdUnit4: https://github.com/godot-gdunit-labs/gdUnit4
