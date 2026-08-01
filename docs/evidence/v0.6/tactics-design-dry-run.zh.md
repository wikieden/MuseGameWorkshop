# Tactics / 战棋类设计 Dry Run

版本：v0.6

语言：中文

Paired Document: [tactics-design-dry-run.en.md](tactics-design-dry-run.en.md)

## 1. 测试目标

验证 v0.6 策划与系统流程能否支持 Tactics / 战棋类，而不提前进入完整 v0.7 类型流程分支。

本 dry run 只做规则、格子、单位、技能、任务目标和试玩假设的设计交付，不创建引擎文件。

## 2. 设计支柱

| Pillar | 玩家承诺 | 设计影响 | 试玩信号 |
|---|---|---|---|
| Clear Tactical Choice / 清晰战术选择 | 每回合至少有两个有意义选择 | 移动、攻击、技能和地形必须形成取舍 | 玩家能解释为什么选择该单位行动 |
| Readable Grid State / 可读格子状态 | 玩家能看懂威胁范围和任务目标 | 格子、范围、地形和单位状态必须清楚 | 玩家不需要猜测敌人能打到哪里 |
| Short Mission Proof / 短任务验证 | 一个任务能在 10-15 分钟内验证规则 | 地图小、单位少、目标明确 | 3 轮自测能比较技能和地形价值 |

## 3. System Design Brief

系统目标：让玩家在小型战棋任务中通过站位、技能和目标优先级完成战术决策。

核心系统：

| System | States | 触发 | 下游交接 |
|---|---|---|---|
| Turn order / 回合顺序 | player turn、enemy turn、mission end | all units acted、objective complete | 程序、QA |
| Grid movement / 格子移动 | selectable、reachable、blocked、occupied | unit selected、terrain check | 地图、UI、程序 |
| Unit action / 单位行动 | idle、moving、acting、spent、defeated | move、skill、damage | 战斗、动画、音频 |
| Mission objective / 任务目标 | active、progressing、complete、failed | enemy defeated、tile held、turn limit | 关卡、QA |

排除范围：大型职业系统、完整剧情任务线、复杂经济、在线对战、随机地图和自动平衡。

## 4. Rules / Combat Design Brief

玩家动词：

- Select unit / 选择单位。
- Move / 移动。
- Use ability / 使用技能。
- Wait / 待机。
- End turn / 结束回合。

敌方动词：

- Approach / 接近。
- Attack weakest exposed unit / 攻击暴露单位。
- Hold objective / 守点。

基础规则：

| Rule | v0.6 建议 | 设计意图 |
|---|---|---|
| Grid | 8x8 square grid | 小地图足够验证站位 |
| Player units | 3 | 选择足够但不膨胀 |
| Enemy units | 4 | 形成压力和包围风险 |
| Action economy | move + one action | 行动结构清晰 |
| Terrain | normal、cover、hazard | 验证地形取舍 |
| Win condition | defeat captain or hold tile 2 turns | 支持击杀和目标两种路线 |

## 5. Unit Matrix

| Unit | Role / 定位 | Move | HP | Ability | Design Intent |
|---|---|---:|---:|---|---|
| Vanguard / 前锋 | 抗线 | 4 | 12 | Guard adjacent ally | 保护脆弱单位 |
| Striker / 突击手 | 爆发 | 5 | 8 | Dash strike | 制造高风险击杀 |
| Adept / 术士 | 控制 | 3 | 7 | Slow zone | 改变敌人路线 |
| Enemy Guard / 敌卫兵 | 压迫 | 3 | 6 | Shield wall | 逼玩家绕侧面 |
| Enemy Captain / 敌队长 | 目标 | 4 | 14 | Rally | 任务核心压力 |

## 6. Encounter Design Brief

任务目标：在 8x8 地图上验证“击杀队长”和“占点两回合”两种胜利路线。

地图结构：

- 玩家从左下角进入。
- 敌队长在右上角，旁边有 cover。
- 中央有可占领 tile。
- 两格 hazard 形成绕路或控制价值。
- 地图不使用高低差，避免 v0.6 过度复杂。

试玩问题：

- 玩家是否能理解两种胜利路线？
- cover 是否明显改变站位？
- Vanguard 的保护是否值得行动点？
- Adept 的 slow zone 是否创造战术价值？
- 敌方 AI 目标是否可读？

## 7. Tuning Plan

| Parameter | 建议范围 | 玩家侧效果 | 过低风险 | 过高风险 | 测试方法 |
|---|---:|---|---|---|---|
| grid_size | 8x8 | 任务阅读压力 | 战术空间不足 | 移动回合过长 | 完成时长 |
| player_unit_count | 3 | 队伍选择复杂度 | 选择太少 | 决策过载 | 每回合思考时间 |
| enemy_unit_count | 3-5 | 压力 | 无挑战 | 被围死 | 失败原因记录 |
| cover_reduction | 25%-40% | 地形价值 | 不值得用 | 过度龟缩 | cover 使用率 |
| mission_turn_limit | 6-8 turns | 节奏压力 | 太赶 | 无目标压力 | 胜负回合数 |

## 8. Playtest Hypotheses

| Hypothesis | 测试步骤 | 成功信号 | 失败信号 | 下一步 |
|---|---|---|---|---|
| 如果任务同时提供击杀队长和占点路线，玩家会根据站位选择路线，而不是只杀最近敌人 | 3 轮自测，记录胜利路线选择 | 至少出现两种路线尝试 | 玩家只清怪 | 强化目标反馈 |
| 如果 cover 减伤 30%，玩家会主动利用掩体推进 | 记录单位停在 cover 的次数 | cover 被主动使用 | 玩家无视 cover | 提高地形提示 |
| 如果 Adept 有 slow zone，玩家会用控制改变敌方接近路径 | 记录 slow zone 对敌方行动影响 | 至少一次阻止围攻 | 技能被忽略 | 调整范围或敌方目标 |

## 9. 交付检查

- 规则、格子、单位、技能、地形和任务目标可互相引用。
- 程序可以从规则表推导数据结构。
- 关卡策划可以从地图结构画出灰盒。
- QA 可以按假设写出测试用例。
- v0.7 可在此基础上扩展完整 Tactics / 战棋类类型分支。

Review Decision: Pass for v0.6 design dry run.

