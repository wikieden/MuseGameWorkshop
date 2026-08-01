# Action / 动作类型分支

状态：Draft  
版本范围：v0.8  
Review Status: Approved

## Player Promise / 玩家承诺

玩家做出精确、可读、依赖时机的操作，并立即获得反馈。

## Core Loop Emphasis / 核心循环重点

```text
读取威胁 -> 选择移动 / 攻击 / 防御 -> 执行时机 -> 获得反馈 -> 重新站位 -> 循环
```

## Required Deliverables / 必要交付物

- combat verb list / 战斗动作列表。
- input and timing spec / 输入与时机规格。
- enemy behavior brief / 敌人行为 brief。
- hit、dodge、guard、parry、counter、recovery 状态说明。
- camera and feedback requirements / 镜头与反馈需求。
- 手感和可读性 playtest checklist。

## Prototype Validation / 原型验证

原型必须先证明输入响应、时机窗口、威胁可读性、失败恢复和反馈清晰度，再扩展内容量。

## Asset And UX Needs / 资产与 UX 需求

- 玩家和敌人轮廓必须可读。
- 攻击预告、受击反应、选中、伤害和危险区需要清楚的临时反馈。
- 可使用 mannequin-style robot proxy / 机器人代理角色或同等可读原型资源，但必须记录 provenance 和 license。

## QA And Playtest Checks / 测试与试玩检查

- 玩家能否识别威胁、距离和时机？
- 失败输入是玩家操作问题、数值问题，还是反馈不清？
- 镜头是否保留动作可读性？

## Explicit Exclusions / 明确不做

- 最终动画质量。
- 完整敌人阵容。
- 最终 VFX/audio mix。
- 发布级数值调优。
