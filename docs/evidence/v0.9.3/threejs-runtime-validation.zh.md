# Three.js Runtime Validation / 运行时验证

Version: v0.9.3

Language: Chinese

Validation Status: PASS for automated unit, build, and browser scope

## 验证分层

| 层级 | 预期命令或流程 | 当前状态 | 验收规则 |
|---|---|---|---|
| Static contract / 静态契约 | `tools/checks/check-v0.9.3-threejs-runtime` | PASS | 必需文件与 meaningful tokens / 关键语义标记通过。 |
| Unit tests / 单元测试 | `npm test` | PASS：1 个文件、5 条测试 | 依赖已安装时必须通过。 |
| Production build / 生产构建 | `npm run build` | PASS：转换 11 个 modules | 依赖已安装时必须通过。 |
| Browser automation / 浏览器自动化 | `npm run test:e2e` | PASS：4 条 Chromium 测试 | 已配置浏览器可执行文件存在时必须通过。 |
| Manual browser playtest / 人工浏览器试玩 | 浏览器矩阵检查表 | Not Run / 未运行 | 必须完成检查表并经过人工 review。 |

## 环境证据

- Project / 项目：`examples/threejs-boss-rush/`
- Package manager contract / 包管理契约：npm 与提交到仓库的 lockfile。
- Renderer contract / 渲染器契约：WebGPU 制作方向与 WebGL 2 fallback。
- 浏览器证据必须记录实际浏览器、renderer、viewport、console 状态和测试结果。
- 执行日期：2026-08-02。
- Runtime：Node.js v24.16.0 与 npm 11.13.0。
- 已安装测试与构建栈：Three.js 0.180.0、Vitest 3.2.7、Vite 7.3.6、TypeScript 5.9.3 与 Playwright 1.62.1。
- Browser projects：1440 x 900 desktop Chromium 与 412 x 915 mobile Chromium。

## 失败与跳过策略

- `node_modules` 存在时，unit 或 build 失败属于阻塞。
- 已配置的 Playwright 浏览器可执行文件存在时，browser test 失败属于阻塞。
- 缺少依赖安装或浏览器可执行文件时，只能跳过该不可用运行层；不能把已安装但失败的项目变成 PASS。
- Static contract validation 在所有环境中都必须执行。

## 最终结果

- `tools/checks/check-v0.9.3-threejs-runtime`：PASS，包含 unit、build 与 browser 执行。
- `npm test`：PASS，5/5 条 simulation tests 通过。
- `npm run build`：PASS。Vite 报告非阻塞 warning：minified JavaScript chunk 为 505.31 kB，超过 500 kB；gzip 后为 129.36 kB。Code splitting / 代码拆分保留为后续性能任务。
- `npm run test:e2e`：PASS，desktop 与 mobile Chromium 共 4/4 条测试通过，覆盖非空响应式渲染、键盘输入驱动模拟状态变化、闪避 stamina 消耗与 restart 恢复。
- `npm audit --omit=dev` 与 `npm audit`：PASS，当前 lockfile 安装结果报告 0 个已知 vulnerabilities。
- Human screenshot review / 人工截图检查：1440 x 900 desktop 与 412 x 915 mobile 截图通过。玩家与 Boss 使用可读低多边形角色代理，不是裸球体/胶囊体占位；已检查截图中 HUD 和触摸控制无重叠。
- Manual interactive browser matrix / 人工交互浏览器矩阵：Not Run / 未运行。本证据不声明人工音频、可访问性、手柄、Safari/Firefox、WebGPU 设备或跨浏览器验收完成。
