# Tactics / 战棋类类型分支

状态：Draft  
版本范围：v0.8  
Review Status: Approved

## Player Promise / 玩家承诺

玩家读取战术局面，在空间约束下选择单位行动，并通过站位、技能时机和风险管理获胜。

## Core Loop Emphasis / 核心循环重点

```text
读取地图状态 -> 选择单位 -> 预览移动 / 攻击 / 技能 -> 确认行动 -> 敌方响应 -> 更新目标 -> 循环
```

## Required Deliverables / 必要交付物

- tactics ruleset / 战棋规则集。
- grid or spatial map spec / 格子或空间地图规格。
- Unit Matrix / 单位矩阵。
- Ability Spec / 技能规格。
- terrain and cover rules / 地形与掩体规则。
- mission brief / 任务 brief。
- encounter table / 遭遇表。
- tactical AI brief / 战术 AI brief。
- UI and readability spec / UI 与可读性规格。
- tactics playtest checklist / 战棋试玩检查清单。
- Godot Prototype Asset Kit needs / Godot 原型资产包需求。

## Prototype Validation / 原型验证

原型必须证明：

- 移动规则清楚。
- 攻击和技能范围可读。
- 单位职责可区分。
- 敌方响应可理解。
- 任务目标会改变玩家决策。
- 玩家能在确认行动前预测后果。

## Asset And UX Needs / 资产与 UX 需求

战棋类原型比普通 3D 原型更依赖可读性。Godot 最小资产需求：

| 资产 | 必要可读性 |
|---|---|
| Player proxy / 玩家代理 | 阵营色、选中状态、朝向、职责 |
| Enemy proxy / 敌方代理 | 敌对颜色、意图或威胁状态、朝向 |
| NPC / neutral proxy / NPC 或中立代理 | 非敌对职责和交互状态 |
| Grid tile / 格子 | 可行走空间和坐标可读性 |
| Blocked tile / 阻挡格 | 障碍或不可移动状态 |
| Move range marker / 移动范围标记 | 不遮挡单位状态的移动区域 |
| Attack range marker / 攻击范围标记 | 与移动范围区分 |
| Selection ring / 选择环 | 选中单位、目标和 hover 状态 |
| Facing arrow / 朝向箭头 | 朝向影响规则时表达 orientation |
| Objective marker / 目标标记 | 占领、防守、撤离或交互目标 |
| Simple VFX marker / 简单特效标记 | hit、guard、heal、buff、debuff 或状态反馈 |

这些是 Readable Prototype Asset / 可读原型资源要求，不是最终美术。真实 `.glb` / `.gltf` 文件需要单独批准的资产任务。

## QA And Playtest Checks / 测试与试玩检查

- 玩家能否从 tactical camera / 战术镜头下识别我方、敌方、中立单位、目标和阻挡空间？
- 玩家能否预览移动、攻击、技能和朝向后果？
- 范围 marker 是否遮挡关键单位状态？
- 任务目标是否带来有意义的决策？
- 敌方行为是否可读，而不是任意发生？

## Explicit Exclusions / 明确不做

- 完整战役。
- 完整 tactical AI / 战术 AI。
- 最终单位模型。
- 生成或导入 `.glb` / `.gltf` 文件。
- review approval 前的引擎实现。
