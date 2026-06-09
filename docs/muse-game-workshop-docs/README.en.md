# Muse Game Workshop Documentation Package

Version: v0.3

Language: English

## 1. What This Is

This is the documentation package for starting the Muse Game Workshop project. The project goal is to build an AI game production workflow system for Godot and Unreal Engine, so AI coding tools and creative AI tools can reliably assist across game-industry production stages and disciplines: design, mechanic specifications, engine mappings, art/animation/environment/music/SFX assets, task breakdown, playtest retrospectives, tuning, and release checks.

It is not a game engine and not a one-click game generator. It is a workflow layer.

## 2. Recommended Reading Order

1. `../muse-game-workshop-plan.en.md`
2. `vision.en.md`
3. `prd.en.md`
4. `technical-architecture.en.md`
5. `godot-unreal-workflow.en.md`
6. `skill-pack-spec.en.md`
7. `production-language-guide.en.md`
8. `bilingual-audience-strategy.en.md`
9. `terminology-glossary.en.md`
10. `handoff-contracts.en.md`
11. `templates.en.md`
12. `delivery-plan.en.md`
13. `v0.1-execution-plan.en.md`
14. `p0-skill-skeleton-plan.en.md`
15. `v0.1-manifest.en.md`
16. `testing-strategy.en.md`
17. `mvp-roadmap.en.md`

Chinese versions:

1. `../muse-game-workshop-plan.zh.md`
2. `vision.zh.md`
3. `prd.zh.md`
4. `technical-architecture.zh.md`
5. `godot-unreal-workflow.zh.md`
6. `skill-pack-spec.zh.md`
7. `production-language-guide.zh.md`
8. `bilingual-audience-strategy.zh.md`
9. `terminology-glossary.zh.md`
10. `handoff-contracts.zh.md`
11. `templates.zh.md`
12. `delivery-plan.zh.md`
13. `v0.1-execution-plan.zh.md`
14. `p0-skill-skeleton-plan.zh.md`
15. `v0.1-manifest.zh.md`
16. `testing-strategy.zh.md`
17. `mvp-roadmap.zh.md`

## 3. Document Map

| Document | Purpose |
|---|---|
| `../muse-game-workshop-plan.zh.md` / `../muse-game-workshop-plan.en.md` | Defines the overall project plan, production workflow, sample game plan, MVP scope, and reference strategy. |
| `vision.zh.md` / `vision.en.md` | Defines the project vision, product thesis, core principles, P0/P1/P2 boundaries, and long-term success criteria. |
| `prd.zh.md` / `prd.en.md` | Defines product goals, users, scope, functional requirements, and success metrics. |
| `technical-architecture.zh.md` / `technical-architecture.en.md` | Defines layered architecture, Godot/Unreal adapters, execution layer, and evidence layer. |
| `godot-unreal-workflow.zh.md` / `godot-unreal-workflow.en.md` | Defines the practical workflow from idea to release gate. |
| `skill-pack-spec.zh.md` / `skill-pack-spec.en.md` | Defines the first tool-neutral workflow skills and maps them to production disciplines. |
| `production-language-guide.zh.md` / `production-language-guide.en.md` | Defines the two-layer naming rule for game-industry language and AI workflow terms. |
| `bilingual-audience-strategy.zh.md` / `bilingual-audience-strategy.en.md` | Defines Chinese and English audience surfaces, documentation localization, template metadata, and bilingual tests. |
| `terminology-glossary.zh.md` / `terminology-glossary.en.md` | Maps English terms to Chinese game-industry terminology. |
| `handoff-contracts.zh.md` / `handoff-contracts.en.md` | Defines deliverables, delivery forms, acceptance gates, and evidence between roles, processes, and AI tools. |
| `templates.zh.md` / `templates.en.md` | Defines document templates to implement in the future repo. |
| `delivery-plan.zh.md` / `delivery-plan.en.md` | Defines delivery tracks, version planning, stage acceptance, and release checklist. |
| `v0.1-execution-plan.zh.md` / `v0.1-execution-plan.en.md` | Defines the pre-implementation review plan, file plan, test method, and review decisions for v0.1. |
| `p0-skill-skeleton-plan.zh.md` / `p0-skill-skeleton-plan.en.md` | Defines the pre-implementation review plan, shared structure, acceptance, and exclusions for the 14 P0 skill skeletons. |
| `v0.1-manifest.zh.md` / `v0.1-manifest.en.md` | Defines the single v0.1 delivery list for initial skills, templates, checks, and dry-run evidence. |
| `testing-strategy.zh.md` / `testing-strategy.en.md` | Defines quality gates for docs, skills, templates, AI tool adapters, creative pipeline, Godot/Unreal, and release readiness. |
| `mvp-roadmap.zh.md` / `mvp-roadmap.en.md` | Defines the versioned MVP roadmap, v0.1 sub-stages, milestones, and implementation order. |

## 4. Project Positioning

One sentence:

> An AI tool-agnostic game design, content production, engineering, validation, and release workflow system for Godot and Unreal.

Core capabilities:

- Idea intake.
- Core loop design.
- Mechanic specification.
- Content matrix.
- Godot/Unreal engine mapping.
- Vertical slice planning.
- Playtest report.
- Balance check.
- Release checklist.
- Production stage and discipline mapping.
- Creative asset pipeline.
- Asset provenance and license records.
- UX/UI, onboarding, and level blockout.
- Narrative, localization, accessibility, and platform/store readiness.
- Coding tool and creative tool adapters.

## 5. Recommended Project Structure

The tree below is the full target structure. v0.1 materialization must use `v0.1-manifest.en.md` as the single source of truth; do not create examples or directories not listed in the manifest early.

```text
Muse-Game-Workshop/
  README.md
  AGENTS.md
  .agents/
    skills/
  templates/
    design/
    production/
    creative/
    ux/
    publishing/
  docs/
    product/
    architecture/
    workflows/
    localization/
    evidence/
  examples/
    godot-boss-rush/
    unreal-third-person-combat/
    shared-design/
  tools/
```

## 6. What To Do First

Do not start by writing game code. Every implementation task and structural change must first produce a design summary and execution plan, then wait for review approval before work begins. Start by building the workflow pack:

0. Confirm the review gates in `v0.1-execution-plan.zh.md` / `.en.md` and `p0-skill-skeleton-plan.zh.md` / `.en.md`.
1. After approval, materialize only the 14 P0 skill skeletons listed in `v0.1-manifest.zh.md` / `.en.md`.
2. Then materialize the 22 templates from the manifest.
3. Then materialize the 5 check entry points from the manifest.
4. Run a no-code dry run with Boss Rush / Counter Trial.
5. After v0.1 is complete, enter the v0.2 Godot example.
6. After v0.2 is complete, enter v0.3 Creative Production Ready.
7. After v0.3 is complete, enter v0.4 Unreal Mapping Slice.

P0 workflow skills:

- `game-intake`
- `core-loop`
- `mechanic-spec`
- `vertical-slice-planner`
- `engine-portability`
- `godot-workflow`
- `unreal-workflow`
- `playtest-report`
- `creative-asset-pipeline`
- `art-direction`
- `asset-brief`
- `asset-review`
- `ux-flow`
- `level-blockout`

## 7. Recommended Starting Prompt

```text
We are creating Muse Game Workshop. Target language: English. Target audience: English-speaking indie developers and small game teams. Locale: en-US unless otherwise stated. First read README, overall project plan, Vision, PRD, technical architecture, workflow, skill spec, production language guide, bilingual audience strategy, terminology glossary, handoff contracts, templates, delivery plan, v0.1 execution plan, P0 skill skeleton plan, v0.1 manifest, testing strategy, and roadmap. The v0.4 Unreal Mapping Slice review gate is Approved and the static scaffold has landed; next confirm Unreal Editor availability, then proceed with PIE test map, Data Asset, UMG, and animation-placeholder validation. Do not import final or release-candidate assets.
```

## 8. References

- Claude Code Game Studios: https://github.com/Donchitos/Claude-Code-Game-Studios
- GodotPrompter: https://github.com/jame581/GodotPrompter
- funplay MCP: https://gamebooom.ai/en
- GdUnit4: https://github.com/godot-gdunit-labs/gdUnit4
- Unreal Editor Scripting: https://dev.epicgames.com/documentation/en-us/unreal-engine/scripting-and-automating-the-unreal-editor
- Unreal Automation Test Framework: https://dev.epicgames.com/documentation/unreal-engine/automation-test-framework-in-unreal-engine
- mcp-unreal: https://github.com/remiphilippe/mcp-unreal

## 9. Next Step

In the current workspace, or in a new repo created from this package, the first implementation task should be:

> Continue v0.4 Unreal Mapping Slice editor validation. The v0.4 review gate is Approved and the static scaffold has landed; if Unreal Editor is available, create the PIE test map, Data Asset, UMG, and animation placeholders, then add validation evidence.
