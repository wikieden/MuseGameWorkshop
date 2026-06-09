# Muse Game Workshop P0 Skill Skeleton Review Plan

Version: v0.1 approved

Language: English

Review Status: Approved

Review Date: 2026-06-09

Reviewer: User directive, "complete the current version"

## 1. Purpose

This document defines the review plan before creating the 14 P0 workflow skill skeletons under `.agents/skills/`.

It is not implementation approval. The `.agents/skills/` directory and the 14 `SKILL.md` files may be created only after this plan's review gate is explicitly `Approved`.

This plan covers only P0 skill skeletons. It does not cover templates, tools/checks, dry-run evidence, Godot/Unreal example projects, or game code.

## 2. Scope Source Of Truth

The v0.1 skill scope uses `v0.1-manifest.en.md` as the single source of truth.

This round may create only these paths:

```text
.agents/
  skills/
    game-intake/SKILL.md
    core-loop/SKILL.md
    mechanic-spec/SKILL.md
    vertical-slice-planner/SKILL.md
    engine-portability/SKILL.md
    godot-workflow/SKILL.md
    unreal-workflow/SKILL.md
    playtest-report/SKILL.md
    creative-asset-pipeline/SKILL.md
    art-direction/SKILL.md
    asset-brief/SKILL.md
    asset-review/SKILL.md
    ux-flow/SKILL.md
    level-blockout/SKILL.md
```

Do not create:

- `templates/`
- `tools/checks/`
- `docs/evidence/dry-runs/`
- `examples/`
- Godot / Unreal project files
- Skills not listed in the manifest

## 3. Shared SKILL.md Skeleton

Every `SKILL.md` must use the same structure:

```md
---
name: skill-name
description: One sentence describing exactly when this skill should trigger.
---

# Skill Name

## Use When

## Do Not Use When

## Inputs

## Outputs

## Workflow

## Quality Bar

## Common Failure Modes

## Next Skills
```

Any skill that changes project structure, code, or assets must explicitly require in `Workflow` or `Quality Bar`:

- Produce a design summary first.
- Produce an execution plan first.
- List impact scope and file paths.
- Wait until the review gate is `Approved`.
- Do not write game code or import assets early.

## 4. Skill Content Sources

| Skill | Main Source | v0.1 Skeleton Focus |
|---|---|---|
| `game-intake` | `skill-pack-spec` 4.1 | Idea intake, stage detection, verifiable hypotheses. |
| `core-loop` | `skill-pack-spec` 4.2 | 5-second, 30-second, 5-minute, and 60-minute loops. |
| `mechanic-spec` | `skill-pack-spec` 4.3 | Input, state, parameters, feedback, edge cases, tests. |
| `vertical-slice-planner` | `skill-pack-spec` 4.5 | 7-14 day slice, must-haves, cut list, acceptance. |
| `engine-portability` | `skill-pack-spec` 4.7 | Engine-neutral spec to Godot/Unreal mappings. |
| `godot-workflow` | `skill-pack-spec` 4.8 | Scene, Node, Script, Resource, Signal, test scene. |
| `unreal-workflow` | `skill-pack-spec` 4.9 | Blueprint/C++, Actor/Component, Data Asset, UMG, PIE test map. |
| `playtest-report` | `skill-pack-spec` 4.10 | Feedback categories, evidence, hypotheses, priority, next validation. |
| `creative-asset-pipeline` | `skill-pack-spec` 4.14 | Brief, provenance, review, engine validation gate. |
| `art-direction` | `skill-pack-spec` 4.15 | Visual direction, excluded directions, gameplay readability, reject criteria. |
| `asset-brief` | `skill-pack-spec` 4.16 | Asset purpose, specs, AI tool input, license disclosure. |
| `asset-review` | `skill-pack-spec` 4.20 | Style, gameplay readability, technical format, license/provenance. |
| `ux-flow` | `skill-pack-spec` 4.22 | Menu, HUD, tutorial, feedback hierarchy, localization/accessibility risk. |
| `level-blockout` | `skill-pack-spec` 4.23 | Greybox goal, encounters, navigation, sightlines, level review. |

If `skill-pack-spec` conflicts with `v0.1-manifest`, follow `v0.1-manifest`.

## 5. Execution Plan

After review approval, execute in this order:

1. Create the `.agents/skills/` directory.
2. Create the 14 skill subdirectories.
3. Create one `SKILL.md` file for each skill.
4. Add frontmatter and the 8 fixed sections from the shared skeleton.
5. Fill each skill with v0.1 content from `skill-pack-spec`.
6. Add the review-first gate to any skill that may change structure, code, or assets.
7. Run manual or scripted checks to confirm only the 14 manifest-approved skills exist.
8. Produce a completion note listing each skill path and check result.

## 6. Acceptance Criteria

This round is complete only when:

- `.agents/skills/` exists.
- 14 P0 skill directories exist.
- 14 `SKILL.md` files exist.
- Every `SKILL.md` includes `name`, `description`, `Use When`, `Do Not Use When`, `Inputs`, `Outputs`, `Workflow`, `Quality Bar`, `Common Failure Modes`, and `Next Skills`.
- Every skill has explicit next skills.
- Every skill that changes project structure, code, or assets includes the review-first gate.
- No skill outside the manifest is created.
- No templates, checks, dry-run evidence, or game code are created.

## 7. Suggested Checks

```sh
find .agents/skills -maxdepth 2 -type f | sort
find .agents/skills -maxdepth 1 -mindepth 1 -type d | wc -l
rg -n "^name:|^description:|^## Use When|^## Do Not Use When|^## Inputs|^## Outputs|^## Workflow|^## Quality Bar|^## Common Failure Modes|^## Next Skills" .agents/skills
find .agents/skills -maxdepth 1 -mindepth 1 -type d -print | sort
find . -path ./.git -prune -o -type f \( -name '*.gd' -o -name '*.tscn' -o -name '*.tres' -o -name '*.uasset' -o -name '*.umap' -o -name '*.uproject' -o -name '*.cpp' -o -name '*.h' -o -name '*.cs' -o -name '*.shader' -o -name '*.import' \) -print
```

## 8. Review Checklist

During review, confirm:

- The 14 skills fully cover v0.1 P0.
- The skeleton fields are enough for Codex, Claude Code, Kiro CLI, opencode, and similar tools to execute.
- No skill encourages writing game code directly.
- Creative asset skills preserve brief, provenance, and review gates.
- Godot/Unreal skills still start from engine-neutral specs.
- This round strictly avoids templates, checks, dry-run evidence, and example projects.

## 9. Approval Record

```md
## Review Gate

- Review Status: Approved
- Reviewer: User directive, "complete the current version"
- Date: 2026-06-09
- Scope Reviewed: P0 skill skeleton plan
- Required Changes: None for v0.1
- Notes: Approval only covers the 14 P0 skill skeletons listed in the v0.1 manifest.
```

Only `Review Status: Approved` permits creating `.agents/skills/`.
