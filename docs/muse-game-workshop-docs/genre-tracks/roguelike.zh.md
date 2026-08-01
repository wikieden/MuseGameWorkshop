# Roguelike / 肉鸽类型分支

状态：Draft  
版本范围：v0.8  
Review Status: Approved

## Player Promise / 玩家承诺

玩家在不确定选择中推进一局 run，承担风险、构建强度，并从失败中学习。

## Core Loop Emphasis / 核心循环重点

```text
开始 run -> 遭遇事件/战斗 -> 选择风险收益 -> 获得资源或强化 -> 调整 build -> 失败或通关 -> 改进下一局
```

## Required Deliverables / 必要交付物

- run structure / 单局结构。
- encounter pool / 遭遇池。
- reward and upgrade table / 奖励与升级表。
- resource pressure model / 资源压力模型。
- failure and recovery notes / 失败与恢复说明。
- procedural content constraints / 程序化内容约束。
- run 节奏和选择质量 playtest checklist。

## Prototype Validation / 原型验证

原型必须证明每局都有有意义的决策、可读的风险，以及再来一局的理由。

## Asset And UX Needs / 资产与 UX 需求

- 房间、节点或遭遇 marker 必须表达风险和奖励。
- 升级选择需要可读的类别与取舍标记。
- 如果决策可读性足够强，原型视觉可以偏符号化。

## QA And Playtest Checks / 测试与试玩检查

- 玩家能否理解一局为什么成功或失败？
- 选择之间是否有实际差异？
- 随机性是否创造变化，而不是隐藏规则？

## Explicit Exclusions / 明确不做

- 完整程序化生成系统。
- 大型道具池。
- 局外成长经济。
- 在线平衡后台。
