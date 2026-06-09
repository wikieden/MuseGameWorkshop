# Muse Game Workshop

> AI tool-agnostic game-production workflow pack for indie Godot / Unreal projects, keeping AI-assisted development planned, reviewable, traceable, verifiable, and releasable.

Chinese version: [README.zh.md](README.zh.md)

## What This Is

Muse Game Workshop is not a game engine and not a one-click game generator. It is a reusable workflow pack for indie developers and small teams, covering:

- Project rules and AI coding tool startup conventions.
- Templates for game design, mechanic specs, vertical slices, playtests, and release readiness.
- Briefs, provenance, review, and engine validation for AI-assisted art, animation, level art, music, sound, UI, and localization assets.
- Godot examples, Unreal mapping scaffolds, check scripts, and evidence records.

It is built for:

- Solo indie developers.
- Small 2-5 person game teams.
- Teams using Codex, Claude Code, Kiro CLI, opencode, or similar AI coding tools for Godot / Unreal projects.
- Teams bringing image, audio, video, 3D, animation, UI, localization, and other creative AI tools into a reviewable asset flow.

## Quick Start

```sh
git clone https://github.com/wikieden/MuseGameWorkshop.git
cd MuseGameWorkshop
tools/checks/check-doc-links
tools/checks/check-doc-pairs
tools/checks/check-startup-prompts
```

The GitHub repository is currently private. Cloning requires repository access.

## Usage Paths

| Goal | Start here |
|---|---|
| Understand the project | [vision.en.md](docs/muse-game-workshop-docs/vision.en.md), [prd.en.md](docs/muse-game-workshop-docs/prd.en.md) |
| Let an AI tool work in the repo | Read `AGENTS.md`, then use the startup prompt below |
| Start from a game idea | `templates/design/pitch.md`, `core-loop.md`, `mechanic-spec.md` |
| Plan a vertical slice | `templates/design/vertical-slice.md`, `templates/design/engine-mapping.md` |
| Run the Godot example | `examples/godot-boss-rush/project.godot` |
| Inspect Unreal mapping | `examples/unreal-boss-rush/README.md` |
| Validate repo health | Run the commands in "Checks And Validation" |

## 1. Use With AI Coding Tools

Muse Game Workshop is not Codex-only. Codex, Claude Code, Kiro CLI, opencode, and other AI coding tools that can read project rules and files should follow the same Workflow Core.

Recommended workflow:

1. Ask the AI tool to read `AGENTS.md` first.
2. Declare target language, target audience, and locale.
3. Ask it to read Vision, PRD, technical architecture, bilingual audience strategy, v0.1 execution plan, P0 skill skeleton plan, v0.1 manifest, testing strategy, and roadmap.
4. For implementation or structural work, ask for a design summary, execution plan, impact scope, files to edit, review decisions, and validation plan.
5. Wait for review gate approval before modifying code, assets, or project structure.
6. After changes, run the smallest relevant checks and write evidence back under `docs/evidence/`.

### Recommended Startup Prompt

```text
We are using Muse Game Workshop. Target language: English. Target audience: English-speaking indie developers and small game teams. Locale: en-US unless otherwise stated. First read README, overall project plan, Vision, PRD, technical architecture, workflow, skill spec, production language guide, bilingual audience strategy, terminology glossary, handoff contracts, templates, delivery plan, v0.1 execution plan, P0 skill skeleton plan, v0.1 manifest, testing strategy, and roadmap. All implementation tasks and structural changes must first produce a design summary, execution plan, impact scope, file scope, review decisions, and validation plan, then wait for review gate approval before editing. The v0.4 Unreal Mapping Slice review gate is Approved and the static scaffold has landed; if Unreal Editor is unavailable, do not create .uasset or .umap files. Do not import final or release-candidate assets.
```

## 2. Start From A New Game Idea

Do not start by asking AI to write game code. Write the production memory first:

1. Use `templates/design/pitch.md` for one-line promise, audience, platform, and risk.
2. Use `templates/design/core-loop.md` for the core loop, player motivation, failure, and reward.
3. Use `templates/design/mechanic-spec.md` for input, state transitions, parameters, feedback, edge cases, and tests.
4. Use `templates/design/vertical-slice.md` to define the smallest vertical slice.
5. Use `templates/design/engine-mapping.md` to map engine-neutral mechanics into Godot or Unreal.
6. Use `templates/production/review-gate.md` to record the review decision.
7. After review gate approval, move into Godot or Unreal implementation.

Suggested evidence location:

```text
docs/evidence/<project-or-version>/
```

## 3. Use The Templates

Common templates:

| Task | Template |
|---|---|
| Game idea | `templates/design/pitch.md` |
| Core loop | `templates/design/core-loop.md` |
| Mechanic spec | `templates/design/mechanic-spec.md` |
| Vertical slice | `templates/design/vertical-slice.md` |
| Engine mapping | `templates/design/engine-mapping.md` |
| Playtest record | `templates/design/playtest-log.md` |
| Review gate | `templates/production/review-gate.md` |
| Asset brief | `templates/creative/asset-brief.md` |
| Asset provenance | `templates/creative/asset-provenance.md` |
| Asset review | `templates/creative/asset-review.md` |
| Release check | `templates/design/release-checklist.md` |
| Localization readiness | `templates/publishing/localization-readiness.md` |

Do not remove the metadata block at the top of templates. It records Language, Target Audience, Locale, Terminology Source, Owner, and Review Status.

## 4. Run The Godot Example

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

## 5. Unreal Status

The Unreal example lives here:

```text
examples/unreal-boss-rush/
```

It is currently a static mapping scaffold with `.uproject`, config, C++ classes, Data Asset contracts, and debug HUD contracts. Because Unreal Editor was not found locally, PIE test map, Blueprint, UMG, Animation Montage placeholder, and `.uasset` / `.umap` files should be added later after the editor is available.

Validate the current static scaffold:

```sh
tools/checks/check-v0.4-unreal
```

## 6. Creative Asset Pipeline

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

## 7. Checks And Validation

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

## Project Vision

Muse Game Workshop aims to become a reusable AI production workflow pack for indie game teams. Starting from a game idea, it should help teams move through concept, pre-production, prototype, vertical slice, playtest, QA, polish, and release readiness toward a playable, reviewable, and reproducible demo.

Long-term direction:

- Support Godot, Unreal, and other engines that can map from engine-neutral design specs.
- Support Codex, Claude Code, Kiro CLI, opencode, and other AI coding tools.
- Support image, audio, video, 3D, animation, UI, localization, and other creative AI tools, but only through briefs, provenance, human review, and engine validation.
- Give Chinese and English users natural production language while sharing the same workflow core.
- Keep human creative direction, production judgment, asset approval, and release responsibility in control even when AI accelerates the work.

It explicitly does not aim to be:

- A game engine.
- A one-click full game generator.
- A replacement for producers, designers, art directors, programmers, QA, or release owners.
- A shortcut around review gates.

Detailed vision:

- [vision.zh.md](docs/muse-game-workshop-docs/vision.zh.md)
- [vision.en.md](docs/muse-game-workshop-docs/vision.en.md)

## Current Status

The repository has completed v0.3 Creative Production Ready and has a v0.4 Unreal Mapping Slice static scaffold:

- `AGENTS.md`
- 14 P0 workflow skills: `.agents/skills/*/SKILL.md`
- 27 templates under `templates/`: 22 from v0.1 plus 5 v0.3 creative templates
- 8 check entry points under `tools/checks/`
- Boss Rush / Counter Trial no-code dry-run evidence under `docs/evidence/dry-runs/`
- Godot Boss Rush prototype under `examples/godot-boss-rush/`
- v0.3 creative asset evidence under `docs/evidence/v0.3/`
- v0.4 Unreal static mapping scaffold under `examples/unreal-boss-rush/`

v0.4 Unreal Mapping Slice has an approved review gate and a static scaffold, but Unreal Editor was not found locally. PIE validation and binary `.uasset` / `.umap` creation are still blocked. No final or release-candidate art/audio assets have been imported.

## What Not To Do

- Do not treat Muse Game Workshop as a game engine.
- Do not treat it as a one-click full game generator.
- Do not turn it into a Codex-only process.
- Do not modify code, assets, or project structure before review gate approval.
- Do not import AI assets without brief, provenance, license, review, and engine validation.
- Do not treat prototype assets as release-candidate assets.
- Do not fake PIE validation or `.uasset` / `.umap` files when Unreal Editor is unavailable.

## Documentation

| Document | Chinese | English |
|---|---|---|
| Project README | [README.zh.md](README.zh.md) | [README.en.md](README.en.md) |
| Overall Project Plan | [muse-game-workshop-plan.zh.md](docs/muse-game-workshop-plan.zh.md) | [muse-game-workshop-plan.en.md](docs/muse-game-workshop-plan.en.md) |
| Vision | [vision.zh.md](docs/muse-game-workshop-docs/vision.zh.md) | [vision.en.md](docs/muse-game-workshop-docs/vision.en.md) |
| PRD | [prd.zh.md](docs/muse-game-workshop-docs/prd.zh.md) | [prd.en.md](docs/muse-game-workshop-docs/prd.en.md) |
| Technical Architecture | [technical-architecture.zh.md](docs/muse-game-workshop-docs/technical-architecture.zh.md) | [technical-architecture.en.md](docs/muse-game-workshop-docs/technical-architecture.en.md) |
| Godot / Unreal Workflow | [godot-unreal-workflow.zh.md](docs/muse-game-workshop-docs/godot-unreal-workflow.zh.md) | [godot-unreal-workflow.en.md](docs/muse-game-workshop-docs/godot-unreal-workflow.en.md) |
| AI Art Asset Pipeline | [ai-art-asset-pipeline.zh.md](docs/muse-game-workshop-docs/ai-art-asset-pipeline.zh.md) | [ai-art-asset-pipeline.en.md](docs/muse-game-workshop-docs/ai-art-asset-pipeline.en.md) |
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
