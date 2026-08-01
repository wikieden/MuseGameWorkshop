# User Journey

Version: v0.7

Language: English

## 1. Flow Overview

The Muse Game Workshop user flow should feel familiar to game developers while preserving AI workflow reviewability:

```text
Get Muse
  -> initialize with the mgw-init / mgw init guide
  -> continue mgw-init in an AI coding tool
  -> Game Start
  -> Concept
  -> Pre-production
  -> Prototype
  -> Vertical Slice
  -> Playtest & Iteration
  -> Creative Production
  -> QA / Polish
  -> Release Readiness
  -> Postmortem
```

Users should not have to understand a pile of agent names first. They should first see Concept, Pre-production, Prototype, Vertical Slice, Playtest, QA, and Release. Internally, Muse maps those stages to workflow skills, templates, checks, and evidence.

If the user only needs the day-one path from a rough idea into Game Start, guided initialization, pitch, core loop, mechanic spec, and review gate, start with `zero-to-one-game-creation.en.md`. This document covers the broader production lifecycle.

## 2. Step 0: Get Muse

Users can start in two ways:

```sh
git clone https://github.com/wikieden/MuseGameWorkshop.git
cd MuseGameWorkshop
```

Or, in the future, with an installed CLI:

```sh
mgw --version
```

v0.7 only defines the product contract for `mgw-init` / `mgw init`. It does not ship the real CLI.

## 3. Step 1: Initialize A Game Project

Users can initialize from two entries.

Entry A: initialize inside an AI editor:

```sh
mkdir ember-tactics
cd ember-tactics
codex
```

Then type:

```text
mgw-init
```

Entry B: future CLI initialization:

```sh
mkdir ember-tactics
cd ember-tactics
mgw-init
```

After the CLI creates the minimal project, the user opens an AI coding tool and types:

```text
continue mgw-init
```

`mgw init` is the future standard CLI subcommand or equivalent alias:

```sh
mgw init ember-tactics --lang zh-CN --tool codex --engine godot --genre tactics --profile docs-only --mcp none
```

After initialization, the user should get:

- Project README.
- `muse.project.yaml`.
- `docs/00-game-start.md`.
- `docs/evidence/README.md`.
- Optional `AGENTS.md` or `CLAUDE.md`.
- Current stage and `next_action`.

By default, do not create the full design, production, creative asset, template, check, Godot, or Unreal structure.

## 4. Step 2: Choose An AI Tool

Users can choose different AI coding tools while keeping the same workflow:

| User choice | Project entry |
|---|---|
| Codex | `AGENTS.md`, `.agents/skills/`, checks |
| Claude Code | `CLAUDE.md`, skills, commands, hooks |
| Kiro CLI | Steering/spec/task rules |
| opencode | Project instructions, commands |
| Other tools | README, rules, templates, review gate |

All tools must read:

- `muse.project.yaml`.
- `docs/00-game-start.md` or the current stage documents.
- Review gate.
- Target language, target audience, and locale.

## 5. Step 3: Concept

Goal: decide whether the direction is worth continuing.

User input:

- One-line idea.
- Reference games.
- Target platform.
- Available time.
- Team capability.

AI assistance:

- `game-intake`.
- `core-loop`.

Outputs:

- Pitch.
- Player fantasy.
- Core player verbs.
- Three design hypotheses that must be validated.
- First risk list.

## 6. Step 4: Pre-production

Goal: turn the direction into executable specs.

AI assistance:

- `mechanic-spec`.
- `engine-portability`.
- Game Design & Systems templates.

Outputs:

- Core loop.
- Mechanic spec.
- System design.
- Combat / encounter / tuning specs.
- Engine-neutral design.
- Godot/Unreal mapping.

Completion bar:

- Design, engineering, QA, art, and audio can understand what to build.
- Tunable parameters have sources and ranges.
- Test method is clear.

## 7. Step 5: Review Gate

Before implementation, confirm:

- Design summary.
- Execution plan.
- Impact scope.
- Files or directories to create or modify.
- Decisions that need review.
- Validation plan.
- Review Status: Approved.

If review has not passed, the AI can only revise plans or docs. It must not modify code, assets, or project structure.

## 8. Production Loops

After initialization and concept work, Muse does not move through a single line. It moves through production loops by discipline:

| Loop | Purpose | Main outputs |
|---|---|---|
| Design Loop | Decide what is fun and worth building | pitch, core loop, mechanic spec, system design, tuning hypotheses |
| Prototype Design Gate | Decide whether the prototype is ready for implementation | prototype goal, playable promise, mechanic readiness, content scope, placeholder policy, prototype visual quality floor, engine mapping, validation plan, cut list |
| Narrative Loop | Connect world, characters, and story flow to the game | world bible, character briefs, narrative flow, quest/dialogue briefs |
| Art Loop | Decide how the game should look and how assets enter safely | art direction, asset list, asset briefs, provenance, asset review |
| Programming Loop | Map mechanics into Godot / Unreal | engine mapping, technical breakdown, prototype tasks, tests |
| QA / Playtest Loop | Decide whether the game is playable and understandable | playtest checklist, bug reports, tuning notes, evidence |
| Release Loop | Decide whether a demo can go public | demo readiness, store asset briefs, localization, AI asset disclosure |

Every loop follows:

```text
ask questions
  -> generate stage deliverables
  -> user reviews
  -> proceed only after Approved
```

## 9. Step 6: Prototype

Goal: validate core fun at low cost.

Before entering Godot, Unreal, gameplay code, or editor automation, the project must pass the `prototype-design` Prototype Design Gate.

The Prototype Design Gate must produce:

- Prototype Goal: what is being validated and what is not.
- Playable Promise: what the player can do within 30 seconds.
- Core Mechanic Readiness: inputs, states, parameters, feedback, edge cases, and tests.
- Moment-to-Moment Flow: start, action, response, failure, retry, and exit.
- Content Scope: minimum characters, enemies, levels, items, skills, and UI.
- Placeholder Policy: structural placeholders, readable prototype assets, reviewed demo assets, temp art, temp audio, and readability baseline.
- Prototype Visual Quality Floor: characters, enemies, NPCs, and key interactables have readable silhouette, facing, faction, role, scale, state feedback, and camera readability.
- Engine Mapping: expected Godot Scene/Script/Resource or Unreal Actor/Component/Data Asset shape.
- Validation Plan: playtest script, pass criteria, fail criteria, and evidence.
- Cut List: what gets cut first and what cannot be cut.

For playable prototypes, do not use naked spheres, capsules, or cubes to represent player characters, enemies, NPCs, or key interactables unless the game fantasy itself requires that shape. Use readable prototype assets instead: an original or properly licensed mannequin-style robot proxy, standee, temporary sprite, kitbash proxy, or AI-generated 3D prototype mesh with brief, provenance, review, and engine validation.

A demo-ready 3D prototype asset kit should remain small and reusable: player proxy, enemy proxy, neutral/NPC proxy, interactable, obstacle, pickup, target marker, move/attack range marker, and simple VFX marker. Epic sample mannequins and marketplace assets must not be treated as default cross-engine Muse demo assets unless license and distribution scope are verified for that use.

Godot direction:

- Prioritize 2D, lightweight 3D, systems, tuning, and loop validation.
- Output Scene, Script, Resource, test scene, and playtest checklist.

Unreal direction:

- Prioritize high-presentation 3D, camera, animation, and Blueprint/Data Asset mapping.
- Output Actor, Component, Blueprint/C++ plan, and PIE test map plan.

MCP or editor automation is used only after explicit enablement, approved review, and a rollback plan.

## 10. Step 7: Vertical Slice

Goal: prove the full experience chain.

AI assistance:

- `vertical-slice-planner`.
- `godot-workflow` or `unreal-workflow`.
- `ux-flow`.
- `level-blockout`.

Outputs:

- Vertical slice task list.
- Cut list.
- Minimal HUD / UI flow.
- Test map or test scene.
- Playtest acceptance criteria.

## 11. Step 8: Creative Production

Goal: bring art, animation, environment, music, sound, and UI into a reviewable flow.

Order:

1. Art direction.
2. Asset brief.
3. AI generation or assisted editing.
4. Provenance.
5. Human review.
6. Engine validation.

Assets without brief, provenance, review, and engine validation cannot enter example projects.

## 12. Step 9: Playtest & Iteration

Goal: turn feedback into the next production decision.

Inputs:

- Playtest notes.
- Screenshots or video.
- Bugs.
- Game-feel issues.
- Tuning data.

AI assistance:

- `playtest-report`.
- Tuning plan.
- Bug triage.

Outputs:

- Playtest report.
- Issue categories.
- Cause hypotheses.
- Next changes.
- Decision log.

## 13. Step 10: Release Readiness And Postmortem

Goal: decide whether a demo or version can go public.

Checks:

- Build state.
- Platform risk.
- Localization and fonts.
- Accessibility.
- AI asset disclosure.
- Store assets.
- Playtest evidence.
- Known issues.

After release, enter Postmortem and feed lessons back into templates, skills, and project rules.

## 14. User Success Bar

A user succeeds with Muse Game Workshop when they can:

- Start inside their own game repository, not only read the Muse source repo.
- Enter guided initialization through `mgw-init` or `continue mgw-init`.
- Have Codex, Claude Code, Kiro CLI, opencode, or similar tools read the same rules.
- Move from a vague idea to a reviewable mechanic spec.
- Enter Godot or Unreal only after a review gate.
- Keep source and human review records for AI-generated or AI-assisted assets.
- Use evidence to explain each important production decision.
