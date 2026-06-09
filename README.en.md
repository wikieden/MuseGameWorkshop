# Muse Game Workshop

> An AI tool-agnostic production workflow system for indie games, keeping AI-assisted Godot / Unreal development planned, reviewable, traceable, verifiable, and releasable.

中文版本: [README.zh.md](README.zh.md)

## What This Is

Muse Game Workshop is an AI-assisted game production operating model for indie developers and small teams. It is not a game engine and not a one-click game generator. It turns the path from idea, pre-production, prototype, vertical slice, production, playtest iteration, QA, polish, and release into reusable workflow skills, document templates, checklists, project rules, and tool-adapter strategy.

Its core goal is simple: let AI accelerate production without taking control away from human judgment over game direction, creative assets, gameplay quality, and release readiness.

## Quick Start

If you only want to inspect the repo first:

```sh
git clone https://github.com/wikieden/MuseGameWorkshop.git
cd MuseGameWorkshop
tools/checks/check-doc-links
tools/checks/check-doc-pairs
tools/checks/check-startup-prompts
```

The GitHub repository is currently private. Cloning requires repository access.

If you want to know where to start:

| Goal | Start here |
|---|---|
| Understand the vision | [vision.en.md](docs/muse-game-workshop-docs/vision.en.md) |
| Understand product scope | [prd.en.md](docs/muse-game-workshop-docs/prd.en.md) |
| Review version planning | [mvp-roadmap.en.md](docs/muse-game-workshop-docs/mvp-roadmap.en.md) |
| Use an AI coding tool | Read `AGENTS.md`, then use the startup prompt below |
| Start from a game idea | `templates/design/pitch.md`, `core-loop.md`, `mechanic-spec.md` |
| Run the Godot example | `examples/godot-boss-rush/project.godot` |
| Inspect Unreal mapping | `examples/unreal-boss-rush/README.md` |

## Why This Exists

AI coding tools and creative AI tools can already generate code, concept directions, audio directions, level ideas, and test scripts quickly. The hard part of indie game production is often not "generating more things", but continuously answering production questions:

- What game are we actually making?
- What is the next smallest verifiable output?
- Is this mechanic becoming more fun?
- Can AI-assisted art, animation, music, sound, and UI assets enter one production pipeline?
- Can every AI-assisted design, code, asset, test, and release decision be explained, traced, and approved by a human?

Muse Game Workshop turns those questions into an executable workflow instead of leaving them scattered across chat history.

## Core Idea

Muse Game Workshop organizes AI-assisted development using language game teams already understand:

- **Production stages**: Concept, Pre-production, Prototype, Vertical Slice, Production, Playtest, Polish, QA, Release, and Postmortem.
- **Production disciplines**: Producer, Game Designer, Technical Designer, Art Director, Gameplay Programmer, QA, and Release Manager.
- **Workflow skills**: Reusable task workflows such as `game-intake`, `mechanic-spec`, `creative-asset-pipeline`, and `playtest-report`.
- **Review gates**: Structural changes and implementation work must start with a design summary and execution plan, then wait for review gate approval.
- **Evidence records**: Key decisions, asset sources, licenses, prompts, test results, and release risks must be written to files instead of staying in chat.

The naming strategy is two-layered: user-facing docs use game-industry production language, while internal folders, skill slugs, adapters, and checks keep stable AI workflow terms. The product should not be presented as a pile of agents, and it should not abandon AI-native dry runs, tool adapters, evidence records, provenance, or automated checks.

The bilingual strategy is "one workflow core, two user-facing surfaces": Chinese users get wording natural to Chinese game teams, while English-speaking users get natural English game-production language.

## Who It Is For

The first stage prioritizes:

- Solo indie developers.
- Small 2-5 person game teams.
- Designers, artists, and creative developers who have ideas but need steadier production rhythm.
- Chinese indie developers and Chinese game-industry practitioners who need Chinese terms that feel natural to local teams.
- English-speaking indie developers and small teams who need natural English game-production docs.
- Developers using Codex, Claude Code, Kiro CLI, opencode, or similar AI coding tools for Godot / Unreal projects.
- Teams bringing image, audio, video, 3D, animation, UI, localization, and other creative AI tools into a reviewable asset flow.
- Teams that want to move from vibe coding to controlled production workflow.

## Repository Structure

```text
.
  AGENTS.md                         Project rules that AI coding tools should read first
  CLAUDE.md                         Claude Code adapter notes
  docs/
    muse-game-workshop-docs/        Vision, PRD, architecture, roadmap, testing strategy
    evidence/                       Dry runs, playtests, asset reviews, engine validation
  .agents/skills/                   14 P0 workflow skills
  templates/                        Design, production, creative, UX, and publishing templates
  examples/
    godot-boss-rush/                Godot Boss Rush / Counter Trial example
    unreal-boss-rush/               Unreal static mapping scaffold
  tools/checks/                     Docs, templates, manifest, Godot, and Unreal checks
```

## Current Status

The repository has completed v0.3 Creative Production Ready and has a v0.4 Unreal Mapping Slice static scaffold:

- `AGENTS.md`
- 14 P0 workflow skills: `.agents/skills/*/SKILL.md`
- 27 templates under `templates/`: 22 from v0.1 plus 5 v0.3 creative templates
- 8 check entry points under `tools/checks/`
- Boss Rush / Counter Trial no-code dry-run evidence under `docs/evidence/dry-runs/`
- Godot Boss Rush prototype under `examples/godot-boss-rush/`
- v0.2 evidence under `docs/evidence/v0.2/`
- v0.3 creative asset evidence under `docs/evidence/v0.3/`
- Prototype visual/audio assets under `examples/godot-boss-rush/assets/`
- v0.4 Unreal static mapping scaffold under `examples/unreal-boss-rush/`

v0.4 Unreal Mapping Slice has an approved review gate and a static scaffold, but Unreal Editor was not found locally. PIE validation and binary `.uasset` / `.umap` creation are still blocked. No final or release-candidate art/audio assets have been imported.

## How To Use With AI Coding Tools

Muse Game Workshop is not Codex-only. Codex, Claude Code, Kiro CLI, opencode, and other AI coding tools that can read project rules and files should follow the same Workflow Core.

Recommended workflow:

1. Ask the AI tool to read `AGENTS.md` first.
2. Declare target language, target audience, and locale.
3. Ask it to read Vision, PRD, technical architecture, bilingual audience strategy, v0.1 execution plan, P0 skill skeleton plan, v0.1 manifest, testing strategy, and roadmap.
4. For implementation or structural work, ask for a design summary, execution plan, impact scope, files to edit, review decisions, and validation plan.
5. Wait for review gate approval before modifying code, assets, or project structure.
6. After changes, run the smallest relevant checks and write evidence back under `docs/evidence/`.

## Recommended Startup Prompt

```text
We are using Muse Game Workshop. Target language: English. Target audience: English-speaking indie developers and small game teams. Locale: en-US unless otherwise stated. First read README, overall project plan, Vision, PRD, technical architecture, workflow, skill spec, production language guide, bilingual audience strategy, terminology glossary, handoff contracts, templates, delivery plan, v0.1 execution plan, P0 skill skeleton plan, v0.1 manifest, testing strategy, and roadmap. All implementation tasks and structural changes must first produce a design summary, execution plan, impact scope, file scope, review decisions, and validation plan, then wait for review gate approval before editing. The v0.4 Unreal Mapping Slice review gate is Approved and the static scaffold has landed; if Unreal Editor is unavailable, do not create .uasset or .umap files. Do not import final or release-candidate assets.
```

## Start From A New Game Idea

Do not start by asking AI to write game code. Write the production memory first:

1. Use `templates/design/pitch.md` for one-line promise, audience, platform, and risk.
2. Use `templates/design/core-loop.md` for the core loop, player motivation, failure, and reward.
3. Use `templates/design/mechanic-spec.md` for input, state transitions, parameters, feedback, edge cases, and tests.
4. Use `templates/design/vertical-slice.md` to define the smallest vertical slice.
5. Use `templates/design/engine-mapping.md` to map engine-neutral mechanics into Godot or Unreal.
6. Use `templates/production/review-gate.md` to record the review decision.
7. After approval, move into Godot or Unreal implementation.

Suggested evidence location:

```text
docs/evidence/<project-or-version>/
```

## Use The Godot Example

The Godot example lives here:

```text
examples/godot-boss-rush/
```

Run it manually:

1. Install Godot and make sure `godot` is available on PATH.
2. Open `examples/godot-boss-rush/project.godot`.
3. Run `scenes/TestArena.tscn`.
4. Move with arrow keys or WASD.
5. Use `F` to parry.
6. Use `J` during the counter window.
7. Use `R` to retry.

Command-line validation:

```sh
tools/checks/check-v0.2-godot
tools/checks/check-v0.3-creative-assets
python3 examples/godot-boss-rush/tests/simulate_core_loop.py
```

## Unreal Status

The Unreal example lives here:

```text
examples/unreal-boss-rush/
```

It is currently a static mapping scaffold with `.uproject`, config, C++ classes, Data Asset contracts, and debug HUD contracts. Because Unreal Editor was not found locally, PIE test map, Blueprint, UMG, Animation Montage placeholder, and `.uasset` / `.umap` files should be added later after the editor is available.

Validate the current static scaffold:

```sh
tools/checks/check-v0.4-unreal
```

## Creative Asset Pipeline

Art, animation, level art, music, sound, UI, localization, and other AI-assisted assets must not be dropped directly into example projects. Before entering the project, assets need:

- `templates/creative/art-direction.md`
- `templates/creative/asset-brief.md`
- `templates/creative/asset-provenance.md`
- `templates/creative/asset-review.md`
- `templates/creative/asset-integration.md`
- `templates/creative/ai-asset-disclosure.md`

Asset records must describe:

- AI tool, model, or service used.
- Prompt, reference source, or generation settings.
- License and usage rights.
- Human modifications.
- Human review decision.
- Engine import and runtime validation.
- Platform disclosure risk.

Assets without brief, provenance, review, and engine validation cannot enter an example project.

## Checks And Validation

For everyday documentation edits, run at least:

```sh
tools/checks/check-doc-links
tools/checks/check-doc-pairs
tools/checks/check-startup-prompts
```

For template or skill changes, also run:

```sh
tools/checks/check-template-metadata
tools/checks/check-v0.1-manifest
```

For example or asset changes, run the full set:

```sh
tools/checks/check-doc-links
tools/checks/check-doc-pairs
tools/checks/check-startup-prompts
tools/checks/check-template-metadata
tools/checks/check-v0.1-manifest
tools/checks/check-v0.2-godot
tools/checks/check-v0.3-creative-assets
tools/checks/check-v0.4-unreal
python3 examples/godot-boss-rush/tests/simulate_core_loop.py
```

## Common Tasks

| Task | Entry point |
|---|---|
| New game intake | `game-intake` skill + `templates/design/pitch.md` |
| Core loop design | `core-loop` skill + `templates/design/core-loop.md` |
| Mechanic spec | `mechanic-spec` skill + `templates/design/mechanic-spec.md` |
| Vertical slice planning | `vertical-slice-planner` skill + `templates/design/vertical-slice.md` |
| Godot implementation | `godot-workflow` skill + `examples/godot-boss-rush/` |
| Unreal mapping | `unreal-workflow` skill + `examples/unreal-boss-rush/` |
| Art/audio assets | `creative-asset-pipeline`, `asset-brief`, `asset-review` |
| Playtest records | `playtest-report` skill + `templates/design/playtest-log.md` |
| Release readiness | `templates/design/release-checklist.md`, `templates/publishing/localization-readiness.md` |

## What Not To Do

- Do not treat Muse Game Workshop as a game engine.
- Do not treat it as a one-click full game generator.
- Do not turn it into a Codex-only process.
- Do not modify code, assets, or project structure before review gate approval.
- Do not import AI assets without brief, provenance, license, review, and engine validation.
- Do not treat prototype assets as release-candidate assets.
- Do not fake PIE validation or `.uasset` / `.umap` files when Unreal Editor is unavailable.

## Documentation

Recommended reading order starts with Vision, then PRD, delivery plan, and testing strategy:

| Document | 中文 | English |
|---|---|---|
| Project README | [README.zh.md](README.zh.md) | [README.en.md](README.en.md) |
| Overall Project Plan | [muse-game-workshop-plan.zh.md](docs/muse-game-workshop-plan.zh.md) | [muse-game-workshop-plan.en.md](docs/muse-game-workshop-plan.en.md) |
| Vision | [vision.zh.md](docs/muse-game-workshop-docs/vision.zh.md) | [vision.en.md](docs/muse-game-workshop-docs/vision.en.md) |
| PRD | [prd.zh.md](docs/muse-game-workshop-docs/prd.zh.md) | [prd.en.md](docs/muse-game-workshop-docs/prd.en.md) |
| Technical Architecture | [technical-architecture.zh.md](docs/muse-game-workshop-docs/technical-architecture.zh.md) | [technical-architecture.en.md](docs/muse-game-workshop-docs/technical-architecture.en.md) |
| Godot / Unreal Workflow | [godot-unreal-workflow.zh.md](docs/muse-game-workshop-docs/godot-unreal-workflow.zh.md) | [godot-unreal-workflow.en.md](docs/muse-game-workshop-docs/godot-unreal-workflow.en.md) |
| Skill Pack Spec | [skill-pack-spec.zh.md](docs/muse-game-workshop-docs/skill-pack-spec.zh.md) | [skill-pack-spec.en.md](docs/muse-game-workshop-docs/skill-pack-spec.en.md) |
| Production Language Guide | [production-language-guide.zh.md](docs/muse-game-workshop-docs/production-language-guide.zh.md) | [production-language-guide.en.md](docs/muse-game-workshop-docs/production-language-guide.en.md) |
| Bilingual Audience Strategy | [bilingual-audience-strategy.zh.md](docs/muse-game-workshop-docs/bilingual-audience-strategy.zh.md) | [bilingual-audience-strategy.en.md](docs/muse-game-workshop-docs/bilingual-audience-strategy.en.md) |
| Terminology Glossary | [terminology-glossary.zh.md](docs/muse-game-workshop-docs/terminology-glossary.zh.md) | [terminology-glossary.en.md](docs/muse-game-workshop-docs/terminology-glossary.en.md) |
| Handoff Contracts | [handoff-contracts.zh.md](docs/muse-game-workshop-docs/handoff-contracts.zh.md) | [handoff-contracts.en.md](docs/muse-game-workshop-docs/handoff-contracts.en.md) |
| Templates | [templates.zh.md](docs/muse-game-workshop-docs/templates.zh.md) | [templates.en.md](docs/muse-game-workshop-docs/templates.en.md) |
| Delivery Plan | [delivery-plan.zh.md](docs/muse-game-workshop-docs/delivery-plan.zh.md) | [delivery-plan.en.md](docs/muse-game-workshop-docs/delivery-plan.en.md) |
| v0.1 Execution Plan | [v0.1-execution-plan.zh.md](docs/muse-game-workshop-docs/v0.1-execution-plan.zh.md) | [v0.1-execution-plan.en.md](docs/muse-game-workshop-docs/v0.1-execution-plan.en.md) |
| P0 Skill Skeleton Plan | [p0-skill-skeleton-plan.zh.md](docs/muse-game-workshop-docs/p0-skill-skeleton-plan.zh.md) | [p0-skill-skeleton-plan.en.md](docs/muse-game-workshop-docs/p0-skill-skeleton-plan.en.md) |
| v0.1 Manifest | [v0.1-manifest.zh.md](docs/muse-game-workshop-docs/v0.1-manifest.zh.md) | [v0.1-manifest.en.md](docs/muse-game-workshop-docs/v0.1-manifest.en.md) |
| Testing Strategy | [testing-strategy.zh.md](docs/muse-game-workshop-docs/testing-strategy.zh.md) | [testing-strategy.en.md](docs/muse-game-workshop-docs/testing-strategy.en.md) |
| Versioned MVP Roadmap | [mvp-roadmap.zh.md](docs/muse-game-workshop-docs/mvp-roadmap.zh.md) | [mvp-roadmap.en.md](docs/muse-game-workshop-docs/mvp-roadmap.en.md) |

