# Muse Game Workshop 双语用户与本地化设计策略

版本：v0.1

语言：中文

## 1. 设计结论

Muse Game Workshop 以后会同时面对中文和英文两类用户群体。设计上不能把英文文档当作中文文档的机器翻译副本，也不能把中文文档当作英文术语的直译版。

核心结论：

> 一个 workflow core，两套 user-facing surfaces。

底层流程、skill slug、模板字段、证据记录和质量门保持稳定；面向用户的文档、示例、提示词、术语解释和 onboarding 要按中文用户和英文用户分别组织。

## 2. 两类用户群体

### 2.1 中文用户群体

中文用户主要包括：

- 中国游戏行业从业者。
- 中文独立游戏开发者。
- 中文小团队制作人、策划、美术、程序、TA、音频、QA 和发行负责人。
- 想用 AI coding tools 和 creative AI tools 做 Godot / Unreal 项目的中文用户。

中文用户的文档优先使用中国游戏界熟悉的叫法，例如“立项”“预研”“垂直切片”“关卡灰盒”“玩法原型”“测试”“打磨”“上线准备”。英文术语可以保留，但第一次出现时必须给出中国游戏行业能理解的中文对应。

### 2.2 英文用户群体

英文用户主要包括：

- English-speaking solo indie developers.
- Small game teams using Godot or Unreal.
- Designers, artists, programmers, audio creators, QA owners, and release owners who already understand common English game-production terms.
- Teams using Codex, Claude Code, Kiro CLI, opencode, or other AI coding tools alongside creative AI tools.

英文用户的文档优先使用自然的英文游戏行业表达，例如 concept, pre-production, prototype, vertical slice, production, playtest, polish, QA, release, postmortem。不要在英文主文档里强行塞入中文解释，除非该文档正在说明术语映射、本地化或中国市场语境。

## 3. 产品原则

### 3.1 Same Workflow Core

以下内容应跨语言保持一致：

- workflow skill slug，例如 `game-intake`、`mechanic-spec`、`asset-brief`、`playtest-report`。
- 模板字段的结构和含义。
- review gate / 评审节点。
- evidence record / 证据记录。
- asset provenance / 资产来源与授权记录。
- P0 / P1 / P2 范围。
- Godot / Unreal 的 engine-neutral 设计映射。

slug 和文件名可以使用稳定英文 kebab-case，避免因为语言切换导致工具、脚本和引用断裂。

### 3.2 Localized Surface

以下内容必须按目标用户群体本地化：

- README 和 getting started 文案。
- 示例 prompt。
- 教程和 quick start。
- 术语解释。
- 模板中的说明文本。
- 游戏发布、商店页面、trailer、社区和本地化相关示例。
- 文化风险、字体、文本长度、平台语境和玩家预期。

中文文档要像中国游戏团队会写和会读的制作文档。英文文档要像英文游戏团队会写和会读的 production docs。

### 3.3 Translation Is Not Localization

翻译只解决“语言转换”，本地化要解决“用户是否自然理解并能执行”。

允许中英文文档在例子上有差异：

- 中文示例可以提到国内团队更熟悉的制作叫法和交付习惯。
- 英文示例可以使用 global indie scene 更常见的表达。
- 平台示例可以按语境选择 Steam、itch.io、TapTap、WeGame 或其他渠道，但不能把某一地区平台写成默认唯一目标。
- 商店、社区、营销和合规内容必须标明目标区域和目标语言。

## 4. 文档规则

### 4.1 成对文档

核心文档必须成对存在：

- `*.zh.md` 面向中文用户。
- `*.en.md` 面向英文用户。

两份文档应尽量保持相同结构、相同决策点、相同版本状态，方便 review 和维护。但措辞不要求逐句一致。

### 4.2 术语规则

- 项目级核心术语必须进入 `terminology-glossary.zh.md` / `terminology-glossary.en.md`。
- 中文面向文档中，新英文术语第一次出现时使用 `English / 中文行业叫法`。
- 英文面向文档中，正文优先保持自然英文表达；中文对应放在术语表、脚注式说明或本地化章节中。
- 如果新增术语没有中国游戏界对应叫法，先补术语表，再更新其他文档。

### 4.3 启动 Prompt 规则

所有项目启动 prompt 都应声明：

- target language / 目标输出语言。
- target audience / 目标用户群体。
- locale / 地区语境。
- terminology source / 术语来源。
- 是否需要中英文双版本输出。

示例：

```text
目标语言：中文。
目标用户群体：中国独立游戏开发者和小型游戏团队。
地区语境：zh-CN，优先使用中国游戏行业术语。
请先读取 bilingual audience strategy 和 terminology glossary，再输出设计摘要与执行计划。
```

## 5. 模板规则

所有后续模板都应包含最小元数据：

```md
## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
```

用途：

- 避免 AI tool 不知道输出中文还是英文。
- 避免中文文档写成英文直译腔。
- 避免英文文档过度插入中文解释。
- 让 localization、store readiness、community 和 release checklist 能判断地区语境。

## 6. UX 与 Onboarding

Muse Game Workshop 的入口应优先让用户选择语言和工作语境：

1. 中文用户入口：中文文档、中文 prompt、中文术语优先。
2. English user entry：English docs, English prompts, English game-production language first.
3. 双语团队入口：核心产物可中英成对输出，但每个产物都要标明主语言和 review 语言。

onboarding 不应只问“你用什么 AI tool”，还要问：

- 你希望本轮输出中文还是英文？
- 你的团队主要用哪套游戏行业术语？
- 目标发布地区和玩家语言是什么？
- 本轮产物是内部制作文档，还是面向玩家、商店或社区的文案？

## 7. AI Tool 行为要求

AI coding tools 和 creative AI tools 进入 workflow 时必须遵守：

- 默认沿用上游文档的语言。
- 如果用户指定输出语言，以用户最新指令为准。
- 中文输出使用中国游戏行业术语，不做生硬直译。
- 英文输出使用英文游戏行业术语，不把中文解释塞进主文案。
- 翻译、本地化、LQA、字体和 UI 溢出检查属于 production workflow，不是简单文本替换。
- 对 store page、trailer、社区公告、AI usage disclosure 等发布材料，必须记录目标语言和目标地区。

## 8. 测试方式

双语设计需要独立测试：

- 文档成对存在检查。
- README 和文档包索引能进入中文和英文路径。
- 启动 prompt 包含目标语言和目标用户群体。
- 中文文档通过中国游戏行业术语检查。
- 英文文档通过自然英文 production language 检查。
- 模板包含 language、audience、locale 元数据。
- 同一个 Boss Rush fixture 能分别产出中文和英文设计摘要。
- 本地化相关产物记录字体、文本长度、平台区域和文化风险。

## 9. 当前决策

- `zh` 文档不是 `en` 文档的附属版本。
- `en` 文档也不是 `zh` 文档的翻译副本。
- 两种语言共享同一个 workflow core。
- 中文用户体验优先使用中国游戏界术语。
- 英文用户体验优先使用英文游戏制作术语。
- 术语表是两套用户语言之间的桥，不是英文文档的阅读负担。
