# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

Muse Game Workshop is **not a game and not a game engine**. It is an AI tool-agnostic **game-production workflow pack** for indie Godot/Unreal projects — workflow skills, doc templates, checklists, project rules, and engine-adapter strategy that keep AI-assisted game development planned, reviewable, traceable, and shippable.

Current state: **v0.4 Unreal Mapping Slice static scaffold in progress.** The repo has Markdown design docs under `docs/`, project-root `AGENTS.md`, 14 P0 workflow skills under `.agents/skills/`, 27 root-level templates, 8 `tools/checks/` entry points, Boss Rush no-code dry-run evidence, a Godot Boss Rush prototype under `examples/godot-boss-rush/`, v0.3 prototype visual/audio assets with provenance, asset review, and Godot engine validation evidence, and an approved Unreal static mapping scaffold under `examples/unreal-boss-rush/`. Unreal Editor was not found locally, so PIE validation and binary `.uasset` / `.umap` creation remain blocked. There are still no final or release-candidate art/audio assets.

The product **is the workflow**, not the sample game. Sample games are test fixtures for the workflow; never let a sample game grow into the deliverable.

## The One Rule That Overrides Everything: Review-First Gate

Before any implementation, directory scaffolding, skill authoring, template creation, or example project — **output a design summary + execution plan + impact scope + decision points needing review, then STOP and wait for approval.** Do not modify code, assets, or project structure until review passes. This gate is the boundary between planning and execution; it applies to you and to every skill you write. **Do not start by writing game code.**

## Architecture (Layered Workflow)

Read these as a pipeline, top to bottom (see `docs/muse-game-workshop-docs/technical-architecture.zh.md`):

1. **Production Design Layer** — engine-neutral only: pitch, player fantasy, core loop, mechanic spec, content matrix, level design. No Godot nodes / Unreal Blueprints leak in here.
2. **Workflow Core** — the actual product: stages, disciplines, workflow skills, templates, quality gates. Carries `language` / `target audience` / `locale` / `terminology source` downstream so tools never guess.
3. **Bilingual Audience Layer** — zh-CN and en-US surfaces over one shared core.
4. **Tool Adapter Layer** — maps the core onto Codex (`AGENTS.md` + `.agents/skills/`), Claude Code (commands/agents/hooks/rules), Kiro CLI, opencode. Swapping the tool must not change stages, specs, or gates.
5. **Engine Mapping Layer** — engine-neutral spec → Godot (Scene/Node/Script/Resource/Signal) or Unreal (Actor/Component/Blueprint/C++/Data Asset). Never pollute design docs back with engine details.
6. **Review Gate** → **Execution Layer** → **Evidence Layer** (build logs, screenshots, playtest reports, asset provenance, decision logs) feeds back into the core.

**Always write the engine-neutral mechanic spec first, then map to Godot or Unreal.** Godot is the default for 2D/light-3D/solo; Unreal for 3D action/animation-heavy. Don't pick Unreal just because it looks more "professional."

## Bilingual Conventions (Strict)

- **One workflow core, two user-facing surfaces.** zh docs are NOT translations of en docs and vice versa — wording may differ, structure/decisions/version status should match.
- **Core docs exist in pairs:** `*.zh.md` + `*.en.md`. A core doc missing its pair fails CI.
- **Slugs and filenames stay stable English kebab-case** (`game-intake`, `mechanic-spec`, `asset-brief`) across both languages so tooling never breaks on language switch.
- zh docs use Chinese game-industry terms; on a new English term's first use give the Chinese industry equivalent (`English / 中文行业叫法`). en docs use natural English production language; do NOT stuff Chinese into the body.
- Project-level terms must land in `terminology-glossary.zh.md` / `terminology-glossary.en.md` before being used elsewhere.
- Every startup prompt must declare target language, target audience, locale, and terminology source.

## Skills & Templates (when scaffolding v0.1)

**Skills** live at `.agents/skills/<slug>/SKILL.md`. A skill is an executable production-workflow capability mapped to a game-industry discipline (Producer, Game Designer, etc.) — **not a role-play persona or invented agent title.** Every `SKILL.md` must contain: `name`, `description`, `Use When`, `Do Not Use When`, `Inputs`, `Outputs`, `Workflow`, `Quality Bar`, `Common Failure Modes`, `Next Skills`. Any skill that touches structure/code/assets must enforce the review-first gate.

**Templates** live under `templates/{design,production,creative,ux,publishing}/` and **must begin with the shared Metadata block** (`Language`, `Target Audience`, `Locale`, `Platform Region`, `Terminology Source`, `Paired Document`, `Owner`, `Review Status`, `Last Updated`). Templates must not bind to a single engine or single AI tool.

Authoritative scope lists (don't improvise these):
- v0.1 deliverables: `docs/muse-game-workshop-docs/v0.1-manifest.zh.md` (14 P0 skills, 22 templates, 5 checks, Boss Rush dry run). **This manifest wins over any other doc when actually creating files.**
- Project-root rules: `AGENTS.md`. This is the current normative project rule file; the older draft in plan §9 is historical source material only.
- Skill catalog + SKILL.md template: `skill-pack-spec.zh.md`.
- P0 skill skeleton review plan: `docs/muse-game-workshop-docs/p0-skill-skeleton-plan.zh.md`. This plan was approved for v0.1 materialization; future skill additions still require a new review gate.
- Handoff contracts + delivery states (Draft → Review Ready → Approved → Implemented → Validated → Release Candidate / Rejected): `handoff-contracts.zh.md`.
- Version roadmap (v0.1 pack → v0.2 Godot → v0.3 creative → v0.4 Unreal → v0.5 publishing → v1.0): `delivery-plan.zh.md`.

**v0.1 explicitly does NOT include** Godot/Unreal game code, commercial creative-tool APIs, or MCP automation. Don't let game code jump ahead into v0.1.

## Test Fixture

The canonical dry-run fixture is **Boss Rush / 《反击试炼》 (Counter Trial)**: dodge / parry / counter / stamina, three-phase boss. Used to prove the workflow chain (`game-intake → core-loop → mechanic-spec → vertical-slice-planner → engine-portability → creative-asset-pipeline → ux-flow → level-blockout → playtest-report`) end-to-end without writing game code. See plan §15 in `docs/muse-game-workshop-plan.zh.md` and the dry-run definition in `docs/muse-game-workshop-docs/v0.1-manifest.zh.md`.

## Quality Gates & Checks

Testing philosophy (`testing-strategy.zh.md`): the workflow is the product, so test the **handoffs**, not just a build. Automated static checks + mandatory human review.

v0.1 implements these check entrypoints (output format `PASS <name>` / `FAIL <name>: <reason>`):

```text
tools/checks/check-doc-links        # all local markdown links resolve
tools/checks/check-doc-pairs        # every core doc has its zh/en pair
tools/checks/check-startup-prompts  # prompts declare lang/audience + required reading
tools/checks/check-template-metadata# every template has the shared metadata block
tools/checks/check-v0.1-manifest    # manifest skills/templates/checks/evidence exist; no early game code
tools/checks/check-v0.2-godot       # Godot prototype paths, scripts, simulation, and headless open
tools/checks/check-v0.3-creative-assets # v0.3 prototype assets, provenance, review, and engine validation
tools/checks/check-v0.4-unreal      # v0.4 Unreal static scaffold and editor-availability-aware validation
```

If a script fails or is unavailable, run the equivalent static checks manually:

```sh
find docs -maxdepth 3 -type f | sort
rg -n "vision\.(zh|en)\.md" README.md docs
rg -n "v0\.1-execution-plan\.(zh|en)\.md|v0\.1 execution plan" README.md docs CLAUDE.md
rg -n "terminology-glossary\.(zh|en)\.md|术语表" README.md docs
rg -n "v0\.1-manifest\.(zh|en)\.md" README.md docs
find . -path ./.git -prune -o -type f \( -name '*.gd' -o -name '*.tscn' -o -name '*.tres' -o -name '*.uasset' -o -name '*.umap' -o -name '*.uproject' -o -name '*.cpp' -o -name '*.h' -o -name '*.cs' -o -name '*.shader' -o -name '*.import' \) -print
```

A version is "done" only when: docs updated, static checks pass, dry run passes, engine validation exists (if engines involved), provenance + asset review exist (if assets involved), release checklist exists (if releasing), known risks in release notes, and the review-gate verdict is explicitly written as Approved / Needs revision / Rejected.

## Asset Rule

No AI-generated/AI-assisted asset enters the project without provenance (tool, prompt, model/version, license, human edits, usage scope) and a passing asset review. Asset states: `placeholder` → `prototype` → `reviewed` → `release-candidate` (or `rejected`). No provenance ⇒ cannot become release-candidate; no review ⇒ cannot enter an engine example.
