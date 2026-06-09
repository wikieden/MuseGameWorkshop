# Boss Rush / 《反击试炼》Dry Run Plan

版本：v0.1

语言：中文

日期：2026-06-09

## 1. Design Summary

《反击试炼》用于验证 Muse Game Workshop 的 v0.1 workflow pack，而不是作为当前版本要实现的游戏。它的制作目标是证明一个小型 Boss Rush 想法可以通过 intake、core loop、mechanic spec、vertical slice plan、engine mapping、creative asset plan、UX/level planning 和 playtest planning，形成可 review 的 Godot v0.2 实施计划。

## 2. Core Loop

### 2.1 5 秒循环

1. Boss 出招并给出前摇。
2. 玩家识别攻击方向和时机。
3. 玩家选择闪避、招架或拉开距离。
4. 成功规避后出现短反击窗口。

### 2.2 30 秒循环

1. 玩家连续处理 3-5 次 Boss 攻击。
2. 成功反击积累伤害。
3. 玩家管理耐力，避免连续失误。
4. Boss 血量进入阈值后改变攻击节奏。

### 2.3 5 分钟循环

1. 玩家经历 Boss 三个阶段。
2. 每阶段引入一个节奏变化。
3. 玩家根据失败反馈调整策略。
4. 胜利或失败后进入 playtest report。

## 3. Mechanic Spec 摘要

| Mechanic | 输入 | 状态 | 关键参数 | 反馈 |
|---|---|---|---|---|
| Dodge / 闪避 | 方向 + 闪避键 | idle -> dodge -> recovery | invulnerability window, stamina cost, recovery time | 位移、残影/音效、耐力减少 |
| Parry / 招架 | 招架键 | idle -> parry active -> recovery | active window, fail recovery, stamina cost | 成功火花/音效、失败硬直 |
| Counter / 反击 | 攻击键，要求反击窗口 | ready -> counter -> recovery | counter window, damage, knockback | 命中停顿、伤害数字或 Boss 反馈 |
| Stamina / 耐力 | 自动恢复 | available / exhausted | max, regen, costs | HUD 条、耗尽提示 |

边界：

- 连续闪避不能无限规避。
- 招架失败必须有可读代价。
- 反击窗口必须短但公平。
- Boss 前摇必须可读。

## 4. Vertical Slice Plan 摘要

v0.2 Godot slice 建议只包含：

- 一个 Player。
- 一个 Boss。
- 一个 TestArena。
- 闪避、招架、反击、耐力、Boss 血量。
- Boss 三阶段节奏变化。
- 最小 HUD。
- 手动试玩脚本。
- playtest report。

明确不包含：

- 多 Boss。
- 装备系统。
- 技能树。
- 正式美术。
- 正式音频。
- 商店页或发布构建。

## 5. Engine Mapping 摘要

### 5.1 Godot v0.2 建议

- `Player` scene。
- `Boss` scene。
- `CombatData` resource。
- `TestArena` scene。
- Input Map：dodge、parry、attack。
- Signals：hit、parry_success、counter_window_open、stamina_changed。
- 最小 smoke check：场景加载、玩家输入、Boss 阶段变化、参数读取。

### 5.2 Unreal v0.4 建议

- Third-person Character。
- Boss Actor。
- Combat Data Asset。
- Enhanced Input。
- Animation Montage 占位。
- Debug UMG。
- PIE test map。

v0.1 只记录映射计划，不创建 Godot 或 Unreal 文件。

## 6. Creative Asset Pipeline 摘要

v0.1 只规划资产流，不生成资产。

P0 资产 briefs：

- 玩家角色：朝向、闪避、受击状态可读。
- Boss：三阶段轮廓和攻击前摇清楚。
- 动作：闪避、招架、反击、Boss 起手 timing。
- 场景：封闭训练场灰盒。
- UI：耐力、Boss 血量、反击窗口提示。
- 音乐：紧张但不遮挡反馈。
- 音效：闪避、招架、命中、破防区分明确。

资产 gate：

1. `art-direction`
2. `asset-brief`
3. `asset-provenance`
4. `asset-review`
5. engine validation, from v0.3 onward

## 7. UX And Level Plan 摘要

UX：

- HUD 只显示玩家耐力、Boss 血量和必要反击提示。
- 新手引导先用短提示，不做完整教程系统。
- 反馈层级优先：Boss 前摇、招架成功、反击窗口、耐力耗尽。

Level blockout：

- 封闭圆形或方形训练场。
- 无导航干扰。
- Boss 与玩家距离便于读招。
- 边界不制造镜头和碰撞噪声。

## 8. Playtest Planning 摘要

首轮 playtest 问题：

- 玩家是否能理解 Boss 前摇。
- 闪避和招架的区别是否清楚。
- 反击窗口是否公平。
- 耐力耗尽是否可读。
- HUD 是否遮挡动作。
- 失败后玩家是否知道下一次怎么改。

v0.1 结论：

> Workflow pack 可以把 Boss Rush 想法推进到 v0.2 Godot 实施计划，但当前版本不进入游戏代码。
