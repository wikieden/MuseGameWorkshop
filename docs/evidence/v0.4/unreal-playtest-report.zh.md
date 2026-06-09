# v0.4 Unreal Mapping Slice Playtest Evidence

版本：v0.4

语言：中文

日期：2026-06-09

## 1. Playtest Goal

验证 Boss Rush / 《反击试炼》的核心机制是否能在 Unreal Mapping Slice 中进入 PIE test map / 编辑器内试玩地图。

## 2. Current Environment Result

Playtest Verdict: Blocked by missing Unreal Editor.

本机检查结果：

- 未找到 `UnrealEditor`。
- 未找到 `ue5`、`ue4` 或 `unreal` 命令。
- 未找到 `/Applications`、`/Users/Shared` 下的 UE_5 或 UnrealEditor 安装。

因此当前只能验证文本工程骨架和机制映射，不能生成或打开 `.uasset` / `.umap`，也不能运行 PIE。

## 3. Static Validation Completed

已完成：

- `CounterTrial.uproject` 已创建。
- `CounterTrial` C++ module 已创建。
- `UCounterTrialCombatData` Data Asset class 已创建。
- `UCounterTrialCombatComponent` 已映射 dodge、parry、counter、stamina 和 counter window。
- `ACounterTrialCharacter` 已映射 player action entry points。
- `ACounterTrialBoss` 已映射 health、phase threshold 和 counter damage。
- `UCounterTrialDebugHUD` 已映射 UMG debug HUD 接口。
- `Config/DefaultInput.ini` 已记录 WASD、Dodge、Parry、Counter、Retry 输入。

## 4. Manual PIE Script For Later

Unreal Editor 可用后，手动验证：

1. 打开 `examples/unreal-boss-rush/CounterTrial.uproject`。
2. 创建 `DA_CounterTrialCombatData`，填入 v0.2 Godot `combat_data.tres` 对应参数。
3. 创建 `BP_CounterTrialCharacter`，挂载 `CounterTrialCombatComponent`。
4. 创建 `BP_CounterTrialBoss`，绑定 phase 和 health debug output。
5. 创建 `WBP_DebugCombatHUD`，显示 stamina、Boss health、phase、counter status。
6. 创建 `M_CounterTrial_PIE`。
7. 在 PIE 中验证：WASD 移动、Space dodge、F parry、J counter、R retry。
8. 验证至少 10 次核心循环后 Boss 进入 phase 2 / phase 3 并可被击败。

## 5. Next Action

安装或提供 Unreal Editor 后，运行 Unreal editor validation 并更新本文件为 Passed / Needs revision / Rejected。
