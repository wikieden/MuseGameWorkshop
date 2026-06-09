# Muse Game Workshop 文档包

版本：v0.3

语言：中文

## 1. 这是什么

这是一套用于启动 Muse Game Workshop 项目的文档包。项目目标是构建面向 Godot 和 Unreal Engine 的 AI 游戏制作工作流系统，让 AI coding tools 和创意 AI tools 能围绕游戏行业熟悉的制作阶段和制作职能，稳定辅助策划、机制规格、引擎映射、美术/动作/场景/音乐/音效资产、实现拆分、试玩复盘、调优和发布检查。

它不是游戏引擎，也不是一键生成游戏工具。它是一个工作流层。

## 2. 推荐阅读顺序

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
11. `ai-art-asset-pipeline.zh.md`
12. `templates.zh.md`
13. `delivery-plan.zh.md`
14. `v0.1-execution-plan.zh.md`
15. `p0-skill-skeleton-plan.zh.md`
16. `v0.1-manifest.zh.md`
17. `testing-strategy.zh.md`
18. `mvp-roadmap.zh.md`

英文版本：

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
11. `ai-art-asset-pipeline.en.md`
12. `templates.en.md`
13. `delivery-plan.en.md`
14. `v0.1-execution-plan.en.md`
15. `p0-skill-skeleton-plan.en.md`
16. `v0.1-manifest.en.md`
17. `testing-strategy.en.md`
18. `mvp-roadmap.en.md`

## 3. 文档说明

| 文档 | 用途 |
|---|---|
| `../muse-game-workshop-plan.zh.md` / `../muse-game-workshop-plan.en.md` | 定义整体项目方案、制作流程、样板游戏计划、MVP 范围和参考策略。 |
| `vision.zh.md` / `vision.en.md` | 定义项目愿景、产品 thesis、核心原则、P0/P1/P2 边界和长期成功标准。 |
| `prd.zh.md` / `prd.en.md` | 定义产品目标、用户、范围、功能需求和成功指标。 |
| `technical-architecture.zh.md` / `technical-architecture.en.md` | 定义分层架构、Godot/Unreal 适配、执行层和证据层。 |
| `godot-unreal-workflow.zh.md` / `godot-unreal-workflow.en.md` | 定义从想法到发布检查的实际工作流。 |
| `skill-pack-spec.zh.md` / `skill-pack-spec.en.md` | 定义第一版工具无关 workflow skills，并映射到制作职能。 |
| `production-language-guide.zh.md` / `production-language-guide.en.md` | 定义游戏行业叫法与 AI workflow 术语的双层命名规范。 |
| `bilingual-audience-strategy.zh.md` / `bilingual-audience-strategy.en.md` | 定义中文和英文两类用户群体、文档本地化、模板元数据和双语测试策略。 |
| `terminology-glossary.zh.md` / `terminology-glossary.en.md` | 定义英文术语到中国游戏行业常用中文叫法的对应表。 |
| `handoff-contracts.zh.md` / `handoff-contracts.en.md` | 定义角色、流程和 AI tools 之间的交付物、交付形态、验收门和 evidence。 |
| `ai-art-asset-pipeline.zh.md` / `ai-art-asset-pipeline.en.md` | 定义 AI 美术资产从 art direction、brief、generation、human edit、provenance、review 到 engine validation 的流程。 |
| `templates.zh.md` / `templates.en.md` | 定义后续 repo 要落地的文档模板。 |
| `delivery-plan.zh.md` / `delivery-plan.en.md` | 定义落地分轨、版本规划、阶段验收和 release checklist。 |
| `v0.1-execution-plan.zh.md` / `v0.1-execution-plan.en.md` | 定义 v0.1 落地前的执行评审计划、文件计划、测试方式和 review 决策点。 |
| `p0-skill-skeleton-plan.zh.md` / `p0-skill-skeleton-plan.en.md` | 定义 14 个 P0 skill skeleton 落地前的评审计划、统一结构、验收方式和禁止范围。 |
| `v0.1-manifest.zh.md` / `v0.1-manifest.en.md` | 定义 v0.1 首批 skills、templates、checks 和 dry run 证据的唯一落地清单。 |
| `testing-strategy.zh.md` / `testing-strategy.en.md` | 定义文档、skills、模板、AI tool adapter、creative pipeline、Godot/Unreal 和发布质量门。 |
| `mvp-roadmap.zh.md` / `mvp-roadmap.en.md` | 定义 versioned MVP roadmap、v0.1 子阶段、里程碑和实施顺序。 |

## 4. 项目定位

一句话：

> 面向 Godot 和 Unreal 的 AI tool-agnostic 游戏策划、内容制作、工程实现、验证与发布工作流系统。

核心能力：

- 创意收敛。
- 核心循环设计。
- 机制规格。
- 内容矩阵。
- Godot/Unreal 引擎映射。
- 垂直切片计划。
- 试玩报告。
- 数值和平衡检查。
- 发布检查。
- 制作阶段与制作职能映射。
- Creative asset pipeline。
- 资产来源和授权记录。
- UX/UI、新手引导和关卡 blockout。
- 叙事、本地化、无障碍和平台商店 readiness。
- Coding tool 与 creative tool 适配。

## 5. 推荐项目结构

下面是 full target / 最终全集结构。v0.1 实际落地必须以 `v0.1-manifest.zh.md` 为唯一真源，不得提前创建 examples 或未列入 manifest 的目录。

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

## 6. 第一阶段要做什么

第一阶段不要急着做游戏代码。所有实现任务和结构性改动都必须先输出设计摘要与执行计划，等待 review 通过后再动手。先做 workflow pack：

0. 确认 `v0.1-execution-plan.zh.md` / `.en.md` 和 `p0-skill-skeleton-plan.zh.md` / `.en.md` 的 review gate。
1. review 通过后，按 `v0.1-manifest.zh.md` / `.en.md` 只落 14 个 P0 skill skeleton。
2. 再按 manifest 落 22 个模板。
3. 再按 manifest 落 5 个检查入口。
4. 用 Boss Rush / 《反击试炼》跑一次无代码 dry run。
5. v0.1 完成后，进入 v0.2 Godot 示例。
6. v0.2 完成后，进入 v0.3 Creative Production Ready。
7. v0.3 完成后，进入 v0.4 Unreal Mapping Slice。

P0 workflow skills：

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

## 7. 建议启动 prompt

```text
我们要创建 Muse Game Workshop。目标语言：中文；目标用户群体：中国独立游戏开发者和小型游戏团队；地区语境：zh-CN。请先读取 README、overall project plan、Vision、PRD、technical architecture、workflow、skill spec、production language guide、bilingual audience strategy、terminology glossary、handoff contracts、templates、delivery plan、v0.1 execution plan、P0 skill skeleton plan、v0.1 manifest、testing strategy 和 roadmap。v0.4 Unreal Mapping Slice review gate 已 Approved，静态骨架已落地；下一步先确认 Unreal Editor 可用性，再做 PIE test map、Data Asset、UMG 和动画占位验证。不要导入 final 或 release-candidate 资产。
```

## 8. 参考项目

- Claude Code Game Studios：https://github.com/Donchitos/Claude-Code-Game-Studios
- GodotPrompter：https://github.com/jame581/GodotPrompter
- funplay MCP：https://gamebooom.ai/en
- GdUnit4：https://github.com/godot-gdunit-labs/gdUnit4
- Unreal Editor Scripting：https://dev.epicgames.com/documentation/en-us/unreal-engine/scripting-and-automating-the-unreal-editor
- Unreal Automation Test Framework：https://dev.epicgames.com/documentation/unreal-engine/automation-test-framework-in-unreal-engine
- mcp-unreal：https://github.com/remiphilippe/mcp-unreal

## 9. 下一步

在当前 workspace 或基于这份文档包创建的新 repo 中，第一项实际任务应该是：

> 继续 v0.4 Unreal Mapping Slice 的 editor validation。v0.4 review gate 已 Approved，静态骨架已落地；如果 Unreal Editor 可用，再创建 PIE test map、Data Asset、UMG 和动画占位，并补验证证据。
