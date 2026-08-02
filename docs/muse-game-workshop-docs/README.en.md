# Muse Game Workshop Documentation Package

Version: v0.9.4

Language: English

## 1. What This Is

This is the documentation package for starting the Muse Game Workshop project. The project goal is to build an AI game-production workflow system for Three.js WebGPU, Unity, Unreal Engine, and Godot, so AI coding tools and creative AI tools can reliably assist with design, production-target mapping, assets, implementation, playtests, tuning, and release checks.

It is not a game engine and not a one-click game generator. It is a workflow layer.

## 2. Recommended Reading Order

1. `../muse-game-workshop-plan.en.md`
2. `vision.en.md`
3. `prd.en.md`
4. `product-entry-and-mgw-init.en.md`
5. `zero-to-one-game-creation.en.md`
6. `user-journey.en.md`
7. `technical-architecture.en.md`
8. `godot-unreal-workflow.en.md`
9. `production-target-contract.en.md`
10. `threejs-web-runtime.en.md`
11. `unity-workflow.en.md`
12. `godot-prototype-asset-kit.en.md`
13. `genre-tracks.en.md`
14. `economy-progression.en.md`
15. `numerical-planning.en.md`
16. `agent-skill-composition.en.md`
17. `skill-pack-spec.en.md`
18. `production-language-guide.en.md`
19. `bilingual-audience-strategy.en.md`
20. `terminology-glossary.en.md`
21. `handoff-contracts.en.md`
22. `ai-art-asset-pipeline.en.md`
23. `ai-3d-asset-production.en.md`
24. `templates.en.md`
25. `game-design-systems.en.md`
26. `delivery-plan.en.md`
27. `v0.1-execution-plan.en.md`
28. `p0-skill-skeleton-plan.en.md`
29. `v0.1-manifest.en.md`
30. `testing-strategy.en.md`
31. `mvp-roadmap.en.md`

Chinese versions:

1. `../muse-game-workshop-plan.zh.md`
2. `vision.zh.md`
3. `prd.zh.md`
4. `product-entry-and-mgw-init.zh.md`
5. `zero-to-one-game-creation.zh.md`
6. `user-journey.zh.md`
7. `technical-architecture.zh.md`
8. `godot-unreal-workflow.zh.md`
9. `production-target-contract.zh.md`
10. `threejs-web-runtime.zh.md`
11. `unity-workflow.zh.md`
12. `godot-prototype-asset-kit.zh.md`
13. `genre-tracks.zh.md`
14. `economy-progression.zh.md`
15. `numerical-planning.zh.md`
16. `agent-skill-composition.zh.md`
17. `skill-pack-spec.zh.md`
18. `production-language-guide.zh.md`
19. `bilingual-audience-strategy.zh.md`
20. `terminology-glossary.zh.md`
21. `handoff-contracts.zh.md`
22. `ai-art-asset-pipeline.zh.md`
23. `ai-3d-asset-production.zh.md`
24. `templates.zh.md`
25. `game-design-systems.zh.md`
26. `delivery-plan.zh.md`
27. `v0.1-execution-plan.zh.md`
28. `p0-skill-skeleton-plan.zh.md`
29. `v0.1-manifest.zh.md`
30. `testing-strategy.zh.md`
31. `mvp-roadmap.zh.md`

## 3. Document Map

| Document | Purpose |
|---|---|
| `../muse-game-workshop-plan.zh.md` / `../muse-game-workshop-plan.en.md` | Defines the overall project plan, production workflow, sample game plan, MVP scope, and reference strategy. |
| `vision.zh.md` / `vision.en.md` | Defines the project vision, product thesis, core principles, P0/P1/P2 boundaries, and long-term success criteria. |
| `prd.zh.md` / `prd.en.md` | Defines product goals, users, scope, functional requirements, and success metrics. |
| `product-entry-and-mgw-init.zh.md` / `product-entry-and-mgw-init.en.md` | Defines the v0.7 product entry, `mgw-init` / `mgw init` command contract, shared initialization state, minimal project structure, tool adapter rules, and MCP adapter rules. |
| `zero-to-one-game-creation.zh.md` / `zero-to-one-game-creation.en.md` | Defines the day-one guided flow from empty folder and rough idea to Game Start, `muse.project.yaml`, `continue mgw-init`, production loops, review gate, and prototype-ready plan. |
| `user-journey.zh.md` / `user-journey.en.md` | Defines the user flow from getting Muse, initializing a game workspace, and choosing an AI tool through concept, pre-production, prototype, vertical slice, playtesting, assets, and release readiness. |
| `technical-architecture.zh.md` / `technical-architecture.en.md` | Defines layered architecture, four production-target adapters, execution layer, and evidence layer. |
| `godot-unreal-workflow.zh.md` / `godot-unreal-workflow.en.md` | Defines the practical multi-target workflow from idea to release gate; the filename is retained for compatibility. |
| `production-target-contract.zh.md` / `production-target-contract.en.md` | Defines first-playable and final-production targets plus a shared contract across all four targets. |
| `threejs-web-runtime.zh.md` / `threejs-web-runtime.en.md` | Defines the v0.9.3 Three.js WebGPU production path, WebGL 2 fallback, and browser validation. |
| `unity-workflow.zh.md` / `unity-workflow.en.md` | Defines v0.9.4 Unity project mapping, EditMode/PlayMode tests, and build validation. |
| `skill-pack-spec.zh.md` / `skill-pack-spec.en.md` | Defines the first tool-neutral workflow skills and maps them to production disciplines. |
| `production-language-guide.zh.md` / `production-language-guide.en.md` | Defines the two-layer naming rule for game-industry language and AI workflow terms. |
| `bilingual-audience-strategy.zh.md` / `bilingual-audience-strategy.en.md` | Defines Chinese and English audience surfaces, documentation localization, template metadata, and bilingual tests. |
| `terminology-glossary.zh.md` / `terminology-glossary.en.md` | Maps English terms to Chinese game-industry terminology. |
| `handoff-contracts.zh.md` / `handoff-contracts.en.md` | Defines deliverables, delivery forms, acceptance gates, and evidence between roles, processes, and AI tools. |
| `ai-art-asset-pipeline.zh.md` / `ai-art-asset-pipeline.en.md` | Defines the AI art asset flow from art direction, brief, generation, human edit, provenance, and review to engine validation. |
| `ai-3d-asset-production.zh.md` / `ai-3d-asset-production.en.md` | Defines a tool-agnostic contract for AI 3D inputs, production, multi-view review, cost, fallback, and validation across four production targets. |
| `godot-prototype-asset-kit.zh.md` / `godot-prototype-asset-kit.en.md` | Defines the Godot prototype asset strategy, readable proxy asset states, default `.glb` / `.gltf` direction, candidate CC0 sources, and AI 3D asset validation path. |
| `genre-tracks.zh.md` / `genre-tracks.en.md` | Defines the v0.8 first genre workflow branches and the Tactics dry-run validation path. |
| `economy-progression.zh.md` / `economy-progression.en.md` | Defines the v0.9 economy model, progression map, resource/reward tables, tuning loop, and Tactics dry-run validation path. |
| `numerical-planning.zh.md` / `numerical-planning.en.md` | Defines the v0.9.1 level curve, combat parameter table, system numerical plan, and Tactics numerical dry-run validation path. |
| `agent-skill-composition.zh.md` / `agent-skill-composition.en.md` | Defines the v0.9.2 Specialized Design Skills composition layer, role-agent bundles, handoffs, and tool-agnostic skill routing. |
| `engine-ai-development-adapters.zh.md` / `engine-ai-development-adapters.en.md` | Summarizes research and adapter design input for Godot / Unreal AI editor control, MCP, project understanding, and official automation foundations. |
| `templates.zh.md` / `templates.en.md` | Defines document templates to implement in the future repo. |
| `game-design-systems.zh.md` / `game-design-systems.en.md` | Defines the v0.6 Game Design & Systems package, covering pillars, systems, combat, encounters, tuning, playtest hypotheses, and Boss Rush / Tactics design dry runs. |
| `delivery-plan.zh.md` / `delivery-plan.en.md` | Defines delivery tracks, version planning, stage acceptance, and release checklist. |
| `v0.1-execution-plan.zh.md` / `v0.1-execution-plan.en.md` | Defines the pre-implementation review plan, file plan, test method, and review decisions for v0.1. |
| `p0-skill-skeleton-plan.zh.md` / `p0-skill-skeleton-plan.en.md` | Defines the pre-implementation review plan, shared structure, acceptance, and exclusions for the 14 P0 skill skeletons. |
| `v0.1-manifest.zh.md` / `v0.1-manifest.en.md` | Defines the single v0.1 delivery list for initial skills, templates, checks, and dry-run evidence. |
| `testing-strategy.zh.md` / `testing-strategy.en.md` | Defines quality gates for docs, skills, templates, AI tool adapters, creative pipeline, all four production targets, and release readiness. |
| `mvp-roadmap.zh.md` / `mvp-roadmap.en.md` | Defines the versioned MVP roadmap, v0.1 sub-stages, milestones, and implementation order. |

Research notes:

| Document | Purpose |
|---|---|
| `ecc-research.zh.md` / `ecc-research.en.md` | Records lessons from Everything Claude Code / ECC for Muse's tool-agnostic workflow core, tool adapters, profiles, manifests, and validation gates; this note is not a core specification source of truth. |
| `engine-ai-development-adapters.zh.md` / `engine-ai-development-adapters.en.md` | Records the Engine AI Development Adapter overview, including live editor control, project understanding, evidence, binary asset boundaries, and follow-up deep-dive targets. |
| `research/godot-ai-research.zh.md` / `research/godot-ai-research.en.md` | Studies Godot AI as the primary reference for Godot live editor control. |
| `research/ue-mcp-research.zh.md` / `research/ue-mcp-research.en.md` | Studies UE-MCP as the primary reference for deep Unreal editor automation. |
| `research/godotprompter-research.zh.md` / `research/godotprompter-research.en.md` | Studies GodotPrompter as a reference for Godot-specific workflow skill organization. |
| `research/genorca-unreal-mcp-research.zh.md` / `research/genorca-unreal-mcp-research.en.md` | Studies GenOrca Unreal MCP as a Python-first lightweight Unreal adapter reference. |
| `research/godotiq-research.zh.md` / `research/godotiq-research.en.md` | Studies GodotIQ as a Godot project-understanding reference. |
| `research/ziva-research.zh.md` / `research/ziva-research.en.md` | Studies Ziva as a Godot in-editor AI product-experience reference. |
| `research/ee0pdt-godot-mcp-research.zh.md` / `research/ee0pdt-godot-mcp-research.en.md` | Studies ee0pdt/Godot-MCP as a basic Godot MCP command-surface reference. |
| `research/engine-ai-user-feedback-scan.zh.md` / `research/engine-ai-user-feedback-scan.en.md` | Scans real user feedback from GitHub, Reddit, Godot/Unreal communities, and review sites as maturity evidence for adapter design. |
| `research/img2threejs-research.zh.md` / `research/img2threejs-research.en.md` | Reviews `img2threejs` procedural Three.js production, quality gates, cost, license, feedback, and Muse adapter boundaries. |

## 4. Project Positioning

One sentence:

> An AI tool-agnostic game design, content production, engineering, validation, and release workflow system for Three.js WebGPU, Unity, Unreal Engine, and Godot.

Core capabilities:

- Idea intake.
- Core loop design.
- Mechanic specification.
- Game design and systems design.
- Content matrix.
- Three.js Web, Unity, Unreal, and Godot production-target mapping.
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
    threejs-boss-rush/
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
8. After the v0.4 static mapping scaffold lands, v0.5 consolidates the AI art dry run, engine AI adapter research, user feedback scan, Godot integration decision, and version rebase.
9. After v0.5 is complete, enter v0.6 Game Design & Systems.
10. After v0.6 is complete, enter v0.7 Product Entry & mgw init.
11. After v0.7 is complete, run `tools/checks/check-v0.7-product-entry` to validate the product entry, user journey, and exclusions.
12. After v0.8 is complete, run `tools/checks/check-v0.8-genre-tracks` to validate the genre tracks and Tactics dry run.
13. After v0.9 is complete, run `tools/checks/check-v0.9-economy-progression` to validate economy and progression.
14. After v0.9.1 is complete, run `tools/checks/check-v0.9.1-numerical-planning` to validate numerical planning.
15. After v0.9.2 is complete, run `tools/checks/check-v0.9.2-design-skills` to validate specialized design skills and Agent Skill Composition.
16. After v0.9.3, run `tools/checks/check-v0.9.3-threejs-runtime`.
17. After v0.9.4, run `tools/checks/check-v0.9.4-unity`.
18. After v0.9.4, enter v0.10 Telemetry & Playtest Analytics.

P0 workflow skills:

- `game-intake`
- `core-loop`
- `mechanic-spec`
- `vertical-slice-planner`
- `engine-portability`
- `godot-workflow`
- `unreal-workflow`
- `threejs-workflow`
- `unity-workflow`
- `playtest-report`
- `creative-asset-pipeline`
- `art-direction`
- `asset-brief`
- `ai-3d-asset-production`
- `asset-review`
- `ux-flow`
- `level-blockout`

## 7. Recommended Starting Prompt

```text
We are creating Muse Game Workshop. Target language: English. Target audience: English-speaking indie developers and small game teams. Locale: en-US unless otherwise stated. First read README, overall project plan, Vision, PRD, Product Entry & mgw init, Zero-to-One Game Creation, User Journey, technical architecture, Production Target Contract, Three.js Web Runtime, Unity Workflow, multi-target workflow, skill spec, production language guide, bilingual audience strategy, terminology glossary, handoff contracts, templates, game design systems, Godot Prototype Asset Kit, Genre Tracks, Economy & Progression, Numerical Planning, Agent Skill Composition, delivery plan, v0.1 execution plan, P0 skill skeleton plan, v0.1 manifest, testing strategy, and roadmap. v0.9.2 Specialized Design Skills, v0.9.3 Multi-target Production Foundation and Three.js Web Runtime, and v0.9.4 Unity Workflow are complete; `mgw-init` is the guided initialization entry and `continue mgw-init` resumes it inside an AI coding tool; next enter v0.10 Telemetry & Playtest Analytics. Do not implement the real mgw CLI, install MCP, create new Unity, Unreal, or Godot projects, implement commercial backend, payment, or real telemetry services, generate or import final / release-candidate assets, or approve release balance.
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

> Enter v0.10 Telemetry & Playtest Analytics. First produce a design summary and execution plan, then define telemetry event plan, playtest analytics report, tuning decision log, privacy boundaries, review gate, evidence, and checks.
