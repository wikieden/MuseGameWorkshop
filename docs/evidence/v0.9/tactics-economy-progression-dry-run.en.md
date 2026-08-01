# Tactics Economy & Progression Dry Run

Version: v0.9

Language: English

Review Status: Approved

## Sample Game Context

Genre: Tactics / turn-based tactics.

Working title: Counter Grid.

Player promise: win compact tactical missions by spending action points, managing stamina, timing cooldowns, and building a small squad through readable upgrades.

This dry run is no-code. It validates deliverables only.

## Validation Coverage

- Action points.
- Stamina.
- Cooldowns.
- Mission rewards.
- Secondary objective rewards.
- Failure compensation.
- Unit level.
- Skill unlocks.

## Economy Model

| Resource | Scope | Source | Sink | Pressure |
|---|---|---|---|---|
| Action points | Turn / unit | Start of unit turn, haste buff | Move, attack, overwatch, interact | Forces short-term positioning choices. |
| Stamina | Mission / unit | Mission start, rest action, camp recovery | Heavy skills, guard break, emergency dodge | Prevents repeating the strongest move every turn. |
| Cooldowns | Ability / unit | Ability use starts cooldown, turns reduce it | Ability availability | Creates timing windows and readable enemy turns. |
| Supplies | Mission / squad | Mission reward, secondary objective reward, salvage | Healing, repair, consumables, retry prep | Connects performance to next-mission readiness. |
| Training medals | Campaign / unit | Mission reward, optional challenge reward, failure compensation | Unit level, skill unlocks, class specialization | Supports progression without requiring perfect wins. |

## Progression Map

| Node | Unlock | Requirement | Cost | New Decision | Too Early Risk | Too Late Risk |
|---|---|---|---:|---|---|---|
| Unit level 2 | Second active skill slot | Complete 2 missions or spend training medals | 3 medals | Choose burst damage or control skill | Choice overload before the player understands roles | Early missions feel flat |
| Unit level 3 | Passive trait | Clear first boss mission | 5 medals | Commit to unit identity | Snowball from one strong unit | Squad lacks identity |
| Squad supply cap +1 | Extra carry slot | Complete optional supply objective | 40 supplies | Bring heal or trap counter | Economy becomes too forgiving | Failure spirals too hard |
| Tactical cooldown mod | Reduce one skill cooldown by 1 | Finish three missions with no unit downed | 6 medals | Build around timing windows | Dominant ability loop | Cooldowns feel static |

## Resource And Reward Table

| Source / Activity | Player Goal | Reward Type | Quantity / Range | Frequency | Scaling Rule | Failure Compensation | Secondary Objective Reward | Validation Method |
|---|---|---|---:|---|---|---|---|---|
| Standard mission clear | Complete objective | Supplies, training medals | 50 supplies, 2 medals | Each mission | +10 supplies per difficulty tier | 20 supplies, 1 medal after mission failure | None | Check if one clear funds one light recovery but not full recovery. |
| Rescue secondary objective | Save ally or escort unit | Supplies, skill token | 20 supplies, 1 token | Optional | No scaling before chapter 2 | None | Unlocks support skill choice | Check if objective changes route choice without becoming mandatory. |
| Perfect tactics bonus | No unit downed | Training medals | 1 medal | Optional | Max once per mission | None | Extra medal | Check if reward motivates mastery without blocking growth. |
| Failed boss attempt | Learn boss pattern | Training medals | 1 medal | First failure only | No scaling | 1 medal | None | Check fail-forward without enabling repeated farming. |

## Tuning Loop

Hypothesis: if heavy skills cost 2 stamina and cooldown for 2 turns, players will alternate between burst turns and repositioning turns instead of spamming the same attack.

Current values:

| Parameter | Current | Expected Effect |
|---|---:|---|
| Heavy skill stamina cost | 2 | Limits repeated burst. |
| Heavy skill cooldown | 2 turns | Creates timing windows. |
| Rest action recovery | +1 stamina | Makes recovery a tactical choice. |
| Mission clear supply reward | 50 | Funds partial recovery. |

Test scenario:

- Three-unit squad.
- Five enemy units.
- One optional rescue target.
- Six-turn mission pressure.

Observation method:

- Count how often heavy skill is used by the same unit.
- Count whether the player takes rest action at least once.
- Record whether the rescue objective changes route selection.
- Record whether failure compensation allows another attempt without removing resource pressure.

Decision rule:

- If heavy skill is used every cooldown without meaningful tradeoff, increase stamina cost or reduce stamina recovery.
- If players avoid heavy skill entirely, lower cost or improve feedback.
- If failure compensation enables farming, make it first-failure-only.

## Handoff Notes

- Game Designer delivers economy intent, reward rules, and progression map.
- Technical Designer converts resources and costs into data schema candidates.
- Gameplay Programmer waits for review before implementing action points, stamina, cooldowns, mission rewards, or unit level.
- QA / Playtest validates the tuning loop with explicit hypotheses.

## Exclusions

- No Godot scene, script, resource, or export file.
- No Unreal Blueprint, C++, Data Asset, UMG, or PIE map.
- No real telemetry platform.
- No payment or monetization design.
- No generated art or audio assets.
