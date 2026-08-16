# Claude Code Adapter

This repository is Muse Game Workshop, an AI tool-agnostic game-production workflow pack. It is not a game engine or a one-click game generator.

## Authoritative Instructions

Read and follow these sources in order:

1. `AGENTS.md` for repository-wide rules, current delivery boundaries, and the mandatory Review Gate.
2. `README.md` for the product entry point and current package overview.
3. `docs/muse-game-workshop-plan.zh.md` or `.en.md` for the long-form plan.
4. The paired documents listed under `Source Of Truth` in `AGENTS.md` for the task in scope.
5. `.agents/skills/<skill-name>/SKILL.md` for task-specific workflow instructions.

If this file conflicts with `AGENTS.md`, follow `AGENTS.md`.

## Mandatory Review Gate

Before modifying code, assets, skills, templates, examples, or project structure, provide:

- Design summary.
- Execution plan.
- Impact scope.
- Files or directories to create or modify.
- Decisions needing review.
- Validation plan.

Wait for `Approved`. Stop on `Needs revision` or `Rejected`.

## Claude Code Skills

The canonical skill source is `.agents/skills/`. Claude Code may expose the same skills through project or personal `.claude/skills/` adapters, but those adapters must not fork or rewrite the workflow core.

When a task matches a skill:

1. Read its `SKILL.md` completely.
2. Follow its review and evidence requirements.
3. Use the same deliverables, terminology, and validation gates as Codex, Cursor, and other supported AI coding tools.

Tool-specific commands, hooks, subagents, or MCP configuration are optional adapters. They never override the workflow core or approve implementation.

## Working Rules

- Do not start by writing game code. Engine or example implementation begins only after the applicable design summary and execution plan are approved.
- For v0.1 delivery or maintenance, `docs/muse-game-workshop-docs/v0.1-manifest.zh.md` and its English pair are the concrete scope source of truth.
- Preserve the current production-stage and version boundary from `AGENTS.md`; do not rely on hard-coded historical status in adapter files.
- Keep engine-neutral design truth separate from Three.js, Unity, Unreal, and Godot mappings.
- Keep tunable mechanics data-driven and preserve gameplay, UI, assets, tests, editor tooling, and release seams.
- Core user-facing documentation must remain paired in Chinese and English.
- Do not import generated assets without brief, provenance, rights, human review, and engine-validation records.
- Do not claim editor, runtime, build, device, or release validation without real evidence.
- Preserve unrelated user changes and dirty worktrees.

## Validation

Run the smallest relevant checks under `tools/checks/` after every approved change. At minimum for documentation or adapter changes, run:

```sh
tools/checks/check-doc-links
tools/checks/check-doc-pairs
tools/checks/check-startup-prompts
```

Also run the version-, target-, skill-, template-, or evidence-specific check that covers the changed surface. Report exact commands, results, skipped checks, and blockers.
