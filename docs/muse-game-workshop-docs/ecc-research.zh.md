# ECC / Everything Claude Code 调研记录

版本：v0.1

语言：中文

调研日期：2026-06-09

状态：研究记录，不是 Muse Game Workshop 的核心规范真源。

## 1. 调研对象

本记录调研 `Everything Claude Code` 项目当前主仓库 `affaan-m/ECC`。旧的 `everything-claude-code` 地址会重定向到 `ECC`。

截至本次调研，ECC 已经从 Claude Code 配置集合演化为一个跨 AI coding harness 的 workflow distribution：

- GitHub source repo：`affaan-m/ECC`
- npm package：`ecc-universal`
- Claude plugin identifier：`ecc@ecc`
- 当前公开包：`2.0.0-rc.1`
- 本地浅克隆观察到的主分支提交：`edebcc89efa09dc2705748151d98286ff3bb6023`

本次调研的目的不是把 ECC 直接引入 Muse，而是提炼它对 Muse Game Workshop 的工具无关架构、skill pack、adapter、验证门和安装边界有什么启发。

## 2. ECC 的核心形态

ECC 的核心主张是：把可复用 agentic workflow 资产作为共享底座，把 Claude Code、Codex、OpenCode、Cursor、Gemini、Zed 等工具视为不同执行表面。

它的 durable workflow units 主要包括：

- `skills/*/SKILL.md`
- `rules/`
- `commands/`
- `hooks/hooks.json`
- `scripts/hooks/`
- MCP reference configs
- install manifests
- session and observability contracts

它的 cross-harness 架构文档明确把 `SKILL.md` 视为最可移植的单元。hooks、commands、tool loading、event shape、platform limits 则通过 harness adapter 处理。

本地浅克隆观察到的规模：

- 64 个 agents。
- 261 个 skills。
- 84 个 legacy command shims。
- 104 个 rule markdown。
- 163 个测试文件。
- 32 个 install modules。
- 76 个 install components。

这些数字说明 ECC 已经是大型 workflow distribution，而不是轻量提示词集合。

## 3. 对 Muse 有价值的模式

### 3.1 共享源文件优先

ECC 最值得借鉴的不是 agent 数量，而是 shared source / adapter edge 的原则。

对 Muse 来说，核心资产应该放在 workflow core：

- workflow skills。
- production templates。
- review gate。
- evidence records。
- provenance contract。
- dry run protocol。
- testing checks。
- terminology and audience strategy。

Codex、Claude Code、Kiro CLI、opencode、Cursor 或其他工具只应该在 adapter layer 处理加载方式、命令入口、hook 能力、文件布局和平台限制。

### 3.2 薄工具适配器

ECC 的 cross-harness 文档强调，如果同一个 workflow 需要编辑三份工具专属副本，说明共享源放错了。

Muse 应采用同样原则：

- 机制规格、核心循环、资产 brief、playtest report 不应被写成某个 AI coding tool 专属格式。
- Claude Code slash command、Codex `AGENTS.md`、Kiro steering/spec、opencode instructions 都只是入口。
- 工具适配器不能改变游戏制作阶段、制作职能、review gate 和 evidence contract。

### 3.3 安装 profile 和 materialization manifest

ECC 使用 install profiles、modules、components 控制安装范围，并提醒用户不要叠加 plugin install 与 manual full install。

Muse 可以借鉴 profile 概念，但应保持游戏制作语境和更小范围：

| Muse profile 草案 | 用途 |
|---|---|
| `docs-only` | 只使用文档包、模板说明和 review gate。 |
| `p0-workflow-pack` | 安装 P0 workflow skills、核心模板和检查入口。 |
| `godot-example` | 在 P0 workflow pack 基础上加入 Godot 示例和验证规则。 |
| `unreal-example` | 在 P0 workflow pack 基础上加入 Unreal 映射示例和验证规则。 |
| `creative-production` | 加入 art direction、asset brief、provenance、review 和 engine validation。 |
| `full-workshop` | 完整 workflow pack，但必须有 dry-run 和 uninstall/readme 边界。 |

这些 profile 不应急着实现；可以先作为 delivery plan 或 adapter spec 的设计输入。

### 3.4 Harness adapter compliance matrix

ECC 的 adapter matrix 把不同工具分成：

- Native。
- Adapter-backed。
- Instruction-backed。
- Reference-only。

Muse 很适合新增类似矩阵，但语言应该面向 game production workflow：

| Tool / Harness | Muse 初步状态 | 说明 |
|---|---|---|
| Codex | Native / current repo surface | 当前 repo 已有 `AGENTS.md`、`.agents/skills/` 和 checks。 |
| Claude Code | Instruction-backed first | 可读 `CLAUDE.md` 和共享 docs，后续再设计 slash commands/hooks。 |
| Kiro CLI | Reference / adapter candidate | 应先映射到 spec/task/steering，不急着实现。 |
| opencode | Reference / adapter candidate | 应先映射 instructions、commands、tool config。 |
| Cursor | Reference / adapter candidate | 可学习 rules/agents/skills 布局，但避免污染项目规则。 |
| Terminal-only | Portability floor | 最小可用路径应始终是 Markdown docs + templates + shell checks。 |

每个 adapter claim 都应该有：

- install or onramp path。
- supported assets。
- unsupported or different surfaces。
- verification command。
- risk notes。
- last verified date。

### 3.5 验证门和发布证据

ECC 把 validation scripts 作为 workflow distribution 的重要组成部分，例如：

- validate agents。
- validate commands。
- validate rules。
- validate skills。
- validate hooks。
- validate install manifests。
- validate no personal paths。
- preview pack smoke。

Muse 可以借鉴这个验证分层，但应改成游戏制作工作流对应项：

- check doc links。
- check zh/en doc pairs。
- check startup prompts。
- check template metadata。
- check skill frontmatter and required sections。
- check evidence record metadata。
- check asset provenance metadata。
- check example project boundaries。
- check no private paths or credentials。
- check adapter matrix claims。

## 4. 不建议 Muse 照搬的部分

### 4.1 不照搬“大量 agents”叙事

Muse 的外部用户是独立游戏开发者和小型游戏团队。对外应该先说制作阶段、制作职能和交付物，而不是展示一堆 agent。

推荐继续使用：

- Producer / 制作人。
- Game Designer / 游戏策划。
- Technical Designer / 技术策划。
- Art Director / 美术指导。
- Gameplay Programmer / 玩法程序。
- QA / 测试。
- Release Manager / 发布负责人。

内部可以保留 workflow skills，但不要把 Muse 包装成虚拟员工集合。

### 4.2 不照搬强 hook runtime

ECC 在 Claude Code、Cursor、OpenCode 等工具上使用 hooks 或 adapter hooks。Muse 早期不应把 hook enforcement 作为默认依赖。

原因：

- 不同 AI coding tools hook 能力不一致。
- hooks 容易造成用户环境污染或重复行为。
- Muse 的核心价值是 game production workflow，不是全局 agent runtime。

Muse 应把 hooks 视为 optional adapter capability，而不是 workflow core requirement。

### 4.3 不照搬 full install 默认路径

ECC 自己也强调不要叠加安装方式。Muse 未来如果做安装器，默认路径应更保守：

- 默认 dry-run。
- 默认最小 profile。
- 清楚列出会创建或修改的文件。
- 不覆盖用户已有规则。
- 提供 uninstall 或 manual cleanup 说明。
- 所有工具专属配置都必须映射回 shared workflow core。

### 4.4 不引入泛工程/运营技能膨胀

ECC 覆盖大量软件工程、运营、内容、研究和商业 workflow。Muse 不应走泛工程大包路线。

Muse 的范围应该保持在：

- game concept。
- core loop。
- mechanic spec。
- engine mapping。
- creative asset pipeline。
- UX / level blockout。
- playtest / QA。
- release readiness。
- Godot / Unreal example conventions。

## 5. Muse 后续可落地的文档任务

本调研建议后续单独评审以下文档，不在本次直接实现：

1. `ai-tool-adapter-matrix.zh.md` / `.en.md`
   - 定义 Codex、Claude Code、Kiro CLI、opencode、Cursor、terminal-only 的支持状态、风险和验证命令。
2. `adapter-profile-spec.zh.md` / `.en.md`
   - 定义 docs-only、p0-workflow-pack、godot-example、unreal-example、creative-production、full-workshop profile。
3. `skill-validation-spec.zh.md` / `.en.md`
   - 定义 workflow skill frontmatter、必需章节、next skills、review gate 和 evidence 检查。
4. `adapter-boundary-guide.zh.md` / `.en.md`
   - 明确哪些内容属于 workflow core，哪些属于 tool adapter layer。

这些任务都需要独立 design summary、execution plan 和 review approval。

## 6. 对当前 Muse 路线的结论

ECC 验证了 Muse 当前方向是合理的：

- workflow core 和 tool adapter layer 应该分离。
- `SKILL.md` 这类文本化 workflow 单元确实是跨工具移植的好基础。
- 安装、适配和自动化必须有 manifest、profile、dry-run 和验证命令。
- 工具无关不等于所有工具能力完全一致；必须诚实标注 Native、Adapter-backed、Instruction-backed 和 Reference-only。

但 Muse 需要保持自己的产品性格：

> Muse Game Workshop 是游戏制作 workflow pack，不是通用 agent operating system。

因此，Muse 应学习 ECC 的工程治理方式，而不是复制 ECC 的规模、命名和全局运行时。

## 7. 参考来源

- ECC repository: https://github.com/affaan-m/ECC
- Cross-Harness Architecture: https://github.com/affaan-m/ECC/blob/main/docs/architecture/cross-harness.md
- Harness Adapter Compliance Matrix: https://github.com/affaan-m/ECC/blob/main/docs/architecture/harness-adapter-compliance.md
- ECC v2.0.0-rc.1 release notes: https://github.com/affaan-m/ECC/blob/main/docs/releases/2.0.0-rc.1/release-notes.md
- npm package: https://www.npmjs.com/package/ecc-universal/v/2.0.0-rc.1
