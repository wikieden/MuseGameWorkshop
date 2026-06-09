# 文档模板索引

版本：v0.3

语言：中文

## 1. 用途

本文件定义 Muse Game Workshop 模板体系，并以 `v0.1-manifest.zh.md` 为 v0.1 实际落地唯一真源。模板目标不是写长文档，而是让策划、机制、实现、创意资产、试玩和发布有稳定记录。

本文件中的 v0.1 模板子集固定为 22 个。v0.3 在不改变 v0.1 manifest 边界的前提下，补充 `animation-brief`、`music-brief`、`sfx-brief`、`asset-integration` 和 `ai-asset-disclosure`，用于 Creative Production Ready 的资产管线验证。

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
