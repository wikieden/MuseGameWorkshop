# Muse Game Workshop P0 Skill Skeleton 评审计划

版本：v0.1 approved

语言：中文

Review Status: Approved

Review Date: 2026-06-09

Reviewer: User directive, "完成当前版本"

## 1. 用途

本文件定义创建 `.agents/skills/` 下 14 个 P0 workflow skill skeleton 前的评审计划。

它不是动手批准。只有本计划 review gate 明确为 `Approved` 后，才可以创建 `.agents/skills/` 目录和 14 个 `SKILL.md` 文件。

本计划只覆盖 P0 skill skeleton，不覆盖 templates、tools/checks、dry-run evidence、Godot/Unreal 示例工程或游戏代码。

## 2. 范围真源

v0.1 skill 落地范围以 `v0.1-manifest.zh.md` 为唯一真源。

本轮允许创建的路径只有：

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

不允许创建：

- `templates/`
- `tools/checks/`
- `docs/evidence/dry-runs/`
- `examples/`
- Godot / Unreal 项目文件
- manifest 未列出的 skills

## 3. 统一 SKILL.md Skeleton

每个 `SKILL.md` 必须使用同一结构：

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

所有会修改项目结构、代码或资产的 skill 必须在 `Workflow` 或 `Quality Bar` 中明确要求：

- 先输出设计摘要。
- 先输出执行计划。
- 列出影响范围和文件路径。
- 等待 review gate 为 `Approved` 后再执行。
- 不得提前写游戏代码或导入资产。

## 4. Skill 内容来源

| Skill | 主要来源 | v0.1 skeleton 重点 |
|---|---|---|
| `game-intake` | `skill-pack-spec` 4.1 | 创意收敛、阶段判断、可验证假设。 |
| `core-loop` | `skill-pack-spec` 4.2 | 5 秒、30 秒、5 分钟、60 分钟循环。 |
| `mechanic-spec` | `skill-pack-spec` 4.3 | 输入、状态、参数、反馈、边界、测试。 |
| `vertical-slice-planner` | `skill-pack-spec` 4.5 | 7-14 天切片、必做/可砍、验收。 |
| `engine-portability` | `skill-pack-spec` 4.7 | engine-neutral spec 到 Godot/Unreal 映射。 |
| `godot-workflow` | `skill-pack-spec` 4.8 | Scene、Node、Script、Resource、Signal、test scene。 |
| `unreal-workflow` | `skill-pack-spec` 4.9 | Blueprint/C++、Actor/Component、Data Asset、UMG、PIE test map。 |
| `playtest-report` | `skill-pack-spec` 4.10 | 反馈分类、证据、假设、优先级、下一轮验证。 |
| `creative-asset-pipeline` | `skill-pack-spec` 4.14 | brief、provenance、review、engine validation gate。 |
| `art-direction` | `skill-pack-spec` 4.15 | 视觉方向、禁止方向、玩法可读性、reject criteria。 |
| `asset-brief` | `skill-pack-spec` 4.16 | 资产用途、规格、AI 工具输入、授权披露。 |
| `asset-review` | `skill-pack-spec` 4.20 | 风格、玩法可读性、技术格式、license/provenance。 |
| `ux-flow` | `skill-pack-spec` 4.22 | 菜单、HUD、教程、反馈层级、本地化/无障碍风险。 |
| `level-blockout` | `skill-pack-spec` 4.23 | 灰盒目标、遭遇、导航、视线引导、关卡 review。 |

如果 `skill-pack-spec` 与 `v0.1-manifest` 冲突，以 `v0.1-manifest` 为准。

## 5. 执行计划

review 通过后按此顺序执行：

1. 创建 `.agents/skills/` 目录。
2. 创建 14 个 skill 子目录。
3. 为每个 skill 创建 `SKILL.md`。
4. 按统一 skeleton 写入 frontmatter 和 8 个固定章节。
5. 从 `skill-pack-spec` 填入每个 skill 的 v0.1 内容。
6. 给会改变结构、代码或资产的 skill 加 review-first gate。
7. 运行人工或脚本检查，确认只创建 manifest 允许的 14 个 skills。
8. 输出完成记录，列出每个 skill 的路径和检查结果。

## 6. 验收标准

本轮完成必须同时满足：

- `.agents/skills/` 存在。
- 14 个 P0 skill 目录存在。
- 14 个 `SKILL.md` 文件存在。
- 每个 `SKILL.md` 都包含 `name`、`description`、`Use When`、`Do Not Use When`、`Inputs`、`Outputs`、`Workflow`、`Quality Bar`、`Common Failure Modes`、`Next Skills`。
- 每个 skill 都有明确的下一步 skill。
- 会修改项目结构、代码或资产的 skill 都包含 review-first gate。
- 没有创建 manifest 未列出的 skill。
- 没有创建 templates、checks、dry-run evidence 或游戏代码。

## 7. 建议检查

```sh
find .agents/skills -maxdepth 2 -type f | sort
find .agents/skills -maxdepth 1 -mindepth 1 -type d | wc -l
rg -n "^name:|^description:|^## Use When|^## Do Not Use When|^## Inputs|^## Outputs|^## Workflow|^## Quality Bar|^## Common Failure Modes|^## Next Skills" .agents/skills
find .agents/skills -maxdepth 1 -mindepth 1 -type d -print | sort
find . -path ./.git -prune -o -type f \( -name '*.gd' -o -name '*.tscn' -o -name '*.tres' -o -name '*.uasset' -o -name '*.umap' -o -name '*.uproject' -o -name '*.cpp' -o -name '*.h' -o -name '*.cs' -o -name '*.shader' -o -name '*.import' \) -print
```

## 8. Review Checklist

review 时请确认：

- 14 个 skill 是否完整覆盖 v0.1 P0。
- skeleton 字段是否足够让 Codex、Claude Code、Kiro CLI、opencode 等工具执行。
- 是否有任何 skill 会诱导直接写游戏代码。
- creative asset 相关 skill 是否都保留 brief、provenance 和 review gate。
- Godot/Unreal 相关 skill 是否仍然先从 engine-neutral spec 开始。
- 本轮是否严格不创建 templates、checks、dry-run evidence 和示例工程。

## 9. Approval Record

```md
## Review Gate

- Review Status: Approved
- Reviewer: User directive, "完成当前版本"
- Date: 2026-06-09
- Scope Reviewed: P0 skill skeleton plan
- Required Changes: None for v0.1
- Notes: Approval only covers the 14 P0 skill skeletons listed in v0.1 manifest.
```

只有 `Review Status: Approved` 时，才能创建 `.agents/skills/`。
