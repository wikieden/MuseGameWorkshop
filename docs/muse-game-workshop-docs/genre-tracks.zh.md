# Genre Tracks / 类型流程分支

状态：Draft  
版本范围：v0.8  
Review Status: Approved  
目标用户：中国独立游戏开发者和小型游戏团队。

Genre Tracks / 类型流程分支用于说明 Muse Game Workshop 如何把通用制作流程适配到不同游戏类型，而不是把项目变成僵硬的类型分类表。核心流程保持不变：

```text
mgw-init
  -> game-intake
  -> core-loop
  -> mechanic-spec
  -> prototype-design
  -> review gate
  -> Approved 后才进入 engine / asset / QA loop
```

类型分支只增加制作重点：哪些设计需要细化、哪些交付物必需、原型验证方式有什么差异、资产可读性要证明什么。

## 1. 范围

v0.8 覆盖首批 7 个类型分支：

标准叫法：Action / 动作、Roguelike / 肉鸽、RPG / 角色扮演、Puzzle / 解谜、Visual Novel / 视觉小说、Tactics / 战棋类、Adventure / AVG 冒险。

| Track | 中文叫法 | 目的 |
|---|---|---|
| Action | 动作 | 操作、时机、反馈、战斗手感 |
| Roguelike | 肉鸽 | run structure、程序化内容、风险收益、重复游玩 |
| RPG | 角色扮演 | 角色成长、队伍/职业、任务、世界和成长线 |
| Puzzle | 解谜 | 规则、交互暗示、解空间、提示、难度曲线 |
| Visual Novel | 视觉小说 | 分支叙事、角色线、对白、UI 和本地化 |
| Tactics | 战棋类 | 格子/空间规则、单位、技能、遭遇、战术 AI |
| Adventure / AVG | 冒险 / AVG | 探索、调查、物品、对白、场景推进 |

Tactics / 战棋类是优先验证分支，因为它会同时压测规则、单位、地图、UI 可读性、AI 行为和 Godot 原型资产需求。

## 2. 共享分支契约

每个类型分支必须定义：

- Player promise / 玩家承诺。
- Core loop emphasis / 核心循环重点。
- Main production risks / 主要制作风险。
- Required design deliverables / 必要设计交付物。
- Prototype validation method / 原型验证方式。
- Asset and UX readability needs / 资产和 UX 可读性需求。
- QA and playtest checks / 测试与试玩检查。
- Explicit exclusions / 明确不做。

类型分支不能绕过 review gate。它是计划和交接表面，不是创建代码、导入资产或打开引擎工程的许可。

## 3. 交付物

v0.8 创建：

- 一个总纲：`genre-tracks.en.md` / `genre-tracks.zh.md`。
- 7 个类型规格文档，放在 `genre-tracks/` 下。
- 一个 Tactics / 战棋类 dry run，放在 `docs/evidence/v0.8/`。
- 一个 v0.8 review gate 和 evidence record。
- 一个检查入口：`tools/checks/check-v0.8-genre-tracks`。

## 4. Godot Prototype Asset Kit 关联

当类型分支面向 Godot，且原型视觉可读性重要时，必须引用 `godot-prototype-asset-kit.*.md`。可试玩原型不能用裸球体、裸胶囊或裸方块代表玩家角色、敌人、NPC 或关键交互物。

Tactics / 战棋类最低 Godot 资产需求：

- Player proxy / 玩家代理。
- Enemy proxy / 敌方代理。
- NPC or neutral proxy / NPC 或中立代理。
- Grid tile / 格子。
- Blocked tile / 阻挡格。
- Move range marker / 移动范围标记。
- Attack range marker / 攻击范围标记。
- Selection ring / 选择环。
- Facing arrow / 朝向箭头。
- Objective marker / 目标标记。
- Simple VFX marker / 简单特效标记。

真实 `.glb` / `.gltf` 资产生成或导入不属于 v0.8。后续资产必须经过 `art-direction`、`asset-brief`、provenance、`asset-review` 和 Godot validation，并单独获得批准。

## 5. 分支文件

- `genre-tracks/action.zh.md`
- `genre-tracks/roguelike.zh.md`
- `genre-tracks/rpg.zh.md`
- `genre-tracks/puzzle.zh.md`
- `genre-tracks/visual-novel.zh.md`
- `genre-tracks/tactics.zh.md`
- `genre-tracks/adventure-avg.zh.md`

## 6. 发布标准

v0.8 完成条件：

- 7 个类型分支都有中英文文档。
- Tactics / 战棋类有从规则到 Godot asset kit needs 的 dry run。
- 涉及原型可读性时引用 Godot prototype asset strategy。
- v0.8 evidence 记录没有创建真实资产、引擎工程、MCP 工具或游戏代码。
- `check-v0.8-genre-tracks` 通过。

## 7. 明确不做

v0.8 不做：

- 覆盖所有游戏类型。
- 生成或导入真实资产。
- 创建 `.glb`、`.gltf`、`.tscn`、`.gd`、`.tres`、`.uasset` 或 `.umap` 文件。
- 安装 Godot AI、Godot-MCP、UE-MCP 或其他 MCP server。
- 实现真实 `mgw` CLI。
- 产出可玩的 Godot 或 Unreal 工程。
