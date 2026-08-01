# Zero-to-One Game Creation

Version: v0.7

Language: English

## 1. Purpose

This document defines how a Muse Game Workshop user starts from an empty folder and a one-line game idea, uses the `mgw-init` guide to create a minimal project workspace, and then continues interactively in Codex, Claude Code, Kiro CLI, opencode, or another AI coding tool.

This is not the full lifecycle guide. For the full lifecycle, see `user-journey.en.md`. For the `mgw-init` product entry and initialization contract, see `product-entry-and-mgw-init.en.md`.

## 2. Core Principle: Light Entry, Progressive Expansion

The zero-to-one flow should not force users to understand the full directory tree, template system, or review gate details on day one. The user should only need to:

1. Create a game project folder.
2. Answer a few `mgw-init` questions.
3. Get a Game Start document that can drive the next conversation.

Zero-to-one in Muse is not one-click game generation. It means turning an idea into a reviewable, implementable, and testable prototype-ready production package.

## 3. Two Entries, One Guide State

Muse supports two user entries:

```text
Entry A: initialize inside an AI editor
User creates a folder
  -> opens Codex / Claude Code / Kiro CLI / opencode
  -> types mgw-init
  -> AI runs the initialization guide
  -> minimal project workspace is created

Entry B: initialize from CLI
User runs mgw-init
  -> CLI collects basic information
  -> minimal project workspace is created
  -> user opens an AI coding tool
  -> user types continue mgw-init
  -> AI continues the guided conversation
```

Both entries must share the same state:

- `muse.project.yaml`
- `docs/00-game-start.md`
- `docs/evidence/README.md`
- review gate
- evidence records

CLI and AI tools must not become two separate workflows. CLI starts the project quickly; the AI tool continues the guided production work.

## 4. Entry A: Initialize Inside An AI Editor

The user can create an empty folder and open their preferred AI coding tool:

```sh
mkdir ember-tactics
cd ember-tactics
codex
```

Then type:

```text
mgw-init
```

Or in Claude Code:

```text
Use Muse Game Workshop mgw-init to initialize this game project.
```

The AI tool should enter the Muse initialization guide, not write game code. The first round should ask only a few questions:

1. What game do you want to make?
2. What platform are you targeting?
3. What genre is it?
4. Which engine do you want to start with? Godot / Unreal / undecided.
5. What is the current goal? concept / prototype / vertical slice / demo.

## 5. Entry B: Initialize From CLI

The future CLI can serve as the quick entry:

```sh
mkdir ember-tactics
cd ember-tactics
mgw-init
```

The CLI collects hard facts:

```text
Project name?
Language? zh-CN / en-US
Game idea?
Genre?
Target platform?
Engine? Godot / Unreal / undecided
Current goal? concept / prototype / vertical-slice / demo
AI tool? Codex / Claude Code / Kiro CLI / opencode / generic
```

After creating the minimal project, the CLI should print:

```text
Next:
1. Open this folder in Codex, Claude Code, Kiro CLI, opencode, or another AI coding tool.
2. Say: continue mgw-init
```

Inside the AI tool, the user types:

```text
continue mgw-init
```

The AI tool reads `muse.project.yaml` and `docs/00-game-start.md`, then continues the guided conversation.

## 6. Naming Relationship

| Name | Form | Meaning |
|---|---|---|
| `mgw-init` | User command and future standalone CLI | Easiest for new users to remember; can be typed in AI tools or run as a CLI command. |
| `mgw init` | Future standard CLI subcommand or alias | Fits a broader `mgw` command family later. |
| `continue mgw-init` | AI tool continuation command | Used after the CLI creates the minimal project and the AI tool continues initialization. |

Docs must continue to mention `mgw init` because it is part of the product entry contract. The user-facing light entry can prioritize `mgw-init`.

## 7. Minimal Generated Output

By default, `mgw-init` should not create the whole project tree. The first step creates only:

```text
my-game/
  README.md
  muse.project.yaml
  docs/
    00-game-start.md
    evidence/
      README.md
```

Optional output:

```text
AGENTS.md     # when the user selects Codex or a generic AI coding tool
CLAUDE.md     # when the user selects Claude Code
```

Do not create these by default:

- `docs/design/`
- `docs/production/`
- `docs/creative/`
- `templates/`
- `tools/checks/`
- `game/godot/`
- `game/unreal/`
- final / release-candidate assets

These are expanded only after the user confirms the next step.

## 8. muse.project.yaml Guide State

Minimal state example:

```yaml
project:
  name: ember-tactics
  language: en-US
  target_audience: english-indie-devs
  locale: en-US
  stage: concept
  genre: tactics
  engine: godot
  target_platforms:
    - PC

muse:
  workflow_version: v0.7
  init_state: started
  init_entry: cli
  next_action: continue-mgw-init
  review_gate_required: true
  evidence_dir: docs/evidence

tools:
  coding_tool: codex
  creative_tools: []
  mcp:
    enabled: false
    adapter: none

profiles:
  active:
    - docs-only
```

State meaning:

| Field | Meaning |
|---|---|
| `init_state` | Initialization progress such as `started`, `game-start-created`, `design-loop`, or `prototype-ready`. |
| `init_entry` | `ai-editor`, `cli`, or `manual`. |
| `next_action` | The next workflow command the AI tool should continue with, such as `continue-mgw-init`. |
| `review_gate_required` | Whether review approval is required before code, asset, or project-structure mutation. |

## 9. Game Start One-Pager

The first round should generate only `docs/00-game-start.md`. Recommended shape:

```text
# Game Start

## Game Idea
## Target Player And Platform
## Player Fantasy
## Core Loop Draft
## First Prototype Goal
## Main Risks
## Next Questions
## Next Step
```

This document anchors the next conversation. It does not need to be a complete pitch, system design, mechanic spec, or review gate yet.

## 10. Guided Conversation Example

After CLI initialization, the user types in Codex:

```text
continue mgw-init
```

The AI should respond with something like:

```text
I have read muse.project.yaml and docs/00-game-start.md.
This is a Godot-oriented Tactics prototype, and the current goal is to validate core gameplay.

I will continue in three steps:
1. Design foundation: pitch, core loop, and core mechanic.
2. Prototype Design Gate: prototype goal, playable promise, content scope, placeholder policy, and validation method.
3. Review gate: after approval, we can move into implementation.

First, which part matters most for the prototype: tactics depth, counterattack feel, or the timeline system?
```

The AI should not create a Godot project, write gameplay code, install MCP, or generate assets at this step.

## 11. Progressive Expansion Rules

After user confirmation, expand the one-pager into formal production deliverables:

```text
docs/00-game-start.md
  -> docs/design/00_pitch.md
  -> docs/design/01_core_loop.md
  -> docs/design/02_mechanic_spec.md
  -> docs/production/review-gate.md
  -> docs/production/decision-log.md
```

Create later directories only when the user enters art, programming, QA, or release work:

```text
docs/creative/
docs/technical/
docs/qa/
templates/
tools/checks/
game/godot/
game/unreal/
```

## 12. Production Loops After Initialization

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

## 13. Ready For Prototype Criteria

The zero-to-one stage can end and Prototype may begin only when:

- `docs/00-game-start.md` clearly describes the game direction.
- Pitch, core loop, and the smallest mechanic spec have been expanded from Game Start.
- The core fun hypothesis is clear.
- The engine choice or engine-neutral strategy is clear.
- The Prototype Design Gate is complete, including prototype goal, playable promise, core mechanic readiness, moment-to-moment flow, content scope, placeholder policy, prototype visual quality floor, engine mapping, validation plan, and cut list.
- The review gate is marked `Review Status: Approved`.
- Evidence records the key production decisions.

If the user asks to enter Godot, Unreal, gameplay code, editor automation, or prototype implementation, use the `prototype-design` skill first. `mgw-init` stays light, while `prototype-design` raises the prototype design quality bar.

## 14. Prototype Visual Quality Floor

Playable prototypes do not need final art, but they need readable visual communication:

- Player characters, enemies, NPCs, and key interactables cannot be naked spheres, capsules, or cubes unless that shape is the game fantasy.
- Structural placeholders are allowed for blockout, collision, debug markers, and non-interactive layout.
- Readable prototype assets must show silhouette, facing, faction, role, scale, state feedback, and camera readability.
- A mannequin-style robot proxy is recommended for 3D playable prototypes when it is original, properly licensed, or AI-generated with recorded provenance.
- Epic sample mannequins or marketplace assets must not become default cross-engine Muse demo assets unless license and distribution scope are verified for that use.
- AI-generated 3D demo assets are allowed when each asset has a brief, tool/model, prompt or source description, license notes, human edits, review status, and engine validation notes.
- A reusable demo asset kit should start small: player proxy, enemy proxy, neutral/NPC proxy, interactable, obstacle, pickup, target marker, move/attack range marker, and simple VFX marker.

## 15. Boundaries

Zero-to-one does not include:

- One-click full game generation.
- Default MCP installation.
- Opening Godot or Unreal by default.
- Creating real engine projects by default.
- Generating or importing final / release-candidate assets.
- Using AI assets without license and provenance records.
- Redistributing third-party sample assets as default Muse demo assets without verified license scope.
- Modifying code, assets, or project structure before the review gate.

## 16. Next Documents

- Product entry: `product-entry-and-mgw-init.en.md`
- Full lifecycle: `user-journey.en.md`
- Game design and systems: `game-design-systems.en.md`
- Godot / Unreal mapping: `godot-unreal-workflow.en.md`
- Testing strategy: `testing-strategy.en.md`
