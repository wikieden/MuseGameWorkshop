# Grey Tide img2threejs 试点计划

Track：Creative AI Production Pilot / 创意 AI 生产试点

Language：Chinese

Review Status：Approved for planning

Pilot Execution Status：Not approved

Asset Generation：Not run

Game Code Changes：Not approved

## 1. 试点目标

用 Grey Tide /《灰潮》的 Three.js 垂直切片验证一条真实、受控、可追溯的 AI 3D 硬表面资产生产链，而不是证明 `img2threejs` 可以替代 3D 美术。

试点必须回答：

- 程序化 Three.js 资产是否比现有低模占位资源更可读、可编辑。
- 生成资产是否能提供玩法需要的 pivot、socket、collider 和 destruction group。
- 多视角质量门能否发现参考图视角以外的问题。
- token、时间、人工返工和浏览器性能是否值得继续投入。
- 同一 Asset Brief 能否在失败时切换到人工建模或 mesh-native 工具。

## 2. 当前批准边界

本文件只批准试点设计落盘。本轮不执行：

- 安装或调用 `img2threejs`。
- 生成或下载参考图、模型、纹理和其他资产。
- 修改 `/Users/wiki/Documents/gamestudio-codex`。
- 上传 Grey Tide IP 或未公开素材到第三方服务。
- 把候选资产声明为 reviewed-demo 或 release-candidate。

执行前必须另行提交设计摘要、文件影响、成本上限、输入参考来源和 Review Status。

## 3. 试点资产

| Asset ID | 资产 | 生产风险 | 要验证的能力 | 初始目标状态 |
|---|---|---|---|---|
| `GT-PORT-CRATE-01` | 港口货箱 / 战术掩体 | 低 | 轮廓、比例、碰撞、重复实例和玩法镜头可读性 | `readable-prototype` |
| `GT-MECH-MODULE-01` | 机甲肩部或武器模块 | 中高 | pivot、socket、可替换节点、受击和部位破坏接口 | `readable-prototype` |
| `GT-PORT-MACHINE-01` | 港口控制台或机械设施 | 中 | 复合部件、材质分区、交互状态和场景风格一致性 | `readable-prototype` |

首轮明确排除：完整英雄机甲、人物、面部、服装、大型港口场景、植被、动画角色和发布资产。

## 4. 输入策略

每件资产必须使用团队自有、项目新生成且来源完整，或明确授权的参考图。参考图进入工具前记录：

- 文件 hash、尺寸和版本。
- 创作者或生成工具。
- Prompt、model、settings 和 human edits。
- 输入所有权和允许的使用范围。
- 是否允许上传第三方服务。
- 正面、侧面、背面或细节视图覆盖情况。
- 隐藏区域的推断规则。

涉及现实品牌、受保护游戏皮肤、在世艺术家风格模仿或真实人物的参考图直接拒绝。

## 5. 执行顺序

1. 为三个资产建立或批准统一 Art Direction。
2. 逐资产填写 Asset Brief 和预算。
3. 固定 `img2threejs` 版本或 commit，并记录安装和调用方式。
4. 先执行 `GT-PORT-CRATE-01`；失败时不自动进入后两件。
5. 每个构建 pass 记录输入、输出、comparison sheet、评审和 next action。
6. 候选资产通过多视角评审后，才进入隔离的 Three.js test scene。
7. 执行 TypeScript、build、browser、WebGL 2 fallback 和 gameplay-camera smoke。
8. 记录成本、人工返工、性能和 asset state decision。
9. 三件资产完成或触发 stop condition 后做 Producer / Art / TA / QA 复盘。

## 6. 通过标准

试点整体通过需要：

- 三件资产中至少两件达到 `Approved for readable-prototype`。
- 参考视角、玩法视角和两个 orbit views 均有证据。
- 45 度战术镜头下能识别轮廓、朝向、阵营/交互状态和尺度。
- 关键部件是真实结构，不只由投影贴图或正面薄片伪装。
- 运行时层级能满足每件资产预先定义的交互需求。
- TypeScript、production build 和 browser smoke 通过。
- WebGL 2 fallback 可用；WebGPU 方向不掩盖 fallback 问题。
- 没有未处理 console error、blank canvas、missing asset 或资源释放问题。
- 每件资产都有 provenance、cost、human edit、review 和 validation 记录。
- 至少记录一次明确的 `continue`、`refine-*`、`switch-tool` 或 `stop` 决策依据。

## 7. 成本与停止条件

具体数字在执行评审时填写，未填写前不得运行：

- 每件资产最大生成轮数：TBD。
- 每件资产最大 token：TBD。
- 每件资产最大服务费用：TBD。
- 每件资产最大运行时间：TBD。
- 每件资产最大人工修改时间：TBD。

立即停止条件：

- 输入授权或第三方上传边界不清。
- 关键结构连续两轮没有改善。
- 生成成本超过批准上限。
- 玩法视角下仍不可读。
- 资产导致不可接受的 draw call、内存、加载或 fallback 问题。
- 工具版本漂移使结果不可复现。

## 8. 预期证据结构

执行获批后，建议在 Grey Tide 仓库中使用隔离目录：

```text
docs/evidence/creative-ai-pilot/
  inputs/
  briefs/
  provenance/
  comparisons/
  reviews/
  validation/
src/mech-slg/render/procedural-assets/
```

这是建议结构，不是当前已创建结构。最终路径必须以 Grey Tide 执行计划 review 为准。

## 9. 试点后的决策

复盘只能选择：

- `adopt-for-threejs-hard-surface`
- `continue-limited-pilot`
- `compare-mesh-native-tools`
- `manual-or-kitbash-preferred`
- `reject-adapter`

无论结果如何，都不得从三件原型资产直接推导角色、完整场景或跨引擎正式生产能力。
