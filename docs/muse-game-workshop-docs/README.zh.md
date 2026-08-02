# Muse Game Workshop 文档包

版本：v0.9.4

语言：中文

## 1. 这是什么

这是一套用于启动 Muse Game Workshop 项目的文档包。项目目标是构建面向 Three.js WebGPU、Unity、Unreal Engine 和 Godot 的 AI 游戏制作工作流系统，让 AI coding tools 和创意 AI tools 能围绕游戏行业熟悉的制作阶段和制作职能，稳定辅助策划、机制规格、生产目标映射、资产、实现、试玩、调优和发布检查。

它不是游戏引擎，也不是一键生成游戏工具。它是一个工作流层。

## 2. 推荐阅读顺序

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

英文版本：

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

## 3. 文档说明

| 文档 | 用途 |
|---|---|
| `../muse-game-workshop-plan.zh.md` / `../muse-game-workshop-plan.en.md` | 定义整体项目方案、制作流程、样板游戏计划、MVP 范围和参考策略。 |
| `vision.zh.md` / `vision.en.md` | 定义项目愿景、产品 thesis、核心原则、P0/P1/P2 边界和长期成功标准。 |
| `prd.zh.md` / `prd.en.md` | 定义产品目标、用户、范围、功能需求和成功指标。 |
| `product-entry-and-mgw-init.zh.md` / `product-entry-and-mgw-init.en.md` | 定义 v0.7 产品入口、`mgw-init` / `mgw init` 命令契约、共享初始化状态、最小项目结构、tool adapter 和 MCP adapter 规则。 |
| `zero-to-one-game-creation.zh.md` / `zero-to-one-game-creation.en.md` | 定义用户第一天如何从空目录和粗略想法进入 Game Start、`muse.project.yaml`、`continue mgw-init`、制作循环、review gate 和可进入原型验证的计划。 |
| `user-journey.zh.md` / `user-journey.en.md` | 定义用户从获取 Muse、初始化游戏工作台、选择 AI 工具到概念、预制作、原型、垂直切片、试玩、资产和发布准备的完整流程。 |
| `technical-architecture.zh.md` / `technical-architecture.en.md` | 定义分层架构、四种生产目标适配、执行层和证据层。 |
| `godot-unreal-workflow.zh.md` / `godot-unreal-workflow.en.md` | 定义从想法到发布检查的多目标实际工作流；文件名为兼容旧链接而保留。 |
| `production-target-contract.zh.md` / `production-target-contract.en.md` | 定义首次可玩目标、最终生产目标以及四类目标的统一交付契约。 |
| `threejs-web-runtime.zh.md` / `threejs-web-runtime.en.md` | 定义 v0.9.3 Three.js WebGPU 正式生产通道、WebGL 2 回退和浏览器验证。 |
| `unity-workflow.zh.md` / `unity-workflow.en.md` | 定义 v0.9.4 Unity 工程映射、EditMode/PlayMode 测试和构建验证。 |
| `skill-pack-spec.zh.md` / `skill-pack-spec.en.md` | 定义第一版工具无关 workflow skills，并映射到制作职能。 |
| `production-language-guide.zh.md` / `production-language-guide.en.md` | 定义游戏行业叫法与 AI workflow 术语的双层命名规范。 |
| `bilingual-audience-strategy.zh.md` / `bilingual-audience-strategy.en.md` | 定义中文和英文两类用户群体、文档本地化、模板元数据和双语测试策略。 |
| `terminology-glossary.zh.md` / `terminology-glossary.en.md` | 定义英文术语到中国游戏行业常用中文叫法的对应表。 |
| `handoff-contracts.zh.md` / `handoff-contracts.en.md` | 定义角色、流程和 AI tools 之间的交付物、交付形态、验收门和 evidence。 |
| `ai-art-asset-pipeline.zh.md` / `ai-art-asset-pipeline.en.md` | 定义 AI 美术资产从 art direction、brief、generation、human edit、provenance、review 到 engine validation 的流程。 |
| `ai-3d-asset-production.zh.md` / `ai-3d-asset-production.en.md` | 定义工具无关的 AI 3D 资产输入、生产、多视角评审、成本、回退和四生产目标验证契约。 |
| `godot-prototype-asset-kit.zh.md` / `godot-prototype-asset-kit.en.md` | 定义 Godot 原型资产策略、可读代理资产状态、默认 `.glb` / `.gltf` 方向、候选 CC0 来源和 AI 3D asset validation path。 |
| `genre-tracks.zh.md` / `genre-tracks.en.md` | 定义 v0.8 首批类型流程分支和 Tactics / 战棋类 dry-run 验证路径。 |
| `economy-progression.zh.md` / `economy-progression.en.md` | 定义 v0.9 经济模型、成长线地图、资源与奖励表、数值调优闭环和 Tactics / 战棋类 dry-run 验证路径。 |
| `numerical-planning.zh.md` / `numerical-planning.en.md` | 定义 v0.9.1 等级曲线、战斗参数表、系统数值规划和 Tactics / 战棋类数值 dry-run 验证路径。 |
| `agent-skill-composition.zh.md` / `agent-skill-composition.en.md` | 定义 v0.9.2 Specialized Design Skills / 专业策划 Skill 包的组合层、Role Agent / 角色型 Agent 组合、交付流和工具无关 skill 路由。 |
| `engine-ai-development-adapters.zh.md` / `engine-ai-development-adapters.en.md` | 汇总 Godot / Unreal AI editor control、MCP、项目理解层和官方自动化能力的研究与适配层设计输入。 |
| `templates.zh.md` / `templates.en.md` | 定义后续 repo 要落地的文档模板。 |
| `game-design-systems.zh.md` / `game-design-systems.en.md` | 定义 v0.6 策划与系统设计包，覆盖设计支柱、系统、战斗、遭遇、调优、试玩假设和 Boss Rush / Tactics design dry run。 |
| `delivery-plan.zh.md` / `delivery-plan.en.md` | 定义落地分轨、版本规划、阶段验收和 release checklist。 |
| `v0.1-execution-plan.zh.md` / `v0.1-execution-plan.en.md` | 定义 v0.1 落地前的执行评审计划、文件计划、测试方式和 review 决策点。 |
| `p0-skill-skeleton-plan.zh.md` / `p0-skill-skeleton-plan.en.md` | 定义 14 个 P0 skill skeleton 落地前的评审计划、统一结构、验收方式和禁止范围。 |
| `v0.1-manifest.zh.md` / `v0.1-manifest.en.md` | 定义 v0.1 首批 skills、templates、checks 和 dry run 证据的唯一落地清单。 |
| `testing-strategy.zh.md` / `testing-strategy.en.md` | 定义文档、skills、模板、AI tool adapter、creative pipeline、四种生产目标和发布质量门。 |
| `mvp-roadmap.zh.md` / `mvp-roadmap.en.md` | 定义 versioned MVP roadmap、v0.1 子阶段、里程碑和实施顺序。 |

研究记录：

| 文档 | 用途 |
|---|---|
| `ecc-research.zh.md` / `ecc-research.en.md` | 记录 Everything Claude Code / ECC 对 Muse 工具无关 workflow core、tool adapter、profile、manifest 和验证门的启发；该记录不是核心规范真源。 |
| `engine-ai-development-adapters.zh.md` / `engine-ai-development-adapters.en.md` | 记录引擎 AI 开发适配层总纲，明确 live editor control、project understanding、evidence、二进制资产边界和后续深挖对象。 |
| `research/godot-ai-research.zh.md` / `research/godot-ai-research.en.md` | 调研 Godot AI，作为 Godot live editor control 第一参考。 |
| `research/ue-mcp-research.zh.md` / `research/ue-mcp-research.en.md` | 调研 UE-MCP，作为 Unreal 深度 editor automation 第一参考。 |
| `research/godotprompter-research.zh.md` / `research/godotprompter-research.en.md` | 调研 GodotPrompter，作为 Godot 专项 workflow skill 组织参考。 |
| `research/genorca-unreal-mcp-research.zh.md` / `research/genorca-unreal-mcp-research.en.md` | 调研 GenOrca Unreal MCP，作为 Unreal Python-first 轻量适配参考。 |
| `research/godotiq-research.zh.md` / `research/godotiq-research.en.md` | 调研 GodotIQ，作为 Godot 项目理解层参考。 |
| `research/ziva-research.zh.md` / `research/ziva-research.en.md` | 调研 Ziva，作为 Godot 编辑器内 AI 产品体验参考。 |
| `research/ee0pdt-godot-mcp-research.zh.md` / `research/ee0pdt-godot-mcp-research.en.md` | 调研 ee0pdt/Godot-MCP，作为 Godot MCP 基础命令面参考。 |
| `research/engine-ai-user-feedback-scan.zh.md` / `research/engine-ai-user-feedback-scan.en.md` | 扫描 GitHub、Reddit、Godot/Unreal 社区和评论站点上的实际用户反馈，作为适配层成熟度判断的证据输入。 |
| `research/img2threejs-research.zh.md` / `research/img2threejs-research.en.md` | 调研 `img2threejs` 的程序化 Three.js 生产、质量门、成本、授权、用户反馈和 Muse adapter 边界。 |

## 4. 项目定位

一句话：

> 面向 Three.js WebGPU、Unity、Unreal Engine 和 Godot 的 AI tool-agnostic 游戏策划、内容制作、工程实现、验证与发布工作流系统。

核心能力：

- 创意收敛。
- 核心循环设计。
- 机制规格。
- 策划与系统设计。
- 内容矩阵。
- Three.js Web、Unity、Unreal 和 Godot 生产目标映射。
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
    threejs-boss-rush/
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
8. v0.4 静态映射骨架落地后，v0.5 收口 AI art dry run、engine AI adapter research、用户反馈扫描、Godot 对接决策和版本重排。
9. v0.5 完成后，进入 v0.6 Game Design & Systems / 策划与系统设计。
10. v0.6 完成后，进入 v0.7 Product Entry & mgw init / 产品入口与项目初始化设计。
11. v0.7 完成后，运行 `tools/checks/check-v0.7-product-entry` 验证产品入口、用户流程和禁止范围。
12. v0.8 完成后，运行 `tools/checks/check-v0.8-genre-tracks` 验证类型分支和 Tactics / 战棋类 dry run。
13. v0.9 完成后，运行 `tools/checks/check-v0.9-economy-progression` 验证经济与成长。
14. v0.9.1 完成后，运行 `tools/checks/check-v0.9.1-numerical-planning` 验证数值规划。
15. v0.9.2 完成后，运行 `tools/checks/check-v0.9.2-design-skills` 验证专业策划 skills 和 Agent Skill Composition / Agent 与 Skill 组合设计。
16. v0.9.3 完成后，运行 `tools/checks/check-v0.9.3-threejs-runtime`。
17. v0.9.4 完成后，运行 `tools/checks/check-v0.9.4-unity`。
18. v0.9.4 完成后，进入 v0.10 Telemetry & Playtest Analytics / 数据埋点与试玩分析。

P0 workflow skills：

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

## 7. 建议启动 prompt

```text
我们要创建 Muse Game Workshop。目标语言：中文；目标用户群体：中国独立游戏开发者和小型游戏团队；地区语境：zh-CN。请先读取 README、overall project plan、Vision、PRD、Product Entry & mgw init、Zero-to-One Game Creation / 从 0 到 1 创建游戏、User Journey、technical architecture、Production Target Contract / 生产目标契约、Three.js Web Runtime、Unity Workflow、多目标 workflow、skill spec、production language guide、bilingual audience strategy、terminology-glossary、handoff contracts、templates、game design systems、Godot Prototype Asset Kit / Godot 原型资产包、Genre Tracks / 类型流程分支、Economy & Progression / 经济与成长、Numerical Planning / 数值规划、Agent Skill Composition / Agent 与 Skill 组合设计、delivery plan、v0.1 execution plan、P0 skill skeleton plan、v0.1 manifest、testing strategy 和 roadmap。v0.9.2 Specialized Design Skills / 专业策划 Skill 包、v0.9.3 Multi-target Production Foundation + Three.js Web Runtime 和 v0.9.4 Unity Workflow 已完成；`mgw-init` 是问答式初始化入口，`continue mgw-init` 用于在 AI coding tool 中继续初始化会话；下一步进入 v0.10 Telemetry & Playtest Analytics / 数据埋点与试玩分析。不要实现真实 mgw CLI，不要安装 MCP，不要创建新的 Unity、Unreal 或 Godot 工程，不要实现商业化后台、支付或真实 telemetry service，不要生成或导入 final / release-candidate 资产，不要批准 release balance / 发布版本最终平衡。
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

> 进入 v0.10 Telemetry & Playtest Analytics / 数据埋点与试玩分析。先做设计摘要和执行计划，再定义 telemetry event plan、playtest analytics report、tuning decision log、privacy boundaries、review gate、evidence 和 checks。
