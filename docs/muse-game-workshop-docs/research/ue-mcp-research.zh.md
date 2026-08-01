# UE-MCP 调研报告

调研日期：2026-06-10

语言：中文

对象：UE-MCP / `db-lyon/ue-mcp`

结论等级：P0，Unreal 全面编辑器自动化第一参考。

## 1. 结论

UE-MCP 是本轮 Unreal 方向最值得细化研究的项目。它的重点不只是 MCP，而是围绕 Unreal Editor 建立了较完整的自动化工具面，覆盖 Blueprint / 蓝图、C++、Actor、关卡、材质、UMG、动画、VFX、Gameplay Ability System、PIE、日志和构建等工作。

对 Muse 最有价值的是：

- Unreal 适配器必须处理 Blueprint、C++、Data Asset、UMG、Level、PIE 和 Automation Test 的协作，而不是只写 C++。
- AI 编辑器控制需要 rollback / 回滚、flow / 流程编排和 structured errors / 结构化错误。
- `.uasset`、`.umap` 等二进制资产必须通过 Editor API 或插件操作，不应让 AI 当文本文件编辑。
- Unreal 适配层需要清楚区分“设计意图”“技术映射”“编辑器执行”和“运行验证”。

## 2. 项目定位

UE-MCP 是一个面向 Unreal Engine 的 MCP server 与 Editor plugin 组合。公开文档描述其使用 TypeScript MCP server 和 C++ Unreal Editor plugin，把 AI 工具连接到 Unreal Editor。

它接近以下角色：

- Unreal Editor automation bridge / Unreal 编辑器自动化桥。
- Blueprint and asset operation layer / 蓝图与资产操作层。
- PIE validation executor / PIE 验证执行器。
- Flow-based editor workflow runner / 基于 flow 的编辑器工作流执行器。

这类工具最适合作为 Muse 后期 Unreal adapter 的执行层参考，而不是当前 workflow core 的一部分。

## 3. 架构观察

UE-MCP 的结构比普通文件型 coding agent 更接近“引擎工具链”：

1. MCP server 接收 AI 工具请求。
2. Unreal Editor plugin 在编辑器内执行操作。
3. 工具分类覆盖 Blueprint、关卡、材质、UMG、动画、GAS、VFX、日志、PIE 等。
4. flow / workflow 支持把多个编辑器动作组合成可复用任务。
5. rollback / transaction 思路用于降低自动化破坏风险。

Muse 应从中学习“执行层协议”，而不是复制工具命令。Unreal 的核心复杂度在于资产、编辑器状态和运行验证，不在于生成几段代码。

## 4. Unreal 工具面启发

UE-MCP 展示了 Unreal adapter 必须覆盖的生产对象：

- Actor / Component：关卡中实际对象与组件结构。
- Blueprint：非程序人员和技术策划常用的实现层。
- C++：性能敏感、核心系统、复杂 gameplay logic。
- Data Asset / Data Table：参数、配置、技能、敌人、物品、数值表。
- UMG：HUD、菜单、调试 UI。
- Animation Blueprint / Montage：角色状态和动作反馈。
- Material / VFX / Niagara：表现层。
- PIE / Play In Editor：最小运行验证。
- Output Log / Message Log：错误定位。
- Automation Test / Functional Test：可重复验证。

Muse 的 `unreal-workflow` 后续不应只问“写蓝图还是写 C++”，而应定义清楚：

- 哪些逻辑进入 C++。
- 哪些调参和连接进入 Blueprint。
- 哪些数值进入 Data Asset / Data Table。
- 哪些验证必须在 PIE 中完成。
- 哪些资产只能由人工或 editor automation 处理。

## 5. 对 Muse 的可借鉴设计

### 5.1 Blueprint / C++ 责任分工

UE-MCP 证明 Unreal adapter 必须把 Blueprint 和 C++ 当成共同生产面。Muse 可以定义：

| 类型 | 默认归属 | 理由 |
|---|---|---|
| 核心状态机 | C++ 或 Blueprint Component | 需要稳定、可测试。 |
| 可调参数 | Data Asset / Data Table | 方便策划调参。 |
| 角色表现连接 | Blueprint / AnimBP | 美术、动画和技术策划可参与。 |
| HUD / 调试 UI | UMG | 便于快速验证。 |
| 关卡验证 | PIE test map | 确认可运行、可交互。 |

### 5.2 Flow 与 Review Gate

UE-MCP 的 flow 思路可以转成 Muse 的 reviewed task package：

```text
Design Spec
  -> Unreal Mapping
  -> Editor Action Plan
  -> Execute In Editor
  -> PIE / Compile / Test Evidence
  -> Human Review
```

这里的关键不是让 AI 自主决定 flow，而是让 flow 执行已经审批过的制作任务。

### 5.3 回滚和风险边界

Unreal 自动化比 Godot 风险更高，因为很多资产是二进制。Muse 后续应定义：

- 每次 editor automation 前记录 affected assets / 影响资产。
- 禁止 AI 直接批量删除资产，除非 review gate 明确批准。
- 生成 Blueprint、UMG、Data Asset 后必须 compile / load / PIE 验证。
- 所有自动化都要留下 Output Log、截图和变更列表。

## 6. 风险与限制

| 风险 | 说明 | Muse 对策 |
|---|---|---|
| 许可/商业风险 | UE-MCP 的许可和商业边界需要实现前重新确认。 | 只作为研究样本，不复制代码或命令结构。 |
| 工具面过大 | 工具覆盖过广，容易诱发范围膨胀。 | Muse 先定义最小 adapter capability。 |
| Unreal 版本敏感 | UE 版本、插件 API 和 Blueprint 行为可能变化。 | adapter profile 必须记录 Unreal 版本。 |
| 二进制资产风险 | `.uasset` / `.umap` 不能通过普通 diff review 完整理解。 | 通过 editor validation 和人工 review 控制。 |
| AI 过早进入表现层 | Unreal 3D 表现可能掩盖机制问题。 | 保留 engine-neutral spec 和 Godot/原型验证优先原则。 |

## 7. 后续深挖问题

1. UE-MCP 的 Blueprint graph 操作如何表示节点、引脚和连线？
2. 它的 rollback 是基于 Unreal transaction、文件备份，还是自定义层？
3. 它如何处理 Blueprint compile errors？
4. 它能否稳定创建和修改 Data Asset / Data Table？
5. 它的 PIE 验证能返回哪些结构化信息？
6. 它如何处理多人、GAS、动画、Niagara 这类复杂系统？
7. 它的许可是否允许 Muse 在开源项目中引用其设计或工具调用模式？

## 8. Muse 借鉴结论

UE-MCP 应作为 Muse Unreal 深度适配的第一研究样本。Muse 后续不应直接以 UE-MCP 为默认执行依赖，而应抽象出：

- Unreal adapter capability matrix。
- Blueprint / C++ / Data Asset responsibility template。
- Unreal editor automation review gate。
- PIE evidence record。
- Binary asset boundary guide。

如果后续做 Unreal MCP dry run，UE-MCP 可以作为“能力上限参考”，GenOrca Unreal MCP 可以作为“轻量落地参考”。

## 9. 资料来源

- GitHub: https://github.com/db-lyon/ue-mcp
- Documentation: https://github.com/db-lyon/ue-mcp/tree/main/docs
- Architecture: https://github.com/db-lyon/ue-mcp/blob/main/docs/architecture.md
- Unreal Editor Scripting: https://dev.epicgames.com/documentation/en-us/unreal-engine/scripting-and-automating-the-unreal-editor
- Unreal Python: https://dev.epicgames.com/documentation/unreal-engine/scripting-the-unreal-editor-using-python
- Unreal Automation Test Framework: https://dev.epicgames.com/documentation/unreal-engine/automation-test-framework-in-unreal-engine
