# Tactics / 战棋类 Genre Track Dry Run

状态：Draft  
Review Status: Approved  
版本范围：v0.8  
样板：Counter Trial Tactics / 反击试炼战棋版

本 dry run 不创建 Godot 工程、游戏代码或资产。它验证一个战棋点子能否通过 Muse workflow 进入 prototype-ready plan / 原型就绪计划和 Godot Prototype Asset Kit needs / Godot 原型资产包需求。

## 1. Game Start

工作标题：Counter Trial Tactics / 反击试炼战棋版  
类型：Tactics / 战棋类，候选 Godot 轻量 3D 原型  
玩家承诺：玩家通过朝向、guard、counter window 和地形，在小型战术遭遇中击败更强敌人。

## 2. Pitch / 一句话方案

一个紧凑战棋原型：三名玩家单位在竞技场试炼中对抗一个更强 boss 单位和两个支援敌人。玩家通过控制朝向、诱导攻击、使用 guard/counter timing 和地形取胜。

## 3. Core Loop / 核心循环

```text
读取格子状态
  -> 选择单位
  -> 预览移动 / 朝向 / 技能
  -> 确认行动
  -> 结算敌方意图
  -> 更新 guard、counter window 和目标状态
  -> 循环直到 boss 被击败或队伍被击溃
```

## 4. Tactics Ruleset / 战棋规则集

- Grid / 格子：方格，小型竞技场，目标大小 8 x 8。
- Turns / 回合：player phase、enemy phase。
- Actions per unit / 单位行动：移动 + 一个行动。
- Facing / 朝向：front、side、back 会影响 counter 和伤害修正。
- Guard / 防御姿态：降低正面伤害，如果时机/位置规则成立则开启 counter window。
- Counter / 反击：在 guarded enemy attack 后触发，前提是目标有 stamina。
- Stamina / 体力：guard 和 counter 消耗，回合开始恢复。
- Terrain / 地形：blocked tiles、cover tiles、hazard tiles、objective tiles。

## 5. Grid Map Spec / 格子地图规格

最小地图：

- 一条 central boss lane / boss 中央通道。
- 两组 side cover clusters / 侧翼掩体。
- 一条 hazard strip / 危险带。
- 两个 objective tiles / 目标格，迫使玩家重新站位。
- 玩家和敌方 spawn zones / 出生区。

可读性要求：blocked tiles、cover、hazard、movement range、attack range、selected unit、facing 和 objective state 必须在 tactical camera / 战术镜头下保持可见。

## 6. Unit Matrix / 单位矩阵

| Unit | 阵营 | 职责 | 关键数值 | 原型目的 |
|---|---|---|---|---|
| Vanguard / 先锋 | Player | guard/counter tank | 高 guard，中等移动 | 验证朝向与反击 |
| Striker / 突击手 | Player | flanker | 高伤害，低 guard | 验证侧后攻击选择 |
| Support / 支援 | Player | heal/buff | 低伤害，支援技能 | 验证支援时机 |
| Boss | Enemy | heavy threat | 高 HP，有预告攻击 | 验证威胁读取 |
| Skirmisher / 游击者 | Enemy | flanker | 高移动 | 验证站位压力 |
| Drone / 机兵 | Enemy | objective pressure | 低 HP，远程骚扰 | 验证目标优先级 |

## 7. Ability Spec / 技能规格

| Ability | 拥有者 | 范围 | 目的 | 可读性需求 |
|---|---|---|---|---|
| Guard Stance | Vanguard | self | 降低正面伤害，开启 counter | guard icon 和 facing arrow |
| Counter Strike | Vanguard | melee | 惩罚被防住的攻击 | counter VFX marker |
| Flank Slash | Striker | melee side/back | 奖励站位 | side/back preview marker |
| Rally Patch | Support | 2 tiles | 恢复 stamina 或少量 HP | support VFX marker |
| Heavy Swing | Boss | frontal cone | 有预告的高伤害 | attack range marker |
| Harass | Skirmisher | melee | 压制弱单位 | intent marker |

## 8. Mission Brief / 任务 Brief

目标：在三名玩家单位被击溃前击败 Boss。  
次目标：至少占住一个 objective tile 两回合，以获得 stamina recovery。  
失败：全部玩家单位被击败，或 boss rage timer 到达 6 回合。

## 9. Tactical AI Brief / 战术 AI Brief

敌方 AI 必须可读：

- Boss 优先攻击最近的正面目标，并预告 Heavy Swing。
- Skirmisher 优先侧后攻击 low-guard units。
- Drone 压制 objective tiles 或 weakened units。
- AI 不使用隐藏信息。

## 10. Prototype Design Gate / 原型设计门

Prototype goal / 原型目标：验证 facing、guard 和 counter 是否能形成有意义的战术决策。  
Playable promise / 最小可玩承诺：30 秒内，玩家能选择单位、预览移动、看到朝向，并理解一个敌方威胁。  
Content scope / 内容范围：一张小地图、三个玩家单位、三个敌方单位、六个技能。  
Placeholder policy / 占位策略：结构占位只用于格子和碰撞；单位必须使用 readable prototype assets / 可读原型资源。  
Validation plan / 验证计划：一个手动试玩脚本、一份 dry run checklist、移动/攻击/朝向可读性的截图证据。  
Cut list / 可砍列表：先砍 Support，再砍 hazard tiles，但保留 facing、guard、counter 和 player/enemy proxies。

## 11. Godot Prototype Asset Kit Needs / Godot 原型资产包需求

需要的 readable prototype assets / 可读原型资源：

- Player proxy / 玩家代理：阵营色、facing arrow、selected state。
- Enemy proxy / 敌方代理：敌对颜色、intent marker、facing arrow。
- NPC / neutral proxy / NPC 或中立代理：本 dry run 可选。
- Grid tile / 可行走格。
- Blocked tile / 阻挡格。
- Cover tile / 掩体格。
- Hazard tile / 危险格。
- Move range marker / 移动范围标记。
- Attack range marker / 攻击范围标记。
- Selection ring / 选择环。
- Facing arrow / 朝向箭头。
- Objective marker / 目标标记。
- Simple VFX marker / guard、counter、hit、support 简单特效标记。

资产状态目标：`Readable Prototype Asset`。  
本 dry run 不生成或导入 `.glb` / `.gltf` 文件。

## 12. Playtest Questions / 试玩问题

- 玩家能否在确认行动前理解朝向？
- guard/counter 是战术决策，还是看起来像隐藏反应？
- range markers 是否遮挡单位状态？
- 敌方意图是否可读？
- objective tile 是否改变了移动决策？

## 13. Handoff / 后续交接

后续已批准任务可以拆成：

- Tactics mechanic spec / 战棋机制规格。
- Godot scene/resource mapping plan / Godot 场景与资源映射计划。
- Godot Prototype Asset Kit asset briefs / Godot 原型资产包资产 brief。
- Playtest checklist / 试玩检查清单。

每项都必须在 review approval 后，才能进入实现、资产生成或导入。
