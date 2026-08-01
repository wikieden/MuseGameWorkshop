# Tactics Design Dry Run

Version: v0.6

Language: English

Paired Document: [tactics-design-dry-run.zh.md](tactics-design-dry-run.zh.md)

## 1. Test Goal

Validate that the v0.6 Game Design & Systems workflow can support Tactics without starting the full v0.7 genre-track package early.

This dry run only creates design handoffs for rules, grid, units, abilities, mission objectives, and playtest hypotheses. It creates no engine files.

## 2. Game Pillars

| Pillar | Player Promise | Design Impact | Playtest Signal |
|---|---|---|---|
| Clear Tactical Choice | Each turn has at least two meaningful options | movement, attacks, abilities, and terrain must create tradeoffs | players can explain why they chose a unit action |
| Readable Grid State | Players can understand threat range and mission goals | grid, range, terrain, and unit state must be clear | players do not need to guess enemy reach |
| Short Mission Proof | One mission can validate rules in 10-15 minutes | compact map, few units, clear objective | three self-test rounds can compare skill and terrain value |

## 3. System Design Brief

System goal: let players make tactical decisions through positioning, abilities, and objective priority in a compact tactics mission.

Core systems:

| System | States | Trigger | Handoff |
|---|---|---|---|
| Turn order | player turn, enemy turn, mission end | all units acted, objective complete | programming, QA |
| Grid movement | selectable, reachable, blocked, occupied | unit selected, terrain check | map, UI, programming |
| Unit action | idle, moving, acting, spent, defeated | move, skill, damage | combat, animation, audio |
| Mission objective | active, progressing, complete, failed | enemy defeated, tile held, turn limit | level design, QA |

Excluded scope: large class systems, full quest lines, complex economy, online PvP, random maps, and automatic balancing.

## 4. Rules / Combat Design Brief

Player verbs:

- Select unit.
- Move.
- Use ability.
- Wait.
- End turn.

Enemy verbs:

- Approach.
- Attack weakest exposed unit.
- Hold objective.

Base rules:

| Rule | v0.6 Suggestion | Design Intent |
|---|---|---|
| Grid | 8x8 square grid | compact map is enough to test positioning |
| Player units | 3 | enough choice without sprawl |
| Enemy units | 4 | pressure and surround risk |
| Action economy | move + one action | readable action structure |
| Terrain | normal, cover, hazard | validate terrain tradeoffs |
| Win condition | defeat captain or hold tile 2 turns | supports kill and objective routes |

## 5. Unit Matrix

| Unit | Role | Move | HP | Ability | Design Intent |
|---|---|---:|---:|---|---|
| Vanguard | front line | 4 | 12 | Guard adjacent ally | protect fragile units |
| Striker | burst damage | 5 | 8 | Dash strike | create high-risk kills |
| Adept | control | 3 | 7 | Slow zone | change enemy routes |
| Enemy Guard | pressure | 3 | 6 | Shield wall | force flanking |
| Enemy Captain | objective | 4 | 14 | Rally | create mission pressure |

## 6. Encounter Design Brief

Mission goal: validate two victory routes, defeating the captain or holding a tile for two turns, on an 8x8 map.

Map structure:

- Player enters from lower left.
- Enemy Captain starts at upper right near cover.
- Central tile can be held.
- Two hazard tiles create route and control tradeoffs.
- No elevation is used, so v0.6 stays focused.

Playtest questions:

- Can players understand both victory routes?
- Does cover clearly change positioning?
- Is Vanguard protection worth an action?
- Does Adept slow zone create tactical value?
- Is enemy AI targeting readable?

## 7. Tuning Plan

| Parameter | Suggested Range | Player-facing Effect | Risk If Too Low | Risk If Too High | Test Method |
|---|---:|---|---|---|---|
| grid_size | 8x8 | mission readability load | not enough tactical space | turns become travel-heavy | completion time |
| player_unit_count | 3 | squad choice complexity | too few choices | decision overload | per-turn thinking time |
| enemy_unit_count | 3-5 | pressure | no challenge | unfair surround | failure reason record |
| cover_reduction | 25%-40% | terrain value | not worth using | excessive turtling | cover usage rate |
| mission_turn_limit | 6-8 turns | pacing pressure | too rushed | no objective pressure | win/loss turn count |

## 8. Playtest Hypotheses

| Hypothesis | Steps | Success Signal | Failure Signal | Next Step |
|---|---|---|---|---|
| If the mission offers both captain kill and tile-hold routes, players will choose based on position instead of only killing nearest enemies | self-test 3 rounds and record route choice | at least two routes are attempted | players only clear enemies | strengthen objective feedback |
| If cover reduces damage by 30%, players will intentionally advance through cover | record how often units stop in cover | cover is actively used | players ignore cover | improve terrain hints |
| If Adept has slow zone, players will use control to change enemy approach routes | record how slow zone affects enemy actions | at least one surround is prevented | ability is ignored | tune range or enemy goals |

## 9. Handoff Check

- Rules, grid, units, abilities, terrain, and mission objectives reference each other.
- Programmers can infer data structures from the rules table.
- Level designers can sketch a graybox from the map structure.
- QA can turn hypotheses into test cases.
- v0.7 can expand a full Tactics genre track from this base.

Review Decision: Pass for v0.6 design dry run.

