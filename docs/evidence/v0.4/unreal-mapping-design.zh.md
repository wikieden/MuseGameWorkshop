# v0.4 Unreal Mapping Slice Design And Execution Plan

版本：v0.4

语言：中文

日期：2026-06-09

## 1. Design Summary

v0.4 的目标是完成 Unreal Mapping Slice / Unreal 映射切片：把 Boss Rush / 《反击试炼》已经在 v0.2 Godot playable loop 和 v0.3 creative asset gate 中验证过的核心机制，映射到 Unreal Engine 的第三人称战斗切片计划。

本阶段先做设计评审，不创建 Unreal project / Unreal 项目文件。v0.4 要回答的问题是：

- 同一套 engine-neutral mechanic spec 是否能映射到 Unreal 的 Actor、Component、Blueprint、C++、Data Asset、UMG、Animation 和 PIE test map？
- 3D 动作表现、动画占位、镜头和碰撞会引入哪些 Godot 2D prototype 中不存在的风险？
- 哪些参数必须保持 Data Asset / 数据资产化，避免在 Blueprint 或 C++ 中硬编码？
- 哪些 v0.3 prototype assets 可以作为机制反馈参考，哪些不能被当作最终表现复用？

## 2. Production Stage

当前阶段：Prototype / 原型验证 -> Vertical Slice / 垂直切片准备。

v0.4 不是正式 Production / 正式制作，也不是完整 Unreal 游戏。它只验证一个最小 Third-person Combat Slice / 第三人称战斗切片。

## 3. Engine-Neutral Source

v0.4 必须从以下已验证来源映射：

| Source | Purpose |
|---|---|
| `docs/evidence/dry-runs/boss-rush-plan.zh.md` | 原始 engine-neutral 机制和 Unreal v0.4 建议。 |
| `docs/evidence/v0.2/godot-boss-rush-design.zh.md` | 已验证的 Godot playable loop 范围。 |
| `docs/evidence/v0.3/boss-rush-creative-production-design.zh.md` | 已验证的资产 gate 和 prototype feedback 原则。 |
| `examples/godot-boss-rush/resources/combat_data.tres` | 可迁移到 Unreal Data Asset 的核心参数。 |

## 4. Mechanic Mapping

| Mechanic / 机制 | Godot v0.2 | Unreal v0.4 Plan |
|---|---|---|
| Move / 移动 | `CharacterBody2D` + Input Map | Third-person Character + Enhanced Input。 |
| Dodge / 闪避 | `start_dodge`、invulnerable、stamina cost | Character Ability Component，含 dodge montage placeholder、invulnerability window、stamina cost。 |
| Parry / 招架 | `start_parry`、parry window、counter window | Combat Component，含 parry active window、fail recovery、counter window event。 |
| Counter / 反击 | `try_counter` -> `counter_landed` | Counter attack event，触发 Boss damage、hit stop placeholder、visual/audio feedback。 |
| Stamina / 耐力 | `CombatData` resource | `UCounterTrialCombatData` Data Asset 或 Blueprint Data Asset。 |
| Boss phase / Boss 阶段 | health thresholds in `boss.gd` | Boss Actor + phase thresholds in Data Asset。 |
| Retry / 重试 | R 键 reset test arena | PIE test map restart action or debug reset command。 |

## 5. Unreal Responsibility Split

| Area | Blueprint | C++ | Data Asset |
|---|---|---|---|
| Character setup | Third-person test Character, camera boom, debug events | Optional base component only if needed | Input/action tuning references |
| Combat state | Debug graph and animation events | State validation if Blueprint becomes unclear | stamina, windows, damage, thresholds |
| Boss behavior | Simple phase behavior and attack timing | Optional reusable component later | health, phase thresholds, timing |
| UI / UMG | Debug HUD, stamina, Boss health, phase, counter status | Not required for v0.4 | UI labels and display names if needed |
| Animation | Placeholder Animation Montage and notify timing | Not required for v0.4 | montage timing params |

Decision: v0.4 should bias toward Blueprint + Data Asset first, with C++ only for boundaries that become hard to test or easy to duplicate incorrectly.

## 6. Planned Unreal File Scope

Review approval would allow creating only a contained Unreal example:

```text
examples/unreal-boss-rush/
  CounterTrial.uproject
  Content/CounterTrial/Blueprints/
    BP_CounterTrialCharacter.uasset
    BP_CounterTrialBoss.uasset
    BP_CounterTrialCombatComponent.uasset
  Content/CounterTrial/Data/
    DA_CounterTrialCombatData.uasset
  Content/CounterTrial/UI/
    WBP_DebugCombatHUD.uasset
  Content/CounterTrial/Maps/
    M_CounterTrial_PIE.umap
  Content/CounterTrial/Animation/
    AM_Dodge_Placeholder.uasset
    AM_Parry_Placeholder.uasset
    AM_Counter_Placeholder.uasset
  README.md
docs/evidence/v0.4/
  unreal-mapping-design.zh.md
  unreal-mapping-review-gate.zh.md
  unreal-playtest-report.zh.md
tools/checks/check-v0.4-unreal
```

Text project, config, and C++ source files are approved and may be created under this scope. Binary `.uasset` and `.umap` files still require Unreal Editor availability and separate evidence after creation.

## 7. Explicit Non-Goals

v0.4 不做：

- 完整 3D 游戏。
- 正式角色模型、正式 Boss 模型或正式动画。
- 正式 VFX、最终音乐或最终音效。
- 商业 creative AI API 深度接入。
- Unreal MCP 深度自动化。
- packaging、store page、trailer 或 release build。
- 多 Boss、装备系统、技能树、存档、联网、账号系统。

## 8. Asset And Provenance Rules

- v0.3 prototype visual/audio assets 可作为 feedback intent / 反馈意图参考。
- v0.3 prototype assets 不得作为 Unreal release-candidate assets。
- Unreal placeholder animation、UMG、音频或 VFX 仍必须有 brief/provenance/review。
- 如果使用 Marketplace、Mixamo、MetaHuman、Fab、AI 生成工具或第三方音频库，必须记录来源、license、版本、人工修改和平台披露风险。

## 9. Validation Plan

设计评审阶段验证：

- `tools/checks/check-doc-links`
- `tools/checks/check-doc-pairs`
- `tools/checks/check-startup-prompts`
- `tools/checks/check-template-metadata`
- 确认没有 `.uproject`、`.uasset`、`.umap`、`.cpp`、`.h` Unreal 文件被创建。

v0.4 implementation / 实施阶段通过后应新增：

- `tools/checks/check-v0.4-unreal`
- Unreal Editor or commandlet smoke check。
- PIE test map manual validation。
- Data Asset 参数检查。
- Playtest report。

## 10. Review Decisions Needed

| Decision | Recommended Direction | Review Question |
|---|---|---|
| Unreal version assumption | Use current locally available or documented stable UE 5.x, verify before implementation | 是否锁定具体 UE 版本？ |
| Blueprint vs C++ | Blueprint + Data Asset first, C++ only if needed | 是否接受 v0.4 不先写 C++？ |
| Asset state | Placeholder/prototype only | 是否禁止 release-candidate 资产进入 v0.4？ |
| Automation depth | Manual PIE + minimal static check first | 是否暂不做 MCP/editor automation？ |
| Scope | One test Character, one Boss, one map | 是否接受单切片范围？ |

## 11. Implementation Gate

Current status: approved for a contained Unreal text/source scaffold.

Unreal Editor validation remains blocked until Unreal Editor is installed or otherwise available. `.uasset` / `.umap` creation must be followed by updated provenance, review, PIE validation, and playtest evidence.
