# Muse Game Workshop Rules

This file applies to the entire repository.

Muse Game Workshop is an AI tool-agnostic game production workflow pack for indie game development. It is not a game engine and not a one-click game generator. Keep the project understandable to game developers while preserving AI-native workflow mechanics such as skills, review gates, evidence, provenance, dry runs, and checks.

## 1. Source Of Truth

Read the docs before making structural changes:

1. `README.md`
2. `docs/muse-game-workshop-plan.zh.md` or `docs/muse-game-workshop-plan.en.md`
3. `docs/muse-game-workshop-docs/vision.zh.md` or `.en.md`
4. `docs/muse-game-workshop-docs/prd.zh.md` or `.en.md`
5. `docs/muse-game-workshop-docs/technical-architecture.zh.md` or `.en.md`
6. `docs/muse-game-workshop-docs/godot-unreal-workflow.zh.md` or `.en.md`
7. `docs/muse-game-workshop-docs/skill-pack-spec.zh.md` or `.en.md`
8. `docs/muse-game-workshop-docs/production-language-guide.zh.md` or `.en.md`
9. `docs/muse-game-workshop-docs/bilingual-audience-strategy.zh.md` or `.en.md`
10. `docs/muse-game-workshop-docs/terminology-glossary.zh.md` or `.en.md`
11. `docs/muse-game-workshop-docs/handoff-contracts.zh.md` or `.en.md`
12. `docs/muse-game-workshop-docs/templates.zh.md` or `.en.md`
13. `docs/muse-game-workshop-docs/delivery-plan.zh.md` or `.en.md`
14. `docs/muse-game-workshop-docs/v0.1-execution-plan.zh.md` or `.en.md`
15. `docs/muse-game-workshop-docs/p0-skill-skeleton-plan.zh.md` or `.en.md`
16. `docs/muse-game-workshop-docs/v0.1-manifest.zh.md` or `.en.md`
17. `docs/muse-game-workshop-docs/testing-strategy.zh.md` or `.en.md`
18. `docs/muse-game-workshop-docs/mvp-roadmap.zh.md` or `.en.md`

If a document conflicts with `v0.1-manifest.*.md` during v0.1 delivery, follow the manifest for concrete file, skill, template, check, and dry-run scope.

## 2. Review Gate

Do not modify code, assets, or project structure until the current task has a design summary and execution plan that the user has reviewed and approved.

Required pre-implementation output:

- Design summary.
- Execution plan.
- Impact scope.
- Files or directories to create or modify.
- Decisions that need review.
- Validation plan.

Valid review statuses:

- `Approved`: proceed within the reviewed scope.
- `Needs revision`: update the plan or docs first, then ask for review again.
- `Rejected`: stop the proposed implementation path.

For v0.1, `AGENTS.md` may be created after explicit user approval. Do not treat this approval as approval to also create `.agents/skills/`, `templates/`, `tools/checks/`, dry-run evidence, or game code.

## 3. Current v0.1 Boundary

v0.1 is a workflow pack MVP.

Allowed after review approval:

- Project rules.
- P0 workflow skills.
- Core templates.
- Static check entry points.
- Boss Rush / Counter Trial no-code dry-run evidence.
- Documentation updates needed to keep indexes, prompts, and scope consistent.

Not allowed in v0.1:

- Godot playable prototype.
- Unreal playable prototype.
- Commercial creative-tool API integration.
- MCP editor automation.
- Final art, animation, music, or sound assets.
- Store pages, trailers, or release builds.
- P1/P2 feature implementation unless the docs are explicitly revised and approved.

## 4. Tool-Agnostic AI Workflow

Do not assume the project is Codex-only.

The same workflow should be usable by:

- Codex.
- Claude Code.
- Kiro CLI.
- opencode.
- Other AI coding tools that can read project rules, docs, and task plans.

Tool-specific commands, agents, hooks, rules, or config belong in adapter documentation. They must map back to the shared workflow core, review gate, templates, and evidence records.

## 5. Production Language

Use game-industry language for public-facing concepts:

- Concept / 概念阶段
- Pre-production / 预制作
- Prototype / 原型验证
- Vertical Slice / 垂直切片
- Production / 正式制作
- Playtest / 试玩测试
- Polish / 打磨
- QA / 测试
- Release / 发布
- Postmortem / 项目复盘

Do not describe the product as a pile of unfamiliar agents. Use roles that game developers understand, such as Producer / 制作人, Game Designer / 游戏策划, Technical Designer / 技术策划, Art Director / 美术总监, Gameplay Programmer / 玩法程序, QA / 测试, and Release Manager / 发布负责人.

AI-native terms such as workflow skill, tool adapter, review gate, evidence, provenance, and dry run may remain in internal implementation, but they must be explained through production deliverables and quality gates.

## 6. Bilingual Documentation

Muse Game Workshop serves both Chinese and English users.

When editing Chinese-facing docs:

- Use Chinese game-industry terminology.
- Introduce important English terms with the format `English / 中文行业叫法` on first mention when useful.
- Check `terminology-glossary.zh.md` before inventing a new Chinese term.

When editing English-facing docs:

- Use natural English game-production language.
- Do not force Chinese explanations into main copy unless discussing terminology, localization, or China-market context.
- Keep meaning aligned with the Chinese docs without doing awkward literal translation.

When adding a core document, add both `*.zh.md` and `*.en.md` unless the user explicitly approves a single-language exception. Update README, package indexes, startup prompts, and tests when a new required document is added.

## 7. Design Rules

Always clarify the production stage before implementation.

A mechanic spec must include:

- Player input.
- State transitions.
- Parameters.
- Feedback.
- Edge cases.
- Tests or playtest checks.

Content entries must include design intent, not only stats. Difficulty should come from readable patterns and meaningful decisions, not hidden information.

Creative assets must start from art direction or an asset brief, not open-ended generation. UX, tutorial, level blockout, localization, and accessibility are production requirements, not polish afterthoughts.

## 8. Assets And Provenance

Do not import AI-generated or AI-assisted assets without:

- Asset brief.
- Tool and model/service used.
- Prompt or source description.
- Version or generation settings when available.
- License and usage rights.
- Human modifications.
- Human review decision.
- Engine validation notes.
- Platform disclosure risk.

Asset review must check style consistency, gameplay readability, technical format, performance budget, and license/platform risk.

Music and SFX briefs must define triggers, loop behavior, volume hierarchy, variation strategy, and in-engine validation steps.

Assets without brief, provenance, and review records cannot enter example projects.

## 9. Implementation Rules

Prefer design docs and mechanic specs before code changes.

Keep mechanics data-driven. Do not hardcode tunable gameplay values in hot code paths.

Preserve boundaries between gameplay, UI, assets, editor tools, tests, and release scripts.

For Godot, separate Scene, Script, Resource, UI, test scene, and export concerns.

For Unreal, separate Blueprint, C++, Data Asset, UMG, Animation, level test-map, and packaging concerns.

Do not convert an engine-neutral mechanic spec into engine-specific assumptions too early.

Keep prototypes isolated unless the reviewed plan explicitly promotes them.

## 10. Playtest And QA

Every implemented mechanic must include a playtest checklist.

Convert feedback into hypotheses before changing multiple systems. Prefer one variable change per test round when possible.

Playtest records should distinguish:

- Design issue.
- Implementation bug.
- Balance/tuning issue.
- Feedback/readability issue.
- Asset or audio issue.
- UX/onboarding issue.
- Performance or platform issue.

Bug reports need reproduction steps, expected behavior, actual behavior, evidence, severity, and next action.

## 11. Checks And Validation

Run the smallest relevant validation after every implementation task.

For documentation work, check at minimum:

- Local Markdown links exist.
- Chinese and English core docs are paired.
- Startup prompts include target language, target audience, bilingual audience strategy, v0.1 execution plan, v0.1 manifest, testing strategy, and review gate.
- New templates include the shared metadata block.

For v0.1, the planned check entry points are:

- `tools/checks/check-doc-links`
- `tools/checks/check-doc-pairs`
- `tools/checks/check-startup-prompts`
- `tools/checks/check-template-metadata`
- `tools/checks/check-v0.1-manifest`

Until these scripts exist, use equivalent manual or shell checks and report what was run.

## 12. Editing Discipline

Keep changes scoped to the reviewed task.

Do not revert user changes unless the user explicitly asks. If unrelated local changes exist, leave them alone. If they affect the task, work with them and explain the impact.

Use clear, stable filenames and directory names. Prefer existing docs, terminology, and project structure over inventing new conventions.

Do not add decorative process, new roles, or new abstractions unless they reduce real ambiguity or match the approved workflow.

When the user asks for review, lead with risks, bugs, missing tests, and scope issues before summary.
