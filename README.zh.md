# Muse Game Workshop

> 面向独立游戏的 AI tool-agnostic 制作工作流系统，让 AI 参与 Godot / Unreal 游戏开发时仍然可计划、可审查、可追踪、可发布。

English version: [README.en.md](README.en.md)

## 这是什么

Muse Game Workshop 是一套面向独立游戏开发者和小团队的 AI-assisted game production operating model。它不是游戏引擎，也不是一键生成游戏工具，而是把游戏从创意、预制作、原型、垂直切片、正式制作、试玩迭代、QA、打磨到发布的流程，沉淀成可复用的 workflow skills、文档模板、检查清单、项目规则和工具适配策略。

它的核心目标很简单：让 AI 帮忙加速制作，但不夺走人类对游戏方向、创意资产、玩法判断和发布质量的控制权。

## 为什么需要它

AI coding tools 和 creative AI tools 已经能快速生成代码、概念图、音频方向、关卡想法和测试脚本。但独立游戏真正困难的地方往往不是“生成更多东西”，而是持续回答这些制作问题：

- 我们到底在做什么游戏？
- 下一步最小可验证产出是什么？
- 这个机制是否真的好玩？
- AI 生成的美术、动作、音乐、音效和 UI 资产是否能进入同一条 production pipeline？
- 每次 AI 参与的设计、代码、资产、测试和发布决策是否可解释、可追踪、可被人类批准？

Muse Game Workshop 试图把这些问题变成一套可执行的工作流，而不是散落在聊天记录里的上下文。

## 核心思路

Muse Game Workshop 用游戏行业已经理解的语言组织 AI 辅助开发：

- **Production stages / 制作阶段**：Concept / 概念阶段、Pre-production / 预制作、Prototype / 原型验证、Vertical Slice / 垂直切片、Production / 正式制作、Playtest / 试玩测试、Polish / 打磨、QA / 测试、Release / 发布、Postmortem / 项目复盘。
- **Production disciplines / 制作职能**：Producer / 制作人、Game Designer / 游戏策划、Technical Designer / 技术策划、Art Director / 美术总监、Gameplay Programmer / 玩法程序、QA / 测试、Release Manager / 发布负责人。
- **Workflow Skills / 工作流技能**：把具体任务拆成可复用流程，例如 `game-intake`、`mechanic-spec`、`creative-asset-pipeline`、`playtest-report`、`release-checklist`。
- **Review Gates / 评审节点**：所有实现任务和结构性改动都必须先输出设计摘要与执行计划，等待 review 通过后再动手。
- **Evidence Records / 证据记录**：关键设计、资产来源、授权、prompt、测试结果、发布风险必须落盘，而不是只存在聊天记录里。

命名策略是“双层语言”：对外用游戏行业习惯叫法，对内保留 AI workflow 的可执行机制。不要把产品讲成一堆 agent，也不要为了贴近传统流程而牺牲 AI-native 的 dry run、tool adapter、evidence、provenance 和自动检查能力。

双语策略是“一个 workflow core，两套 user-facing surfaces”：中文用户体验优先使用中国游戏行业叫法，英文用户体验优先使用自然的英文游戏制作术语。

## 面向谁

第一阶段优先服务：

- Solo 独立游戏开发者。
- 2-5 人小型游戏团队。
- 有创意但缺少稳定工程推进节奏的策划、美术或创意开发者。
- 中文独立游戏开发者和中文游戏行业从业者，需要中国游戏界能理解的制作叫法。
- English-speaking indie developers and small teams who need natural English game-production docs。
- 想用 Codex、Claude Code、Kiro CLI、opencode 等 AI coding tools 做 Godot / Unreal 项目的人。
- 希望把图像、音频、视频、3D、动作、UI、本地化等 creative AI tools 纳入可审查资产流程的人。
- 想把 AI 辅助开发从 vibe coding 升级成可控制作流程的人。

## 当前状态

当前仓库已完成 v0.3 Creative Production Ready：

- `AGENTS.md`
- 14 个 P0 workflow skills：`.agents/skills/*/SKILL.md`
- 27 个模板：`templates/`，其中 22 个来自 v0.1，5 个来自 v0.3 creative templates
- 8 个检查入口：`tools/checks/`
- Boss Rush / 《反击试炼》无代码 dry-run evidence：`docs/evidence/dry-runs/`
- Godot Boss Rush prototype：`examples/godot-boss-rush/`
- v0.2 evidence：`docs/evidence/v0.2/`
- v0.3 creative asset evidence：`docs/evidence/v0.3/`
- prototype visual/audio assets：`examples/godot-boss-rush/assets/`
- v0.4 Unreal static mapping scaffold：`examples/unreal-boss-rush/`

v0.4 Unreal Mapping Slice 已有 Approved review gate 和静态骨架，但本机未找到 Unreal Editor，因此 PIE 验证和二进制 `.uasset` / `.umap` 创建仍被阻塞。仍然没有正式或 release-candidate 美术/音频资产。

## 覆盖范围

P0 已进入 v0.1 workflow pack：

- Creative Asset Pipeline：美术、动作、VFX、音乐、音效、UI 资产从 brief 到引擎验证。
- Asset Provenance：AI 工具、prompt、参考、授权、人工 review、使用范围。
- UX/UI & Onboarding：菜单、HUD、设置、新手引导、反馈层级、基础可访问性。
- Level Design：blockout、encounter、节奏、导航、视线引导和关卡 review。

P1 进入近期设计：

- Narrative & Worldbuilding。
- Platform & Store Readiness。
- Localization。
- Accessibility。

P2 放入未来规划：

- Analytics & Telemetry。
- Community & Marketing。
- Monetization。
- LiveOps & Post-launch。
- Modding / UGC。
- Security & Privacy。

## 文档

建议先读 Vision，再读 PRD、落地方案和测试策略：

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

## 第一条启动 Prompt

```text
我们要创建 Muse Game Workshop。目标语言：中文；目标用户群体：中国独立游戏开发者和小型游戏团队；地区语境：zh-CN。请先读取 README、overall project plan、Vision、PRD、technical architecture、workflow、skill spec、production language guide、bilingual audience strategy、terminology glossary、handoff contracts、templates、delivery plan、v0.1 execution plan、P0 skill skeleton plan、v0.1 manifest、testing strategy 和 roadmap。v0.4 Unreal Mapping Slice review gate 已 Approved，静态骨架已落地；下一步先确认 Unreal Editor 可用性，再做 PIE test map、Data Asset、UMG 和动画占位验证。不要导入 final 或 release-candidate 资产。
```

## 检查

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
