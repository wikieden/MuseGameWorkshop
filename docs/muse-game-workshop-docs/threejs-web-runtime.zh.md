# Three.js Web Production Runtime / Three.js 网页生产运行时

版本：v0.9.3

语言：中文

## 1. 定位

本文件定义 Three.js 作为 Muse Game Workshop 最终 Web 生产目标时的制作工作流。默认技术基线为 TypeScript + Vite + Three.js，图形目标为 WebGPU，并提供经过明确测试的 WebGL2 fallback / 回退路径。

Three.js 提供渲染与 Web 平台组合能力，不提供完整游戏引擎的全部编辑器、资产数据库、场景制作、输入、存档、测试和发布管理。项目必须显式拥有这些责任。这种差异不降低它作为正式生产运行时的地位。

## 2. 适用条件

优先考虑 Three.js Web production runtime / 网页生产运行时，当项目需要：

- URL 即开即玩、Web 分发或嵌入现有网页产品。
- 与 DOM、Web API、网页 UI、账号或内容系统深度组合。
- 团队以 TypeScript 和 Web 工程为主要能力。
- 自定义渲染、交互展示、轻量到中型 3D 游戏或网页优先体验。
- 可由浏览器自动化重复验证的发布流程。

在选择前必须评估：目标设备图形能力、内存预算、长时间运行、移动端热量与电量、资源下载、离线需求、浏览器策略、输入法、隐私和托管成本。

## 3. 推荐工程边界

```text
src/
  simulation/   # 规则、状态、时钟、随机性、存档语义
  data/         # schema、配置、内容定义、校验
  input/        # DOM/Pointer/Keyboard/Gamepad 到玩家动作
  renderer/     # Three.js scene、camera、materials、effects
  ui/           # DOM 或 canvas UI，不拥有玩法规则
  platform/     # lifecycle、storage、audio、capabilities
  app/          # composition root、场景流和依赖装配
tests/
  unit/
  integration/
  browser/
public/         # 仅放需要原样发布的静态文件
```

目录名称可以调整，但责任边界必须保留。

### 3.1 Simulation / 模拟

- 模拟层不直接依赖 Three.js object、material、camera 或 DOM element。
- 使用明确的 fixed-step / 固定步长或 documented variable-step / 有文档的可变步长策略。
- 暂停、慢放、失焦、恢复、随机种子和存档行为可测试。
- 数据变更通过 command/event/state 或同等可观察合同进入渲染与 UI。

### 3.2 Renderer / 渲染

- Renderer 读取模拟快照或事件，不成为玩法状态真源。
- 相机、光照、材质、后处理、LOD、实例化和资源释放有独立预算。
- resize、device pixel ratio、context/device loss 与重建路径有测试。
- 不把帧率当作玩法时钟。

### 3.3 UI / 用户界面

- DOM UI 适合菜单、设置、复杂文本、本地化和无障碍；canvas UI 适合与场景强绑定的 HUD。项目必须记录选择或混合边界。
- UI 只通过应用合同发出玩家意图并读取 view state / 视图状态。
- 键盘、鼠标、触控、手柄、焦点顺序、缩放和屏幕阅读器边界需按目标受众验收。

## 4. TypeScript 与 Vite 基线

- 启用严格 TypeScript 规则，并记录无法启用的例外。
- 锁定包管理器和依赖版本；提交 lockfile。
- 开发、测试、预览和生产构建使用可重复脚本。
- 环境变量必须区分可暴露给客户端的值与 secrets / 密钥；密钥不得进入浏览器 bundle。
- chunk、source map、asset hashing、base path、缓存和 CDN 行为必须由发布配置决定。
- 第三方包需要维护性、license、bundle size 和浏览器兼容评审。

## 5. WebGPU 主目标与 WebGL2 回退

WebGPU 是图形主目标，WebGL2 是兼容回退，不是未经测试的应急开关。

启动时应完成 capability detection / 能力检测，并把结果映射到已批准的能力层级：

| 层级 | 运行时 | 预期 |
|---|---|---|
| Tier A | WebGPU | 完整目标画质与性能预算。 |
| Tier B | WebGL2 | 保留核心玩法和 UI，可按批准矩阵降低材质、光照、粒子、后处理或单位密度。 |
| Unsupported | 不满足最低能力 | 显示可理解的阻塞信息，不进入损坏或空白场景。 |

必须记录：

- WebGPU 与 WebGL2 的 feature parity / 功能一致性矩阵。
- 允许降级的表现功能，以及不得降级的玩法信息。
- renderer 初始化失败、adapter/device/context loss 和恢复策略。
- 浏览器、OS、GPU 和驱动组合的支持与不支持范围。
- 锁定的 Three.js 版本、`WebGPURenderer` 成熟度、已知功能缺口和升级验证计划；不得把自动 fallback 等同于项目功能已完整兼容。

## 6. Browser 与 Canvas 验证

浏览器验收至少覆盖：

- 首屏加载、loading、错误和重试状态。
- canvas 非空白，尺寸、宽高比、DPR 和 resize 正确。
- tab 切换、窗口失焦、暂停/恢复和音频策略。
- 键鼠、触控和手柄的批准组合。
- WebGPU 路径、WebGL2 fallback 和 unsupported 路径。
- 存档、刷新、版本升级、缓存失效和离线边界。
- 控制台 error、unhandled rejection、资源 404 和 shader failure。

Playwright 或同等浏览器自动化应验证关键流程、截图和 canvas 像素非空白。像素检查只能证明画面存在，不能代替视觉 review 或玩法验收。

## 7. 测试与性能

| 层级 | 重点 |
|---|---|
| Unit | 模拟规则、状态转换、数据校验、随机种子和存档转换。 |
| Integration | 输入到 command、simulation 到 view state、资源加载和场景流。 |
| Browser | 启动、核心流程、UI、canvas、fallback、存储和生命周期。 |
| Visual | 关键相机、可读性、HUD、目标分辨率和降级差异。 |
| Performance | frame time、CPU/GPU 时间、内存、draw calls、资源下载、启动和长时稳定性。 |

性能预算必须按目标设备与场景定义，不使用单一开发机平均 FPS 代替。至少记录冷启动、热启动、代表性高负载场景、1% low 或 frame-time 分布、峰值内存、下载体积和持续运行观察。

## 8. 资产与 Provenance / 来源记录

每个生产资产需要：

- Asset Brief / 资产简报和设计用途。
- 源文件、导出文件、格式、尺寸、压缩、色彩空间和版本。
- tool、model/service、prompt/source description、生成设置与人工修改。
- license、商用范围、署名、平台披露和人工 review 结论。
- 加载路径、fallback、内存/GPU 预算和浏览器验证。

glTF/GLB、纹理、音频、字体、shader 和压缩格式的选择必须来自目标浏览器矩阵。无法证明权利或来源的资产不能进入 release candidate。

## 9. AI Coding Tool 与适配层

Codex、Claude Code、Kimi Code、Kiro、opencode、robocode 和 CliHub 都可以执行同一共享工作流。它们是 adapter / 适配入口，不是项目运行时依赖。

每个工具都必须：

- 读取相同的 Production Target Contract、设计规格和 review 状态。
- 在改代码前报告影响范围和验证计划。
- 使用仓库脚本执行 typecheck、test、build、preview 和 browser validation。
- 返回命令、日志、截图、性能记录和未执行项。
- 不因支持浏览器控制、MCP 或多代理而跳过人工 review。

工具专用 prompt、命令或路由可放在 adapter 文档中，但不得改变共享交付物和证据格式。

## 10. Package 与 Release Gates / 发布门

发布候选至少经过：

1. Dependency Gate：lockfile、license、漏洞与依赖变更已 review。
2. Build Gate：typecheck、测试和 production build 可重复通过。
3. Browser Gate：目标浏览器矩阵、WebGPU、WebGL2 和 unsupported 路径有证据。
4. Experience Gate：输入、UI、音频、存档、错误恢复和可访问性通过。
5. Performance Gate：下载、启动、frame time、内存和长时运行在批准预算内。
6. Asset Gate：来源、权利、压缩、加载和视觉 review 通过。
7. Hosting Gate：base path、headers、MIME、缓存、CDN、HTTPS、回滚和版本标识正确。
8. Human Release Gate：Release Manager / 发布负责人批准可发布版本及已知问题。

## 11. v0.9.3 范围、交付物与禁止范围

本版本交付 Three.js Web production runtime 双语工作流，并把它接入 Production Target Contract。

本文件不批准：

- 创建 Three.js 项目或安装依赖。
- 选择具体游戏的最终生产目标。
- 部署到真实托管环境或发布渠道。
- 生成或导入生产资产。
- 把 WebGL1 当作默认兼容目标。
- 接入真实 telemetry、账号、支付、广告或商业后端。

## 12. 验收与下一版本

文档验收要求：

- TypeScript/Vite 基线明确。
- Simulation、Renderer 与 UI 的所有权分离。
- WebGPU 主目标、WebGL2 fallback 和 unsupported 路径均可测试。
- Browser、canvas、Playwright、性能、资产来源和发布门完整。
- 七类 AI coding tools 均映射到同一共享合同。
- 禁止范围明确，未把 Three.js 限定为原型。

v0.9.4 增加 Unity Workflow / Unity 工作流。之后下一计划版本仍为 v0.10 Telemetry & Playtest Analytics / 数据埋点与试玩分析；v0.10 将定义事件计划和调优证据，不改变本文件的运行时、隐私与发布责任。
