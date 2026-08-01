# Boss Rush Action Design Dry Run

Version: v0.6

Language: English

Paired Document: [boss-rush-action-design-dry-run.zh.md](boss-rush-action-design-dry-run.zh.md)

## 1. Test Goal

Validate that the v0.6 Game Design & Systems workflow can move Boss Rush / Counter Trial from core loop into a handoff-ready Action design package.

This dry run creates no new Godot files and changes no existing implementation parameters. It validates the design handoff chain only.

## 2. Game Pillars

| Pillar | Player Promise | Design Impact | Playtest Signal |
|---|---|---|---|
| Readable Danger | Players can read boss attacks and counter windows | windup, range, UI state, and audio must be clear | after failure, players can say whether they were early, late, or misplaced |
| Skillful Counterplay | Successful defense turns into active damage | parry and counter windows must create risk/reward | players intentionally wait for the opening instead of only fleeing |
| Fast Retry | Failure can immediately restart | compact arena, short loop, clear R retry | players are willing to run three tuning rounds |

## 3. System Design Brief

System goal: let players progress through a three-phase boss by reading attacks, defending, and countering.

Core states:

| System | States | Trigger | Handoff |
|---|---|---|---|
| Player defense | neutral, dodging, parrying, staggered | Space, F, boss hit | gameplay programming, animation, audio |
| Counter window | closed, open, expired | successful parry, timer end | UI, VFX, audio |
| Boss phase | phase 1, phase 2, phase 3, defeated | boss health threshold | level design, audio, QA |
| Stamina | available, spent, recovering | dodge, parry, counter | UI, tuning, QA |

Excluded scope: new enemies, progression, equipment, complex economy, final animation, and final audio.

## 4. Combat Design Brief

Player verbs:

- Move.
- Dodge.
- Parry.
- Counter.
- Retry.

Boss verbs:

- Windup.
- Strike.
- Recover.
- Phase shift.

Key windows:

| Window | Intent | Initial Suggestion | Tuning Risk |
|---|---:|---:|---|
| boss windup | give players time to read danger | 0.8s | too short feels unfair, too long removes pressure |
| parry active | reward precise defense | 0.25s | too short frustrates, too long trivializes defense |
| counter window | turn defense into offense | 0.9s | too short loses feedback, too long softens pacing |
| stamina recovery | limit repeated defense | 1.2s | too slow blocks experimentation, too fast removes resource pressure |

Feedback needs:

- Counter window opening needs HUD or VFX feedback.
- Successful counter needs clear audio and boss-hit feedback.
- Failed parry should distinguish early input, late input, and low stamina.

## 5. Encounter Design Brief

Encounter goal: repeatedly validate reading, defense, countering, and retry in a compact arena.

Space requirements:

- Player starts at mid range from the boss.
- Arena boundary is clear, but difficulty does not come from complex terrain.
- UI does not block boss windup.
- After failure, the player can retry the same test within 3 seconds.

Playtest questions:

- Can players understand boss windup in the first round?
- Do players know when to press F and J?
- Does a successful counter provide enough positive feedback?
- Does phase 3 create a new decision pressure instead of only higher numbers?

## 6. Tuning Plan

| Parameter | Suggested Range | Player-facing Effect | Risk If Too Low | Risk If Too High | Test Method |
|---|---:|---|---|---|---|
| boss_windup_time | 0.6-1.0s | threat readability | unfair | no pressure | 3-round read test |
| parry_window | 0.18-0.32s | precise-defense difficulty | frustration | mindless parry | success-rate record |
| counter_window | 0.7-1.1s | defense-to-offense rhythm | missed feedback | slow pacing | counter hit rate |
| stamina_cost_dodge | 15-25 | movement cost | endless fleeing | movement avoidance | dodge count |
| boss_phase_threshold | 65% / 35% | phase rhythm | too little change | too frequent change | time to phase |

## 7. Playtest Hypotheses

| Hypothesis | Steps | Success Signal | Failure Signal | Next Step |
|---|---|---|---|---|
| If boss windup stays at 0.8s, players will learn the tell within three rounds because the danger is visible | self-test 3 rounds and record failure reasons | by round 3 the player intentionally parries | the player still cannot explain the tell | tune windup or VFX |
| If counter window is 0.9s, players will convert successful parries into J counters | record whether counter follows parry | counter hit rate above 60% | parries succeed but counters are often missed | extend window or strengthen HUD |
| If stamina limits repeated dodges, players will attempt parries instead of only fleeing | record dodge/parry ratio | parry usage increases | player circles until boss whiffs | tune stamina and boss tracking |

## 8. Handoff Check

- Systems, combat, encounter, tuning, and playtest hypotheses reference each other.
- Programmers can find initial implementation ranges from the parameter table.
- QA can turn hypotheses into test steps.
- Art and audio can see prototype feedback priorities from feedback needs.

Review Decision: Pass for v0.6 design dry run.

