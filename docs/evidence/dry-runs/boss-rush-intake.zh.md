# Boss Rush / 《反击试炼》Dry Run Intake

版本：v0.1

语言：中文

日期：2026-06-09

## 1. Dry Run 目的

本文件记录 v0.1 的无代码 dry run intake。目标不是实现游戏，而是验证 Muse Game Workshop 的 workflow pack 能否让 AI coding tools 从一个游戏想法开始，先读取文档、先做设计摘要和执行计划，再进入 review gate。

## 2. 输入 Prompt 摘要

目标：

> 用 Boss Rush / 《反击试炼》作为样板游戏，验证 Muse Game Workshop 的 v0.1 workflow skills、templates、review gate 和 evidence 记录。

约束：

- 不写 Godot 游戏代码。
- 不写 Unreal 游戏代码。
- 不导入美术、动作、音乐、音效或 UI 资产。
- 不创建 manifest 外目录。
- 所有输出收敛到 manifest 规定的 3 个 dry-run evidence 文件。

## 3. 使用的 Workflow Skills

规范 dry run 链路：

1. `game-intake`
2. `core-loop`
3. `mechanic-spec`
4. `vertical-slice-planner`
5. `engine-portability`
6. `creative-asset-pipeline`
7. `ux-flow`
8. `level-blockout`
9. `playtest-report`

## 4. Game Intake 输出

### 4.1 一句话 Pitch

《反击试炼》是一款小体量 Boss Rush 样板游戏，玩家在封闭训练场中通过闪避、招架、反击和耐力管理击败一个三阶段 Boss。

### 4.2 玩家幻想

玩家幻想是“读招、规避、抓反击窗口”的近战挑战。胜利来自观察、时机和资源管理，而不是装备成长或数值堆叠。

### 4.3 目标体验

- 可重复试玩。
- 核心机制清楚。
- 失败原因可读。
- 反击成功有明确反馈。
- 能自然覆盖策划、工程、美术、动作、音频、UX、关卡和 QA 交付物。

### 4.4 P0 可验证假设

| 假设 | 验证方式 |
|---|---|
| 闪避/招架/反击能形成清楚的 30 秒战斗循环 | 在 mechanic spec 中定义状态、窗口和反馈，并在 v0.2 Godot 原型验证 |
| 三阶段 Boss 能以小内容量验证节奏变化 | 在 vertical slice plan 中只规划一个 Boss 和一个 test arena |
| 资产工作流可以先于资产生成被验证 | 在 creative asset pipeline 中只定义 brief、provenance 和 review gate |
| UX/level 可以不依赖最终美术先被评审 | 用 UX flow 和 level blockout 定义 HUD、反馈和训练场灰盒目标 |

## 5. 当前 Review 状态

- Review Status: Approved
- Reviewer: User directive, 2026-06-09, "完成当前版本"
- Scope Reviewed: v0.1 workflow pack materialization and Boss Rush no-code dry run
- Required Changes: None for v0.1 scope
- Notes: Approval does not extend to v0.2 Godot implementation, v0.3 asset engine validation, or v0.4 Unreal project creation.
