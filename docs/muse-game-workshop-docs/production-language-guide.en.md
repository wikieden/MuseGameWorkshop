# Muse Game Workshop Production Language And Naming Guide

Version: v0.1

Language: English

## 1. Goal

Muse Game Workshop must use language that game developers understand while preserving the new capabilities of AI workflows.

Core principle:

> Use familiar game production language on the surface, and keep AI-native workflow primitives underneath.

Do not present the product as a pile of unfamiliar agent roles. Also do not hide the advantages of AI-assisted production by forcing everything into a traditional studio pipeline.

Muse Game Workshop serves both Chinese-speaking and English-speaking users. Chinese-facing docs should prioritize Chinese game-industry terminology. English-facing docs should prioritize natural English game-production language. Both share the same workflow core, but the user-facing surface must be localized for the audience.

## 2. Naming Principles

### 2.0 Terms Must Have A Chinese Game Industry Mapping

Every core English term must have a Chinese mapping that Chinese game developers can understand. Use `terminology-glossary.zh.md` / `terminology-glossary.en.md` as the source of truth.

In Chinese-facing docs, new English terms should provide the Chinese industry term on first mention. In English-facing docs, keep the main copy natural in English and avoid forcing Chinese explanations into the prose unless the topic is terminology, localization, or China-market context.

Recommended format:

```text
Vertical Slice / 垂直切片
Level Blockout / 关卡灰盒
Asset Provenance / 资产来源与授权记录
Review Gate / 评审节点
```

If the term does not exist in the glossary, update the glossary before adding it elsewhere.

### 2.1 Surface Language: Game Industry First

For user-facing docs, README, PRD, websites, tutorials, and launch materials, prefer familiar game production terms:

- Production stages: Concept / 概念阶段, Pre-production / 预制作, Prototype / 原型验证, Vertical Slice / 垂直切片, Production / 正式制作, Playtest / 试玩测试, Polish / 打磨, QA / 测试, Release / 发布, Postmortem / 项目复盘.
- Production disciplines: Producer / 制作人, Game Designer / 游戏策划, Technical Designer / 技术策划, Art Director / 美术总监, Concept Artist / 原画, Environment Artist / 场景美术, Animator / 动作设计, Technical Artist / 技术美术, Gameplay Programmer / 玩法程序, QA / 测试, Release Manager / 发布负责人.
- Deliverables: Pitch / 项目提案, Core Loop / 核心循环, GDD Slice / 设计案切片, Mechanic Spec / 机制规格, Content Matrix / 内容矩阵, Level Blockout / 关卡灰盒, Asset Brief / 资产需求说明, Playtest Report / 试玩报告, Release Checklist / 发布检查表.
- Quality gates: Greenlight / 立项放行, Review / 评审, Milestone Review / 里程碑评审, Content Lock / 内容锁定, Release Readiness / 发布准备.

Users should first see "this helps me make games", not "this is a complex agent system".

### 2.2 Internal Language: AI Workflow Native

Implementation and technical docs can keep AI workflow terms:

- workflow skill.
- tool adapter.
- review gate.
- evidence record.
- dry run.
- asset provenance.
- prompt/tool record.
- AI usage disclosure.
- automation hook.
- doctor/check command.

These terms are useful. They should not become the main external story.

### 2.3 Hybrid Naming

Use a two-layer naming pattern:

```text
Industry name / AI workflow capability
```

Examples:

- Art Direction / `art-direction`
- Mechanic Spec / `mechanic-spec`
- Level Blockout / `level-blockout`
- Playtest Report / `playtest-report`
- Asset Provenance / `asset-provenance`
- Release Readiness / `release-checklist`

Document titles can use industry names. Directory names, file names, and skill slugs should use stable English kebab-case.

## 3. Do Not Overfit Traditional Production

Muse Game Workshop references traditional game production stages, but it should not copy heavyweight studio process.

Traditional production may require:

- A full GDD.
- Many cross-functional approvals.
- Long pre-production.
- Formal alpha, beta, and gold master milestones.
- Dedicated producer, QA, release, and localization teams.

Indie development and AI-assisted workflow do not always need that weight. Muse should preserve production judgment and quality gates, not organizational overhead.

Muse should allow:

- Small teams to reach a playable slice in 7-14 days.
- The smallest verifiable output before a full design bible.
- AI to generate candidate options quickly, followed by human review.
- Workflow dry runs before game code implementation.
- Evidence records instead of long meeting notes.
- Asset provenance gates for AI assets rather than banning AI assets.

## 4. Recommended Terms

### 4.1 Stages

| Recommended term | Meaning | Note |
|---|---|---|
| Concept | Direction and player fantasy | Decide whether the idea is worth pursuing. |
| Pre-production | Executable plan | Core loop, mechanic spec, technical/art direction. |
| Prototype | Low-cost validation | Test the core fun. |
| Vertical Slice | Small complete experience | Validate one near-final experience chain. |
| Production | Buildout | Expand content, systems, assets, and levels. |
| Playtest & Iteration | Evidence-driven iteration | Turn feedback into hypotheses and tasks. |
| Polish & QA | Quality pass | Improve feel, stability, performance, accessibility. |
| Release Readiness | Demo or release prep | Check build, store, platform, assets, disclosure, risks. |
| Postmortem | Learning loop | Improve templates and future workflow. |

Avoid forcing alpha/beta/gold on small projects unless the project has actually reached that scale.

### 4.2 Disciplines

| Recommended term | Avoid | Note |
|---|---|---|
| Producer | Project Agent | Owns scope, risk, milestones, and review gates. |
| Game Designer | Design Agent | Owns player experience, core loop, mechanics, content. |
| Technical Designer | Spec Agent | Turns design into parameters, state machines, data structures, and tests. |
| Art Director | Art Agent | Owns visual direction and style consistency. |
| Concept Artist | Image Agent | Explores concepts; not just an image generator. |
| Animator | Motion Agent | Owns motion timing, feedback, and readability. |
| Technical Artist | Asset Import Agent | Owns materials, VFX, import specs, and performance budget. |
| Composer | Music Agent | Owns themes, loops, emotion, and structure. |
| Sound Designer | SFX Agent | Owns feedback sounds, ambience, and mix intent. |
| Gameplay Programmer | Coding Agent | Implements reviewed gameplay plans. |
| QA | Test Agent | Owns testing, repro, regression, and quality risk. |
| Release Manager | Publish Agent | Owns builds, versions, platform checks, and disclosure. |

Agents and subagents can exist internally, but they should not be the primary public role names.

### 4.3 Deliverables

| Production deliverable | AI workflow addition |
|---|---|
| Pitch | Prompt/source record. |
| Core Loop | Hypothesis, validation method, next smallest output. |
| Mechanic Spec | Parameters, edge cases, tests, engine mapping. |
| Level Blockout | Screenshot, navigation, sightline, encounter evidence. |
| Asset Brief | Tool input, references, forbidden directions, acceptance criteria. |
| Asset Review | Provenance, license, human modification, engine approval. |
| Playtest Report | Feedback, hypotheses, change priority, next tasks. |
| Release Checklist | AI usage disclosure, platform risk, known issues. |

## 5. Skill Naming Rules

Skill slugs should use English kebab-case. They should be short, composable, and installable.

Recommended:

- `game-intake`
- `core-loop`
- `mechanic-spec`
- `vertical-slice-planner`
- `creative-asset-pipeline`
- `art-direction`
- `asset-brief`
- `asset-review`
- `level-blockout`
- `playtest-report`
- `release-checklist`

Avoid:

- `super-game-designer-agent`
- `ultimate-art-agent`
- `auto-make-game`
- `one-click-release`
- `boss-fight-ai-brain`

A skill is a workflow capability, not a virtual employee or marketing title.

## 6. AI-Native Features Must Stay

Even though Muse uses industry language, it must not regress into a purely traditional process. These AI-native features must stay:

- Tool-agnostic adapters: Codex, Claude Code, Kiro CLI, opencode, and similar tools can use the same workflow.
- Review-first execution: implementation requires a design summary and execution plan first.
- Evidence-first memory: important results must be written to files, not trapped in chat.
- Asset provenance: AI-generated assets must record tool, prompt, source, license, human edits, and usage scope.
- Workflow dry run: the workflow chain can be tested before game code is written.
- Human creative control: AI can suggest, generate, and summarize, but cannot replace creative, aesthetic, gameplay, or release judgment.

## 7. Writing Guide

When writing Muse docs:

- First layer: game production stages, disciplines, deliverables, quality gates.
- Second layer: AI support through skills, adapters, evidence, provenance, and checks.
- Say what human judgment is needed before explaining how AI assists.
- Say what playable output matters before describing automation.
- Avoid describing AI as an autonomous production team.
- Avoid treating traditional production as the only valid path.

One-sentence test:

> A game developer can understand it, an AI coding tool can execute it, and a small team is not crushed by process.
