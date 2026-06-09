# v0.2 Godot Boss Rush Design And Execution Plan

版本：v0.2

语言：中文

日期：2026-06-09

## 1. Design Summary

v0.2 的目标是完成 Godot Playable Loop：把 v0.1 Boss Rush / 《反击试炼》无代码 dry run 推进成一个最小 Godot 可玩原型。

本版本验证：

- 机制规格能进入 Godot project。
- Player / Boss / CombatData / TestArena 能形成最小闭环。
- 闪避、招架、反击和耐力管理可以重复触发。
- Boss 能进入攻击循环并通过血量阈值切换三阶段。
- 项目有可调参数、最小自动检查和人工试玩脚本。

## 2. Execution Plan

允许创建：

```text
examples/godot-boss-rush/
  project.godot
  README.md
  resources/combat_data.tres
  scenes/TestArena.tscn
  scenes/Player.tscn
  scenes/Boss.tscn
  scenes/ui/HUD.tscn
  scripts/combat_data.gd
  scripts/player.gd
  scripts/boss.gd
  scripts/hud.gd
  scripts/test_arena.gd
  tests/simulate_core_loop.py
tools/checks/check-v0.2-godot
docs/evidence/v0.2/
  godot-boss-rush-design.zh.md
  godot-boss-rush-review-gate.zh.md
  godot-boss-rush-playtest.zh.md
```

不允许创建：

- Unreal 项目。
- 正式美术资产。
- 正式音频资产。
- 商店页、trailer 或发布构建。
- v0.3 creative asset engine validation。

## 3. Mechanic Scope

| Mechanic | v0.2 Scope | Evidence |
|---|---|---|
| Move / 移动 | WASD 输入，CharacterBody2D 移动 | `player.gd` |
| Dodge / 闪避 | 消耗耐力，短时间无敌和快速位移 | `player.gd` |
| Parry / 招架 | 消耗耐力，成功后打开反击窗口 | `player.gd` |
| Counter / 反击 | 在窗口内造成 Boss 伤害 | `player.gd`、`boss.gd` |
| Stamina / 耐力 | 最大值、消耗、自动恢复 | `combat_data.tres` |
| Boss phase / Boss 阶段 | 100/66/33 血量阈值切三阶段 | `boss.gd` |
| Retry / 重试 | R 键重置测试场 | `test_arena.gd` |

## 4. Impact Scope

受影响范围：

- 新增 Godot 示例项目路径 `examples/godot-boss-rush/`。
- 新增 v0.2 检查入口 `tools/checks/check-v0.2-godot`。
- 更新 `tools/checks/check-v0.1-manifest`，让 v0.2 review gate Approved 后允许 Godot 示例文件存在。
- 新增 v0.2 evidence 文件。

未影响范围：

- v0.1 skill/template/check 清单不变。
- 未创建 Unreal 示例。
- 未导入外部资产。
- 未修改 P1/P2 规划范围。

## 5. Validation Plan

自动/脚本检查：

- `tools/checks/check-doc-links`
- `tools/checks/check-doc-pairs`
- `tools/checks/check-startup-prompts`
- `tools/checks/check-template-metadata`
- `tools/checks/check-v0.1-manifest`
- `tools/checks/check-v0.2-godot`
- `python3 examples/godot-boss-rush/tests/simulate_core_loop.py`

人工验证：

- 安装 Godot 4.6.3 stable 后打开 `examples/godot-boss-rush/project.godot`。
- 运行 `scenes/TestArena.tscn`。
- 用 WASD 移动，Space 闪避，F 招架，J 反击，R 重试。
- 验证至少 10 次核心循环后 Boss 可被击败。

环境说明：

- 本机已安装 Godot `4.6.3.stable.official.7d41c59c4`。
- 截至 2026-06-09，官方 archive 显示 Godot 4.7 仍为 RC，v0.2 以最新 stable Godot 4.6.3 作为验证版本。
- `godot --headless --path examples/godot-boss-rush --quit-after 1` 已通过，未报告 `SCRIPT ERROR` 或 `ERROR:`。
- v0.2 自动检查覆盖项目结构、脚本契约、输入映射、参数资源、场景引用、核心循环仿真和 Godot headless 主场景运行。
