# Numerical Planning / 数值规划

Version: v0.9.1

Language: Chinese

## 1. 目的

v0.9.1 为 Muse Game Workshop 增加 Numerical Planning / 数值规划补丁。它把等级曲线、战斗数值和系统数值变成可 review 的制作记录，再进入实现。

这个补丁扩展 v0.9 Economy & Progression / 经济与成长。它不替代 economy model、progression map、resource/reward table 或 tuning loop，而是增加更实操的数值规划层：

- Level curve / 等级曲线。
- Combat parameter table / 战斗参数表。
- System numerical plan / 系统数值规划。
- Tactics / 战棋类 numerical dry run / 数值 dry run。

## 2. 行业术语

| Term | 中文行业叫法 | 含义 |
|---|---|---|
| Numerical planning | 数值规划 | 在实现前规划等级、战斗、经济、成长和系统参数的设计过程。 |
| Level curve | 等级曲线 | 玩家、单位、技能、装备、敌人和内容数值随时间增长的预期曲线。 |
| Combat parameter table | 战斗参数表 | 让战斗可衡量的一组参数：生命、伤害、防御、命中、暴击、行动点、冷却、体力、范围、速度和行动经济。 |
| System numerical plan | 系统数值规划 | 跨系统参数规划，覆盖经济、奖励、成本、解锁、重试、失败补偿、难度和节奏。 |
| Anchor point | 锚点 | 已知目标节点，例如 1 级、第一个 boss、第 2 章开始、第一次构筑成型。 |
| TTK | 击杀回合 / 击杀时间 | 击杀目标所需回合或时间。 |
| EHP | 有效生命 | 经过防御、减伤、护盾或抗性后实际可承受伤害。 |
| DPR | 每回合伤害 | 一回合或一套循环中的期望伤害。 |

中文文档中可以保留 TTK、EHP、DPR，但第一次出现时必须解释中文含义。

## 3. 范围

v0.9.1 覆盖：

- 玩家、单位、技能、敌人和内容锚点。
- 战斗公式和可衡量目标。
- 影响节奏的经济与成长参数。
- Tactics / 战棋类验证，覆盖 unit level / 单位等级、enemy level / 敌人等级、HP / 生命、damage / 伤害、action points / 行动点、stamina / 体力、cooldowns / 冷却、mission rewards / 关卡奖励、upgrade costs / 升级成本和 failure compensation / 失败补偿。
- No-code dry-run evidence 和 static checks。

v0.9.1 不覆盖：

- 引擎实现。
- 真实 telemetry service / 数据埋点服务。
- 商业化、支付、抽卡、battle pass 或付费内容设计。
- LiveOps / 上线后运营经济活动。
- 完整电子表格工具。
- 发布版本最终平衡数值。

## 4. 规划顺序

建议顺序：

1. 定义玩家体验目标。
2. 定义锚点。
3. 草拟等级曲线。
4. 草拟战斗参数表。
5. 草拟系统数值规划。
6. 做 dry run 或 spreadsheet simulation / 表格仿真。
7. 记录 tuning-loop hypothesis / 数值调优假设。
8. Review、调整、再验证。

不要一开始就铺完整大表。先定体验目标和锚点。

## 5. 体验目标

写数值前先定：

- 单次游玩时长。
- 预期关卡时长。
- 预期战斗回合数。
- 普通敌人 TTK / 击杀回合。
- 精英敌人 TTK / 击杀回合。
- Boss 阶段时长。
- 新技能、新单位、新装备或新系统解锁频率。
- 失败成本和失败补偿。
- 难度爬升方式。

这些目标用于把数值绑定回玩家体验，而不是只做数字表。

## 6. 锚点

先做锚点，再补曲线：

| Anchor / 锚点 | 必须决策 |
|---|---|
| Level 1 / 1 级 | 初始属性、初始动词、第一次失败风险。 |
| First upgrade / 第一次升级 | 第一次有意义成长后改变什么。 |
| First boss / 第一个 boss | 核心战斗、经济和成长是否可理解。 |
| Chapter 2 start / 第 2 章开始 | 开放什么新系统或构筑选项。 |
| Midgame benchmark / 中期基准 | 玩家是否有足够决策，但没有过度复杂。 |
| Vertical slice cap / 垂直切片上限 | 第一个可玩切片使用的最高数值范围。 |

只有锚点成立后，再补中间数值。

## 7. 战斗公式

第一版公式保持简单：

```text
Effective HP / 有效生命 = HP / (1 - Damage Reduction / 伤害减免)
Expected Damage / 期望伤害 = Base Damage / 基础伤害 * Hit Rate / 命中率 * Action Frequency / 行动频率
Turns To Kill / 击杀回合 = Effective HP / Expected Damage Per Round / 每回合期望伤害
```

对 Tactics / 战棋类，需要记录：

- Action points / 行动点。
- Move range / 移动范围。
- Attack range / 攻击范围。
- Skill cost / 技能成本。
- Cooldown / 冷却。
- Stamina cost and recovery / 体力消耗与恢复。
- Enemy threat range / 敌人威胁范围。
- Cover、armor、shield、resistance / 掩体、护甲、护盾、抗性。

每个公式都要说明玩家为什么能读懂。第一个原型不能靠隐藏复杂度撑体验。

## 8. 系统数值连接

系统数值规划需要连接：

- Level curve / 等级曲线。
- Combat parameter table / 战斗参数表。
- Economy model / 经济模型。
- Progression map / 成长线地图。
- Resource/reward table / 资源与奖励表。
- Tuning loop / 数值调优闭环。
- Playtest hypotheses / 试玩假设。

如果成本变化，就要回查奖励表和成长节奏。如果伤害变化，敌人生命、治疗、奖励节奏和失败补偿也可能要回查。

## 9. Review Gate

v0.9.1 只批准设计、模板、证据和检查。

任何引擎代码、真实 telemetry、商业化后台、支付、商业化设计、资产生成或发布版本最终平衡，都需要单独 review。

## 10. 完成证据

v0.9.1 完成条件：

- `numerical-planning.zh.md` 和 `numerical-planning.en.md` 存在。
- Level curve、combat parameter table 和 system numerical plan templates 存在。
- Tactics / 战棋类 numerical dry-run evidence 存在。
- `tools/checks/check-v0.9.1-numerical-planning` 通过。
- 现有 v0.9 和文档检查仍然通过。

v0.9.1 之后，下一步仍然是 v0.10 Telemetry & Playtest Analytics / 数据埋点与试玩分析。
