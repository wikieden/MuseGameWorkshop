# Godot Prototype Asset Kit / Godot 原型资产包

状态：Draft  
来源检查日期：2026-06-28  
目标用户：中国独立游戏开发者、技术美术、玩法程序，以及使用 AI 辅助资产生产的创作者。

本文定义 Muse Game Workshop 在 Godot 项目中的默认原型资产策略。本文本身不批准导入任何资产。每个资产仍然必须具备 asset brief、provenance、review status 和 Godot engine validation。

## 1. 目的

Godot Prototype Asset Kit / Godot 原型资产包用于提升 playable prototype / 可试玩原型的视觉可读性，但不把原型资产伪装成最终美术。它应该让截图、短视频和试玩测试中的原型足够清楚，同时保持轻量，方便快速迭代。

它要解决的问题：

- 避免用裸球体、裸胶囊和裸方块代表可试玩角色或敌人。
- 为 2D、轻量 3D、Tactics / 战棋类、RPG、Roguelike / 肉鸽和 Action / 动作原型提供可复用视觉基线。
- 让 Godot 资产选择具备可移植性、授权记录和来源追踪。
- 给 AI-generated 3D assets / AI 生成 3D 资产提供受控进入路径。

## 2. 默认资产决策

Muse 不应把 Unreal Manny / Quinn 或其他 Epic sample assets 作为默认 Godot demo assets。它们的价值在于参考模式：中性、可读、动画友好的代理角色。Muse 应采用更稳妥的路线：

1. Muse 原创 mannequin-style robot proxy / 机器人代理角色资产。
2. 有记录的 AI 生成机器人代理资产，记录 brief、prompt/source、tool/model、license status、human edits、review status 和 Godot validation。
3. 外部 CC0 候选资产，但必须先确认具体资产包 license 和 distribution scope，并写入记录。

Godot 默认导入源格式应使用 `glTF 2.0`，优先 `.glb` 便于紧凑分发；如需要独立纹理或可文本审查的场景数据，可使用 `.gltf`。

## 3. 资产状态

| 状态 | 含义 | Godot 使用方式 |
|---|---|---|
| Structural Placeholder / 结构占位 | 灰盒几何体、碰撞代理、调试 marker、blockout shape | 只允许用于布局和碰撞 |
| Readable Prototype Asset / 可读原型资源 | 临时但玩法可读的资产 | 可试玩角色、敌人、NPC 和关键交互物必须达到这一档 |
| Reviewed Demo Asset / 已评审 Demo 资产 | 已批准用于外部 demo、截图或视频的资产 | 必须有 brief、provenance、review、license notes 和 engine validation |
| Release Candidate Asset / 发布候选资产 | 可考虑进入发布版本的资产 | 不属于原型资产包范围 |
| Rejected Asset / 已拒绝资产 | 因可读性、授权、性能、风格或验证失败被拒绝 | 不得进入示例项目 |

## 4. 最小资产包

第一版 Godot 原型资产包应保持小规模：

| 资产 | 必要可读性 |
|---|---|
| Player proxy / 玩家代理 | 轮廓、朝向、阵营色、选中状态、受击状态 |
| Enemy proxy / 敌方代理 | 与玩家不同的轮廓或材质、朝向、攻击准备状态 |
| Neutral / NPC proxy / 中立或 NPC 代理 | 非敌对颜色和角色职责区分 |
| Interactable / 可交互物 | 明确交互暗示和 active/inactive 状态 |
| Obstacle / 障碍物 | 阻挡状态、镜头距离下的高度和可读性 |
| Pickup / 拾取物 | 价值类型、可拾取状态、拾取反馈 |
| Goal marker / 目标点 | 目标位置、active/complete 状态 |
| Move range marker / 移动范围标记 | 不遮挡单位的格子或区域高亮 |
| Attack range marker / 攻击范围标记 | 与移动范围区分，并且在单位下方仍可读 |
| Selection ring / 选择环 | 当前单位或目标状态 |
| Facing arrow / 朝向箭头 | 战棋和动作原型的朝向表达 |
| Simple VFX marker / 简单特效标记 | hit、counter、heal、buff、debuff 或交互反馈 |

## 5. 可选动画集

类人或机器人代理角色建议具备：

- `idle`
- `walk`
- `attack`
- `hit`
- `death`
- `interact`
- `defend` / `guard`
- `selected` / `turn_start`

早期原型不应被完整动画集卡住。最低可试玩标准是状态反馈可读；动画可以分阶段补齐。

## 6. 候选来源

候选来源必须逐资产 review 后才能使用：

| 来源 | 价值 | 必要注意 |
|---|---|---|
| Muse 原创资产 | 最适合作为默认分发资产，风格一致且授权清楚 | 需要源文件和 license statement |
| AI-generated 3D assets / AI 生成 3D 资产 | 可以快速生成定制代理资产，并对齐 Muse visual direction | 需要 prompt/source、tool/model、license/disclosure risk、human edits 和 engine validation |
| Kenney | 广泛的 public-domain game asset library | 导入前确认具体 asset page 和随包 license file |
| Quaternius | 低模 3D 资产，很多包提供 glTF/FBX/OBJ 和 CC0 风格授权 | 确认每个具体 pack 的当前 license 和 source package |
| KayKit | Godot Asset Library 上有多个标注 CC0 的 KayKit packs | 确认具体 Godot Asset Library 条目和包内 license |

不要把 marketplace 或 sample assets 当成 Muse 默认 demo assets，除非 redistribution、modification、engine use 和 public demo capture rights 都明确允许。

## 7. Godot 导入要求

每个导入的 3D prototype asset 都必须记录：

- Source asset path。
- 导入用 `.glb` 或 `.gltf` path。
- Godot wrapper scene path，如有。
- Scale 和 pivot validation。
- Collision strategy。
- Material 和 faction color strategy。
- Animation availability。
- Camera-distance screenshot check。
- Triangle count、material count、texture size、draw-call risk 的 performance note。
- Provenance record path。
- Review status。

建议目录：

```text
assets/prototype_3d/
  source/
  glb/
  textures/
  materials/
  scenes/
docs/assets/provenance/
```

## 8. Tactics / 战棋类补充要求

战棋类原型比一般 3D 原型更依赖可读性：

- 玩家和敌方单位必须在 tactical camera / 战术镜头下保持可读。
- 移动范围和攻击范围不能遮挡阵营或选中状态。
- Tile ownership、blocked tiles、cover、hazard 和 objective state 必须可见。
- 如果规则依赖朝向，facing arrow / 朝向箭头是必需资产。
- Selection、hover、target preview 和 action confirmation 必须视觉上可区分。

## 9. AI 3D 生成流程

AI 生成 3D 资产只能通过这个流程进入资产包：

```text
art-direction
  -> asset-brief
  -> generation or sourcing
  -> human cleanup
  -> provenance record
  -> asset-review
  -> Godot import validation
  -> reviewed demo asset decision
```

默认目标不是生成大量资产，而是做出一小套可读、可复用、能支撑玩法验证和 demo capture 的资产。

## 10. 验证清单

- 没有 playable character、enemy、NPC 或 key interactable 使用裸球体、裸胶囊或裸方块表示。
- 资产在 gameplay camera distance / 玩法镜头距离下可读。
- Player、enemy、neutral、interactable、obstacle、pickup 和 objective 的角色职责可区分。
- 战棋 range markers 不遮挡单位状态。
- `.glb` / `.gltf` 导入后没有材质丢失或比例错误。
- 每个外部或 AI-assisted asset 都记录 license 和 source。
- 资产状态已记录：structural placeholder、readable prototype asset、reviewed demo asset、release candidate 或 rejected。
- 资产升级状态前已经完成 Godot smoke test 或手动 editor validation。

## 11. 边界

本文不做：

- 生成资产。
- 向 Godot 项目导入资产。
- 自动批准任何外部资产包。
- 把 prototype assets 升级成 release-candidate assets。
- 允许 Epic sample assets 成为默认 Godot demo assets。

## 12. 参考依据

- Godot documentation：3D formats 与 glTF 2.0 导入建议。
- Kenney support：public-domain game asset 授权说明。
- Quaternius asset pages：CC0 风格 pack 授权和 glTF/FBX/OBJ 可用性。
- Godot Asset Library：KayKit Game Assets 条目和逐包 license 标记。
