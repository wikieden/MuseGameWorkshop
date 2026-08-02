# Unity Production Workflow / Unity 正式制作工作流

版本：v0.9.4

语言：中文

## 1. 目的与基线

v0.9.4 为 Muse Game Workshop 增加 Unity 最终生产目标工作流。默认产品基线为 Unity 6，但每个项目必须从项目文件记录并遵循 exact editor version / 精确编辑器版本；“Unity 6”不能替代可复现的版本证据。

本工作流从 `production-target-contract.zh.md` 读取首个可玩版本目标、最终生产目标、平台、输入、资产、测试、打包、证据和交接要求。Unity 可以同时是 First Playable Target / 首个可玩版本目标与 Final Production Target / 最终生产目标，也可以只承担其中一个。

## 2. Project Record / 项目记录

Unity 项目进入实现前至少记录：

- Unity major、exact editor version、revision 或可获得的安装标识。
- Render pipeline / 渲染管线及版本。
- 目标平台、Scripting Backend、API Compatibility Level 和 build architecture。
- Package Manager 依赖、锁定状态、私有 registry 和 license 风险。
- Input、UI、测试框架、Addressables 或替代资产加载方案的决定。
- 本地与 CI 的编辑器路径解析方式；不得把个人绝对路径提交为共享真源。

精确版本应以 `ProjectSettings/ProjectVersion.txt` 和项目实际记录为准。若 editor 不可用，只能报告文件声明，不能声称该版本已成功打开项目。

## 3. 目录和所有权边界

| 区域 | 所有权 |
|---|---|
| `Assets/` | 游戏代码、场景、prefab、ScriptableObject 数据、项目测试和项目拥有的资产。 |
| `Packages/` | `manifest.json`、lock 记录、嵌入/本地 package 和 package 依赖决定。 |
| `ProjectSettings/` | Unity 版本相关项目设置、输入/图形/质量/平台配置和编辑器可序列化设置。 |
| `UserSettings/` | 用户本地偏好；除非团队明确批准，不作为共享生产配置。 |
| `Library/`, `Temp/`, `Logs/`, `obj/` | 可再生成或本地产物，不作为源文件提交。 |
| Build output / 构建输出 | 放在项目源目录之外或批准的 artifact 目录，由 CI 和发布记录管理。 |

保留 gameplay、UI、editor tooling、assets、tests 和 release scripts 的责任边界。不要把所有代码堆进单一 `Scripts/` 层级后失去模块所有权。

## 4. Assembly Definition / 程序集定义

使用 `.asmdef` 建立编译、依赖和测试边界：

- Runtime assembly：运行时代码，不引用 `UnityEditor`。
- Editor assembly：只在 Editor 平台编译，拥有导入、菜单、构建和验证工具。
- Test assembly：分别承载 EditMode 与 PlayMode 测试。
- Feature/domain assembly：仅在模块规模和依赖收益足够时拆分。

要求：

- 依赖方向清楚，无循环引用。
- Editor-only API 不泄漏到 player build。
- 测试程序集通过 assembly reference 访问被测代码。
- 不为每个文件创建 `.asmdef`；边界服务于增量编译、所有权和可测试性。

## 5. 数据与 ScriptableObject

ScriptableObject 适合设计师可编辑的静态定义、参数集、目录和配置资产，但不是所有运行时状态的默认容器。

必须区分：

- Authoring data / 制作数据：ScriptableObject 或导入后的只读定义。
- Runtime state / 运行时状态：由明确的 session、simulation 或 save model 拥有。
- Save data / 存档数据：使用有版本的可序列化 schema，不依赖编辑器对象引用作为唯一身份。
- Remote or generated data / 远端或生成数据：经过校验、版本和 fallback 合同后进入运行时。

禁止在 PlayMode 中意外修改 production ScriptableObject 资产并把修改当作可靠存档。可调值必须有设计意图、默认值、范围、单位和验证方法。

## 6. Input System

新工作以 Unity Input System 为默认输入层，并记录 package 版本与项目启用方式。输入规格需要：

- Action Map、Action、binding、control scheme 和 device matrix。
- Gameplay、UI、菜单、暂停和调试输入的所有权。
- 重绑定、冲突、持久化和恢复默认值。
- 设备热插拔、焦点丢失、多人配对和 unsupported device 行为。
- 键鼠、手柄、触控和辅助输入的批准范围。

玩法代码应消费语义动作，不直接把具体按键当作机制规则。

## 7. uGUI 与 UI Toolkit 决策

项目必须记录选择，而不是默认混用：

| 方案 | 适合重点 | 必须验证 |
|---|---|---|
| uGUI | 运行时 HUD、World Space UI、成熟 prefab/动画工作流 | Canvas rebuild、布局、分辨率、输入导航和性能。 |
| UI Toolkit | 结构化 UI、样式系统、编辑器工具，以及经目标版本验证的运行时界面 | 目标平台功能支持、复杂交互、文本、本地化和运行时性能。 |
| Hybrid / 混合 | 两者有清楚的产品与技术边界 | 输入焦点、视觉一致性、事件桥接、维护成本和测试所有权。 |

选择记录至少包含用户流程、目标平台、团队经验、可访问性、本地化、性能和工具链理由。

## 8. 场景、Prefab 与运行时结构

- Scene 负责可组合环境和启动边界，不承载所有全局逻辑。
- Prefab 变体需要可读的继承规则，避免深层 override 难以 review。
- MonoBehaviour 负责 Unity 生命周期与视图/平台桥接；纯规则和数值尽量保持可独立测试。
- 全局 service、DontDestroyOnLoad 对象和静态状态需要明确生命周期与重置测试。
- 场景切换、异步加载、失败恢复和退出行为纳入 PlayMode 与 build validation。

## 9. 测试层级

| 层级 | 验证目标 |
|---|---|
| EditMode | 纯 C# 规则、数据校验、序列化、导入器和不需要 player loop 的编辑器逻辑。 |
| PlayMode | MonoBehaviour 生命周期、Scene/Prefab、物理、Input、UI、加载和玩家流程。 |
| Build Validation | Player 构建能启动、进入目标场景、完成 smoke flow、写日志并正常退出。 |
| Visual/Performance | Game View 或真实构建截图、Profiler/性能记录、目标设备预算和长时稳定性。 |

EditMode 通过不能替代 PlayMode；PlayMode 通过不能替代 player build。每层未运行时必须明确标记 `Not Run / 未运行`，不能折算为通过。

## 10. Batchmode 命令模式

命令中的 Unity 可执行文件、项目路径、平台和结果路径由本地或 CI adapter 注入。推荐模式：

```text
<Unity> -batchmode \
  -projectPath <ProjectPath> \
  -runTests -testPlatform EditMode \
  -testResults <EditModeResults.xml> \
  -logFile <EditMode.log>

<Unity> -batchmode \
  -projectPath <ProjectPath> \
  -runTests -testPlatform PlayMode \
  -testResults <PlayModeResults.xml> \
  -logFile <PlayMode.log>

<Unity> -batchmode -nographics -quit \
  -projectPath <ProjectPath> \
  -executeMethod <BuildEntryPoint> \
  -buildTarget <Target> \
  -logFile <Build.log>
```

`<BuildEntryPoint>` 必须是项目拥有、可 review 的 Editor build method，并负责明确 build scenes、output path、version、options 和失败退出码。具体 Unity 版本的命令参数必须在项目中验证，不能只因命令启动就判定成功。

`-runTests` 模式应让 Unity Test Framework 完成测试并写出结果，不沿用 build command 的 `-quit` 假设。只有确认测试不依赖渲染时才增加 `-nographics`；视觉、GPU、Game View 或图形相关 PlayMode 测试需要图形可用的 worker。退出行为、结果 XML 与 process exit code 必须按项目锁定的 Test Framework 版本验证。

## 11. MCP 与 Editor Automation

MCP、Editor scripting、menu command、custom window 或其他自动化均为 optional adapter / 可选适配层，不是 Unity 工作流的前置依赖。

自动化只能执行已批准的任务包，并返回：

- 打开的精确项目与 editor version。
- 修改的 Scene、Prefab、asset、script 和 setting。
- Console、compile、test 和 build 结果。
- Game View 或 player build 截图/录像。
- 失败、部分完成、undo/rollback 和人工 review 结论。

自动化可提高执行效率，但不能绕过 Unity 序列化、版本控制、人工视觉 review 或 Release Gate。

## 12. 未安装 Editor 时的证据边界

当环境没有可执行的 Unity Editor 时，可以证明：

- 目录和文本文件存在。
- `ProjectVersion.txt` 声明的版本。
- `Packages/manifest.json` 与 lock 数据可解析。
- C#、`.asmdef`、YAML 和设置文件的静态结构检查结果。
- 计划命令、预期产物和缺失依赖。

不能证明：

- 项目能被目标 Editor 成功打开或升级。
- 脚本、shader、Scene、Prefab 或 asset 能成功导入/编译。
- EditMode 或 PlayMode 测试通过。
- Player build 成功、可启动或性能达标。
- Game View、目标设备或 release candidate 的视觉正确性。

报告必须写 `Blocked: Unity Editor unavailable` 或同等明确状态，并保留待执行验证清单。文件存在不是运行证据。

## 13. Package、Evidence 与 Handoff

发布证据至少包含：

- exact editor version、package lock、源提交和构建编号。
- EditMode、PlayMode 与 build validation 结果和日志。
- 目标平台设置、构建命令、产物 hash/标识和启动 smoke 结果。
- 性能、内存、加载、分辨率、输入、UI 和可访问性记录。
- 资产来源、license、导入设置、平台披露和人工 review。
- 已知问题、回滚版本、发布负责人决定和后续维护 owner。

若从 Three.js、Godot 或 Unreal 的首个可玩版本迁入 Unity，交接以行为、数据、资产和参考测试为准，不把原运行时目录直接当作 Unity 架构。

## 14. v0.9.4 范围、交付物与禁止范围

v0.9.4 交付：

- `unity-workflow.zh.md` 与 `unity-workflow.en.md`。
- Unity 6 基线与 exact version 合同。
- 项目结构、程序集、数据、输入、UI、测试、batchmode、automation 和证据边界。

v0.9.4 不批准：

- 创建、升级或迁移 Unity 项目。
- 安装 Unity Hub、Unity Editor、packages、MCP 或插件。
- 修改 Scene、Prefab、ScriptableObject、ProjectSettings 或资产。
- 生成 player build、生产资产或 release candidate。
- 接入真实 telemetry、商业 backend、支付、广告或 LiveOps。

## 15. 验收与下一版本

文档验收要求：

- Unity 6 与项目精确版本责任清楚。
- `Assets/`、`Packages/`、`ProjectSettings/` 和生成目录边界明确。
- `.asmdef`、ScriptableObject、Input System 和 UI 决策可执行。
- EditMode、PlayMode、build validation 与 batchmode 模式完整。
- MCP/editor automation 为可选适配层。
- 未安装 Editor 时不会产生虚假运行证据。
- 禁止范围和人工 Release Gate 清楚。

v0.9.4 完成后，下一计划版本仍为 v0.10 Telemetry & Playtest Analytics / 数据埋点与试玩分析。v0.10 应定义事件 schema、playtest 分析和调优决策记录；它不自动批准 Unity Analytics、第三方 SDK 或真实用户数据采集。
