# 文档模板索引

版本：v0.9.1

语言：中文

## 1. 用途

本文件定义 Muse Game Workshop 模板体系，并以 `v0.1-manifest.zh.md` 为 v0.1 实际落地唯一真源。模板目标不是写长文档，而是让策划、机制、实现、创意资产、试玩和发布有稳定记录。

本文件中的 v0.1 模板子集固定为 22 个。v0.3 在不改变 v0.1 manifest 边界的前提下，补充 `animation-brief`、`music-brief`、`sfx-brief`、`asset-integration` 和 `ai-asset-disclosure`，用于 Creative Production Ready 的资产管线验证。v0.6 继续补充 `system-design`、`combat-design`、`encounter-design`、`tuning-plan` 和 `playtest-hypothesis`，用于 Game Design & Systems / 策划与系统设计。v0.9 增加 `economy-model`、`progression-map`、`resource-reward-table` 和 `tuning-loop`，用于 Economy & Progression / 经济与成长。v0.9.1 增加 `level-curve`、`combat-parameter-table` 和 `system-numerical-plan`，用于 Numerical Planning / 数值规划。

所有模板都应遵循：

- 短。
- 可执行。
- 可验证。
- 可以被 AI coding tools 和创意 AI tools 读取和更新。
- 可以服务 Godot 与 Unreal 双引擎。
- 标明目标语言、目标用户群体、地区语境和术语来源。

所有模板必须以最小元数据开头：

```md
## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:
```

## 2. 推荐模板目录

```text
templates/design/
  pitch.md
  player-fantasy.md
  core-loop.md
  mechanic-spec.md
  content-matrix.md
  engine-mapping.md
  vertical-slice.md
  playtest-log.md
  balance-report.md
  decision-log.md
  release-checklist.md
  system-design.md
  combat-design.md
  encounter-design.md
  tuning-plan.md
  playtest-hypothesis.md
  economy-model.md
  progression-map.md
  resource-reward-table.md
  tuning-loop.md
  level-curve.md
  combat-parameter-table.md
  system-numerical-plan.md

templates/production/
  handoff-record.md
  review-gate.md
  acceptance-checklist.md
  milestone-plan.md

templates/creative/
  art-direction.md
  asset-brief.md
  animation-brief.md
  music-brief.md
  sfx-brief.md
  asset-provenance.md
  asset-review.md
  asset-integration.md
  ai-asset-disclosure.md

templates/ux/
  ux-flow.md
  level-blockout.md

templates/publishing/
  localization-readiness.md
```

## 3. pitch.md

```md
# Pitch

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## One-line Pitch

## Target Player

## Player Fantasy

## Core Player Verbs

## Reference Games

## Differentiation

## First Prototype Hypotheses

1.
2.
3.

## Target Platform

## Engine Preference

## Scope Notes
```

## 4. player-fantasy.md

```md
# Player Fantasy

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Player Identity

## Power Fantasy

## Emotional Promise

## Core Verbs

## What The Player Should Feel

## What The Game Must Not Promise
```

## 5. core-loop.md

```md
# Core Loop

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## 5-second Loop

- Goal:
- Action:
- Feedback:
- Failure:
- Reward:

## 30-second Loop

- Goal:
- Action:
- Feedback:
- Failure:
- Reward:

## 5-minute Loop

- Goal:
- Action:
- Feedback:
- Failure:
- Reward:

## 60-minute Loop

- Goal:
- Action:
- Feedback:
- Failure:
- Reward:

## Risk Points

## Validation Plan
```

## 6. mechanic-spec.md

````md
# Mechanic Spec

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Mechanic Name

## Design Intent

## Player Inputs

## State Machine
```mermaid
stateDiagram-v2
  [*] --> Idle
```

## Parameters

| Name | Default | Range | Purpose |
|---|---:|---:|---|

## Rules

## Feedback

- Visual:
- Audio:
- Camera:
- UI:
- Haptics:

## Edge Cases

## Test Cases

| Case | Setup | Action | Expected Result |
|---|---|---|---|

## Godot Mapping

## Unreal Mapping
````

## 7. content-matrix.md

```md
# Content Matrix

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Content Type

Enemy / Weapon / Skill / Level / Reward / Event

## Matrix

| ID | Name | Design Intent | Teaches | Counters | Combines With | Risk | Reward | Notes |
|---|---|---|---|---|---|---|---|---|

## Teaching Order

## Repetition Check

## Cut List
```

## 8. engine-mapping.md

```md
# Engine Mapping

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Engine-neutral Spec

## Godot Mapping

### Scenes

### Scripts

### Resources

### Signals

### InputMap

### Test Scene

### Validation

## Unreal Mapping

### C++

### Blueprint

### Data Assets

### Enhanced Input

### Animation

### UMG

### Test Map

### Validation

## Recommendation

## Migration Risks
```

## 9. vertical-slice.md

```md
# Vertical Slice Plan

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Slice Goal

## Validation Hypotheses

1.
2.
3.

## Must Have

## Should Have

## Cut List

## Asset Needs

## Test Scene / Test Map

## Playtest Plan

## Done When
```

## 10. playtest-log.md

```md
# Playtest Log

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Session Info

- Date:
- Version:
- Engine:
- Tester:
- Build:

## Target Hypotheses

## Observations

## Player Quotes

## Issues

| Category | Evidence | Possible Cause | Priority |
|---|---|---|---|

## Recommended Changes

## Next Test
```

## 11. balance-report.md

```md
# Balance Report

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Scope

## Current Parameters

## Problems

## Dominant Choices

## Meaningless Choices

## Difficulty Spikes

## Proposed Changes

| Parameter | Current | Proposed | Reason | Risk |
|---|---:|---:|---|---|

## Next Validation
```

## 12. decision-log.md

```md
# Decision Log

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

| Date | Decision | Options Considered | Reason | Follow-up |
|---|---|---|---|---|
```

## 13. release-checklist.md

```md
# Release Checklist

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Build

- [ ] Build succeeds.
- [ ] Version number updated.
- [ ] Packaging output checked.

## Input

- [ ] Keyboard/mouse.
- [ ] Controller.
- [ ] Rebinding or defaults checked.

## Save

- [ ] Save path correct.
- [ ] New game works.
- [ ] Restart and load works.

## UI

- [ ] Main menu.
- [ ] Pause.
- [ ] HUD.
- [ ] Resolution.

## Performance

- [ ] Target FPS.
- [ ] Loading time.
- [ ] Memory.

## AI Use

- [ ] AI-generated assets recorded.
- [ ] AI-assisted code noted if required.
- [ ] Store/platform disclosure checked.

## Store

- [ ] Screenshots.
- [ ] Trailer.
- [ ] Description.
- [ ] Controls.
- [ ] System requirements.
```

## 14. art-direction.md

```md
# Art Direction

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Visual Pillars

## Reference Works

## Excluded Directions

## Color / Shape / Material Rules

## UI Style Rules

## Asset Acceptance Criteria
```

## 15. asset-brief.md

```md
# Asset Brief

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Asset Purpose

## Gameplay Context

## Style References

## Technical Specs

## AI Tool Inputs

## Export Format

## Review Criteria
```

## 16. asset-provenance.md

```md
# Asset Provenance

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

| Asset | Tool | Prompt / Input | Model / Service | License | Human Edits | Approved For Release |
|---|---|---|---|---|---|---|
```

## 17. asset-review.md

```md
# Asset Review

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Style Consistency

## Gameplay Readability

## Technical Format

## License / Disclosure

## Decision

- [ ] Approved
- [ ] Needs revision
- [ ] Reject
```

## 18. ux-flow.md

```md
# UX Flow

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Main Flow

## Menu States

## HUD States

## Onboarding / Tutorial

## Settings

## Accessibility Notes
```

## 19. level-blockout.md

```md
# Level Blockout

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Level Goal

## Player Path

## Encounter Beats

## Sightlines

## Navigation Risks

## Difficulty Curve
```

## 20. localization-readiness.md

```md
# Localization Readiness

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Text Keys

## Fonts / Glyphs

## UI Overflow Risks

## Glossary

## Cultural Risk Notes
```

## 21. handoff-record.md

```md
# Handoff Record

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Upstream

## Downstream

## Trigger

## Deliverable

## Delivery Form

## Required Fields

## Acceptance Gate

## Evidence

## Next Workflow

## Owner
```

## 22. review-gate.md

```md
# Review Gate

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Gate Name

## Trigger

## Scope

## Submitted Deliverables

## Acceptance Criteria

## Blocking Issues

## Reviewer

## Owner

## Decision

- [ ] Approved
- [ ] Needs revision
- [ ] Rejected

## Decision Rationale

## Required Changes

## Evidence

## Next Workflow

## Follow-up Tasks
```

## 23. acceptance-checklist.md

```md
# Acceptance Checklist

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Scope

## Required Deliverables

## Required Evidence

## Review Method

## Blocking Issues

## Non-blocking Issues

## Approval Decision

- [ ] Accepted
- [ ] Accepted with follow-up
- [ ] Rejected

## Evidence Links

## Owner Sign-off
```

## 24. milestone-plan.md

```md
# Milestone Plan

## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
- Owner:
- Review Status:
- Last Updated:

## Milestone Name

## Goal

## Scope

## Required Deliverables

## Required Evidence

## Timeline

## Risks

## Review Gates

## Definition Of Done
```

## 25. v0.6 design systems templates

v0.6 新增 5 个设计模板，用来把 pitch、core loop 和 mechanic spec 扩展成可交接的系统、战斗、遭遇、调优和试玩假设。

| Template | 用途 | 主要下游 |
|---|---|---|
| `system-design.md` | 记录系统目标、状态模型、触发条件、参数和交接点。 | Technical Designer / 技术策划、Gameplay Programmer / 玩法程序、QA |
| `combat-design.md` | 记录玩家动词、敌人动词、时间窗口、风险回报和反馈需求。 | Combat Designer / 战斗策划、动画、美术、音频 |
| `encounter-design.md` | 记录遭遇目标、空间或任务布局、节奏、读图和试玩问题。 | Level Designer / 关卡策划、QA、场景美术 |
| `tuning-plan.md` | 记录参数、范围、玩家侧效果、过高/过低风险和测试方法。 | Technical Designer / 技术策划、QA、制作人 |
| `playtest-hypothesis.md` | 把设计判断改写成可观察假设、测试步骤和下一步决策。 | QA / 测试、Game Designer / 游戏策划、制作人 |

## 26. v0.9 Economy & Progression / 经济与成长模板

v0.9 增加 4 个设计模板，用于在引擎实现、后端工作、telemetry service 或资产生产之前，把经济系统和成长线讨论变成可 review 的制作记录。

| Template | 用途 | 主要使用者 |
|---|---|---|
| `economy-model.md` | 记录资源、产出、消耗、存储、转换、稀缺性、压力和平衡性风险。 | Game Designer / 游戏策划、Technical Designer / 技术策划、制作人 |
| `progression-map.md` | 记录解锁、节奏点、成本、追赶规则、失败推进规则和防刷边界。 | Game Designer / 游戏策划、Technical Designer / 技术策划、Level Designer / 关卡策划 |
| `resource-reward-table.md` | 记录关卡奖励、成本、失败补偿、次要目标奖励、缩放规则和验证方法。 | Game Designer / 游戏策划、Level Designer / 关卡策划、QA / 测试 |
| `tuning-loop.md` | 记录假设、当前值、建议改动、测试场景、观察、决策和下一轮验证。 | Technical Designer / 技术策划、QA / 测试、制作人 |

边界：

- 这些模板不批准商业化后台、支付、商业化设计、真实 telemetry service、引擎实现或资产生产。

## 27. v0.9.1 Numerical Planning / 数值规划模板

v0.9.1 增加 3 个设计模板，用于在实现前让等级、战斗和系统数值可 review。

| Template | 用途 | 主要使用者 |
|---|---|---|
| `level-curve.md` | 记录体验目标、锚点、等级曲线、解锁、TTK/EHP/DPR 目标、追赶规则和防刷规则。 | Game Designer / 游戏策划、Technical Designer / 技术策划、制作人 |
| `combat-parameter-table.md` | 记录公式、角色基准、行动经济、冷却、体力、范围、威胁、反馈和调优假设。 | Combat Designer / 战斗策划、Technical Designer / 技术策划、Gameplay Programmer / 玩法程序、QA / 测试 |
| `system-numerical-plan.md` | 记录跨系统参数、奖励/成本/节奏连接、依赖检查和 dry-run notes。 | Technical Designer / 技术策划、Game Designer / 游戏策划、制作人、QA / 测试 |

边界：

- 这些模板不批准引擎实现、真实 telemetry、商业化后台、支付、资产生成或 release balance / 发布版本最终平衡。
- 下一主版本仍然是 v0.10 Telemetry & Playtest Analytics / 数据埋点与试玩分析。

这些模板不绑定 Godot 或 Unreal，也不代表可以跳过 review gate 直接改实现。
