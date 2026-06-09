# Muse Game Workshop

> An AI tool-agnostic production workflow system for indie games, keeping AI-assisted Godot / Unreal development planned, reviewable, traceable, and releasable.

中文版本: [README.zh.md](README.zh.md)

## What This Is

Muse Game Workshop is an AI-assisted game production operating model for indie developers and small teams. It is not a game engine and not a one-click game generator. It turns the path from idea, pre-production, prototype, vertical slice, production, playtest iteration, QA, polish, and release into reusable workflow skills, document templates, checklists, project rules, and tool-adapter strategy.

Its core goal is simple: let AI accelerate production without taking control away from human judgment over game direction, creative assets, gameplay quality, and release readiness.

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
- **Workflow skills**: Reusable task workflows such as `game-intake`, `mechanic-spec`, `creative-asset-pipeline`, `playtest-report`, and `release-checklist`.
- **Review gates**: Structural changes and implementation work must start with a design summary and execution plan, then wait for review approval.
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

## Current Status

The repository has completed v0.3 Creative Production Ready:

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

v0.4 Unreal Mapping Slice has an approved static scaffold, but Unreal Editor was not found locally, so PIE validation and binary `.uasset` / `.umap` creation remain blocked. No final or release-candidate art/audio assets have been imported.

## Scope

P0 is now represented in the v0.1 workflow pack:

- Creative Asset Pipeline: art, animation, VFX, music, sound, and UI assets from brief to engine validation.
- Asset Provenance: AI tool, prompt, references, license, human review, and usage scope.
- UX/UI & Onboarding: menus, HUD, settings, tutorial flow, feedback hierarchy, and basic accessibility.
- Level Design: blockout, encounters, pacing, navigation, sightlines, and level review.

P1 enters near-term design:

- Narrative & Worldbuilding.
- Platform & Store Readiness.
- Localization.
- Accessibility.

P2 stays in future planning:

- Analytics & Telemetry.
- Community & Marketing.
- Monetization.
- LiveOps & Post-launch.
- Modding / UGC.
- Security & Privacy.

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

## First Startup Prompt

```text
We are creating Muse Game Workshop. Target language: English. Target audience: English-speaking indie developers and small game teams. Locale: en-US unless otherwise stated. First read README, overall project plan, Vision, PRD, technical architecture, workflow, skill spec, production language guide, bilingual audience strategy, terminology glossary, handoff contracts, templates, delivery plan, v0.1 execution plan, P0 skill skeleton plan, v0.1 manifest, testing strategy, and roadmap. The v0.4 Unreal Mapping Slice review gate is Approved and the static scaffold has landed; next confirm Unreal Editor availability, then proceed with PIE test map, Data Asset, UMG, and animation-placeholder validation. Do not import final or release-candidate assets.
```

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
```
