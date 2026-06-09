# Boss Rush Art Direction Slice

版本：v0.3

语言：中文

日期：2026-06-09

## 1. Visual Promise

《反击试炼》的 prototype visual direction 是清晰、锋利、可读的竞技试炼感。玩家需要在短时间内读懂 Boss 起手、招架成功、反击窗口和命中反馈。

## 2. Readability Goals

- 玩家朝向必须清楚。
- Boss silhouette / 轮廓必须大于玩家并更重。
- 反击窗口必须比普通移动和受击反馈更亮。
- 颜色层级：player cyan、boss red-orange、counter feedback mint/gold。
- HUD 不遮挡角色和 Boss 中轴线。

## 3. Do Directions

- 使用高对比、低噪声的形状。
- 让反馈围绕机制触发点出现。
- 使用短时、明确、可重复的 visual cue。
- prototype 阶段允许简单几何形状。

## 4. Do Not Directions

- 不使用复杂纹理遮挡判定。
- 不用暗色粒子或低对比特效表达成功反击。
- 不导入风格不明的 AI 概念图。
- 不把 prototype feedback 包装成最终美术。

## 5. Asset Priority

| Priority | Asset | Reason |
|---|---|---|
| P0 | Counter window / counter hit visual feedback | 直接服务核心机制。 |
| P1 | Boss windup readability | 后续补强起手判断。 |
| P1 | Parry success cue | 后续拆分 parry 与 counter 的反馈层级。 |
| P2 | Character final sprites/models | 等 core feel 和 art direction 更稳定后再做。 |

## 6. Reject Criteria

- 看不出反馈发生在玩家、Boss 还是 HUD。
- 与 player / boss 主色混淆。
- 生成来源或授权不清楚。
- 无法在 Godot 中导入或触发。
