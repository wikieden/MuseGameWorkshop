# Muse Game Workshop 交付物与交接契约

版本：v0.9.4

语言：中文

## 1. 目标

本文件定义 Muse Game Workshop 中不同制作职能、制作阶段和 AI workflow 之间的交付物、交付形态和验收方式。

目标不是把独立团队变成重型制片组织，而是让每一次交接都清楚：

- 谁交给谁。
- 交什么。
- 以什么文件或证据形态交。
- 什么时候算可接收。
- 下游可以如何继续执行。

## 2. 标准交接契约

每个交接都应该能写成同一个 contract：

| 字段 | 说明 |
|---|---|
| Upstream / 上游 | 提供交付物的角色、流程或 AI tool。 |
| Downstream / 下游 | 接收交付物并继续推进的角色、流程或 AI tool。 |
| Trigger / 触发条件 | 为什么现在需要交接。 |
| Deliverable / 交付物 | 交付物名称。 |
| Delivery Form / 交付形态 | Markdown、表格、diagram、engine asset、media asset、evidence record、task package 等。 |
| Required Fields / 必填字段 | 下游继续工作必须依赖的字段。 |
| Acceptance Gate / 验收门 | 什么条件下下游可以接收。 |
| Evidence / 证据 | 截图、日志、测试结果、review 记录、provenance 等。 |
| Next Workflow / 下一步 | 接下来调用哪个 skill、模板或测试。 |
| Owner / 负责人 | 谁负责维护这个交付物。 |

交接不是“发一段聊天结论”。交接必须能落盘、能被 review、能被下游直接使用。

## 3. 交付形态分类

| 交付形态 | 用途 | 示例 |
|---|---|---|
| Markdown Spec | 记录设计、规格、计划和复盘 | pitch、core loop、mechanic spec、playtest report |
| Structured Table | 记录参数、内容矩阵、任务拆分 | 参数表、content matrix、bug list |
| Diagram | 表达状态机、流程和依赖 | mermaid state diagram、flowchart |
| Task Package | 给 AI coding tool 或开发者的执行包 | design summary、execution plan、acceptance criteria |
| Runtime Asset / 运行时资产 | 已选生产目标中的可验证内容 | Three.js module 或 browser build、Unity scene/prefab/ScriptableObject、Unreal test map/Data Asset、Godot test scene/Resource |
| Creative Asset | 美术、动作、音乐、音效、UI、视频 | png、wav、fbx、blend、sprite sheet |
| Provenance Record | 记录 AI 资产来源和授权 | tool、prompt、reference、license、human edits |
| Evidence Record | 记录验证结果 | screenshot、build log、test output、playtest notes |
| Release Package | 发布准备材料 | release checklist、store page brief、AI usage disclosure |

## 4. 阶段之间的交付物

| 上游阶段 | 下游阶段 | 核心交付物 | 交付形态 | 验收门 |
|---|---|---|---|---|
| Concept | Pre-production | Pitch、player fantasy、risk hypotheses | Markdown spec | 团队能用一句话说清游戏，并知道第一轮验证什么。 |
| Pre-production | Prototype | Core loop、mechanic spec、engine choice、art direction | Markdown spec + table + diagram | 机制可实现、参数可调、测试方式明确。 |
| Prototype | Vertical Slice | Prototype findings、cut list、vertical slice plan | Playtest report + task package | 已证明核心乐趣，或明确需要调整方向。 |
| Vertical Slice | Production | Approved slice scope、asset list、implementation plan | Task package + asset briefs | 范围冻结，关键资产和机制都有 brief。 |
| Production | Playtest & Iteration | Playable build、test scene/map、known issues | Engine asset + evidence record | 可启动、可试玩、核心机制出现足够次数。 |
| Playtest & Iteration | Polish & QA | Playtest report、priority fixes、regression list | Report + bug list | 问题有假设、优先级和验证方式。 |
| Polish & QA | Release Readiness | Stable build、release checklist、risk list | Build + checklist + evidence | 无阻塞问题，已知风险可接受。 |
| Release Readiness | Postmortem | Release notes、player feedback、decision log | Release package + retrospective | 能判断继续、重做、扩展或暂停。 |

## 5. 职能之间的交接矩阵

| 上游职能 | 下游职能 | 交付物 | 交付形态 | 接收标准 |
|---|---|---|---|---|
| Producer | Game Designer | Project brief、scope、constraints、milestone intent | Markdown brief | 目标、范围、时间和风险清楚。 |
| Game Designer | Technical Designer | Core loop、mechanic spec、content matrix | Spec + table + diagram | 规则、参数、反馈和边界情况清楚。 |
| Technical Designer | Gameplay Programmer | Implementation brief、state model、test cases | Task package + spec | 可以拆任务，不需要猜设计意图。 |
| Gameplay Programmer | QA | Playable build、test scene、known issues | Engine asset + test notes | 能复现核心机制，有最小测试路径。 |
| Art Director | Concept / Environment Artist | Art direction、style rules、asset priorities | Art bible slice + asset brief | 风格方向、参考和禁用方向清楚。 |
| Concept / Environment Artist | Technical Artist | Reviewed visual assets、source files、import notes | Creative asset + provenance | 资产有来源、规格、授权和 review 结论。 |
| Animator | Technical Artist / Programmer | Animation brief、timing notes、export files | Motion spec + media asset | 动作节奏、触发点和导入格式清楚。 |
| Composer / Sound Designer | Audio Implementer | Music/SFX brief、audio files、trigger intent | Audio brief + media asset | loop、触发、音量层级和使用范围清楚。 |
| Level Designer | Gameplay Programmer / QA | Level blockout、encounter table、navigation notes | Blockout + diagram + table | 路线、遭遇、节奏和验证方式清楚。 |
| QA | Producer / Game Designer | Bug list、playtest report、regression risk | Evidence record + report | 问题可复现、可分级、能转成下一轮任务。 |
| Release Manager | Team / Platform | Release checklist、store/trailer/localization/accessibility status | Release package | demo 是否可发布有明确结论。 |

## 5.1 Production Target Handoff / 生产目标交接

共享交接从已批准的 `production-target-mapping.md` 开始。各生产目标随后交付自己的运行时形态和证据，同时保持引擎无关设计意图不变。

| Production Target / 生产目标 | 主要交付形态 | 最低验证证据 | 发布交接 |
|---|---|---|---|
| Three.js WebGPU | TypeScript modules、Vite production build、浏览器可访问包 | 单元测试、production build 日志、Playwright 截图、renderer/fallback 记录、browser playtest checklist | 托管构建或静态包、浏览器矩阵、性能预算、已知降级风险 |
| Unity | 包含 scenes、prefabs、assemblies、ScriptableObjects、Input/UI 配置的 Unity 工程改动 | EditMode/PlayMode 结果、编辑器截图/日志、Player build smoke | Player build、准确 Unity 版本、平台设置、package manifest、已知平台风险 |
| Unreal Engine | Blueprint/C++/Data Asset/UMG 改动和 test map | Automation/Functional Test 结果、PIE 或 commandlet 证据、packaged-build smoke | packaged build、准确引擎/插件版本、目标设置、已知平台风险 |
| Godot | Scene/Script/Resource/UI 改动和 test scene | CLI 或测试框架结果、scene-run 证据、export smoke | exported build、准确 Godot 版本、export preset、已知平台风险 |

First Playable Target / 首个可玩目标和 Final Production Target / 最终生产目标可以不同。交接记录必须说明首个可玩版本验证了什么、哪些内容可移植、哪些内容需要重做，以及哪些目标内验证仍被阻塞。

## 6. AI Workflow 交接

### 6.1 Human To AI Coding Tool

交付物：

- 设计摘要。
- 执行计划。
- 相关模板路径。
- 验收标准。
- 禁止事项。

交付形态：

- Markdown task package。
- issue/task。
- prompt。

接收标准：

- AI coding tool 能说明将修改哪些文件。
- AI coding tool 能列出测试方式。
- AI coding tool 在 review 通过前不修改代码或结构。

### 6.2 AI Coding Tool To Human

交付物：

- 设计计划草案。
- 文件变更摘要。
- 测试结果。
- 未完成项。
- 风险和下一步。

交付形态：

- Markdown summary。
- patch/diff。
- command output summary。
- evidence record。

接收标准：

- 人类能判断是否批准。
- 结果能回写到 decision log 或 evidence。

### 6.3 Human To Creative AI Tool

交付物：

- Art direction。
- Asset brief。
- 禁用方向。
- 技术规格。
- 使用范围。

交付形态：

- brief。
- prompt。
- reference set。
- style constraints。

接收标准：

- 生成目标明确。
- 版权、风格和使用范围有约束。

### 6.4 Creative AI Tool To Team

交付物：

- 候选资产。
- prompt/tool record。
- provenance。
- license/risk note。

交付形态：

- media file。
- provenance record。
- review package。

接收标准：

- 资产不能直接进 release candidate。
- 必须经过 art/audio/technical review 和 engine validation。

## 7. 交付状态

| 状态 | 含义 | 允许下游行为 |
|---|---|---|
| Draft | 草案，还在探索 | 可以评论，不应用于实现。 |
| Review Ready | 可审查版本 | 可以 review，不应直接进入生产。 |
| Approved | 已批准 | 可以进入实现、制作或导入。 |
| Implemented | 已实现或已制作 | 可以进入测试。 |
| Validated | 已通过测试或人工审查 | 可以进入下一阶段。 |
| Release Candidate | 可发布候选 | 可以进入 release readiness。 |
| Rejected | 被拒绝 | 不得进入下游，必须记录原因。 |

## 8. 推荐路径

后续落地时建议使用这些目录承载交付物：

```text
docs/design/
docs/production/
docs/creative/
docs/ux/
docs/publishing/
docs/evidence/
docs/evidence/dry-runs/
docs/evidence/playtests/
docs/evidence/asset-reviews/
docs/evidence/engine-checks/
docs/evidence/release-checks/
```

模板建议：

```text
templates/production/handoff-record.md
templates/production/review-gate.md
templates/production/acceptance-checklist.md
templates/production/milestone-plan.md
```

## 9. Boss Rush 示例交接链

```text
Producer
  -> Project brief
Game Designer
  -> Core loop + dodge/counter mechanic spec
Technical Designer
  -> State model + parameters + test cases
Gameplay Programmer
  -> Godot test scene / Unreal PIE map
Art Director
  -> Boss visual direction + animation brief
Sound Designer
  -> Counter hit SFX brief
QA
  -> Playtest report + regression list
Producer
  -> Continue / pivot / cut decision
```

每一步都必须能回答：

- 下游拿到后能不能继续做？
- 人类能不能 review？
- AI tool 能不能执行？
- 测试或证据在哪里？
