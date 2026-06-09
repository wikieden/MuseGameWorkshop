# Muse Game Workshop

> AI tool-agnostic game-production workflow pack for indie Godot / Unreal projects.

语言 / Language:

- [中文 README](README.zh.md)
- [English README](README.en.md)

## Summary

Muse Game Workshop is not a game engine and not a one-click game generator. It is a reusable workflow pack for AI-assisted indie game production: project rules, workflow skills, document templates, review gates, evidence records, and Godot/Unreal planning conventions.

Muse Game Workshop 不是游戏引擎，也不是一键生成游戏工具。它是一套面向独立游戏和小团队的 AI 辅助制作工作流包：项目规则、workflow skills、文档模板、review gate、evidence records，以及 Godot / Unreal 的规划约定。

## Current Status

v0.3 Creative Production Ready is complete:

- `AGENTS.md`
- 14 P0 workflow skills under `.agents/skills/`
- 27 templates under `templates/` (22 v0.1 templates plus 5 v0.3 creative templates)
- 8 check entry points under `tools/checks/`
- Boss Rush / 《反击试炼》 no-code dry-run evidence under `docs/evidence/dry-runs/`
- Godot Boss Rush prototype under `examples/godot-boss-rush/`
- v0.2 evidence under `docs/evidence/v0.2/`
- v0.3 creative asset evidence under `docs/evidence/v0.3/`
- Prototype visual/audio assets under `examples/godot-boss-rush/assets/`
- v0.4 Unreal static mapping scaffold under `examples/unreal-boss-rush/`

v0.4 Unreal Mapping Slice has an approved static scaffold, but Unreal Editor was not found locally, so PIE validation and binary `.uasset` / `.umap` creation remain blocked. No final/release-candidate art or audio assets have been imported.

## Startup Prompt Requirements

Any startup prompt for this repo must declare target language, target audience, and locale, and must read the bilingual audience strategy, v0.1 execution plan, P0 skill skeleton plan, v0.1 manifest, testing strategy, and roadmap before proposing implementation. Structural work must wait for review gate approval.

## Main Documentation

| Document | 中文 | English |
|---|---|---|
| Project README | [README.zh.md](README.zh.md) | [README.en.md](README.en.md) |
| Overall Project Plan | [muse-game-workshop-plan.zh.md](docs/muse-game-workshop-plan.zh.md) | [muse-game-workshop-plan.en.md](docs/muse-game-workshop-plan.en.md) |
| Vision | [vision.zh.md](docs/muse-game-workshop-docs/vision.zh.md) | [vision.en.md](docs/muse-game-workshop-docs/vision.en.md) |
| PRD | [prd.zh.md](docs/muse-game-workshop-docs/prd.zh.md) | [prd.en.md](docs/muse-game-workshop-docs/prd.en.md) |
| Delivery Plan | [delivery-plan.zh.md](docs/muse-game-workshop-docs/delivery-plan.zh.md) | [delivery-plan.en.md](docs/muse-game-workshop-docs/delivery-plan.en.md) |
| Versioned MVP Roadmap | [mvp-roadmap.zh.md](docs/muse-game-workshop-docs/mvp-roadmap.zh.md) | [mvp-roadmap.en.md](docs/muse-game-workshop-docs/mvp-roadmap.en.md) |

Run checks:

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
