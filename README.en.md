# Muse Game Workshop

> AI tool-agnostic game-production workflow pack for Three.js WebGPU, Unity, Unreal Engine, and Godot projects.

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
- Teams using Codex, Claude Code, Kimi Code, Kiro CLI, opencode, RoboCode, or CliHub for Three.js, Unity, Unreal, or Godot projects.
- Teams bringing image, audio, video, 3D, animation, UI, localization, and other creative AI tools into a reviewable asset flow.

## Quick Start

```sh
git clone https://github.com/wikieden/MuseGameWorkshop.git
cd MuseGameWorkshop
tools/checks/check-doc-links
tools/checks/check-doc-pairs
tools/checks/check-startup-prompts
```

The GitHub repository is public, so anyone can clone it.

## Usage Paths

| Goal | Start here |
|---|---|
| Understand the project | [vision.en.md](docs/muse-game-workshop-docs/vision.en.md), [prd.en.md](docs/muse-game-workshop-docs/prd.en.md) |
| Understand the `mgw-init` / `mgw init` entry | [product-entry-and-mgw-init.en.md](docs/muse-game-workshop-docs/product-entry-and-mgw-init.en.md) |
| Create a new game from zero | [zero-to-one-game-creation.en.md](docs/muse-game-workshop-docs/zero-to-one-game-creation.en.md): create a folder, type `mgw-init`, then continue in an AI coding tool |
| Follow the game-creation journey | [user-journey.en.md](docs/muse-game-workshop-docs/user-journey.en.md) |
| Let an AI tool work in the repo | Read `AGENTS.md`, then use the startup prompt below |
| Start from a game idea | `templates/design/pitch.md`, `core-loop.md`, `mechanic-spec.md` |
| Deepen game design and systems | [game-design-systems.en.md](docs/muse-game-workshop-docs/game-design-systems.en.md), `templates/design/system-design.md` |
| Design economy and progression | [economy-progression.en.md](docs/muse-game-workshop-docs/economy-progression.en.md), `templates/design/economy-model.md` |
| Plan level, combat, and system numbers | [numerical-planning.en.md](docs/muse-game-workshop-docs/numerical-planning.en.md), `templates/design/level-curve.md` |
| Compose specialized design skills | [agent-skill-composition.en.md](docs/muse-game-workshop-docs/agent-skill-composition.en.md), `system-design`, `combat-design`, `numerical-planning` |
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
We are using Muse Game Workshop. Target language: English. Target audience: English-speaking indie developers and small game teams. Locale: en-US unless otherwise stated. First read README, overall project plan, Vision, PRD, Product Entry & mgw init, Zero-to-One Game Creation, User Journey, technical architecture, Production Target Contract, Three.js Web Runtime, Unity Workflow, workflow, skill spec, production language guide, bilingual audience strategy, terminology glossary, handoff contracts, templates, game design systems, Genre Tracks, Economy & Progression, Numerical Planning, Agent Skill Composition, delivery plan, testing strategy, and roadmap. `mgw-init` is the guided initialization entry. All implementation and structural changes require a design summary, execution plan, and approved review gate. v0.9.3 Multi-target Production Foundation and Three.js Web Runtime plus v0.9.4 Unity Workflow are complete. The next version is v0.10 Telemetry & Playtest Analytics.
```

## 2. Start From A New Game Idea

Do not start by asking AI to write game code. For the full day-one flow, see [zero-to-one-game-creation.en.md](docs/muse-game-workshop-docs/zero-to-one-game-creation.en.md). Start with a light guided entry:

```sh
mkdir my-game
cd my-game
mgw-init
```

Then open the folder in Codex, Claude Code, Kiro CLI, opencode, or another AI coding tool and say:

```text
continue mgw-init
```

If the CLI is not available yet, open the empty folder in the AI coding tool and type:

```text
mgw-init
```

The first output should be minimal:

```text
README.md
muse.project.yaml
docs/00-game-start.md
docs/evidence/README.md
```

After the user confirms, expand the production memory:

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
| System design | `templates/design/system-design.md` |
| Combat design | `templates/design/combat-design.md` |
| Encounter design | `templates/design/encounter-design.md` |
| Tuning plan | `templates/design/tuning-plan.md` |
| Economy model | `templates/design/economy-model.md` |
| Progression map | `templates/design/progression-map.md` |
| Resource and reward table | `templates/design/resource-reward-table.md` |
| Tuning loop | `templates/design/tuning-loop.md` |
| Level curve | `templates/design/level-curve.md` |
| Combat parameter table | `templates/design/combat-parameter-table.md` |
| System numerical plan | `templates/design/system-numerical-plan.md` |
| Playtest hypothesis | `templates/design/playtest-hypothesis.md` |
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
tools/checks/check-v0.9.2-design-skills
tools/checks/check-v0.9.3-threejs-runtime
tools/checks/check-v0.9.4-unity
tools/checks/check-creative-ai-pilot
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
| Prototype Design Gate | `prototype-design` skill before Three.js / Unity / Godot / Unreal gameplay code |
| Vertical slice planning | `vertical-slice-planner` skill + `templates/design/vertical-slice.md` |
| Godot implementation | `godot-workflow` skill + `examples/godot-boss-rush/` |
| Unreal mapping | `unreal-workflow` skill + `examples/unreal-boss-rush/` |
| Art/audio assets | `creative-asset-pipeline`, `asset-brief`, `asset-review` |
| Playtest records | `playtest-report` skill + `templates/design/playtest-log.md` |
| AI-assisted 3D assets | `ai-3d-asset-production` skill + `templates/creative/procedural-3d-delivery.md` |
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

The repository has completed v0.9.3 Multi-target Production Foundation and Three.js Web Runtime plus v0.9.4 Unity Workflow:

- `AGENTS.md`
- 25 workflow skills, including `threejs-workflow`, `unity-workflow`, and `ai-3d-asset-production`
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
- v0.8 Genre Tracks overview and seven genre branches under `docs/muse-game-workshop-docs/`
- v0.8 Tactics dry-run evidence under `docs/evidence/v0.8/`
- v0.9 Economy & Progression docs, templates, and Tactics dry-run evidence under `docs/evidence/v0.9/`
- v0.9.1 Numerical Planning docs, templates, and Tactics dry-run evidence under `docs/evidence/v0.9.1/`
- v0.9.2 Specialized Design Skills and Agent Skill Composition docs under `.agents/skills/` and `docs/muse-game-workshop-docs/`
- v0.9.3 production-target contract, Three.js workflow, browser validation evidence, and playable Three.js Boss Rush reference
- v0.9.4 Unity workflow, static validation contract, and evidence; editor validation remains conditional on a local Unity Editor installation
- Creative AI Production Pilot research, AI 3D production contract, Grey Tide planning evidence, and a tool-agnostic specialist skill; tool installation and asset generation are not approved

Neither Unreal Editor nor Unity Editor was found locally, so the corresponding editor, PIE/PlayMode, and player-build validation remains pending. Three.js targets WebGPU for production and retains a WebGL 2 fallback. v0.9.4 does not implement the real `mgw` CLI, commercial backend, payment, real telemetry services, final assets, or release balance approval. The next version is v0.10 Telemetry & Playtest Analytics.

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
| Product Entry & mgw init | [product-entry-and-mgw-init.zh.md](docs/muse-game-workshop-docs/product-entry-and-mgw-init.zh.md) | [product-entry-and-mgw-init.en.md](docs/muse-game-workshop-docs/product-entry-and-mgw-init.en.md) |
| Zero-to-One Game Creation | [zero-to-one-game-creation.zh.md](docs/muse-game-workshop-docs/zero-to-one-game-creation.zh.md) | [zero-to-one-game-creation.en.md](docs/muse-game-workshop-docs/zero-to-one-game-creation.en.md) |
| User Journey | [user-journey.zh.md](docs/muse-game-workshop-docs/user-journey.zh.md) | [user-journey.en.md](docs/muse-game-workshop-docs/user-journey.en.md) |
| Technical Architecture | [technical-architecture.zh.md](docs/muse-game-workshop-docs/technical-architecture.zh.md) | [technical-architecture.en.md](docs/muse-game-workshop-docs/technical-architecture.en.md) |
| Godot / Unreal Workflow | [godot-unreal-workflow.zh.md](docs/muse-game-workshop-docs/godot-unreal-workflow.zh.md) | [godot-unreal-workflow.en.md](docs/muse-game-workshop-docs/godot-unreal-workflow.en.md) |
| Production Target Contract | [production-target-contract.zh.md](docs/muse-game-workshop-docs/production-target-contract.zh.md) | [production-target-contract.en.md](docs/muse-game-workshop-docs/production-target-contract.en.md) |
| Three.js Web Runtime | [threejs-web-runtime.zh.md](docs/muse-game-workshop-docs/threejs-web-runtime.zh.md) | [threejs-web-runtime.en.md](docs/muse-game-workshop-docs/threejs-web-runtime.en.md) |
| Unity Workflow | [unity-workflow.zh.md](docs/muse-game-workshop-docs/unity-workflow.zh.md) | [unity-workflow.en.md](docs/muse-game-workshop-docs/unity-workflow.en.md) |
| AI Art Asset Pipeline | [ai-art-asset-pipeline.zh.md](docs/muse-game-workshop-docs/ai-art-asset-pipeline.zh.md) | [ai-art-asset-pipeline.en.md](docs/muse-game-workshop-docs/ai-art-asset-pipeline.en.md) |
| AI 3D Asset Production Contract | [ai-3d-asset-production.zh.md](docs/muse-game-workshop-docs/ai-3d-asset-production.zh.md) | [ai-3d-asset-production.en.md](docs/muse-game-workshop-docs/ai-3d-asset-production.en.md) |
| Godot Prototype Asset Kit | [godot-prototype-asset-kit.zh.md](docs/muse-game-workshop-docs/godot-prototype-asset-kit.zh.md) | [godot-prototype-asset-kit.en.md](docs/muse-game-workshop-docs/godot-prototype-asset-kit.en.md) |
| Genre Tracks | [genre-tracks.zh.md](docs/muse-game-workshop-docs/genre-tracks.zh.md) | [genre-tracks.en.md](docs/muse-game-workshop-docs/genre-tracks.en.md) |
| Economy & Progression | [economy-progression.zh.md](docs/muse-game-workshop-docs/economy-progression.zh.md) | [economy-progression.en.md](docs/muse-game-workshop-docs/economy-progression.en.md) |
| Numerical Planning | [numerical-planning.zh.md](docs/muse-game-workshop-docs/numerical-planning.zh.md) | [numerical-planning.en.md](docs/muse-game-workshop-docs/numerical-planning.en.md) |
| Agent Skill Composition | [agent-skill-composition.zh.md](docs/muse-game-workshop-docs/agent-skill-composition.zh.md) | [agent-skill-composition.en.md](docs/muse-game-workshop-docs/agent-skill-composition.en.md) |
| Game Design & Systems | [game-design-systems.zh.md](docs/muse-game-workshop-docs/game-design-systems.zh.md) | [game-design-systems.en.md](docs/muse-game-workshop-docs/game-design-systems.en.md) |
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
