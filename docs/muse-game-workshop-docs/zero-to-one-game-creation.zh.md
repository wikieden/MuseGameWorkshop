# Zero-to-One Game Creation / 从 0 到 1 创建游戏

版本：v0.7

语言：中文

## 1. 文档目的

本文定义 Muse Game Workshop 用户如何从空目录和一句话游戏想法开始，通过 `mgw-init` 向导生成最小项目工作台，再在 Codex、Claude Code、Kiro CLI、opencode 或其他 AI coding tools 中继续问答式推进策划、美术、程序、QA 和发布准备。

本文不是完整生命周期说明。完整生命周期见 `user-journey.zh.md`。`mgw-init` 产品入口和初始化契约见 `product-entry-and-mgw-init.zh.md`。

## 2. 核心原则：轻入口，渐进展开

0-1 流程不应该让用户一上来理解完整目录树、模板体系和 review gate 细节。用户第一天只需要完成三件事：

1. 建一个游戏项目目录。
2. 用 `mgw-init` 回答少量基础问题。
3. 得到一份可继续对话和可逐步展开的 Game Start / 游戏起点文档。

Muse 的 0-1 不是一键生成游戏，而是把 idea / 想法变成可评审、可实现、可验证的 prototype-ready package / 可进入原型验证的制作包。

## 3. 双入口，一套向导状态

Muse 支持两个用户入口：

```text
入口 A：AI 编辑器内初始化
用户建目录
  -> 打开 Codex / Claude Code / Kiro CLI / opencode
  -> 输入 mgw-init
  -> AI 问答式初始化
  -> 生成最小项目工作台

入口 B：CLI 初始化
用户运行 mgw-init
  -> CLI 收集基础信息
  -> 生成最小项目工作台
  -> 用户打开 AI coding tool
  -> 输入 continue mgw-init
  -> AI 继续问答式引导
```

这两个入口必须共享同一套状态：

- `muse.project.yaml`
- `docs/00-game-start.md`
- `docs/evidence/README.md`
- review gate / 评审节点
- evidence / 证据记录

CLI 和 AI 工具不能变成两套流程。CLI 负责快速初始化，AI 工具负责继续引导和生成制作交付物。

## 4. 入口 A：在 AI 编辑器里初始化

用户可以先建空目录，再打开熟悉的 AI coding tool：

```sh
mkdir ember-tactics
cd ember-tactics
codex
```

然后输入：

```text
mgw-init
```

或在 Claude Code 中输入：

```text
Use Muse Game Workshop mgw-init to initialize this game project.
```

AI 工具应该进入 Muse 初始化向导，而不是直接写游戏代码。第一轮只问少量问题：

1. 你想做什么游戏？
2. 面向什么平台？
3. 游戏类型是什么？
4. 想先用什么引擎？Godot / Unreal / 先不选。
5. 这次目标是什么？概念草案 / 原型 / 垂直切片 / Demo。

## 5. 入口 B：用 CLI 初始化

未来 CLI 可以作为快速入口：

```sh
mkdir ember-tactics
cd ember-tactics
mgw-init
```

CLI 收集硬信息：

```text
Project name?
Language? zh-CN / en-US
Game idea?
Genre?
Target platform?
Engine? Godot / Unreal / undecided
Current goal? concept / prototype / vertical-slice / demo
AI tool? Codex / Claude Code / Kiro CLI / opencode / generic
```

CLI 生成最小项目后提示：

```text
Next:
1. Open this folder in Codex, Claude Code, Kiro CLI, opencode, or another AI coding tool.
2. Say: continue mgw-init
```

用户进入 AI 工具后输入：

```text
continue mgw-init
```

AI 工具读取 `muse.project.yaml` 和 `docs/00-game-start.md`，继续问答式引导。

## 6. 命名关系

| 名称 | 形态 | 说明 |
|---|---|---|
| `mgw-init` | 用户口令和未来独立 CLI | 最适合新用户记忆；可在 AI 工具里输入，也可作为 CLI 命令。 |
| `mgw init` | 未来标准 CLI 子命令或等价别名 | 适合命令体系化后与其他 `mgw` 子命令并存。 |
| `continue mgw-init` | AI 工具继续会话口令 | 用于 CLI 已生成最小项目后，在 AI 工具里接着初始化。 |

文档中必须继续保留 `mgw init`，因为它是产品入口契约的一部分；面向用户的轻入口可以优先展示 `mgw-init`。

## 7. 最小生成内容

默认 `mgw-init` 不应该铺满项目目录。第一步只生成：

```text
my-game/
  README.md
  muse.project.yaml
  docs/
    00-game-start.md
    evidence/
      README.md
```

可选生成：

```text
AGENTS.md     # 当用户选择 Codex 或 generic AI coding tool
CLAUDE.md     # 当用户选择 Claude Code
```

默认不要创建：

- `docs/design/`
- `docs/production/`
- `docs/creative/`
- `templates/`
- `tools/checks/`
- `game/godot/`
- `game/unreal/`
- final / release-candidate assets

这些内容在用户确认继续后再渐进展开。

## 8. muse.project.yaml 向导状态

最小状态示例：

```yaml
project:
  name: ember-tactics
  language: zh-CN
  target_audience: chinese-indie-devs
  locale: zh-CN
  stage: concept
  genre: tactics
  engine: godot
  target_platforms:
    - PC

muse:
  workflow_version: v0.7
  init_state: started
  init_entry: cli
  next_action: continue-mgw-init
  review_gate_required: true
  evidence_dir: docs/evidence

tools:
  coding_tool: codex
  creative_tools: []
  mcp:
    enabled: false
    adapter: none

profiles:
  active:
    - docs-only
```

状态含义：

| 字段 | 含义 |
|---|---|
| `init_state` | `started`、`game-start-created`、`design-loop`、`prototype-ready` 等初始化进度。 |
| `init_entry` | `ai-editor`、`cli` 或 `manual`。 |
| `next_action` | AI 工具下一步应该执行的口令或 workflow，例如 `continue-mgw-init`。 |
| `review_gate_required` | 是否必须在修改代码、资产或项目结构前通过 review gate。 |

## 9. Game Start 一页纸

第一轮只生成 `docs/00-game-start.md`。建议结构：

```text
# Game Start

## Game Idea
## Target Player And Platform
## Player Fantasy
## Core Loop Draft
## First Prototype Goal
## Main Risks
## Next Questions
## Next Step
```

这份文档是后续对话的锚点，不要求一次写完正式 pitch、系统设计、机制规格和 review gate。

## 10. 向导对话示例

CLI 已初始化后，用户在 Codex 中输入：

```text
continue mgw-init
```

AI 应回答类似：

```text
我已读取 muse.project.yaml 和 docs/00-game-start.md。
当前项目是 Godot 方向的 Tactics / 战棋类原型，目标是先验证核心玩法。

接下来我会分三步继续：
1. 策划基础：pitch、core loop、核心机制。
2. 原型设计门：prototype goal、playable promise、内容范围、占位策略、验证方式。
3. Review gate：确认后再进入实现。

先确认一个问题：这个原型最想验证的是战棋策略深度、反击爽感，还是时间线系统？
```

AI 不应该在这一步直接创建 Godot 工程、写玩法代码、安装 MCP 或生成资产。

## 11. 渐进展开规则

用户确认后，再从一页纸展开正式制作交付物：

```text
docs/00-game-start.md
  -> docs/design/00_pitch.md
  -> docs/design/01_core_loop.md
  -> docs/design/02_mechanic_spec.md
  -> docs/production/review-gate.md
  -> docs/production/decision-log.md
```

进入美术、程序、QA 或发布环节时再创建对应目录：

```text
docs/creative/
docs/technical/
docs/qa/
templates/
tools/checks/
game/godot/
game/unreal/
```

## 12. 后续 Production Loops / 制作循环

| Loop | 中文叫法 | 主要问题 | 主要产出 |
|---|---|---|---|
| Design Loop | 策划循环 | 游戏到底好玩在哪里？ | pitch、core loop、mechanic spec、系统设计、数值假设 |
| Prototype Design Gate | 原型设计门 | 这个原型是否值得进入实现？ | prototype goal、playable promise、mechanic readiness、content scope、placeholder policy、prototype visual quality floor、engine mapping、validation plan、cut list |
| Narrative Loop | 叙事循环 | 世界观、角色和剧情动线如何支撑玩法？ | world bible、角色 brief、剧情动线、任务/对白 brief |
| Art Loop | 美术循环 | 游戏应该长什么样？资产如何合法进入项目？ | art direction、资产清单、asset brief、provenance、asset review |
| Programming Loop | 程序循环 | 机制如何落到 Godot / Unreal？ | engine mapping、技术拆分、原型任务、测试方式 |
| QA / Playtest Loop | 测试试玩循环 | 怎么知道它真的可玩？ | playtest checklist、bug report、调优记录、evidence |
| Release Loop | 发布循环 | demo 是否能对外？ | demo readiness、商店素材 brief、本地化、AI asset disclosure |

每个 loop 都遵循：

```text
问答收集信息
  -> 生成阶段交付物
  -> 用户 review
  -> Approved 后才进入实现或下一阶段
```

## 13. 0-1 进入原型的完成标准

0-1 阶段可以结束并进入 Prototype / 原型验证，当且仅当：

- `docs/00-game-start.md` 已经能说明游戏方向。
- pitch、core loop 和最小 mechanic spec 已从 Game Start 展开。
- 核心乐趣假设明确。
- 引擎选择或 engine-neutral 策略明确。
- Prototype Design Gate / 原型设计门已完成，至少包含 prototype goal、playable promise、core mechanic readiness、moment-to-moment flow、content scope、placeholder policy、prototype visual quality floor、engine mapping、validation plan 和 cut list。
- review gate 标记为 `Review Status: Approved`。
- evidence 记录了关键取舍。

如果用户要求进入 Godot、Unreal、玩法代码、编辑器自动化或原型实现，必须先使用 `prototype-design` skill。`mgw-init` 保持轻量，但 `prototype-design` 负责提高原型设计产出质量。

## 14. Prototype Visual Quality Floor / 原型视觉质量底线

可试玩原型不需要最终美术，但必须有可读的视觉表达：

- 玩家角色、敌人、NPC 和关键交互物不能用裸球体、裸胶囊或裸方块代表，除非游戏本身的角色幻想就是这种形态。
- Structural Placeholder / 结构占位只适用于 blockout、碰撞体、调试 marker 和非交互布局。
- Readable Prototype Asset / 可读原型资源必须能表达轮廓、朝向、阵营、角色职责、比例、状态反馈和镜头距离下的可读性。
- 3D 可试玩原型推荐使用 mannequin-style robot proxy / 机器人代理角色，但必须是原创、已授权，或通过有记录的 AI 生成流程得到。
- Epic sample mannequins 或 marketplace assets 不能作为 Muse 默认跨引擎 demo 资产分发，除非已经确认 license 和 distribution scope 允许这种用途。
- AI 生成的 3D demo assets 可以使用，但每个资产必须有 brief、tool/model、prompt 或 source description、license notes、human edits、review status 和 engine validation notes。
- 可复用 demo asset kit 应先小规模建立：player proxy、enemy proxy、neutral/NPC proxy、interactable、obstacle、pickup、target marker、move/attack range marker、simple VFX marker。

## 15. 禁止范围

0-1 阶段不做：

- 一键生成完整游戏。
- 默认安装 MCP。
- 默认打开 Godot 或 Unreal。
- 默认创建真实引擎工程。
- 生成或导入 final / release-candidate 资产。
- 用 AI 资产绕过授权和来源记录。
- 未确认授权范围时，把第三方 sample assets 作为 Muse 默认 demo assets 再分发。
- 在 review gate 前修改代码、资产或项目结构。

## 16. 下一步文档

- 产品入口：`product-entry-and-mgw-init.zh.md`
- 完整生命周期：`user-journey.zh.md`
- 策划与系统设计：`game-design-systems.zh.md`
- Godot / Unreal 映射：`godot-unreal-workflow.zh.md`
- 测试策略：`testing-strategy.zh.md`
