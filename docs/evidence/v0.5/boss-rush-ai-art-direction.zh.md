# Boss Rush v0.5b AI Art Direction

版本：v0.5b

语言：中文

日期：2026-06-09

## 1. Visual Promise

Boss Rush / 《反击试炼》的 AI 美术 dry run 方向是“清晰、锋利、可读的竞技试炼”。AI 可以帮助探索轮廓、氛围、图标和 VFX 方向，但所有输出都必须服务玩家对起手、招架、反击窗口和命中反馈的判断。

## 2. Readability Goals

- 玩家、Boss、危险区、可反击窗口必须在一眼内区分。
- Boss silhouette / Boss 轮廓要比玩家更重、更有阶段变化。
- Arena mood / 场景氛围不能压过战斗对象。
- Counter VFX / 反击特效必须短促、明确，不遮挡下一个危险动作。
- HUD icon / HUD 图标在小尺寸下仍可读。
- Store capsule draft / 商店胶囊图草案只表达游戏卖点，不作为最终宣传图。

## 3. Do Directions

- 用高对比、低噪声、强轮廓表达动作游戏反馈。
- 用有限色彩区分 player、boss、danger、counter。
- 允许 AI 生成多个方向，但必须由主美或人类 reviewer 做选择和修改。
- 用自有几何、现有 prototype 形状和抽象描述作为 prompt 基础。
- 将 AI 输出优先标记为 `reference-only`、`placeholder` 或 `prototype`。

## 4. Do Not Directions

- 不使用特定在世艺术家名字作为风格目标。
- 不要求复刻某个商业游戏的角色、Boss、UI 或商店图。
- 不让 AI 输出直接成为 final art。
- 不使用来源不清的参考图训练或生成核心资产。
- 不用复杂纹理、噪声或暗色特效破坏玩法可读性。

## 5. Asset Family Priorities

| Priority | Asset Family | Reason |
|---|---|---|
| P0 | Counter feedback VFX | 直接服务核心机制。 |
| P0 | Boss silhouette | Boss 阶段变化和攻击起手是可读性核心。 |
| P1 | HUD combat icons | 帮助玩家理解状态和窗口。 |
| P1 | Arena moodboard | 保证场景服务战斗，而不是抢视线。 |
| P2 | Store capsule draft | 只做宣传方向探索，暂不做最终商店素材。 |

## 6. Reject Criteria

- 轮廓或颜色让玩家无法区分敌我和危险。
- AI 输出明显接近未授权作品、角色或商业游戏视觉。
- 没有 prompt、工具、参考来源或授权记录。
- 未经人类修改和 review 就试图进入 release-candidate。
- 无法说明在 Godot 或 Unreal 中如何导入、命名、压缩或验证。

