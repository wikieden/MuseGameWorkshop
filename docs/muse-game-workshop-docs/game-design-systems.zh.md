# Game Design & Systems / 策划与系统设计

Version: v0.6

Status: Complete

Language: 中文

Paired Document: [game-design-systems.en.md](game-design-systems.en.md)

## 1. 版本定位

v0.6 是 Game Design & Systems / 策划与系统设计版本。

它的目标不是增加 Godot / Unreal 新功能，也不是提前进入完整类型分支。它负责把前期 pitch、core loop 和 mechanic spec 扩展为游戏行业能直接交接的策划包，让 Game Designer / 游戏策划、Technical Designer / 技术策划、Combat Designer / 战斗策划、Level Designer / 关卡策划、Gameplay Programmer / 玩法程序、QA / 测试、美术和音频都能理解下一步要做什么。

v0.6 的核心判断标准是：

- 玩法意图能被下游读懂。
- 系统规则、战斗行为、关卡遭遇、参数和试玩假设能互相引用。
- Boss Rush / 动作玩法和 Tactics / 战棋类都能完成一轮 design dry run。
- 仍然保持 engine-neutral / 引擎中立，不创建新 Godot / Unreal 文件。

## 2. 生产阶段

v0.6 对应 Pre-production / 预制作后段到 Prototype / 原型验证前段。

交付物要回答：

- 这个玩法为什么值得做？
- 玩家每 5 秒、30 秒、5 分钟在做什么决定？
- 哪些系统规则支撑核心循环？
- 战斗或交互参数如何调优？
- 关卡或遭遇用来验证什么？
- 试玩要验证哪条假设，而不是泛泛收集喜好？

## 3. 角色与交付关系

| Role / 角色 | 负责内容 | 交付物 | 下游使用者 |
|---|---|---|---|
| Game Designer / 游戏策划 | 设计支柱、玩家目标、核心循环、系统意图 | game pillars、system design brief | 制作人、技术策划、程序、QA |
| Technical Designer / 技术策划 | 状态、参数、数据结构、可调项、边界条件 | system design brief、tuning plan | 玩法程序、引擎适配、QA |
| Combat Designer / 战斗策划 | 攻防节奏、技能窗口、读招、反馈、风险回报 | combat design brief | 玩法程序、动画、美术、音频 |
| Level Designer / 关卡策划 | 遭遇目标、空间节奏、任务目标、导航与读图 | encounter design brief | 场景、美术、QA、程序 |
| QA / 测试 | 验证路径、复现步骤、测试边界和严重度 | playtest hypothesis、playtest notes | 策划、程序、制作人 |
| Producer / 制作人 | scope、里程碑、review gate 和风险取舍 | decision log、review gate | 全团队 |

## 4. v0.6 交付包

v0.6 必须能产出以下文档或模板填充结果：

1. Game Pillars / 设计支柱。
2. System Design Brief / 系统策划简报。
3. Combat Design Brief / 战斗策划简报。
4. Encounter Design Brief / 遭遇设计简报。
5. Tuning Plan / 调优计划。
6. Playtest Hypothesis / 试玩假设。
7. Boss Rush Action Design Dry Run / Boss Rush 动作玩法设计 dry run。
8. Tactics Design Dry Run / 战棋类设计 dry run。
9. v0.6 Review Gate / 评审门。
10. v0.6 Evidence / 完成证据。

## 5. 设计支柱

设计支柱用于约束后续所有系统和内容判断。

每条设计支柱必须包含：

- Player promise / 玩家承诺。
- Design implication / 对系统、关卡、反馈的影响。
- What to cut / 不符合该支柱时应裁剪什么。
- Test signal / 试玩中看到什么信号才说明支柱成立。

示例：

| Pillar | 玩家承诺 | 系统影响 | 试玩信号 |
|---|---|---|---|
| Readable Danger / 可读威胁 | 玩家输在读错和决策，而不是看不懂 | boss windup、地形威胁、技能范围必须清楚 | 玩家能描述失败原因 |
| Skillful Counterplay / 技术性反制 | 防守成功能转化为主动窗口 | parry、counter、技能冷却和 stamina 必须形成风险回报 | 玩家主动等待反击窗口 |
| Small Repeatable Arena / 小型可复测场景 | 一次试玩能快速重复验证 | 遭遇和地图保持小范围、短循环 | 3 轮自测能比较调参差异 |

## 6. System Design Brief / 系统策划简报

系统策划简报说明规则如何互相连接。

必须包含：

- 系统目标。
- 核心状态。
- 输入和触发条件。
- 资源、冷却或限制。
- 关键参数。
- 反馈事件。
- 与关卡、UI、音频、美术和 QA 的交接点。
- 不进入本阶段的内容。

v0.6 不要求复杂经济、成长或后端数据。资源、奖励和成长线会在 v0.9 Economy & Progression / 经济与成长中展开。

## 7. Combat Design Brief / 战斗策划简报

战斗策划简报关注可玩攻防。

必须包含：

- Player verbs / 玩家动词。
- Enemy or hazard verbs / 敌人或危险动词。
- Timing windows / 时间窗口。
- Risk and reward / 风险回报。
- Cancel, interrupt, invulnerability, failure rules / 取消、打断、无敌和失败规则。
- Feedback requirements / 视觉、音频、UI、镜头或震动反馈。
- Tuning handles / 可调参数。
- Acceptance checks / 验收检查。

## 8. Encounter Design Brief / 遭遇设计简报

遭遇设计简报说明一个空间或任务用来验证什么，而不是直接做最终关卡。

必须包含：

- Encounter goal / 遭遇目标。
- Player start and retry flow / 玩家起点和重试路径。
- Enemy, hazard, terrain, objective, pickup placement / 敌人、危险、地形、目标和拾取物布置。
- Readability and pacing / 可读性和节奏。
- Expected player decisions / 预期玩家决策。
- Playtest questions / 试玩问题。

## 9. Tuning Plan / 调优计划

调优计划不只是列参数。它要说明每个参数为什么存在，改变它会影响什么。

必须包含：

- Parameter / 参数。
- Current value or proposed range / 当前值或建议范围。
- Player-facing effect / 对玩家体验的影响。
- Risk if too low / 过低风险。
- Risk if too high / 过高风险。
- Test method / 测试方法。
- Decision owner / 决策负责人。

v0.6 的参数可以来自文档和示例，不要求写入引擎实现。

## 10. Playtest Hypothesis / 试玩假设

试玩假设把“我觉得好玩”改写成可观察判断。

格式：

```text
If [design change or condition],
then [player behavior or outcome],
because [design rationale].
We will know this is true when [observable evidence].
```

每条假设必须绑定：

- 测试场景。
- 操作步骤。
- 观察指标。
- 成功信号。
- 失败信号。
- 下一步决策：continue、adjust、cut 或 retest。

## 11. Boss Rush Design Dry Run

Boss Rush / 《反击试炼》用于验证动作玩法交付链。

本 dry run 覆盖：

- 玩家移动、闪避、招架、反击。
- boss windup、攻击、反击窗口和阶段变化。
- stamina、counter window、boss health、phase threshold 等参数。
- 小型 arena 遭遇。
- 三轮自测假设。

证据文件：

- [boss-rush-action-design-dry-run.zh.md](../evidence/v0.6/boss-rush-action-design-dry-run.zh.md)
- [boss-rush-action-design-dry-run.en.md](../evidence/v0.6/boss-rush-action-design-dry-run.en.md)

## 12. Tactics Design Dry Run

Tactics / 战棋类用于验证同一套策划流程能否服务不同玩法结构。

本 dry run 只覆盖设计层，不进入完整 v0.7 genre track。

覆盖范围：

- 回合结构。
- 格子地图。
- 单位矩阵。
- 技能规格。
- 地形规则。
- 任务目标。
- 战术 AI 假设。
- 试玩检查。

证据文件：

- [tactics-design-dry-run.zh.md](../evidence/v0.6/tactics-design-dry-run.zh.md)
- [tactics-design-dry-run.en.md](../evidence/v0.6/tactics-design-dry-run.en.md)

## 13. 边界

v0.6 明确不做：

- 新 Godot / Unreal 引擎文件。
- Godot AI、GodotIQ、GodotPrompter、MCP 或其他外部工具接入。
- 完整类型分支包。
- 复杂经济、成长、商业化、真实用户数据平台。
- 叙事量产、最终美术、动作、音乐或音效资产。
- 发布页、预告片、商店素材或 LiveOps 实现。

## 14. 进入 v0.7 的条件

v0.6 完成后，v0.7 才开始正式做 Genre Tracks / 类型流程分支。

进入条件：

- Boss Rush 和 Tactics dry run 都能从设计支柱追溯到系统、战斗/规则、遭遇、参数和试玩假设。
- 新模板能承载下游交接。
- `check-v0.6-game-design-systems` 通过。
- README、roadmap、delivery plan、overall plan 和 testing strategy 都把下一步指向 v0.7。
