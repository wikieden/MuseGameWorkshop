# img2threejs 独立调研报告

版本：Creative AI Production Pilot / 创意 AI 生产试点

语言：中文

调研日期：2026-08-02

## 1. 调研结论

`img2threejs` 值得作为 Muse Game Workshop 的首个 Three.js Procedural 3D Adapter / Three.js 程序化 3D 工具适配候选，但不应被当成通用 AI 3D 生产后端。

推荐采用范围：

- Three.js 项目中的硬表面道具、机械部件、武器、箱体、建筑构件和小型场景设施。
- 需要可读 TypeScript、可版本控制规格、pivot、socket、collider 或 destruction group 的原型资产。
- 用一到多张团队自有或已授权参考图做受控重建，并接受隐藏结构需要推断的项目。

暂不推荐采用范围：

- 发布级角色、真实人物相似度、复杂有机生物和完整动画角色生产。
- 把程序化 Three.js 输出直接宣称为 Unity、Unreal 或 Godot 可交付 mesh。
- 批量无人值守生成、未经人工评审的正式资产生产和最终宣传素材。

## 2. 项目定位

`img2threejs` 不是 photogrammetry / 摄影测量、传统 image-to-mesh / 图生网格，也不是资产下载服务。它让 AI coding agent 根据参考图编写程序化 Three.js 模型，并输出：

- `ObjectSculptSpec` JSON。
- 返回 `THREE.Group` 的 TypeScript factory。
- component hierarchy、pivot、socket、collider 和 destruction group 等 runtime hierarchy。
- 各构建 pass 的 render、comparison sheet 和 review history。

项目声明支持 Claude Code、Codex 和 OpenCode。脚本主要使用 Python 3.10+ 标准库，核心机制是“确定性脚本执行规则，模型执行视觉判断”。

## 3. 工作流结构

```text
reference intake
  -> suitability and provenance check
  -> pre-spec assessment and quality contract
  -> ObjectSculptSpec
  -> strict-quality validation
  -> blockout
  -> structural pass
  -> form refinement
  -> material and surface passes
  -> lighting and interaction passes
  -> optimization
  -> multi-view render and comparison review
  -> continue / refine-spec / refine-code / request-input / stop
```

最值得 Muse 借鉴的不是“图生 3D”宣传，而是以下机制：

1. 在生成代码前建立 quality contract / 质量契约。
2. 逐 pass 解锁，失败时只修规格或当前实现，不重做全部模型。
3. 用 side-by-side comparison sheet / 并排对比图交付单轮视觉证据。
4. 把全局分数与关键部件门槛分开，避免整体相似掩盖关键结构错误。
5. 显式记录不可见区域、推断区域和 approximation / 近似项。
6. 输出可 diff 的规格和代码，便于 AI coding tools、程序和技术美术共同审查。

## 4. 与游戏生产的匹配度

| 资产类型 | 适配度 | 说明 |
|---|---|---|
| 箱体、掩体、机械道具 | 高 | 轮廓清楚，容易拆为部件，适合碰撞和破坏层级 |
| 武器、机甲模块 | 高 | 硬表面、pivot、socket 和可替换部件与输出结构匹配 |
| 建筑构件、小型场景设施 | 中高 | 可用于程序化场景，但需控制 draw call、重复结构和材质 |
| 完整机甲 | 中 | 可以原型化，但复杂度、成本、动画接口和多视图要求明显上升 |
| 角色、脸部和服装 | 低到中 | 当前更适合风格化重建，不能当作发布级角色管线 |
| 大型自然场景、植被和地形 | 低 | Environment Update 仍在项目未来路线中 |
| Unity、Unreal、Godot 最终资产 | 低 | 当前真源是 Three.js 代码；跨引擎 exporter 仍属于未来计划 |

## 5. 本次技术核验

本次调研在 2026-08-02 拉取仓库最新 `main`：

- Commit：`acd252c`。
- `SKILL.md` 标记版本：`1.4.3`。
- Python 文件：78。
- 测试相关文件：27。
- 执行项目推荐命令 `python3 forge/tests/test_pipeline.py`。
- 结果：56 tests passed，耗时约 21.7 秒。

这证明核心规格、生成器和 gate 具备自动测试基础，但不证明任意参考图都能生成生产可用资产。视觉质量仍依赖输入、AI 模型、人工判断、浏览器渲染和多轮修正。

## 6. 用户反馈信号

公开社区反馈目前是早期、非结构化证据，只能用于风险判断：

- 正向案例集中在建筑、城市构件、武器和其他硬表面对象。
- 有 Codex 用户认为结果优于自己此前的 Blender MCP 尝试，但仍经历约半天人工调校。
- 负向反馈集中在角色质量、长时间循环和较高 token 成本。
- 公开案例出现约 240k tokens 的单资产消耗，也有人报告简单资产成本仍偏高。

因此 Muse 试点必须记录模型、token、时间、返工次数和最终评审结果，不能只展示最好看的输出。

## 7. 授权、隐私与来源

- 开源仓库使用 Apache License 2.0；采用时仍需保留许可证和第三方声明。
- 开源代码许可不等于输入参考图、投影纹理或最终资产自动拥有商用权。
- Hosted converter / 托管转换器可能把参考图发送到服务端、OpenRouter 和下游模型；内部概念图和未公开 IP 必须先做数据边界审查。
- Muse 默认优先本地 skill workflow，并逐资产记录 reference ownership、tool/model、prompt、settings、human edits、output license 和 disclosure risk。
- 对受保护游戏武器皮肤、商标产品或真实人物的重建不能因为技术上可行就进入 Muse 示例或发布资产。

## 8. Muse 适配决策

采用方式：adapter candidate / 工具适配候选，而不是 core dependency / 核心依赖。

Muse 保留这些职责：

- Art Direction / 美术方向。
- Asset Brief / 资产需求说明。
- 输入来源和授权准入。
- 资产状态、成本预算和人工负责人。
- 多视角玩法可读性评审。
- 引擎集成、性能和发布判断。

`img2threejs` 适配器只负责：

- 参考图到程序化 3D 规格和 Three.js factory 的受控生产。
- 分阶段构建状态。
- 工具内部对比图和 review record。
- runtime hierarchy 候选输出。

如果工具不可用、版本漂移、成本超限或输出失败，Muse 项目必须能切换到人工建模、Blender、mesh-native AI 工具、kitbash 或现有授权资产，而不重写上游 brief 和验收标准。

## 9. 建议验证顺序

1. 先用 Grey Tide 的简单港口箱体验证完整交付链。
2. 再验证带 pivot/socket 的机甲武器或肩部模块。
3. 最后验证中型港口机械设施和重复结构优化。
4. 三件资产完成后再决定是否研究完整机甲、环境或 mesh-native adapter。

本轮不安装工具、不生成资产、不修改 Grey Tide 代码。试点执行需要单独的 review approval。

## 10. 参考资料

- Repository and README: https://github.com/img2threejs/img2threejs
- Architecture: https://github.com/img2threejs/img2threejs/blob/main/docs/ARCHITECTURE.md
- Roadmap: https://github.com/img2threejs/img2threejs/blob/main/ROADMAP.md
- License: https://github.com/img2threejs/img2threejs/blob/main/LICENSE
- Codex experiment feedback: https://www.reddit.com/r/aigamedev/comments/1v169hl/img2threejs_and_codex_experiments/
- Community cost and character feedback: https://www.reddit.com/r/StableDiffusion/comments/1v4jd0a/img2threejs_rebuild_the_object_in_a_reference/
