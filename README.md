# Muse Game Workshop

> AI tool-agnostic game-production workflow pack for Three.js WebGPU, Unity, Unreal Engine, and Godot projects.

Muse Game Workshop is not a game engine and not a one-click game generator. It is a reusable workflow pack for AI-assisted indie game production: project rules, workflow skills, document templates, review gates, evidence records, provenance rules, dry runs, checks, and production-target adapters for Three.js WebGPU, Unity, Unreal Engine, and Godot.

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

The repository is public. Clone it directly; no access request is needed.

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
| Choose a final production target | [Production Target Contract](docs/muse-game-workshop-docs/production-target-contract.en.md) |
| Build a Three.js Web game | [Three.js Web Runtime](docs/muse-game-workshop-docs/threejs-web-runtime.en.md), `.agents/skills/threejs-workflow/` |
| Plan a Unity project | [Unity Workflow](docs/muse-game-workshop-docs/unity-workflow.en.md), `.agents/skills/unity-workflow/` |
| Run the Three.js example | `cd examples/threejs-boss-rush && npm ci && npm test && npm run build` |
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

Muse Game Workshop aims to become a reusable production workflow pack for small game teams shipping through Three.js WebGPU, Unity, Unreal Engine, or Godot while using AI coding tools and creative AI tools. It should help teams move from an idea to a playable, reviewable, and release-aware game while keeping human creative direction, asset approval, and production judgment in control.

Detailed vision:

- [Chinese vision](docs/muse-game-workshop-docs/vision.zh.md)
- [English vision](docs/muse-game-workshop-docs/vision.en.md)

## Current Status

v0.9.4 Unity Workflow is complete on top of v0.9.3 Multi-target Production Foundation and Three.js Web Runtime. The repository now defines a shared Production Target Contract for Three.js WebGPU, Unity, Unreal Engine, and Godot; a tested Three.js Boss Rush reference; and Unity workflow, mapping, and validation contracts. The next planned version is v0.10 Telemetry & Playtest Analytics:

- `AGENTS.md`
- 25 workflow skills under `.agents/skills/`, including `threejs-workflow`, `unity-workflow`, and `ai-3d-asset-production`
- 44 templates under `templates/`
- 19 check entry points under `tools/checks/`
- Boss Rush / Counter Trial no-code dry-run evidence under `docs/evidence/dry-runs/`
- Godot Boss Rush prototype under `examples/godot-boss-rush/`
- v0.3 creative asset evidence under `docs/evidence/v0.3/`
- v0.4 Unreal static mapping scaffold under `examples/unreal-boss-rush/`
- v0.5b AI art asset dry-run evidence under `docs/evidence/v0.5/`
- v0.5 engine AI adapter research under `docs/muse-game-workshop-docs/research/`
- v0.5 Roadmap Rebase & Research Consolidation evidence under `docs/evidence/v0.5/`
- v0.6 Game Design & Systems overview under `docs/muse-game-workshop-docs/game-design-systems.en.md`
- v0.6 Boss Rush and Tactics design dry-run evidence under `docs/evidence/v0.6/`
- v0.7 product entry and user journey docs under `docs/muse-game-workshop-docs/`
- v0.7 product-entry review and evidence under `docs/evidence/v0.7/`
- v0.8 genre tracks and Tactics dry-run evidence under `docs/evidence/v0.8/`
- v0.9 economy/progression docs, templates, and Tactics dry-run evidence under `docs/evidence/v0.9/`
- v0.9.1 numerical planning docs, templates, and Tactics dry-run evidence under `docs/evidence/v0.9.1/`
- v0.9.2 Specialized Design Skills and Agent Skill Composition docs under `.agents/skills/` and `docs/muse-game-workshop-docs/`
- v0.9.3 production-target contract, Three.js workflow, browser validation evidence, and playable browser example
- v0.9.4 Unity workflow, static validation contract, and evidence; editor validation remains conditional on a local Unity installation
- Creative AI Production Pilot research, AI 3D production contract, Grey Tide planning evidence, and a tool-agnostic specialist skill; no tool installation or asset generation is approved

Unreal Editor was not found locally during v0.4 work, and Unity Editor was not found during v0.9.4 work, so their editor/player validation remains pending. Three.js targets WebGPU for production with a required WebGL 2 fallback until the project browser matrix approves otherwise. v0.9.4 does not implement the real `mgw` CLI, install MCP tools, implement commercial backend or payment, create real telemetry services, generate final assets, or approve release balance. The next planned version is v0.10 Telemetry & Playtest Analytics.

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
| AI 3D Asset Production Contract | [ai-3d-asset-production.zh.md](docs/muse-game-workshop-docs/ai-3d-asset-production.zh.md) | [ai-3d-asset-production.en.md](docs/muse-game-workshop-docs/ai-3d-asset-production.en.md) |
| Engine AI Development Adapters | [engine-ai-development-adapters.zh.md](docs/muse-game-workshop-docs/engine-ai-development-adapters.zh.md) | [engine-ai-development-adapters.en.md](docs/muse-game-workshop-docs/engine-ai-development-adapters.en.md) |
| Godot Prototype Asset Kit | [godot-prototype-asset-kit.zh.md](docs/muse-game-workshop-docs/godot-prototype-asset-kit.zh.md) | [godot-prototype-asset-kit.en.md](docs/muse-game-workshop-docs/godot-prototype-asset-kit.en.md) |
| Genre Tracks | [genre-tracks.zh.md](docs/muse-game-workshop-docs/genre-tracks.zh.md) | [genre-tracks.en.md](docs/muse-game-workshop-docs/genre-tracks.en.md) |
| Economy & Progression | [economy-progression.zh.md](docs/muse-game-workshop-docs/economy-progression.zh.md) | [economy-progression.en.md](docs/muse-game-workshop-docs/economy-progression.en.md) |
| Numerical Planning | [numerical-planning.zh.md](docs/muse-game-workshop-docs/numerical-planning.zh.md) | [numerical-planning.en.md](docs/muse-game-workshop-docs/numerical-planning.en.md) |
| Agent Skill Composition | [agent-skill-composition.zh.md](docs/muse-game-workshop-docs/agent-skill-composition.zh.md) | [agent-skill-composition.en.md](docs/muse-game-workshop-docs/agent-skill-composition.en.md) |
| Production Target Contract | [production-target-contract.zh.md](docs/muse-game-workshop-docs/production-target-contract.zh.md) | [production-target-contract.en.md](docs/muse-game-workshop-docs/production-target-contract.en.md) |
| Three.js Web Runtime | [threejs-web-runtime.zh.md](docs/muse-game-workshop-docs/threejs-web-runtime.zh.md) | [threejs-web-runtime.en.md](docs/muse-game-workshop-docs/threejs-web-runtime.en.md) |
| Unity Workflow | [unity-workflow.zh.md](docs/muse-game-workshop-docs/unity-workflow.zh.md) | [unity-workflow.en.md](docs/muse-game-workshop-docs/unity-workflow.en.md) |
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
tools/checks/check-v0.9.3-threejs-runtime
tools/checks/check-v0.9.4-unity
tools/checks/check-creative-ai-pilot
cd examples/threejs-boss-rush && npm ci && npm test && npm run build
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
| Prototype Design Gate | `prototype-design` skill before Three.js / Unity / Godot / Unreal gameplay code |
| Economy and progression | `templates/design/economy-model.md`, `templates/design/progression-map.md`, `templates/design/resource-reward-table.md`, `templates/design/tuning-loop.md` |
| Numerical planning | `templates/design/level-curve.md`, `templates/design/combat-parameter-table.md`, `templates/design/system-numerical-plan.md` |
| Vertical slice planning | `vertical-slice-planner` skill + `templates/design/vertical-slice.md` |
| Godot implementation | `godot-workflow` skill + `examples/godot-boss-rush/` |
| Unreal mapping | `unreal-workflow` skill + `examples/unreal-boss-rush/` |
| Three.js Web production | `threejs-workflow` skill + `examples/threejs-boss-rush/` |
| Unity production mapping | `unity-workflow` skill + `templates/design/production-target-mapping.md` |
| Art/audio assets | `creative-asset-pipeline`, `asset-brief`, `ai-3d-asset-production`, `asset-review` |
| Playtest records | `playtest-report` skill + `templates/design/playtest-log.md` |
| Release readiness | `templates/design/release-checklist.md`, `templates/publishing/localization-readiness.md` |
