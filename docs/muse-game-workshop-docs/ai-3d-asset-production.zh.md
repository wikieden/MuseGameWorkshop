# AI 3D Asset Production Contract / AI 3D 资产生产契约

版本：Creative AI Production Pilot / 创意 AI 生产试点

语言：中文

## 1. 目的

本契约定义 AI-assisted 3D asset / AI 辅助 3D 资产从玩法需求到引擎验证的共享交付边界。它服务程序化 Three.js、传统 mesh、人工建模、Blender、商业 AI 3D 服务和后续引擎适配，不绑定 `img2threejs` 或任何单一工具。

本契约解决五个问题：

1. 为什么需要这个资产。
2. 输入参考和输出是否有合法、可追溯的来源。
3. 资产是否从多个玩法视角成立。
4. 资产是否具备进入目标运行时所需的结构和性能。
5. 资产失败时如何修正、换工具或回退，而不是无限生成。

## 2. 角色

| 角色 | 中文行业叫法 | 决策责任 |
|---|---|---|
| Producer | 制作人 | 资产范围、成本上限、版本状态和停止条件 |
| Art Director | 美术总监 / 主美 | 视觉方向、资产家族、轮廓和拒绝标准 |
| Game Designer | 游戏策划 | 玩法用途、交互状态和镜头可读性 |
| 3D Artist | 3D 美术 | 结构、比例、材质、人工修改和源文件 |
| Technical Artist | 技术美术 | pivot、socket、rig、LOD、碰撞、shader、导入和性能 |
| Gameplay Programmer | 玩法程序 | runtime hierarchy、状态映射、交互和破坏接口 |
| QA / Playtest | 测试 / 试玩 | 多视角、玩法镜头、设备和回归验证 |
| Release Manager | 发布负责人 | 授权、AI 披露、平台和发布包资格 |

AI tool 是生产工具，不是资产 owner、review owner 或发布批准人。

## 3. 资产状态

| 状态 | 中文叫法 | 允许用途 |
|---|---|---|
| `reference-only` | 仅作参考 | 美术预研，不进入运行时 |
| `structural-placeholder` | 结构占位资源 | blockout、碰撞和尺寸验证 |
| `readable-prototype` | 可读原型资源 | 内部试玩和玩法验证 |
| `reviewed-demo` | 已评审 Demo 资源 | 批准的外部演示、截图和试玩 |
| `release-candidate` | 发布候选资源 | 完整授权、技术和平台检查后进入候选包 |
| `needs-revision` | 需要修改 | 保留证据，修正后重新评审 |
| `rejected` | 已拒绝 | 不得进入项目或发布包 |

工具原始输出默认最多进入 `readable-prototype`，不能自动升级为 `reviewed-demo` 或 `release-candidate`。

## 4. 输入契约

每个生产任务开始前必须具备：

- Asset ID / 资产 ID。
- 玩法或 UX 目的。
- 已批准 Art Direction / 美术方向或明确的原型视觉基线。
- Asset Brief / 资产需求说明。
- 资产状态目标。
- 目标运行时和交付形态：Three.js code、GLB、glTF、FBX、Blender source 或 undecided。
- 玩法镜头、尺度、阵营、朝向和状态可读性要求。
- 输入参考清单、ownership / 所有权、license / 授权和允许的使用范围。
- 多视图需求和不可见区域处理策略。
- triangle、draw call、material、texture、memory、LOD 和 collision 等预算；未知时必须标记待技术美术确认。
- 时间、token、服务费用和人工返工上限。
- Review Owner / 评审负责人和 Stop Condition / 停止条件。

缺少玩法目的、参考授权、目标状态或 review owner 时，不得开始生成。

## 5. 工具适配器契约

每个 Creative Tool Adapter / 创意工具适配器必须说明：

- 工具、版本、安装方式和可重复调用入口。
- 输入是否上传到第三方服务及其保留策略。
- 输出格式、源文件、可编辑程度和专有格式风险。
- 可获取的 seed、prompt、model、settings、usage 和 cost evidence。
- 对角色、硬表面、场景、材质、动画、rig、LOD、碰撞和导出的能力边界。
- 失败、超时、限额、版本漂移和服务不可用时的回退方式。
- 哪些验证由脚本执行，哪些必须由人类或具备视觉能力的 AI 辅助执行。

适配器不得更改上游 Asset Brief，也不得自行批准资产状态。

## 6. 生产与评审流程

```text
art-direction
  -> asset-brief
  -> reference and license admission
  -> tool adapter selection
  -> quality contract and cost ceiling
  -> blockout / structural pass
  -> form / material / surface passes
  -> human edit
  -> provenance record
  -> multi-view asset review
  -> technical-art validation
  -> engine integration
  -> gameplay-camera playtest
  -> approved state / needs revision / rejected
```

每轮只能选择一个 next action：

- `continue`
- `refine-brief`
- `refine-spec`
- `refine-asset`
- `request-input`
- `switch-tool`
- `stop`

## 7. 多视角质量门

非平面 3D 资产不能只凭参考视角通过。至少需要：

- Reference View / 参考视角。
- Gameplay View / 玩法镜头视角。
- Orbit View A / 侧前或侧后视角。
- Orbit View B / 能暴露厚度、背面或连接关系的视角。

评审必须覆盖：

- silhouette、proportion、scale。
- facing、faction、role 和交互状态。
- 关键部件是否真实存在，而不是只靠贴图伪装。
- 接缝、悬空部件、穿插、薄片和退化视图。
- 材质分区、色彩、roughness、metalness 和灯光依赖。
- pivot、socket、collider、destruction group 或 rig 接口。
- 玩法镜头距离下的可读性。
- 性能预算和 fallback 表现。

全局相似度不能覆盖关键部件或玩法可读性的失败。

## 8. 交付契约

每个候选资产必须交付：

- Asset Brief。
- Input Reference Manifest / 输入参考清单。
- Production Spec / 生产规格。
- Tool/Model/Prompt/Settings 记录。
- Human Edit Notes / 人工修改记录。
- Source Deliverable / 源交付物。
- Runtime Deliverable / 运行时交付物。
- Multi-view Review / 多视角评审。
- Technical Validation / 技术验证。
- Cost Record / 成本记录。
- License And Disclosure Decision / 授权与披露判断。
- Asset State Decision / 资产状态决定。

程序化 Three.js 资产还必须交付 factory API、runtime hierarchy、dispose strategy、renderer compatibility 和 draw-call/material 统计。

Mesh 资产还必须交付 topology、UV、texture channels、scale、orientation、pivot、LOD、collision、rig/animation compatibility 和目标引擎导入记录。

## 9. 引擎验证

| 目标 | 最小验证 |
|---|---|
| Three.js Web | TypeScript/build、WebGPU/WebGL 2 fallback、加载、dispose、draw call、材质、浏览器多视角和玩法镜头 |
| Unity | 导入日志、scale/pivot、Prefab、material、collider、LOD、EditMode/PlayMode 和 player build |
| Unreal | import report、Actor/Component、material instance、collision、LOD/Nanite decision、PIE 和 packaging |
| Godot | glTF/import settings、Scene、material、collision、animation、test scene 和 export smoke |

没有目标运行时的真实验证时，只能标记 `validation-pending`，不能宣称 engine-ready。

## 10. 成本与停止规则

试点和正式生产都必须预先定义：

- 最大生成轮数。
- 最大 token 或服务费用。
- 最大等待时间。
- 最大人工修正时间。
- 最低可接受质量状态。
- 何时改用人工、kitbash、授权资产或其他工具。

超过任意硬上限后必须停止并 review，不允许自动扩大预算。

## 11. 当前边界

Creative AI Production Pilot 只批准研究、契约、skill、模板和 Grey Tide 试点计划。它不批准：

- 安装 `img2threejs` 或其他创意工具。
- 上传参考图到第三方服务。
- 生成、导入或发布任何新资产。
- 修改 Grey Tide 游戏代码。
- 把试点结果升级为发布候选。
- 改变 v0.10、v0.11 和 v0.12 的主版本顺序。
