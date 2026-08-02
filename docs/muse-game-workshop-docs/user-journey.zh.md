# User Journey / 用户使用流程

版本：v0.7

语言：中文

## 1. 使用流程总览

Muse Game Workshop 的用户流程应该符合游戏制作习惯，同时保留 AI workflow 的可审查能力：

```text
获取 Muse
  -> mgw-init / mgw init 初始化向导
  -> continue mgw-init 继续问答
  -> Game Start / 游戏起点
  -> 概念阶段
  -> 预制作
  -> 原型验证
  -> 垂直切片
  -> 试玩与迭代
  -> 创意资产生产
  -> QA / 打磨
  -> 发布准备
  -> 项目复盘
```

用户不需要先理解一堆 agent 名称。用户先看到 Concept / 概念、Pre-production / 预制作、Prototype / 原型验证、Vertical Slice / 垂直切片、Playtest / 试玩测试、QA / 测试和 Release / 发布；AI 内部再把这些阶段映射到 workflow skills、templates、checks 和 evidence。

如果用户只想知道第一天如何从一个粗略想法开始创建项目、写 Game Start、进入问答式向导并逐步展开 pitch、core loop、mechanic spec 和 review gate，请先看 `zero-to-one-game-creation.zh.md`。本文继续覆盖更完整的制作生命周期。

## 2. Step 0: 获取 Muse

用户可以通过两种方式开始：

```sh
git clone https://github.com/wikieden/MuseGameWorkshop.git
cd MuseGameWorkshop
```

或在未来使用安装后的 CLI：

```sh
mgw --version
```

当前 v0.7 只定义 `mgw-init` / `mgw init` 的产品契约，不提供真实 CLI。

## 3. Step 1: 初始化游戏项目

用户可以从两个入口初始化。

入口 A：AI 编辑器内初始化：

```sh
mkdir ember-tactics
cd ember-tactics
codex
```

然后输入：

```text
mgw-init
```

入口 B：未来 CLI 初始化：

```sh
mkdir ember-tactics
cd ember-tactics
mgw-init
```

CLI 生成最小项目后，用户打开 AI coding tool 并输入：

```text
continue mgw-init
```

`mgw init` 是未来标准 CLI 子命令或等价别名：

```sh
mgw init ember-tactics --lang zh-CN --tool codex --first-playable threejs-web --production-target godot --genre tactics --profile docs-only --mcp none
```

初始化完成后，用户应得到：

- 项目 README。
- `muse.project.yaml`。
- `docs/00-game-start.md`。
- `docs/evidence/README.md`。
- 可选 `AGENTS.md` 或 `CLAUDE.md`。
- 当前阶段和 `next_action`。

默认不生成完整设计、制作、创意资产目录，不安装 MCP，不创建 Three.js / Unity / Godot / Unreal 工程。

## 4. Step 2: 选择 AI 工具

用户可以使用不同 AI coding tools，但流程不变：

| 用户选择 | 项目入口 |
|---|---|
| Codex | `AGENTS.md`、`.agents/skills/`、checks |
| Claude Code | `CLAUDE.md`、skills、commands、hooks |
| Kiro CLI | steering/spec/task 规则 |
| opencode | project instructions、commands |
| 其他工具 | README、rules、templates、review gate |

所有工具都必须先读：

- `muse.project.yaml`。
- `docs/00-game-start.md` 或当前阶段文档。
- review gate。
- 目标语言、目标用户群体和 locale。

## 5. Step 3: 概念阶段

目标：判断游戏方向是否值得继续。

用户输入：

- 一句话想法。
- 参考作品。
- 目标平台。
- 可投入时间。
- 团队能力。

AI 辅助：

- `game-intake`。
- `core-loop`。

产出：

- Pitch。
- Player fantasy / 玩家幻想。
- Core player verbs / 核心玩家动词。
- 3 个必须验证的设计假设。
- 第一轮风险清单。

## 6. Step 4: 预制作

目标：把方向变成可执行规格。

AI 辅助：

- `mechanic-spec`。
- `engine-portability`。
- `game-design-systems` 相关模板。

产出：

- Core loop。
- Mechanic spec。
- System design。
- Combat / encounter / tuning specs。
- Engine-neutral design。
- Three.js / Unity / Godot / Unreal production-target mapping。

完成标准：

- 策划、程序、QA、美术和音频都能理解要做什么。
- 可调参数有来源和范围。
- 测试方式清楚。

## 7. Step 5: Review Gate

任何实现前必须确认：

- Design summary。
- Execution plan。
- Impact scope。
- Files or directories to create or modify。
- Decisions that need review。
- Validation plan。
- Review Status: Approved。

未通过 review 时，AI 只能改计划或文档，不能修改代码、资产或项目结构。

## 8. Production Loops / 制作循环

初始化和概念阶段之后，Muse 不是单线推进，而是按制作职能进入多个 loop：

| Loop | 中文叫法 | 主要产出 |
|---|---|---|
| Design Loop | 策划循环 | pitch、core loop、mechanic spec、系统设计、数值假设 |
| Prototype Design Gate | 原型设计门 | prototype goal、playable promise、mechanic readiness、content scope、placeholder policy、prototype visual quality floor、engine mapping、validation plan、cut list |
| Narrative Loop | 叙事循环 | world bible、角色 brief、剧情动线、任务/对白 brief |
| Art Loop | 美术循环 | art direction、美术资产清单、asset brief、provenance、asset review |
| Programming Loop | 程序循环 | production-target mapping、技术拆分、Three.js/Unity/Godot/Unreal 原型任务、测试方式 |
| QA / Playtest Loop | 测试试玩循环 | playtest checklist、bug report、调优记录、evidence |
| Release Loop | 发布循环 | demo readiness、商店素材 brief、本地化、AI asset disclosure |

每个 loop 都遵循：

```text
问答收集信息
  -> 生成阶段交付物
  -> 用户 review
  -> Approved 后进入实现或下一阶段
```

## 9. Step 6: 原型验证

目标：低成本验证核心乐趣。

进入 Three.js、Unity、Godot、Unreal、玩法代码或 editor automation 前，必须先通过 `prototype-design` 的 Prototype Design Gate / 原型设计门。

原型设计门至少产出：

- Prototype Goal / 原型目标：验证什么，不验证什么。
- Playable Promise / 最小可玩承诺：玩家 30 秒内能做什么。
- Core Mechanic Readiness / 核心机制就绪度：输入、状态、参数、反馈、边界和测试。
- Moment-to-Moment Flow / 即时体验流程：开始、操作、反馈、失败、重试和退出。
- Content Scope / 内容范围：最少角色、敌人、关卡、道具、技能和 UI。
- Placeholder Policy / 占位资源策略：结构占位、可读原型资源、已评审 demo 资产、临时美术、临时音频和可读性底线。
- Prototype Visual Quality Floor / 原型视觉质量底线：角色、敌人、NPC 和关键交互物具备可读轮廓、朝向、阵营、职责、比例、状态反馈和镜头距离下的可读性。
- Production Target Mapping / 生产目标映射：Three.js module/data/browser、Unity Scene/Prefab/ScriptableObject、Godot Scene/Script/Resource 或 Unreal Actor/Component/Data Asset 的预期形态。
- Validation Plan / 验证计划：试玩脚本、通过标准、失败标准和 evidence。
- Cut List / 可砍列表：时间不够时先砍什么，不能砍什么。

可试玩原型不能用裸球体、裸胶囊或裸方块代表玩家角色、敌人、NPC 或关键交互物，除非游戏本身的角色幻想就是这种形态。应使用 Readable Prototype Asset / 可读原型资源，例如原创或已授权的 mannequin-style robot proxy / 机器人代理角色、standee、临时 sprite、kitbash proxy，或带 brief、provenance、review 和 engine validation 的 AI-generated 3D prototype mesh。

面向 demo 的 3D prototype asset kit 应保持小而可复用：player proxy、enemy proxy、neutral/NPC proxy、interactable、obstacle、pickup、target marker、move/attack range marker 和 simple VFX marker。Epic sample mannequins 和 marketplace assets 不能被视为 Muse 默认跨引擎 demo 资产，除非 license 和 distribution scope 已确认允许这种用途。

Godot 方向：

- 优先验证 2D、轻量 3D、系统、数值和循环。
- 输出 Scene、Script、Resource、test scene 和 playtest checklist。

Unreal 方向：

- 优先验证高表现 3D、镜头、动画、Blueprint/Data Asset 映射。
- 输出 Actor、Component、Blueprint/C++ plan、PIE test map plan。

MCP 或 editor automation 只在明确启用、review 通过并有回滚方案后使用。

## 10. Step 7: 垂直切片

目标：证明完整体验链路成立。

AI 辅助：

- `vertical-slice-planner`。
- `godot-workflow` 或 `unreal-workflow`。
- `ux-flow`。
- `level-blockout`。

产出：

- 垂直切片任务列表。
- 可砍功能列表。
- 最小 HUD / UI flow。
- 测试地图或测试场景。
- 试玩验收标准。

## 11. Step 8: 创意资产生产

目标：让美术、动作、场景、音乐、音效和 UI 进入可审查流程。

顺序：

1. Art direction / 美术方向。
2. Asset brief / 资产需求。
3. AI generation or assisted editing / AI 生成或辅助编辑。
4. Provenance / 来源记录。
5. Human review / 人工审查。
6. Engine validation / 引擎内验证。

没有 brief、provenance、review 和 engine validation 的资产不能进入示例项目。

## 12. Step 9: 试玩与迭代

目标：把反馈变成下一轮制作判断。

输入：

- 试玩笔记。
- 截图或录像。
- bug。
- 手感问题。
- 数值数据。

AI 辅助：

- `playtest-report`。
- tuning plan。
- bug triage。

产出：

- 试玩报告。
- 问题分类。
- 原因假设。
- 下一轮改动。
- decision log。

## 13. Step 10: 发布准备与复盘

目标：判断 demo 或版本是否能对外。

检查：

- 构建状态。
- 平台风险。
- 本地化和字体。
- 无障碍。
- AI asset disclosure。
- 商店素材。
- 试玩证据。
- 已知问题。

发布后进入 Postmortem / 项目复盘，把经验回写到模板、skills 和项目规则。

## 14. 用户成功标准

一个用户成功使用 Muse Game Workshop 时，应该能做到：

- 在自己的游戏仓库中启动，而不是只读 Muse 源仓库。
- 能通过 `mgw-init` 或 `continue mgw-init` 进入问答式初始化。
- 让 Codex、Claude Code、Kimi Code、Kiro CLI、opencode、RoboCode、CliHub 等工具读同一套规则。
- 从模糊想法推进到可 review 的机制规格。
- 在 review gate 后再进入 Three.js、Unity、Godot 或 Unreal。
- 让 AI 生成或辅助资产有来源和人工审查记录。
- 用 evidence 解释每次重要制作决策。
