# Muse Game Workshop Terminology Glossary: Chinese Game Industry Terms

Version: v0.1

Language: English

## 1. Usage Rule

Every core English term in Muse Game Workshop must map to a Chinese term that Chinese game developers can understand. The glossary is the bridge between Chinese and English user experiences; it does not require English-facing docs to repeat Chinese explanations in main prose.

Rules:

- In Chinese-facing docs, use `English / Chinese industry term` on first mention.
- In English-facing docs, keep the main copy natural in English; put Chinese mappings in the glossary, localization notes, or China-market context.
- Later mentions can use the Chinese term, with English kept where useful.
- If Chinese game teams do not share one exact term, use a recommended Chinese term plus common aliases.
- AI workflow terms can keep English names, but must explain their Chinese working meaning.
- Do not rely on literal translation when Chinese game teams already use a more natural term.

Examples:

- `Vertical Slice / 垂直切片`
- `Level Blockout / 关卡灰盒`
- `Asset Provenance / 资产来源与授权记录`
- `Review Gate / 评审节点`

## 2. Production Stages

| English Term | Recommended Chinese Term | Aliases / Notes | Usage |
|---|---|---|---|
| Concept | 概念阶段 | 创意阶段、立项概念 | Direction, player fantasy, and core risks. |
| Pitch | 项目提案 | 一句话卖点、提案稿、立项 pitch | Project proposal for team or greenlight discussion. |
| Pre-production | 预制作 | 预研、前期制作 | Chinese teams often say “预研”; use “预制作” for formal process docs. |
| Prototype | 原型验证 | 玩法原型、Demo 原型 | Low-cost validation of core fun. |
| Demo | 演示版本 | Demo、试玩版、演示包 | Keep Demo for team usage; use 试玩版 for player-facing copy. |
| Vertical Slice | 垂直切片 | 品质样片、小切片、完整体验切片 | A small near-final complete experience chain. |
| Production | 正式制作 | 量产、内容制作阶段 | Chinese teams may say “量产”. |
| Playtest | 试玩测试 | 内部试玩、可玩性测试 | Observe player behavior, not only opinions. |
| Iteration | 迭代 | 调整轮次、版本迭代 | Feedback-driven changes. |
| Polish | 打磨 | 体验打磨、手感打磨、表现打磨 | Improves completion quality rather than adding major scope. |
| QA | 测试 | 质量保证、功能测试、回归测试 | Chinese teams often say 测试 or QA. |
| Release Readiness | 发布准备 | 发行准备、上线准备、提审准备 | Applies to demos, Steam/itch, and platform builds. |
| Release | 发布 | 上线、发版、对外发布 | Choose based on platform context. |
| Postmortem | 项目复盘 | 复盘、阶段复盘 | Do not literally translate as “尸检”. |
| Milestone | 里程碑 | 节点、阶段目标 | Stage acceptance target. |
| Greenlight | 立项放行 | 绿灯、立项通过 | Prefer 立项通过 or 放行 in Chinese docs. |
| Content Lock | 内容锁定 | 内容冻结、范围冻结 | Stop adding content before release. |
| Feature Freeze | 功能冻结 | 功能锁定 | Fix only; no new features. |
| Alpha | Alpha 版本 | 内部功能版 | Optional for small teams. |
| Beta | Beta 版本 | 测试版、外部测试版 | Public or semi-public testing. |
| Gold Master | 母盘版本 | 送审版本、金盘 | More common in console/traditional publishing. |

## 3. Production Disciplines

| English Term | Recommended Chinese Term | Aliases / Notes | Usage |
|---|---|---|---|
| Producer | 制作人 | 项目制作人、执行制作人 | Scope, schedule, risk, milestones. |
| Game Director | 游戏总监 | 项目总监、创意负责人 | Often combined with producer or lead designer in small teams. |
| Creative Director | 创意总监 | 创意负责人 | Overall creative direction. |
| Game Designer | 游戏策划 | 玩法策划、系统策划、关卡策划、数值策划 | Use the specific design discipline when possible. |
| System Designer | 系统策划 | 系统设计 | System rules and modules. |
| Combat Designer | 战斗策划 | 战斗设计 | Useful for action, shooter, ARPG projects. |
| Level Designer | 关卡策划 | 关卡设计 | Level structure, pacing, encounters. |
| Narrative Designer | 叙事策划 | 剧情策划、文案策划 | Chinese teams often say 剧情策划 or 文案策划. |
| Technical Designer | 技术策划 | 玩法技术策划、技术向策划 | Explain as “turns design into implementable specs”. |
| Gameplay Programmer | 玩法程序 | 逻辑程序、客户端玩法程序 | Input, states, interactions, feedback. |
| Engine Programmer | 引擎程序 | 底层程序、引擎专项 | Engine, performance, tooling. |
| Tools Programmer | 工具程序 | 编辑器工具程序 | Editor tooling and automation. |
| Technical Artist | 技术美术 | TA | Materials, VFX, import specs, performance budget. |
| Art Director | 美术总监 | 美术指导、主美 | Chinese teams often say 主美 or 美术总监. |
| Concept Artist | 原画 | 概念设计、角色原画、场景原画 | Prefer 原画 over literal “概念艺术家”. |
| Environment Artist | 场景美术 | 环境美术、地编美术 | Environment assets, terrain, atmosphere. |
| Character Artist | 角色美术 | 角色模型、角色资产 | Character visual assets. |
| Animator | 动作设计 | 动画师、动作美术 | Chinese teams often say 动作 or 动画. |
| VFX Artist | 特效美术 | VFX、特效 | Skill, hit, and environment effects. |
| UI Artist | UI 美术 | 界面美术 | Interface visuals. |
| UX Designer | 交互设计 | UX、用户体验设计 | Menus, flow, usability. |
| Composer | 作曲 | 音乐设计、配乐 | Themes, loops, mood. |
| Sound Designer | 音效设计 | 音效师、声音设计 | Feedback sounds, ambience, mix intent. |
| Audio Implementer | 音频实现 | 音频集成、音频程序 | Audio events, triggers, engine integration. |
| QA | 测试 | QA、测试工程师 | Repro, regression, quality risk. |
| Release Manager | 发布负责人 | 版本负责人、发行对接、上线负责人 | Builds, versions, platform checklist, release risks. |
| Localization Manager | 本地化负责人 | 本地化 PM | Translation, glossary, LQA. |

## 4. Deliverables

| English Term | Recommended Chinese Term | Aliases / Notes | Usage |
|---|---|---|---|
| Player Fantasy | 玩家幻想 | 玩家想象、目标体验 | What the player wants to feel or become. |
| Core Loop | 核心循环 | 核心玩法循环 | 5-second, 30-second, 5-minute, 60-minute loops. |
| Game Pillars | 设计支柱 | 核心支柱、体验支柱 | Avoid literal translation. |
| GDD | 游戏设计文档 | 设计案、策划案 | Small teams can use GDD slices. |
| GDD Slice | 设计案切片 | 局部设计案、玩法设计片段 | Lightweight doc for one mechanic or slice. |
| Mechanic Spec | 机制规格 | 玩法机制说明、规则规格 | Inputs, states, parameters, feedback, edge cases, tests. |
| Content Matrix | 内容矩阵 | 内容表、内容关系表 | Enemies, weapons, levels, rewards, relationships. |
| Progression | 成长线 | 进度、养成、推进曲线 | Choose 成长 or 进度 based on genre. |
| Economy | 经济系统 | 数值经济、资源循环 | Sources, sinks, loops. |
| Balance | 数值平衡 | 平衡性、调参 | Chinese teams often say 数值 or 平衡. |
| Level Blockout | 关卡灰盒 | 白盒、Blockout、灰盒关卡 | Prefer 关卡灰盒. |
| Encounter | 遭遇设计 | 战斗遭遇、关卡事件 | Enemy/obstacle/pacing combinations. |
| Onboarding | 新手引导 | 首次体验、FTUE | Prefer 新手引导. |
| FTUE | 首次用户体验 | First Time User Experience | Use 首次体验 or 新手引导 externally. |
| HUD | HUD | 战斗界面、状态显示 | HUD is acceptable in Chinese teams. |
| Wireframe | 线框图 | UI 线框、低保真界面 | Early UX/UI artifact. |
| User Flow | 用户流程 | 交互流程、操作路径 | Menus, settings, store, tutorials. |
| Art Bible | 美术风格指南 | 美术规范、Art Bible | Art Bible is also common. |
| Moodboard | 情绪板 | 参考板、风格参考板 | Visual direction reference. |
| AI Art Asset Pipeline | AI 美术资产流程 | AI 辅助美术流程 | From art direction, brief, generation, human edit, provenance, and review to engine validation. |
| Asset Brief | 资产需求说明 | 美术需求单、资源需求说明 | Input for artists, AI tools, or outsourcing. |
| Asset List | 资产清单 | 资源清单 | Assets to produce or import. |
| Playtest Report | 试玩报告 | 测试反馈报告、可玩性测试报告 | Observations, issues, hypotheses, next steps. |
| Bug List | Bug 清单 | 问题单、缺陷列表 | QA deliverable. |
| Release Checklist | 发布检查表 | 上线检查表、提审清单 | Pre-demo/platform release checks. |
| Store Page Brief | 商店页素材需求 | Steam 页面需求、商店页 brief | Store copy, screenshots, short description, tags. |
| Trailer Brief | 宣传片需求说明 | 预告片 brief、PV 需求 | PV is common in Chinese game publishing. |
| Postmortem | 复盘报告 | 项目复盘、阶段复盘 | Stage learning artifact. |

## 5. AI Workflow Terms

| English Term | Recommended Chinese Term | Aliases / Notes | Usage |
|---|---|---|---|
| AI-assisted | AI 辅助 | AI 辅助制作、AI 辅助开发 | Avoid implying full automation. |
| AI-native | AI 原生 | AI 工作流原生 | Workflow designed for AI collaboration. |
| Skill Pack | 工作流技能包 | 技能包、workflow skill pack | A reusable set of workflow skills, not a role list. |
| Workflow Skill | 工作流技能 | 流程能力、workflow skill | English skill can remain internally. |
| Tool Adapter | 工具适配层 | 工具适配、适配规则 | Difference layer for Codex/Claude/Kiro/opencode. |
| Review Gate | 评审节点 | 审查门、质量门 | Prefer 评审节点 or 质量门. |
| Quality Gate | 质量门 | 质量检查点 | Gate before entering next stage. |
| Evidence Record | 证据记录 | 验收记录、验证记录 | Screenshots, logs, tests, playtest records. |
| Dry Run | 流程演练 | 空跑、干跑 | Prefer 流程演练, optionally keep dry run. |
| Asset Provenance | 资产来源与授权记录 | 资产溯源、来源记录 | Tool, prompt, reference, license, human edits. |
| Prompt Record | 提示词记录 | prompt 记录 | Generation input record. |
| AI Usage Disclosure | AI 使用披露 | AI 生成说明、平台披露 | Compliance for store/platform release. |
| Content Credentials | 内容凭证 | C2PA 内容凭证 | Verifiable credentials that record media provenance and edit history. |
| C2PA | C2PA 内容来源标准 | Content Credentials standard | Keep the acronym; explain it as a content provenance and authenticity standard. |
| Handoff | 交接 | 交付交接 | Between roles or processes. |
| Deliverable | 交付物 | 产物、交付件 | Prefer 交付物. |
| Delivery Form | 交付形态 | 交付格式、产物形态 | Markdown, table, asset, evidence. |
| Acceptance Gate | 验收门 | 验收节点、接收标准 | Downstream acceptance. |
| Task Package | 任务包 | 执行包、任务说明包 | For AI coding tools or developers. |
| Decision Log | 决策记录 | 决策日志 | Why a decision was made. |
| Doctor Command | 诊断命令 | doctor 检查、环境检查 | Similar to `muse doctor`. |
| Check Command | 检查命令 | 静态检查、质量检查 | Docs/templates/skills checks. |
| Hook | 钩子 | 自动触发器、hook | Keep hook for tool-specific docs. |

## 6. Engine And Technical Terms

| English Term | Recommended Chinese Term | Aliases / Notes | Usage |
|---|---|---|---|
| Engine Mapping | 引擎映射 | 引擎落地映射 | From engine-neutral spec to Godot/Unreal. |
| Engine-neutral Spec | 引擎无关规格 | 通用玩法规格 | Avoid binding to one engine too early. |
| Scene | 场景 | Godot 场景、Unity/Unreal 场景 | Explain per engine context. |
| Node | 节点 | Godot 节点 | Godot-specific. |
| Signal | 信号 | Godot 信号 | Godot-specific. |
| Resource | 资源 | Godot Resource、资源文件 | Distinguish from general art assets. |
| Autoload | 自动加载 | Godot 单例 | Godot project structure term. |
| Blueprint | 蓝图 | Unreal 蓝图 | Unreal common term. |
| Actor | Actor | 角色/场景对象 | Keep Actor for Unreal internals. |
| Component | 组件 | Unreal/Godot 组件 | Explain per engine context. |
| Data Asset | 数据资产 | Unreal Data Asset | Parameters and configuration. |
| UMG | UMG UI | Unreal UI 系统 | First mention as Unreal UMG. |
| Animation Blueprint | 动画蓝图 | AnimBP | Unreal animation system. |
| Animation Montage | 动画蒙太奇 | Montage、动作片段 | Unreal common term. |
| PIE | 编辑器内试玩 | Play In Editor | Keep PIE for Unreal docs. |
| Test Scene | 测试场景 | 验证场景 | Godot/Unity common. |
| Test Map | 测试地图 | PIE test map | Unreal common. |
| Build | 构建包 | 打包、构建 | Release artifact. |
| Export | 导出 | Godot 导出 | Godot common. |
| Package | 打包 | Unreal 打包 | Unreal common. |

## 7. Asset And Release Terms

| English Term | Recommended Chinese Term | Aliases / Notes | Usage |
|---|---|---|---|
| Placeholder Asset | 占位资源 | 临时资源、灰盒资源 | Not a release asset. |
| Reference-only Asset | 仅作参考资源 | 参考图、方向参考 | Moodboard, composition, color, or style reference; not imported directly into the engine. |
| Prototype Asset | 原型资源 | 原型资产、测试资源 | For validation, not final quality. |
| Reviewed Asset | 已评审资源 | 已审核资源 | Briefed, provenance-recorded, human-reviewed asset that may enter a project. |
| Release Candidate Asset | 发布候选资源 | 可发布候选资源 | Reviewed, provenance-recorded, engine-validated. |
| Rejected Asset | 已拒绝资源 | 拒绝资源 | Failed style, rights, technical, or readability review. |
| Source File | 源文件 | 原始工程文件 | psd, blend, wav session, etc. |
| Import Spec | 导入规格 | 接入规格、资源规范 | Size, format, naming, compression, budget. |
| License | 授权 | 版权许可、使用许可 | Commercial use must be recorded. |
| Commercial Use | 商用 | 可商用 | Critical release field. |
| Platform Disclosure | 平台披露 | 平台说明、AI 使用说明 | Steam/itch/console platform compliance. |
| Localization | 本地化 | 翻译、本地化适配 | Includes UI, fonts, and cultural risks. |
| LQA | 本地化测试 | Localization QA | Localization regression and language QA. |
| Accessibility | 无障碍 | 辅助功能、可访问性 | 无障碍 is acceptable in games. |
| Certification | 平台认证 | 提审、平台合规 | More common for console/mobile platforms. |
| Store Capsule | 商店胶囊图 | Steam capsule、胶囊图 | Steam context. |
| Known Issues | 已知问题 | 已知缺陷 | Required in release notes. |
| Release Notes | 版本说明 | 更新说明、发布说明 | Release artifact. |

## 8. Requirements

Future documents must follow these rules:

1. Add a Chinese mapping when a new English term first appears.
2. If a new skill, template, or check introduces a term not in this glossary, update the glossary first.
3. Chinese-facing docs should prefer Chinese game-industry terms.
4. AI workflow terms may remain in English internally, but need Chinese explanations.
5. Do not replace established Chinese game-industry usage with awkward literal translations.

Recommended format:

```text
Vertical Slice / 垂直切片
Asset Provenance / 资产来源与授权记录
Dry Run / 流程演练
Review Gate / 评审节点
```
