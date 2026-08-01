# Product Entry & mgw init / 产品入口与项目初始化

版本：v0.7

语言：中文

## 1. 产品定位

Muse Game Workshop 的用户入口应从“阅读一个 workflow pack 仓库”升级为“初始化一个游戏制作工作台”。

新的产品定位是：

> Muse Game Workshop 是面向独立游戏团队的 AI-assisted Game Production Workspace / AI 辅助游戏制作工作台。用户可以通过 `mgw-init` 或 `mgw init` 初始化自己的游戏项目，再用 AI coding tool 中的问答式向导、工具无关 workflow skills、模板、review gate、evidence、Godot/Unreal 适配和创意资产流程持续推进制作。

这不改变项目边界：

- Muse 不是游戏引擎。
- Muse 不是一键生成游戏工具。
- Muse 不替代制作人、策划、美术、程序、音频、QA 或发行判断。
- `mgw-init` / `mgw init` 不默认写 Godot/Unreal 游戏代码。
- `mgw-init` / `mgw init` 不默认安装 MCP、编辑器插件或商业 creative AI tool。
- 所有结构性修改仍然必须先经过 design summary、execution plan 和 review gate。

## 2. 为什么需要 mgw init

当前仓库已经有文档、skills、templates、checks 和示例，但新用户会遇到一个实际问题：

> 我怎样把这套方法用到自己的游戏项目里？

`mgw-init` / `mgw init` 解决的是项目入口问题，而不是自动制作问题。它应该把 Muse 的 workflow core 复制、配置或引用到用户自己的游戏仓库中，让 Codex、Claude Code、Kiro CLI、opencode 和其他 AI coding tools 能在同一套制作规则下工作。

## 3. 产品形态

推荐形态是“双入口，一套向导状态”：

```text
入口 A：AI 编辑器内
用户建目录
  -> 打开 Codex / Claude Code / Kiro CLI / opencode
  -> 输入 mgw-init
  -> AI 问答式初始化
  -> 生成最小项目工作台

入口 B：CLI
用户运行 mgw-init
  -> CLI 收集基础信息
  -> 生成最小项目工作台
  -> 打开 AI coding tool
  -> 输入 continue mgw-init
  -> AI 继续问答式引导
```

用户实际使用的是自己的游戏项目，不是一直停留在 Muse 源仓库中。

## 4. 初始化命令设计

v0.7 只定义命令契约，不实现真实 CLI。

命名关系：

| 名称 | 形态 | 说明 |
|---|---|---|
| `mgw-init` | 用户口令和未来独立 CLI | 可在 AI 工具里输入，也可作为 CLI 命令运行。 |
| `mgw init` | 未来标准 CLI 子命令或等价别名 | 适合后续扩展 `mgw` 命令族。 |
| `continue mgw-init` | AI 工具继续会话口令 | CLI 已生成最小项目后，用它继续问答式初始化。 |

建议命令：

```sh
mgw-init
mgw-init --lang zh-CN
mgw-init --tool codex
mgw-init --engine godot
mgw-init --genre tactics
mgw-init --profile docs-only
mgw init my-game
mgw init my-game --lang zh-CN
mgw init my-game --tool codex
mgw init my-game --tool claude
mgw init my-game --engine godot
mgw init my-game --engine unreal
mgw init my-game --genre tactics
mgw init my-game --profile docs-only
mgw init my-game --profile godot-prototype
mgw init my-game --profile unreal-mapping
mgw init my-game --engine godot --mcp godot-ai
mgw init my-game --engine unreal --mcp ue-mcp
```

默认行为：

```sh
mgw init my-game --lang en-US --tool generic --engine none --genre none --profile docs-only --mcp none
```

默认值必须安全：

- `--mcp none`。
- 不安装外部工具。
- 不生成游戏代码。
- 不生成 final / release-candidate 资产。
- 不创建 engine binary assets。
- 只创建最小制作工作台和向导状态。

## 5. 初始化后的最小项目结构

默认 `mgw-init` 只生成最小结构：

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
AGENTS.md                   # Codex / generic AI coding tools
CLAUDE.md                   # Claude Code adapter
```

只有用户确认继续后，才渐进展开：

```text
docs/design/
docs/production/
docs/creative/
templates/
tools/checks/
game/godot/
game/unreal/
assets/
```

`game/godot/` 和 `game/unreal/` 不应该在默认 profile 下生成真实引擎工程。只有用户明确选择 engine profile，并通过 review gate 后，才进入引擎项目创建或接入。

## 6. muse.project.yaml 契约

建议配置字段：

```yaml
project:
  name: my-game
  language: zh-CN
  target_audience: chinese-indie-devs
  locale: zh-CN
  stage: concept
  genre: tactics
  engine: godot

muse:
  workflow_version: v0.7
  init_state: started
  init_entry: cli
  next_action: continue-mgw-init
  review_gate_required: true
  evidence_dir: docs/evidence
  terminology_source: docs/terminology-glossary.md

tools:
  coding_tool: codex
  creative_tools: []
  mcp:
    enabled: false
    adapter: none

profiles:
  active:
    - docs-only
    - godot-prototype
```

该文件是项目级制作上下文，不是构建系统。AI tools 应先读取它，再决定语言、阶段、引擎和下一步 workflow skill。

初始化状态字段：

| 字段 | 用途 |
|---|---|
| `init_state` | 记录初始化进度，例如 `started`、`game-start-created`、`design-loop`、`prototype-ready`。 |
| `init_entry` | 记录入口来源，例如 `ai-editor`、`cli`、`manual`。 |
| `next_action` | 告诉 AI coding tool 下一步应继续 `continue-mgw-init` 或进入某个 production loop。 |

## 7. Profiles / 初始化配置档

推荐 profile：

| Profile | 用途 | 默认产物 | 禁止范围 |
|---|---|---|---|
| `docs-only` | 只创建最小制作工作台 | README、`muse.project.yaml`、`docs/00-game-start.md`、evidence README | 引擎工程、MCP、资产生成、大量目录 |
| `p0-workflow-pack` | 复制核心 skills/templates/checks | `.agents/skills/`、templates、checks | 游戏代码、二进制资产 |
| `game-design-systems` | 面向策划和系统设计 | system/combat/encounter/tuning/playtest docs | 引擎实现 |
| `godot-prototype` | 准备 Godot 原型工作区 | Godot 计划、检查脚本、空目录说明 | 自动创建可玩内容 |
| `unreal-mapping` | 准备 Unreal 映射工作区 | Unreal mapping docs、PIE/test-map 计划 | `.uasset` / `.umap` 自动生成 |
| `creative-production` | 准备创意资产流程 | briefs、provenance、review 目录 | 生成或导入 final 资产 |
| `genre-tracks` | 准备类型分支 | 类型分支模板和 dry-run 计划 | 覆盖所有类型 |
| `full-workshop` | 高级用户完整安装 | 以上可选模块组合 | 跳过 review gate |

## 8. Tool Adapter / AI 工具适配规则

Workflow core 是唯一核心。工具适配只负责把同一套规则翻译成不同 AI coding tool 能执行的入口。

| 工具 | 适配形态 | 必须遵守 |
|---|---|---|
| Codex | `AGENTS.md`、`.agents/skills/`、checks | review gate、模板、证据记录 |
| Claude Code | `CLAUDE.md`、skills、commands、hooks | 不得绕过 Muse workflow core |
| Kiro CLI | steering/spec/task 类规则 | 输出必须回到 Muse deliverables |
| opencode | project instructions、commands、tool config | 不得引入工具专属流程真源 |
| Generic tools | README + rules + templates | 先读 `muse.project.yaml` 和 review gate |

适配层不得改变：

- 制作阶段。
- 制作职能。
- 机制规格字段。
- 资产来源记录。
- review gate。
- evidence 目录。
- bilingual audience strategy。

## 9. Editor MCP Adapter / 编辑器 MCP 规则

Godot/Unreal MCP 和官方编辑器自动化是可选能力，不是 workflow core。

默认策略：

- `--mcp none`。
- 不自动安装 MCP server。
- 不自动修改编辑器设置。
- 不自动打开 Godot 或 Unreal。
- 不自动创建 binary assets。

启用 MCP 前必须有：

- 目标引擎。
- 目标 MCP adapter。
- 明确的编辑器版本。
- 将执行的 editor action 清单。
- 回滚方式。
- 日志、截图或 test evidence。
- Review Status: Approved。

推荐映射：

| 引擎 | 首选方向 | 设计理由 |
|---|---|---|
| Godot | Godot AI 作为 live editor control 第一候选 | 能对接编辑器操作、场景和验证闭环 |
| Godot | GodotIQ 作为 project understanding 层 | 适合先理解项目结构和脚本关系 |
| Godot | GodotPrompter 作为 internal skill 参考 | 适合拆细 Godot 专项 workflow skills |
| Unreal | UE-MCP 作为深度 editor automation 研究对象 | 覆盖 Blueprint、Actor、Data Asset、UMG、PIE 等方向 |
| Unreal | GenOrca Unreal MCP 作为轻量 Python-first 参考 | 适合先落较薄的 adapter |
| Unreal | Unreal Editor Scripting / Python / Automation Test 作为官方基础 | 验证和自动化必须能回到官方能力 |

## 10. Review Gate

任何 `mgw init` 后的结构性操作必须先输出：

- Design summary。
- Execution plan。
- Impact scope。
- Files or directories to create or modify。
- Decisions that need review。
- Validation plan。

有效 review status：

- `Approved`：按已审范围执行。
- `Needs revision`：先改设计或计划。
- `Rejected`：停止该路径。

## 11. v0.7 范围

v0.7 只完成产品入口和初始化设计，不实现真实 CLI。

允许：

- 新增产品入口文档。
- 新增用户使用流程文档。
- 定义 `mgw init` 命令契约。
- 定义项目初始化结构。
- 定义 tool adapter 与 MCP adapter 规则。
- 更新 README、docs index、roadmap、delivery plan、testing strategy。
- 新增静态检查入口。

不允许：

- 编写真实 `mgw` CLI。
- 安装 MCP。
- 创建新的 Godot/Unreal 工程。
- 生成或导入资产。
- 创建 `.uasset`、`.umap` 或其他 engine binary assets。

换句话说：v0.7 不实现真实 CLI、不安装 MCP、不创建新的 Godot/Unreal 工程、不生成或导入资产。
