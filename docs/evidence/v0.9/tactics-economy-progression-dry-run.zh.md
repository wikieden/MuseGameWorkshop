# Tactics / 战棋类经济与成长 Dry Run

Version: v0.9

Language: Chinese

Review Status: Approved

## 样板游戏语境

类型：Tactics / 战棋类。

工作名：Counter Grid。

玩家承诺：玩家通过 action points / 行动点、stamina / 体力、cooldowns / 冷却管理和小队成长，在紧凑战术关卡中取胜。

这个 dry run 是 no-code / 不写代码，只验证交付物。

## Validation Coverage / 验证覆盖

- Action points / 行动点。
- Stamina / 体力。
- Cooldowns / 冷却。
- Mission rewards / 关卡奖励。
- Secondary objective rewards / 次要目标奖励。
- Failure compensation / 失败补偿。
- Unit level / 单位等级。
- Skill unlocks / 技能解锁。

## Economy Model / 经济模型

| Resource / 资源 | Scope / 范围 | Source / 产出 | Sink / 消耗 | Pressure / 压力 |
|---|---|---|---|---|
| Action points / 行动点 | 回合 / 单位 | 单位回合开始、加速 buff | 移动、攻击、警戒、交互 | 迫使玩家做短期站位选择。 |
| Stamina / 体力 | 关卡 / 单位 | 关卡开始、休息行动、营地恢复 | 重技能、破防、紧急闪避 | 防止每回合重复最强招式。 |
| Cooldowns / 冷却 | 技能 / 单位 | 使用技能后进入冷却，回合推进减少冷却 | 技能可用性 | 制造时机窗口和可读敌方回合。 |
| Supplies / 补给 | 关卡 / 小队 | 关卡奖励、secondary objective reward / 次要目标奖励、回收 | 治疗、修理、消耗品、重试准备 | 把表现连接到下一关准备。 |
| Training medals / 训练勋章 | 战役 / 单位 | 关卡奖励、可选挑战奖励、failure compensation / 失败补偿 | Unit level / 单位等级、skill unlocks / 技能解锁、职业专精 | 支持成长，不要求完美通关。 |

## Progression Map / 成长线地图

| Node / 节点 | Unlock / 解锁 | Requirement / 条件 | Cost / 成本 | New Decision / 新决策 | Too Early Risk / 过早风险 | Too Late Risk / 过晚风险 |
|---|---|---|---:|---|---|---|
| Unit level 2 / 单位 2 级 | 第二个主动技能槽 | 完成 2 个关卡或消耗训练勋章 | 3 medals | 选择爆发伤害或控制技能 | 玩家尚未理解定位就被迫选择 | 前几关玩法过平 |
| Unit level 3 / 单位 3 级 | 被动特性 | 通关第一个 boss 关 | 5 medals | 确认单位定位 | 单一强单位滚雪球 | 小队缺少身份感 |
| Squad supply cap +1 / 小队补给上限 +1 | 额外携带槽 | 完成可选补给目标 | 40 supplies | 带治疗还是陷阱应对 | 经济太宽松 | 失败惩罚过重 |
| Tactical cooldown mod / 战术冷却改装 | 一个技能冷却 -1 | 连续三关无人倒地 | 6 medals | 围绕时机窗口构筑 | 形成支配性技能循环 | 冷却系统缺少成长感 |

## Resource And Reward Table / 资源与奖励表

| Source / Activity | Player Goal / 玩家目标 | Reward Type / 奖励类型 | Quantity / Range | Frequency / 频率 | Scaling Rule / 缩放 | Failure Compensation / 失败补偿 | Secondary Objective Reward / 次要目标奖励 | Validation Method / 验证方法 |
|---|---|---|---:|---|---|---|---|---|
| 标准关卡通关 | 完成主目标 | Supplies、training medals | 50 supplies、2 medals | 每关 | 每个难度阶 +10 supplies | 失败后 20 supplies、1 medal | 无 | 检查一次通关是否能支付轻度恢复，但不能全量恢复。 |
| 救援次要目标 | 救出友军或护送单位 | Supplies、skill token | 20 supplies、1 token | 可选 | 第 2 章前不缩放 | 无 | 解锁支援技能选择 | 检查目标是否改变路线选择，但不会变成必做。 |
| 完美战术奖励 | 无单位倒地 | Training medals | 1 medal | 可选 | 每关最多一次 | 无 | 额外 medal | 检查奖励是否鼓励熟练操作，但不阻断成长。 |
| Boss 失败尝试 | 学习 boss 模式 | Training medals | 1 medal | 首次失败 | 不缩放 | 1 medal | 无 | 检查失败推进，但不能重复刷。 |

## Tuning Loop / 数值调优闭环

假设：如果重技能消耗 2 点 stamina / 体力，并进入 2 回合 cooldown / 冷却，玩家会在爆发回合和走位回合之间切换，而不是反复使用同一攻击。

当前值：

| Parameter / 参数 | Current / 当前值 | Expected Effect / 预期效果 |
|---|---:|---|
| Heavy skill stamina cost / 重技能体力消耗 | 2 | 限制连续爆发。 |
| Heavy skill cooldown / 重技能冷却 | 2 turns | 制造时机窗口。 |
| Rest action recovery / 休息行动恢复 | +1 stamina | 让恢复变成战术选择。 |
| Mission clear supply reward / 通关补给奖励 | 50 | 支付部分恢复。 |

测试场景：

- 三人小队。
- 五名敌人。
- 一个可选救援目标。
- 六回合压力。

观察方法：

- 记录同一单位重技能使用频率。
- 记录玩家是否至少一次使用休息行动。
- 记录救援目标是否改变路线选择。
- 记录 failure compensation / 失败补偿是否允许再次尝试，同时保留资源压力。

决策规则：

- 如果重技能每次冷却结束都被使用且没有取舍，提高体力成本或降低体力恢复。
- 如果玩家完全不用重技能，降低成本或改善反馈。
- 如果失败补偿可被刷取，改成首次失败限定。

## 交付备注

- Game Designer / 游戏策划交付经济意图、奖励规则和成长线地图。
- Technical Designer / 技术策划把资源和成本转换成数据结构候选。
- Gameplay Programmer / 玩法程序等待 review 后再实现 action points、stamina、cooldowns、mission rewards 或 unit level。
- QA / Playtest / 测试用明确假设验证 tuning loop。

## 排除范围

- 不创建 Godot scene、script、resource 或 export file。
- 不创建 Unreal Blueprint、C++、Data Asset、UMG 或 PIE map。
- 不创建真实 telemetry platform。
- 不做支付或商业化设计。
- 不生成美术或音频资产。
