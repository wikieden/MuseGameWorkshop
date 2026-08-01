# Tactics / 战棋类数值规划 Dry Run

Version: v0.9.1

Language: Chinese

Review Status: Approved

## 样板语境

类型：Tactics / 战棋类。

工作名：Counter Grid。

这个 no-code dry run 验证 level curve / 等级曲线、combat parameter table / 战斗参数表和 system numbers / 系统数值如何连接 v0.9 Economy & Progression / 经济与成长。

## Validation Coverage / 验证覆盖

- Level curve / 等级曲线。
- Combat parameter table / 战斗参数表。
- System numerical plan / 系统数值规划。
- TTK、EHP 和 DPR。
- action points / 行动点。
- stamina / 体力。
- cooldown / 冷却。
- mission reward / 关卡奖励。
- failure compensation / 失败补偿。

## 体验目标

| Target / 目标 | Value / 数值 | Reason / 原因 |
|---|---:|---|
| Mission length / 关卡长度 | 6 turns | 保持测试紧凑。 |
| Normal enemy TTK / 普通敌人击杀回合 | 2 turns | 鼓励主动进攻，同时保留站位。 |
| Elite enemy TTK / 精英敌人击杀回合 | 3 turns | 制造集火和目标优先级决策。 |
| First boss phase / 第一个 boss 阶段 | 4 turns | 验证 cooldown / 冷却和 stamina / 体力规划。 |
| First meaningful unit level / 第一次有意义单位等级 | Level 2 | 解锁一个主动技能选择。 |

## Anchor Points / 锚点

| Anchor / 锚点 | Player State / 玩家状态 | Enemy / Content State / 敌人与内容状态 | Unlock / 解锁 | Validation Target / 验证目标 |
|---|---|---|---|---|
| Level 1 / 1 级 | 3 个单位、2 action points / 行动点、5 stamina / 体力 | 只有普通敌人 | 普攻、防守、移动 | 玩家理解行动经济。 |
| Level 2 / 2 级 | 一个单位获得第二技能槽 | 出现一个精英敌人 | 控制或爆发技能选择 | 玩家能解释构筑选择。 |
| First boss / 第一个 boss | 小队有 1 个升级技能 | Boss 有两个可读阶段 | 冷却压力 | TTK / 击杀回合和体力压力可见。 |
| Chapter 2 start / 第 2 章开始 | 小队补给上限提高 | 出现地形危险 | 战术冷却改装 | 系统数值制造新决策。 |

## Combat Parameter Table / 战斗参数表

| Actor | Level / Tier | HP / 生命 | Damage Reduction / 减伤 | EHP / 有效生命 | Base Damage / 基础伤害 | Hit Rate / 命中率 | DPR / 每回合伤害 | TTK Target / 击杀目标 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Player striker / 玩家攻击手 | 1 | 24 | 0.00 | 24 | 8 | 0.85 | 6.8 | 对同级约 3.5 回合 |
| Normal enemy / 普通敌人 | 1 | 14 | 0.00 | 14 | 5 | 0.75 | 3.8 | 对攻击手约 2 回合 |
| Elite enemy / 精英敌人 | 2 | 22 | 0.10 | 24.4 | 7 | 0.75 | 5.3 | 对攻击手约 3 回合 |
| First boss phase / 第一个 boss 阶段 | 3 | 45 | 0.15 | 52.9 | 9 | 0.80 | 7.2 | 对小队约 4-5 回合 |

## Action Economy / 行动经济

| Actor | Action Points / 行动点 | Move Range / 移动范围 | Attack Range / 攻击范围 | Skill Cost / 技能成本 | Cooldown / 冷却 | Stamina Cost / 体力消耗 | Stamina Recovery / 体力恢复 | Threat Range / 威胁范围 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Player unit / 玩家单位 | 2 | 4 | 1-3 | 1-2 AP | 2 turns | 1-2 | 休息 +1 | 5 |
| Normal enemy / 普通敌人 | 2 | 3 | 1 | 1 AP | 1 turn | 0 | 0 | 4 |
| Elite enemy / 精英敌人 | 2 | 4 | 1-2 | 2 AP | 2 turns | 0 | 0 | 5 |
| Boss phase / Boss 阶段 | 3 | 3 | 1-4 | 2 AP | 2 turns | 0 | 0 | 6 |

## System Numerical Plan / 系统数值规划

| Parameter / 参数 | System / 系统 | Target / 目标 | Affects / 影响 | Validation Method / 验证方法 |
|---|---|---:|---|---|
| Mission reward supplies / 关卡补给奖励 | Economy / 经济 | 50 | 恢复和重试准备 | 一次通关能支付轻度恢复，但不能全量恢复。 |
| Level 2 skill cost / 2 级技能成本 | Progression / 成长 | 3 medals | 第一次构筑选择 | 两个关卡或一个可选目标可解锁。 |
| Failure compensation / 失败补偿 | Retry / 重试 | 首次失败 1 medal | 失败推进 | 首次失败帮助重试，但不能刷。 |
| Heavy skill stamina cost / 重技能体力消耗 | Combat / 战斗 | 2 | 爆发节奏 | 同一单位不能每回合重复爆发。 |

## Tuning Hypothesis / 数值调优假设

如果普通敌人约 2 回合击杀、精英敌人约 3 回合击杀，那么玩家会集火并使用控制技能，因为目标优先级有可见收益，但不会把遭遇压平。

验证：

- 跑 3 场标准遭遇。
- 记录玩家是否至少使用一次控制技能。
- 记录重技能是否每次 cooldown 结束就被使用。
- 记录 turn 5 前 stamina / 体力是否归零。

## 排除范围

- 不创建 Godot 或 Unreal 文件。
- 不创建真实 telemetry service。
- 不做商业化后台、支付、商业化或付费内容设计。
- 不生成资产。
- 不批准 release balance / 发布版本最终平衡。
