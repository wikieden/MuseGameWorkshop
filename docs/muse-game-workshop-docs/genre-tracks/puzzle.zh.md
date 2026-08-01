# Puzzle / 解谜类型分支

状态：Draft  
版本范围：v0.8  
Review Status: Approved

## Player Promise / 玩家承诺

玩家理解一套规则，进行实验，发现解法，并认为答案公平。

## Core Loop Emphasis / 核心循环重点

```text
观察规则 -> 尝试行动 -> 读取结果 -> 形成假设 -> 解出或修正 -> 前进
```

## Required Deliverables / 必要交付物

- rule set / 规则集。
- object behavior table / 物件行为表。
- level or puzzle sequence / 关卡或谜题序列。
- hinting and failure feedback plan / 提示与失败反馈计划。
- difficulty curve notes / 难度曲线说明。
- 公平性和可读性 playtest checklist。

## Prototype Validation / 原型验证

原型必须证明谜题可理解、可解，并且不依赖隐藏信息。

## Asset And UX Needs / 资产与 UX 需求

- 可交互状态和约束必须视觉明确。
- 无效操作反馈应该教规则，而不是直接给答案。

## QA And Playtest Checks / 测试与试玩检查

- 玩家能否从反馈推断规则？
- 谜题是否存在非预期解法？
- 失败状态是否可恢复？

## Explicit Exclusions / 明确不做

- 大型谜题战役。
- 完整提示系统。
- 最终场景美术。
- 大量叙事内容。
