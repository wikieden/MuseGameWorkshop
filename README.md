# Muse Game Workshop

> AI tool-agnostic game-production workflow pack for indie Godot / Unreal projects.

Muse Game Workshop is not a game engine and not a one-click game generator. It is a reusable workflow pack for AI-assisted indie game production: project rules, workflow skills, document templates, review gates, evidence records, provenance rules, dry runs, checks, and Godot / Unreal example conventions.

## Language

- [Chinese guide](README.zh.md)
- [English guide](README.en.md)

## Quick Start

```sh
git clone https://github.com/wikieden/MuseGameWorkshop.git
cd MuseGameWorkshop
tools/checks/check-doc-links
tools/checks/check-doc-pairs
tools/checks/check-startup-prompts
```

The repository is currently private. Access requires permission from the repository owner.

## Use This Repo

| If you want to... | Start here |
|---|---|
| Use the Chinese guide | [README.zh.md](README.zh.md) |
| Use the English guide | [README.en.md](README.en.md) |
| Design the `mgw-init` / `mgw init` entry | [Product Entry & mgw init](docs/muse-game-workshop-docs/product-entry-and-mgw-init.en.md) |
| Create a game from zero | [Zero-to-One Game Creation](docs/muse-game-workshop-docs/zero-to-one-game-creation.en.md): create a folder, type `mgw-init`, then continue in an AI coding tool |
| Follow the user journey | [User Journey](docs/muse-game-workshop-docs/user-journey.en.md) |
| Start a game idea | `templates/design/pitch.md`, `templates/design/core-loop.md`, `templates/design/mechanic-spec.md` |
| Deepen game design and systems | [Game Design & Systems](docs/muse-game-workshop-docs/game-design-systems.en.md), `templates/design/system-design.md` |
| Design economy and progression | [Economy & Progression](docs/muse-game-workshop-docs/economy-progression.en.md), `templates/design/economy-model.md` |
| Plan level, combat, and system numbers | [Numerical Planning](docs/muse-game-workshop-docs/numerical-planning.en.md), `templates/design/level-curve.md` |
| Compose specialized design skills | [Agent Skill Composition](docs/muse-game-workshop-docs/agent-skill-composition.en.md), `.agents/skills/system-design/`, `.agents/skills/combat-design/` |
| Use an AI coding tool | Read `AGENTS.md`, then use the startup prompt in the language README |
| Study engine AI adapters | [Engine AI Development Adapters](docs/muse-game-workshop-docs/engine-ai-development-adapters.en.md) |
| Run the Godot example | `examples/godot-boss-rush/project.godot` |
| Inspect Unreal mapping | `examples/unreal-boss-rush/README.md` |
| Validate the repo | Run the checks listed below |

## Workflow Rule

Structural work and implementation work must follow:

```text
design summary -> execution plan -> review gate approval -> implementation -> validation -> evidence record
```

Startup prompts must declare target language, target audience, and locale. They must read the bilingual audience strategy, v0.1 execution plan, P0 skill skeleton plan, v0.1 manifest, testing strategy, and roadmap before proposing implementation.

## Short Vision

Muse Game Workshop aims to become a reusable production workflow pack for small game teams using Godot, Unreal, AI coding tools, and creative AI tools. It should help teams move from an idea to a playable, reviewable, and release-aware demo while keeping human creative direction, asset approval, and production judgment in control.

Detailed vision:

- [Chinese vision](docs/muse-game-workshop-docs/vision.zh.md)
- [English vision](docs/muse-game-workshop-docs/vision.en.md)

## Current Status

v0.9.2 Specialized Design Skills is complete as an addendum to v0.9.1 Numerical Planning and v0.9 Economy & Progression. It builds on v0.8 Genre Tracks, v0.7 Product Entry & mgw init, v0.6 Game Design & Systems, and the earlier v0.5 Roadmap Rebase & Research Consolidation. The repository now defines seven first genre workflow branches, a Tactics dry run connected to the Godot Prototype Asset Kit plan, a no-code Tactics economy/progression dry run, a no-code Tactics numerical planning dry run, and a specialized design skill composition layer. The roadmap continues through v0.15 before v1.0:

- `AGENTS.md`
- 22 workflow skills under `.agents/skills/`: 14 P0 skills, `mgw-init`, `prototype-design`, and 6 v0.9.2 specialized design skills
- 39 templates under `templates/`
- 16 check entry points under `tools/checks/`
- Boss Rush / Counter Trial no-code dry-run evidence under `docs/evidence/dry-runs/`
- Godot Boss Rush prototype under `examples/godot-boss-rush/`
- v0.3 creative asset evidence under `docs/evidence/v0.3/`
- v0.4 Unreal static mapping scaffold under `examples/unreal-boss-rush/`
- v0.5b AI art asset dry-run evidence under `docs/evidence/v0.5/`
- v0.5 engine AI adapter research under `docs/muse-game-workshop-docs/research/`
- v0.5 consolidation evidence under `docs/evidence/v0.5/`
- v0.6 game design systems overview under `docs/muse-game-workshop-docs/game-design-systems.en.md`
- v0.6 Boss Rush and Tactics design dry-run evidence under `docs/evidence/v0.6/`
- v0.7 product entry and user journey docs under `docs/muse-game-workshop-docs/`
- v0.7 product-entry review and evidence under `docs/evidence/v0.7/`
- v0.8 genre tracks and Tactics dry-run evidence under `docs/evidence/v0.8/`
- v0.9 economy/progression docs, templates, and Tactics dry-run evidence under `docs/evidence/v0.9/`
- v0.9.1 numerical planning docs, templates, and Tactics dry-run evidence under `docs/evidence/v0.9.1/`
- v0.9.2 specialized design skills and Agent Skill Composition docs under `.agents/skills/` and `docs/muse-game-workshop-docs/`

Unreal Editor was not found locally during v0.4 work, so PIE validation and binary `.uasset` / `.umap` creation remain blocked. v0.9.2 does not implement the real `mgw` CLI, install MCP tools, create new engine projects, implement commercial backend, implement payment, create real telemetry services, generate new assets, import final/release-candidate art/audio assets, or approve release balance. The next planned version is v0.10 Telemetry & Playtest Analytics.

## Main Documentation

| Document | Chinese | English |
|---|---|---|
| Project README | [README.zh.md](README.zh.md) | [README.en.md](README.en.md) |
| Overall Project Plan | [muse-game-workshop-plan.zh.md](docs/muse-game-workshop-plan.zh.md) | [muse-game-workshop-plan.en.md](docs/muse-game-workshop-plan.en.md) |
| Vision | [vision.zh.md](docs/muse-game-workshop-docs/vision.zh.md) | [vision.en.md](docs/muse-game-workshop-docs/vision.en.md) |
| PRD | [prd.zh.md](docs/muse-game-workshop-docs/prd.zh.md) | [prd.en.md](docs/muse-game-workshop-docs/prd.en.md) |
| Product Entry & mgw init | [product-entry-and-mgw-init.zh.md](docs/muse-game-workshop-docs/product-entry-and-mgw-init.zh.md) | [product-entry-and-mgw-init.en.md](docs/muse-game-workshop-docs/product-entry-and-mgw-init.en.md) |
| Zero-to-One Game Creation | [zero-to-one-game-creation.zh.md](docs/muse-game-workshop-docs/zero-to-one-game-creation.zh.md) | [zero-to-one-game-creation.en.md](docs/muse-game-workshop-docs/zero-to-one-game-creation.en.md) |
| User Journey | [user-journey.zh.md](docs/muse-game-workshop-docs/user-journey.zh.md) | [user-journey.en.md](docs/muse-game-workshop-docs/user-journey.en.md) |
| AI Art Asset Pipeline | [ai-art-asset-pipeline.zh.md](docs/muse-game-workshop-docs/ai-art-asset-pipeline.zh.md) | [ai-art-asset-pipeline.en.md](docs/muse-game-workshop-docs/ai-art-asset-pipeline.en.md) |
| Engine AI Development Adapters | [engine-ai-development-adapters.zh.md](docs/muse-game-workshop-docs/engine-ai-development-adapters.zh.md) | [engine-ai-development-adapters.en.md](docs/muse-game-workshop-docs/engine-ai-development-adapters.en.md) |
| Godot Prototype Asset Kit | [godot-prototype-asset-kit.zh.md](docs/muse-game-workshop-docs/godot-prototype-asset-kit.zh.md) | [godot-prototype-asset-kit.en.md](docs/muse-game-workshop-docs/godot-prototype-asset-kit.en.md) |
| Genre Tracks | [genre-tracks.zh.md](docs/muse-game-workshop-docs/genre-tracks.zh.md) | [genre-tracks.en.md](docs/muse-game-workshop-docs/genre-tracks.en.md) |
| Economy & Progression | [economy-progression.zh.md](docs/muse-game-workshop-docs/economy-progression.zh.md) | [economy-progression.en.md](docs/muse-game-workshop-docs/economy-progression.en.md) |
| Numerical Planning | [numerical-planning.zh.md](docs/muse-game-workshop-docs/numerical-planning.zh.md) | [numerical-planning.en.md](docs/muse-game-workshop-docs/numerical-planning.en.md) |
| Agent Skill Composition | [agent-skill-composition.zh.md](docs/muse-game-workshop-docs/agent-skill-composition.zh.md) | [agent-skill-composition.en.md](docs/muse-game-workshop-docs/agent-skill-composition.en.md) |
| Game Design & Systems | [game-design-systems.zh.md](docs/muse-game-workshop-docs/game-design-systems.zh.md) | [game-design-systems.en.md](docs/muse-game-workshop-docs/game-design-systems.en.md) |
| Delivery Plan | [delivery-plan.zh.md](docs/muse-game-workshop-docs/delivery-plan.zh.md) | [delivery-plan.en.md](docs/muse-game-workshop-docs/delivery-plan.en.md) |
| Versioned MVP Roadmap | [mvp-roadmap.zh.md](docs/muse-game-workshop-docs/mvp-roadmap.zh.md) | [mvp-roadmap.en.md](docs/muse-game-workshop-docs/mvp-roadmap.en.md) |

## Checks

```sh
tools/checks/check-doc-links
tools/checks/check-doc-pairs
tools/checks/check-startup-prompts
tools/checks/check-template-metadata
tools/checks/check-v0.1-manifest
tools/checks/check-v0.2-godot
tools/checks/check-v0.3-creative-assets
tools/checks/check-v0.4-unreal
tools/checks/check-v0.5-ai-art-dry-run
tools/checks/check-v0.5-consolidation
tools/checks/check-v0.6-game-design-systems
tools/checks/check-v0.7-product-entry
tools/checks/check-v0.8-genre-tracks
tools/checks/check-v0.9-economy-progression
tools/checks/check-v0.9.1-numerical-planning
tools/checks/check-v0.9.2-design-skills
python3 examples/godot-boss-rush/tests/simulate_core_loop.py
```

## Common Tasks

| Task | Entry point |
|---|---|
| New game intake | `game-intake` skill + `templates/design/pitch.md` |
| Core loop design | `core-loop` skill + `templates/design/core-loop.md` |
| Mechanic spec | `mechanic-spec` skill + `templates/design/mechanic-spec.md` |
| System design | `system-design` skill + `templates/design/system-design.md` |
| Combat design | `combat-design` skill + `templates/design/combat-design.md` |
| Numerical design | `numerical-planning`, `level-curve`, `combat-parameters`, `system-numerics` |
| Prototype Design Gate | `prototype-design` skill before Godot / Unreal / gameplay code |
| Economy and progression | `templates/design/economy-model.md`, `templates/design/progression-map.md`, `templates/design/resource-reward-table.md`, `templates/design/tuning-loop.md` |
| Numerical planning | `templates/design/level-curve.md`, `templates/design/combat-parameter-table.md`, `templates/design/system-numerical-plan.md` |
| Vertical slice planning | `vertical-slice-planner` skill + `templates/design/vertical-slice.md` |
| Godot implementation | `godot-workflow` skill + `examples/godot-boss-rush/` |
| Unreal mapping | `unreal-workflow` skill + `examples/unreal-boss-rush/` |
| Art/audio assets | `creative-asset-pipeline`, `asset-brief`, `asset-review` |
| Playtest records | `playtest-report` skill + `templates/design/playtest-log.md` |
| Release readiness | `templates/design/release-checklist.md`, `templates/publishing/localization-readiness.md` |
