# Economy & Progression / 经济与成长

Version: v0.9

Language: Chinese

## 1. 目的

v0.9 为 Muse Game Workshop 增加 Economy & Progression / 经济与成长设计包。它用于帮助团队在写经济系统代码、接入后端服务或生成生产级资产之前，先把资源、奖励、消耗、解锁、升级和节奏说清楚。

这个包保持 design-first / 设计先行。Codex、Claude Code、Kiro CLI、opencode 和其他 AI coding tool 都应通过同一套 review gate、templates、dry-run evidence 和 checks 使用它。

## 2. 行业术语

对外优先使用游戏行业能理解的说法：

| Production concept | 中文行业叫法 | 在本包中的含义 |
|---|---|---|
| Economy system | 经济系统 | 资源产出、消耗、存储、转换、稀缺性和奖励压力的完整闭环。 |
| Progression | 成长线 | 玩家、队伍、单位、内容和玩法选项随时间逐步开放的方式。 |
| Reward structure | 奖励结构 | 关卡、遭遇、任务、失败补偿和可选目标如何给奖励。 |
| Tuning loop | 数值调优闭环 | 记录假设、调整参数、测试观察、决定下一步的过程。 |
| Balance risk | 平衡性风险 | 奖励、消耗、节奏或解锁影响玩家动力和挑战性的风险。 |

中文文档不要只写 currency / 货币。需要解释每个资源为什么存在，以及它让玩家做出什么选择。

## 3. 范围

v0.9 覆盖：

- Economy model / 经济模型。
- Progression map / 成长线地图。
- Resource and reward table / 资源与奖励表。
- Tuning loop / 数值调优闭环。
- Tactics / 战棋类 dry run，覆盖 action points / 行动点、stamina / 体力、cooldowns / 冷却、mission rewards / 关卡奖励、unit growth / 单位成长、skill unlocks / 技能解锁、secondary objective rewards / 次要目标奖励和 failure compensation / 失败补偿。
- Review gate、evidence 和 static checks。

v0.9 不覆盖：

- 商业化后台实现。
- 支付系统、商业化数值、抽卡、battle pass 或付费内容设计。
- 真实 telemetry service / 数据埋点服务。
- LiveOps / 上线后运营活动。
- Godot 或 Unreal 的引擎实现。
- 新资产、正式美术、release-candidate 美术或音频生产。

## 4. Economy Model / 经济模型

经济模型要让资源循环可读：

| 区域 | 必须决策 |
|---|---|
| Resources / 资源 | 资源名称、玩家侧含义，以及它属于即时战斗、单局、战役还是局外成长。 |
| Sources / 产出 | 资源从哪里来：战斗、关卡、探索、制作、任务、失败补偿、日常/周常或外部奖励。 |
| Sinks / 消耗 | 资源往哪里去：升级、重试、制作、治疗、招募、购买、解锁或临时强化。 |
| Storage / 存储 | 上限、囤积、跨局继承、失败损失和重置规则。 |
| Conversion / 转换 | 资源之间的兑换、单向转换和损耗比例。 |
| Pressure / 压力 | 这个资源希望制造的稀缺性、风险、选择或取舍。 |

经济模型不能只是货币清单。每个资源都要说明设计意图和玩家决策。

## 5. Progression Map / 成长线地图

成长线要把玩家动机、内容开放和系统开放连起来：

- 玩家或账号成长。
- 角色、单位、职业、武器、技能或卡组成长。
- 关卡、章节、地区、副本、谜题或路线等内容成长。
- 难度成长。
- 解锁前置条件。
- 追赶、失败推进或重试规则。
- 防刷、防肝或反重复劳动边界。

每个成长节点需要记录：

- 解锁什么。
- 玩家需要做什么。
- 涉及什么资源或消耗。
- 带来什么新决策或玩法模式。
- 过早或过晚解锁会产生什么风险。

## 6. Resource And Reward Table / 资源与奖励表

奖励表必须有设计意图，不能只有数字。

必填字段：

- 来源或活动。
- 玩家目标。
- 奖励类型。
- 数量或范围。
- 频率。
- 成长或缩放规则。
- 失败补偿。
- 可选目标或次要目标奖励。
- 过低风险。
- 过高风险。
- 验证方法。

这张表要让关卡奖励、遭遇掉落、战利品、升级成本、重试成本和失败推进规则在实现前可见。

## 7. Tuning Loop / 数值调优闭环

每轮调优都应该留下同样的证据链：

1. 写清设计假设。
2. 说明玩家行为或平衡性问题。
3. 记录当前数值。
4. 提出最小但有意义的改动。
5. 定义测试场景。
6. 记录观察。
7. 决定保留、回滚、调整或分组测试。
8. 链接下一轮验证。

AI 工具可以草拟改动建议，但项目必须保留人的决策和背后的 evidence。

## 7.1 Numerical Planning / 数值规划补丁

v0.9.1 增加 Numerical Planning / 数值规划，作为等级曲线、战斗参数表和系统数值规划的专项补丁。

当经济与成长决策需要在实现前形成明确等级、战斗或系统数值记录时使用它：

- Level curve / 等级曲线。
- Combat parameter table / 战斗参数表。
- System numerical plan / 系统数值规划。
- TTK / 击杀回合、EHP / 有效生命、DPR / 每回合伤害、行动经济、体力、冷却、奖励、成本和失败补偿。

见 `numerical-planning.zh.md` / `numerical-planning.en.md`。

## 8. Tactics / 战棋类验证重点

v0.9 dry run 使用 Tactics / 战棋类，因为它能清楚暴露经济与成长问题：

- Action points / 行动点。
- Stamina / 体力。
- Cooldowns / 技能冷却。
- Mission rewards / 关卡奖励。
- Secondary objective rewards / 次要目标奖励。
- Failure compensation / 失败补偿。
- Unit level / 单位等级。
- Skill unlocks / 技能解锁。
- Equipment or ability costs / 装备或技能成本。
- Upgrade pacing / 升级节奏。

这个 dry run 保持 no-code / 不写代码。它证明经济与成长交付物能接到 Tactics 类型分支，但不会创建引擎文件。

## 9. 交付关系

| From | To | Handoff / 交付物 |
|---|---|---|
| Game Designer / 游戏策划 | Technical Designer / 技术策划 | 经济模型、成长线地图、参数、边界情况。 |
| Technical Designer / 技术策划 | Gameplay Programmer / 玩法程序 | 数据结构方向、可调参数、验证场景。 |
| Game Designer / 游戏策划 | Level Designer / 关卡策划 | 奖励假设、关卡收益规则、次要目标奖励规则。 |
| Game Designer / 游戏策划 | QA / 测试 | 假设、风险用例、调优检查、预期玩家行为。 |
| Producer / 制作人 | Release Manager / 发布负责人 | 范围边界、证据、阻塞项、下一版本依赖。 |

## 10. Review Gate

v0.9 只有在 review approval 之后才可以执行。已批准范围是：

- 增加经济与成长双语文档和模板。
- 增加 no-code Tactics / 战棋类 dry-run evidence。
- 增加 static checks。
- 更新 README、文档包索引、roadmap、delivery plan、testing strategy 和项目规则。

任何引擎实现、真实 telemetry、商业化、支付、后端或资产生产都需要单独 review。

## 11. 完成证据

v0.9 完成条件：

- `economy-progression.zh.md` 和 `economy-progression.en.md` 存在。
- Economy model、progression map、resource/reward table、tuning-loop templates 存在。
- Tactics / 战棋类 dry-run evidence 存在。
- Review gate 和 completion evidence 存在。
- `tools/checks/check-v0.9-economy-progression` 通过。
- 现有 v0.7 和 v0.8 checks 仍然通过。

v0.9 之后，下一步进入 v0.10 Telemetry & Playtest Analytics / 数据埋点与试玩分析。
