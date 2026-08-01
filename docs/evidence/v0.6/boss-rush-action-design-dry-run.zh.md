# Boss Rush 动作玩法设计 Dry Run

版本：v0.6

语言：中文

Paired Document: [boss-rush-action-design-dry-run.en.md](boss-rush-action-design-dry-run.en.md)

## 1. 测试目标

验证 v0.6 策划与系统流程能否把 Boss Rush / 《反击试炼》从核心循环推进到可交接的动作玩法设计包。

本 dry run 不创建新 Godot 文件，不调整现有实现参数，只验证设计交付链。

## 2. 设计支柱

| Pillar | 玩家承诺 | 设计影响 | 试玩信号 |
|---|---|---|---|
| Readable Danger / 可读威胁 | 玩家能读懂 boss 出招和反击窗口 | windup、攻击范围、UI 状态和音效必须清楚 | 失败后能说出自己早按、晚按或站位错误 |
| Skillful Counterplay / 技术性反制 | 防守成功能转化为主动伤害 | parry 与 counter window 必须形成风险回报 | 玩家主动等待窗口，而不是只逃跑 |
| Fast Retry / 快速重试 | 失败后能马上再试一次 | arena 小、循环短、R retry 明确 | 玩家愿意连续跑 3 轮调参验证 |

## 3. System Design Brief

系统目标：让玩家通过读招、防守和反击推进三阶段 boss。

核心状态：

| System | States | 触发 | 下游交接 |
|---|---|---|---|
| Player defense | neutral、dodging、parrying、staggered | Space、F、boss hit | 玩法程序、动画、音效 |
| Counter window | closed、open、expired | successful parry、timer end | UI、VFX、音效 |
| Boss phase | phase 1、phase 2、phase 3、defeated | boss health threshold | 关卡、音频、QA |
| Stamina | available、spent、recovering | dodge、parry、counter | UI、调优、QA |

排除范围：新敌人、成长系统、装备、复杂经济、最终动画和最终音效。

## 4. Combat Design Brief

玩家动词：

- Move / 移动。
- Dodge / 闪避。
- Parry / 招架。
- Counter / 反击。
- Retry / 重开。

Boss 动词：

- Windup / 起手。
- Strike / 攻击。
- Recover / 收招。
- Phase shift / 阶段变化。

关键窗口：

| Window | Intent | 初始建议 | 调优风险 |
|---|---|---:|---|
| boss windup | 给玩家读招时间 | 0.8s | 太短会不可读，太长会无压力 |
| parry active | 奖励精准防守 | 0.25s | 太短挫败，太长变成无脑防守 |
| counter window | 让防守转主动 | 0.9s | 太短玩家错过，太长节奏松 |
| stamina recovery | 限制连续防守 | 1.2s | 太慢压制实验，太快无资源压力 |

反馈需求：

- Counter window 打开时要有 HUD 或 VFX 反馈。
- 成功 counter 需要明确音效和 boss hit 反馈。
- 失败 parry 要区分早按、晚按和 stamina 不足。

## 5. Encounter Design Brief

遭遇目标：在小型 arena 中反复验证读招、防守、反击和重试。

空间要求：

- 玩家起点与 boss 保持中距离。
- arena 边界清晰，但不靠地形复杂度制造难度。
- UI 不遮挡 boss windup。
- 失败后 3 秒内可重新进入同一测试。

试玩问题：

- 玩家是否能在第一轮理解 boss windup？
- 玩家是否知道何时按 F 和 J？
- 反击成功是否带来足够正反馈？
- 第三阶段是否只是数值变难，还是出现新的决策压力？

## 6. Tuning Plan

| Parameter | 建议范围 | 玩家侧效果 | 过低风险 | 过高风险 | 测试方法 |
|---|---:|---|---|---|---|
| boss_windup_time | 0.6-1.0s | 威胁可读性 | 不公平 | 无压力 | 3 轮读招测试 |
| parry_window | 0.18-0.32s | 精准防守难度 | 挫败 | 无脑招架 | 成功率记录 |
| counter_window | 0.7-1.1s | 防守转进攻节奏 | 错过反馈 | 节奏拖慢 | 反击命中率 |
| stamina_cost_dodge | 15-25 | 位移成本 | 无限逃跑 | 不敢移动 | 闪避次数 |
| boss_phase_threshold | 65% / 35% | 阶段节奏 | 变化太少 | 变化太频繁 | 阶段到达时间 |

## 7. Playtest Hypotheses

| Hypothesis | 测试步骤 | 成功信号 | 失败信号 | 下一步 |
|---|---|---|---|---|
| 如果 boss windup 保持 0.8s，玩家会在 3 轮内学会读招，因为威胁足够可见 | 自测 3 轮，每轮记录失败原因 | 第 3 轮能主动 parry | 仍然说不清何时出招 | 调整 windup/VFX |
| 如果 counter window 为 0.9s，玩家会把成功 parry 转化为 J 反击 | 每轮记录 parry 后是否 counter | 反击命中率超过 60% | 成功 parry 后经常错过 | 延长窗口或加强 HUD |
| 如果 stamina 限制连续 dodge，玩家会尝试 parry 而不是一直逃跑 | 记录 dodge/parry 比例 | parry 使用率上升 | 玩家只绕圈等 boss 空挥 | 调整 stamina 和 boss tracking |

## 8. 交付检查

- 系统、战斗、遭遇、调优和试玩假设可互相引用。
- 下游程序能从参数表找到初始实现范围。
- QA 能从试玩假设写出测试步骤。
- 美术和音频能从反馈需求知道原型反馈优先级。

Review Decision: Pass for v0.6 design dry run.

