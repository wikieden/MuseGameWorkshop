# Unity Validation Status / 验证状态

Version: v0.9.4

Language: Chinese

Workflow Support Status: Complete - static validation passed

Unity Editor Validation Status: Blocked - Unity Editor not installed

## 验证分层

| 层级 | 当前状态 | 通过所需证据 |
|---|---|---|
| 双语文档 | PASS | 必需文档与 contract tokens 已通过 `check-v0.9.4-unity`。 |
| Workflow skill 与 mapping contract | PASS | 必需章节、Unity 边界与模板字段已通过。 |
| Unity 项目导入与编译 | Blocked | 真实 Unity Editor 打开经 review 的项目，且没有 import 或 compile errors。 |
| EditMode tests | Blocked | 来自经 review 项目的 Unity Test Framework EditMode 结果。 |
| PlayMode 与 scene smoke | Blocked | Unity Test Framework PlayMode 结果与 scene launch 证据。 |
| Player build 与启动 | Blocked | 经 review 目标平台的成功构建与启动结果。 |

## Editor 发现

- 当前环境没有经过验证的 Unity Editor 可执行文件。
- `check-v0.9.4-unity` 会检查常见命令名与 Unity Hub 安装位置。
- 缺少 Editor 不会令静态 workflow-support contract 失败。
- 仅发现 Editor 不等于 Editor validation；一旦尝试 smoke 就必须通过。
- 2026-08-02，`tools/checks/check-v0.9.4-unity` 报告 static PASS，并输出 `Unity Editor unavailable; editor smoke remains BLOCKED`。

## 声明边界

Static PASS 后允许声明：v0.9.4 Unity 文档与工作流支持完成。

保持 Blocked 时不允许声明：Unity 项目可导入、可编译、通过 EditMode 或 PlayMode、可启动 scene，或可生成有效 player build。

## 下一步

安装或提供批准的 Unity Editor 与经 review 的 Unity 项目，然后依次运行 editor smoke、EditMode tests、PlayMode tests、目标平台 build 与 player launch，完成后才可更新这些 blocked claims。
