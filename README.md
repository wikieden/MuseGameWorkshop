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
| Start a game idea | `templates/design/pitch.md`, `templates/design/core-loop.md`, `templates/design/mechanic-spec.md` |
| Use an AI coding tool | Read `AGENTS.md`, then use the startup prompt in the language README |
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

v0.3 Creative Production Ready is complete, and v0.4 Unreal Mapping Slice has an approved static scaffold:

- `AGENTS.md`
- 14 P0 workflow skills under `.agents/skills/`
- 27 templates under `templates/`
- 8 check entry points under `tools/checks/`
- Boss Rush / Counter Trial no-code dry-run evidence under `docs/evidence/dry-runs/`
- Godot Boss Rush prototype under `examples/godot-boss-rush/`
- v0.3 creative asset evidence under `docs/evidence/v0.3/`
- v0.4 Unreal static mapping scaffold under `examples/unreal-boss-rush/`

Unreal Editor was not found locally during v0.4 work, so PIE validation and binary `.uasset` / `.umap` creation remain blocked. No final or release-candidate art/audio assets have been imported.

## Main Documentation

| Document | Chinese | English |
|---|---|---|
| Project README | [README.zh.md](README.zh.md) | [README.en.md](README.en.md) |
| Overall Project Plan | [muse-game-workshop-plan.zh.md](docs/muse-game-workshop-plan.zh.md) | [muse-game-workshop-plan.en.md](docs/muse-game-workshop-plan.en.md) |
| Vision | [vision.zh.md](docs/muse-game-workshop-docs/vision.zh.md) | [vision.en.md](docs/muse-game-workshop-docs/vision.en.md) |
| PRD | [prd.zh.md](docs/muse-game-workshop-docs/prd.zh.md) | [prd.en.md](docs/muse-game-workshop-docs/prd.en.md) |
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
python3 examples/godot-boss-rush/tests/simulate_core_loop.py
```
