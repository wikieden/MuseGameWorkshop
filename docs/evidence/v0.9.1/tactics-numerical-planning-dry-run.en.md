# Tactics Numerical Planning Dry Run

Version: v0.9.1

Language: English

Review Status: Approved

## Sample Context

Genre: Tactics / turn-based tactics.

Working title: Counter Grid.

This no-code dry run validates how level curve, combat parameters, and system numbers connect to v0.9 Economy & Progression.

## Validation Coverage

- Level curve.
- Combat parameter table.
- System numerical plan.
- TTK, EHP, and DPR.
- action points.
- stamina.
- cooldown.
- mission reward.
- failure compensation.

## Experience Targets

| Target | Value | Reason |
|---|---:|---|
| Mission length | 6 turns | Keeps the test compact. |
| Normal enemy TTK | 2 turns | Encourages active play without removing positioning. |
| Elite enemy TTK | 3 turns | Creates target-priority decisions. |
| First boss phase | 4 turns | Validates cooldown and stamina planning. |
| First meaningful unit level | Level 2 | Unlocks one active skill choice. |

## Anchor Points

| Anchor | Player State | Enemy / Content State | Unlock | Validation Target |
|---|---|---|---|---|
| Level 1 | 3 units, 2 action points, 5 stamina | Normal enemies only | Basic attack, guard, move | Player understands action economy. |
| Level 2 | One unit gains second skill slot | One elite enemy appears | Control or burst skill choice | Player can explain build choice. |
| First boss | Squad has 1 upgraded skill | Boss has two readable phases | Cooldown pressure | TTK and stamina pressure are visible. |
| Chapter 2 start | Squad supply cap increases | Terrain hazards appear | Tactical cooldown mod | System numbers create new decisions. |

## Combat Parameter Table

| Actor | Level / Tier | HP | Damage Reduction | EHP | Base Damage | Hit Rate | DPR | TTK Target |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Player striker | 1 | 24 | 0.00 | 24 | 8 | 0.85 | 6.8 | 3.5 vs self |
| Normal enemy | 1 | 14 | 0.00 | 14 | 5 | 0.75 | 3.8 | 2 vs striker |
| Elite enemy | 2 | 22 | 0.10 | 24.4 | 7 | 0.75 | 5.3 | 3 vs striker |
| First boss phase | 3 | 45 | 0.15 | 52.9 | 9 | 0.80 | 7.2 | 4-5 vs squad |

## Action Economy

| Actor | Action Points | Move Range | Attack Range | Skill Cost | Cooldown | Stamina Cost | Stamina Recovery | Threat Range |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Player unit | 2 | 4 | 1-3 | 1-2 AP | 2 turns | 1-2 | +1 on rest | 5 |
| Normal enemy | 2 | 3 | 1 | 1 AP | 1 turn | 0 | 0 | 4 |
| Elite enemy | 2 | 4 | 1-2 | 2 AP | 2 turns | 0 | 0 | 5 |
| Boss phase | 3 | 3 | 1-4 | 2 AP | 2 turns | 0 | 0 | 6 |

## System Numerical Plan

| Parameter | System | Target | Affects | Validation Method |
|---|---|---:|---|---|
| Mission reward supplies | Economy | 50 | Recovery and retry prep | One clear funds light recovery but not full recovery. |
| Level 2 skill cost | Progression | 3 medals | First build choice | Two missions or one optional objective can unlock it. |
| Failure compensation | Retry | 1 medal first failure | Fail-forward | First failure helps retry but cannot be farmed. |
| Heavy skill stamina cost | Combat | 2 | Burst pacing | Same unit cannot spam burst every turn. |

## Tuning Hypothesis

If normal enemies die in about 2 turns and elites die in about 3 turns, then players will focus fire while still using control skills, because target priority has visible payoff without flattening the encounter.

Validation:

- Run three standard encounters.
- Count whether players use control skills at least once.
- Count whether heavy skill is used every cooldown.
- Record whether stamina reaches 0 before turn 5.

## Exclusions

- No Godot or Unreal files.
- No real telemetry service.
- No commercial backend, payment, monetization, or paid-content design.
- No asset generation.
- No release balance approval.
