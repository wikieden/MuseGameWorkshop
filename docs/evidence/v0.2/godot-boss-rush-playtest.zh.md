# v0.2 Godot Boss Rush Playtest Evidence

版本：v0.2

语言：中文

日期：2026-06-09

## 1. Playtest Goal

验证 Boss Rush / 《反击试炼》Godot prototype 是否具备最小可玩闭环：

- 玩家能移动。
- 玩家能闪避。
- 玩家能招架。
- 玩家能在反击窗口内反击。
- Boss 能进入攻击循环。
- Boss 能切换三阶段。
- 重试路径存在。
- 核心机制至少出现 10 次。

## 2. Test Method

自动验证：

```sh
python3 examples/godot-boss-rush/tests/simulate_core_loop.py
tools/checks/check-v0.2-godot
```

人工验证脚本：

1. 用 Godot 4.6.3 stable 打开 `examples/godot-boss-rush/project.godot`。
2. 运行主场景 `scenes/TestArena.tscn`。
3. 使用 WASD 移动。
4. 使用 Space 闪避。
5. 使用 F 招架 Boss 攻击。
6. 成功招架后使用 J 反击。
7. 重复 10 次核心循环。
8. 观察 Boss 是否进入 Phase 2 和 Phase 3。
9. 使用 R 重试。

## 3. Automated Result

Playtest Verdict: Passed by static and simulation checks.

已验证：

- Godot 4.6.3 stable headless 可以打开项目且无脚本错误。
- `project.godot` 存在并声明主场景。
- 输入映射包含 move、dodge、parry、counter、retry。
- `CombatData` resource 包含耐力、反击、Boss 血量和三阶段阈值。
- Player script 包含移动、闪避、招架、反击和受击处理。
- Boss script 包含攻击循环、阶段变化和失败事件。
- TestArena 连接 Player/Boss/HUD 并记录核心循环次数。
- 核心循环仿真完成 10 次 counter，Boss 血量归零，阶段 1/2/3 均出现。

## 4. Known Issues

- 当前原型使用内置形状和 Label，没有正式美术、动作、音乐或音效。
- 当前碰撞和攻击判定是最小逻辑验证，没有做距离、方向和 hurtbox 精细化。
- 当前 HUD 只验证信息显示，不代表最终 UX。

## 5. Next Actions

进入 v0.3 前建议：

- 在安装 Godot 4.6.3 stable 的机器上打开并运行项目，补截图或录屏 evidence。
- 把 Player/Boss 的占位形状转为资产 brief，而不是直接生成最终资产。
- 为 dodge/parry/counter 增加更明确的视觉和音频反馈 brief。
- 保持所有资产进入引擎前必须有 provenance 和 review。
