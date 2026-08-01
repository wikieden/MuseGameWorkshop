# Game Design & Systems

Version: v0.6

Status: Complete

Language: English

Paired Document: [game-design-systems.zh.md](game-design-systems.zh.md)

## 1. Version Positioning

v0.6 is the Game Design & Systems version.

It does not add new Godot or Unreal features, and it does not start the full genre-track package early. It turns pitch, core loop, and mechanic specs into a handoff-ready design package that Game Designers, Technical Designers, Combat Designers, Level Designers, Gameplay Programmers, QA, artists, and audio owners can all use.

The core acceptance test for v0.6 is:

- The gameplay intent is readable to downstream disciplines.
- System rules, combat behavior, encounters, parameters, and playtest hypotheses can reference each other.
- Boss Rush / Action and Tactics can each complete one design dry run.
- The package remains engine-neutral and creates no new Godot or Unreal files.

## 2. Production Stage

v0.6 sits between late Pre-production and early Prototype validation.

The deliverables must answer:

- Why is this gameplay worth building?
- What does the player decide every 5 seconds, 30 seconds, and 5 minutes?
- Which system rules support the core loop?
- How should combat or interaction parameters be tuned?
- What does an encounter validate?
- Which playtest hypothesis is being tested instead of collecting vague preference notes?

## 3. Roles And Handoffs

| Role | Responsibility | Deliverable | Downstream Users |
|---|---|---|---|
| Game Designer | Design pillars, player goals, core loop, system intent | game pillars, system design brief | Producer, Technical Designer, programmers, QA |
| Technical Designer | States, parameters, data shape, tuning handles, edge cases | system design brief, tuning plan | Gameplay Programmer, engine adapters, QA |
| Combat Designer | Attack/defense rhythm, skill windows, tells, feedback, risk/reward | combat design brief | Gameplay Programmer, animation, art, audio |
| Level Designer | Encounter goal, spatial rhythm, objectives, navigation and readability | encounter design brief | environment art, QA, programmers |
| QA | Validation paths, reproduction steps, test boundaries, severity | playtest hypothesis, playtest notes | designers, programmers, producer |
| Producer | Scope, milestones, review gates, risk tradeoffs | decision log, review gate | full team |

## 4. v0.6 Package

v0.6 must produce these documents or filled template examples:

1. Game Pillars.
2. System Design Brief.
3. Combat Design Brief.
4. Encounter Design Brief.
5. Tuning Plan.
6. Playtest Hypothesis.
7. Boss Rush Action Design Dry Run.
8. Tactics Design Dry Run.
9. v0.6 Review Gate.
10. v0.6 Evidence.

## 5. Game Pillars

Game pillars constrain every later system and content decision.

Each pillar must include:

- Player promise.
- Design implication for systems, levels, and feedback.
- What to cut when work violates the pillar.
- Test signal that proves the pillar is working.

Example:

| Pillar | Player Promise | System Implication | Playtest Signal |
|---|---|---|---|
| Readable Danger | Players fail because they misread or choose poorly, not because the game is unclear | boss windups, terrain threats, and ability ranges must be clear | players can describe why they failed |
| Skillful Counterplay | Successful defense can turn into an active opening | parry, counter, cooldowns, and stamina must form risk/reward decisions | players intentionally wait for counter windows |
| Small Repeatable Arena | One test run can quickly repeat the same decision loop | encounters and maps stay compact and short-cycle | three self-test rounds can compare tuning changes |

## 6. System Design Brief

The system design brief explains how rules connect.

It must include:

- System goal.
- Core states.
- Inputs and trigger conditions.
- Resources, cooldowns, or limits.
- Key parameters.
- Feedback events.
- Handoff points for level, UI, audio, art, and QA.
- Explicit exclusions for this stage.

v0.6 does not require complex economy, progression, or backend data. Resource, reward, and progression design enters v0.9 Economy & Progression.

## 7. Combat Design Brief

The combat design brief focuses on playable attack and defense.

It must include:

- Player verbs.
- Enemy or hazard verbs.
- Timing windows.
- Risk and reward.
- Cancel, interrupt, invulnerability, and failure rules.
- Visual, audio, UI, camera, or haptic feedback needs.
- Tuning handles.
- Acceptance checks.

## 8. Encounter Design Brief

The encounter design brief explains what a space or mission validates, before it becomes a final level.

It must include:

- Encounter goal.
- Player start and retry flow.
- Enemy, hazard, terrain, objective, and pickup placement.
- Readability and pacing.
- Expected player decisions.
- Playtest questions.

## 9. Tuning Plan

A tuning plan is more than a parameter list. It explains why each parameter exists and what changing it affects.

It must include:

- Parameter.
- Current value or proposed range.
- Player-facing effect.
- Risk if too low.
- Risk if too high.
- Test method.
- Decision owner.

v0.6 parameters can live in documents or examples. They do not need to be written into engine code.

## 10. Playtest Hypothesis

Playtest hypotheses turn "I think this feels good" into observable evidence.

Format:

```text
If [design change or condition],
then [player behavior or outcome],
because [design rationale].
We will know this is true when [observable evidence].
```

Each hypothesis must bind:

- Test scenario.
- Steps.
- Observation metric.
- Success signal.
- Failure signal.
- Next decision: continue, adjust, cut, or retest.

## 11. Boss Rush Design Dry Run

Boss Rush / Counter Trial validates the Action handoff chain.

This dry run covers:

- Player movement, dodge, parry, and counter.
- boss windup, attack, counter window, and phase changes.
- stamina, counter window, boss health, and phase threshold parameters.
- a compact arena encounter.
- three self-test hypotheses.

Evidence files:

- [boss-rush-action-design-dry-run.zh.md](../evidence/v0.6/boss-rush-action-design-dry-run.zh.md)
- [boss-rush-action-design-dry-run.en.md](../evidence/v0.6/boss-rush-action-design-dry-run.en.md)

## 12. Tactics Design Dry Run

Tactics validates whether the same design workflow can serve a different gameplay structure.

This dry run covers design only. It does not become the full v0.7 genre track.

Scope:

- Turn structure.
- Grid map.
- Unit matrix.
- Ability specs.
- Terrain rules.
- Mission objectives.
- Tactical AI hypotheses.
- Playtest checks.

Evidence files:

- [tactics-design-dry-run.zh.md](../evidence/v0.6/tactics-design-dry-run.zh.md)
- [tactics-design-dry-run.en.md](../evidence/v0.6/tactics-design-dry-run.en.md)

## 13. Boundaries

v0.6 explicitly does not do:

- New Godot or Unreal engine files.
- Godot AI, GodotIQ, GodotPrompter, MCP, or other external-tool integration.
- The full genre-track package.
- Complex economy, progression, monetization, or real user-data platforms.
- Large narrative production, final art, animation, music, or SFX assets.
- Store pages, trailers, store assets, or LiveOps implementation.

## 14. Entry Conditions For v0.7

After v0.6, v0.7 can start the full Genre Tracks package.

Entry conditions:

- Boss Rush and Tactics dry runs can trace from pillars to systems, combat/rules, encounters, parameters, and playtest hypotheses.
- New templates can support downstream handoff.
- `check-v0.6-game-design-systems` passes.
- README, roadmap, delivery plan, overall plan, and testing strategy point the next step to v0.7.
