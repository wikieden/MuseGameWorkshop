# Muse Game Workshop — 全面设计评审报告

| | |
|---|---|
| 版本 | v0.1 (Review) |
| 评审日期 | 2026-06-08 |
| 评审对象 | v0.0 文档集（16 个 zh/en 文档族 + 主计划 + README + CLAUDE.md，共 ~34 个 Markdown 文件） |
| 评审方法 | 三路并行审计 —— 跨文档一致性 / 双语对齐+链接+术语 / 完整性+v0.1 可落地性；两路分析型代理结论高度收敛（高置信度） |
| 仓库状态 | 纯文档设计阶段，无代码/无 `AGENTS.md`/无 `templates/`/无 `tools/`/无 `examples/` |

---

## 0. 总体结论

文档在**战略层成熟、双语卫生良好**，但**尚不可落地（not yet buildable）**。

几乎所有阻塞项指向**同一个根因**：文档从未明确区分「**最终全集（eventual full target）**」与「**v0.1 子集（v0.1 subset）**」。于是目录树 / 主计划 / PRD 与 `v0.1-manifest` 在「先交付什么」上互相矛盾。**只要补这一条约定，多数 CRITICAL/HIGH 会连带消解。**

**结论：不要现在开始 scaffold。先按本报告把 manifest 与各文档对齐，再进入 v0.1 执行层。**

---

## 1. 确认无缺陷（交叉验证通过）

- **全部 16 个文档族 zh/en 结构对齐**：章节数、表格、版本号一一对应。
- **本地链接零断裂**：README.md 32 条本地链接目标全部存在。
- **术语表已填充**（~142 行）且 zh/en 成对；9 个高频核心术语全部命中。
- **38-skill 主干在 3 个目录树中完全一致**（plan §6 / technical-architecture §3 / skill-pack-spec §2，slug 相同）。
- **v0.2–v0.5 路线图跨 4 个文档对齐**（Godot loop→v0.2 / 创意 pipeline→v0.3 / Unreal slice→v0.4 / 发布→v0.5）。
- **SKILL.md schema 跨 4 文档一致**；模板字段骨架完整（templates 是全包最强部分）；5 个 check 的 PASS/FAIL 契约表已存在。

---

## 2. CRITICAL —— 阻塞 v0.1 scaffolding

| # | 缺陷 | 证据 | 修复 |
|---|---|---|---|
| **C1** | **三套互不嵌套的「首发 skill 集」**，无单一权威。无法确定 v0.1 先做哪些。 | manifest §4：**14 个 P0**；PRD §9.2 + skill-pack §6：**13 个 MVP-core**（多 content-matrix/implementation-bridge/balance-check/release-checklist/postmortem，少创意+UX 6 个）；plan §16：**6 个**启动文件；roadmap M1：**6 个** | 宣布 `v0.1-manifest` 为 v0.1 唯一真源；PRD §9.2 / skill-pack §6 改标注为「最终核心集」；plan §16 的 6 文件对齐 manifest |
| **C2** | skill-pack §6「P0 创意批」含 `animation-brief/music-brief/sfx-brief/asset-integration`，**不在 manifest 14 内** → 按 spec scaffold 会被 manifest 自己的 `check-v0.1-manifest` 判 FAIL | skill-pack-spec.zh §6 vs v0.1-manifest.zh §4 | skill-pack §6 批次对齐 manifest 14；上述 4 个移到后续批 |
| **C3** | plan §8 凭空造出 slug `music-sfx-brief`（§8.17）、`publishing-readiness`（§8.22），**任何目录树都没有** | plan.zh §8 vs 三个树（树里是分开的 `music-brief`+`sfx-brief`，发布是 5 个独立 slug） | §8.17 拆成 music-brief/sfx-brief；§8.22 换成 5 个发布 slug，或定义为伞概念并入树 |
| **C4** | **模板数 22 vs 27**。5 个模板（`animation/music/sfx-brief`、`tutorial-design`、`accessibility-checklist`）在 templates.zh §2 目录里有名，**却无字段正文**，且不在 manifest | manifest §5（22）vs templates.zh §2（27） | 选定一个数：留 22 则删 §2 多余 5 个；留 27 则补 manifest + 补 5 份字段骨架 |
| **C5** | **Boss Rush 试运行被定义成 4 种**，「做完没」有 4 个答案 | manifest §8：3 个文件；CLAUDE.md：6-skill 链；testing-strategy §8：9-skill + 10 产出；plan §15.5：10 个模板文件 | 以 manifest §8 为唯一定义，显式写出链 + 完整产出集；其余三处对齐 |

---

## 3. HIGH

- **H1 —— 14 个 P0 中有 6 个 skill 规格过薄。** `creative-asset-pipeline, art-direction, asset-brief, asset-review, ux-flow, level-blockout` 只有「用途+输出」（无 Inputs/Workflow/Quality Bar/Next）。而规格**最详**的 skill（core-loop、content-matrix、implementation-bridge、balance-check、postmortem）**根本不是 P0**。结果：builder 恰恰在 v0.1 必交付的文件上猜得最多。（skill-pack §4.14–4.23）
  - 修复：把 4.14–4.23 补到 4.1–4.13 的深度，至少 Inputs + Workflow + Quality Bar + Next Skills。
- **H2 —— AGENTS.md 完整正文只存在于 plan §9**，manifest/CLAUDE.md 都不引用 → builder 会盲写。且草稿路径过时（`prototypes/`、`docs/design/decision-log.md` 均不在权威树）。
  - 修复：把 plan §9 提升为 manifest 里 AGENTS.md 的规范正文，并修两处路径。
- **H3 —— 目录树漂移。** `docs/` 子树有 4 种形态（README / tech-arch / plan / manifest）；`examples/` 出现在 roadmap §3 骨架，却被 manifest §10 DoD **明令禁止**进入 v0.1；publishing/creative/ux 模板范围 树-vs-manifest 不一致。
  - 修复：选定一种 `docs/` 规范布局（建议 README/tech-arch 的 product/architecture/workflows 形态）；roadmap §3 删 `examples/`；树标注「最终全集」。

---

## 4. MEDIUM

- **check 契约欠规范**：`check-doc-pairs` 从未定义「核心文档」集合；`check-startup-prompts` 必含字段表在 manifest §7 与 testing-strategy §4 **不一致**，且 README 自己的 startup prompt（README.md:162）会被自己的 check 判 **FAIL**；`check-v0.1-manifest`「无游戏代码」无可机械化规则（缺文件模式，如 `*.gd/*.tscn/*.uasset/*.cpp`）。
- **testing-strategy §8 试运行链漏掉 14 个 P0 中的 5 个**，却又「必须产出」其中的 art direction、asset brief。
- **「Skill Pack」未入术语表**：6+ 文档使用的一等交付物缺词条；连带 zh 首次使用缺中文对应（违反双语首用规则）。
- **skill-pack-spec 仅详述 38 中的 26 个**；其余 12 个（ai-asset-disclosure、tutorial-design、settings-accessibility、ui-review、encounter-design、level-review、character-brief、dialogue-pass、quest-design、store-page-brief、trailer-brief、platform-cert-check）无 Use/Inputs/Outputs 定义。
- **v0.1 未覆盖的职能未声明**：Animator/Composer/Sound/QA/Release 的 skill 均被推迟，但无文档说明这是有意取舍，读起来像疏漏。
- **LICENSE 缺失**（「可复用工作流包」法律上必需）；**CHANGELOG** 是 delivery-plan §8 的发布门项，却不存在 / 不在 manifest must-create。
- **范围数字打架**：plan §11「10-13 skills」vs §13「14」；切片「7 天」（plan §14）vs「7-14 天」（PRD/skill-pack）。
- `examples/shared-design` vs `examples/godot-unreal-shared-design` 同一目录两个 slug（2:1 取 `shared-design`）。

---

## 5. LOW

- plan 文档对缺 `版本：v0.1` 标签（其余 14 族都有）。
- 内层 README 未被根 README 导航收录（孤立）；§3 标题 zh「文档说明」/ en「Document Map」框定不一致。
- godot-unreal-workflow zh/en 阶段标题前缀风格不同（`第 N 阶段：` vs `Stage N:`），无章节缺失。
- `engine-neutral` 作裸形容词在术语表查不到（仅 `Engine-neutral Spec` 有词条）。
- 资产状态 `reviewed` 与评审结论词 `Approved` 用词需确认为同一门。
- `implementation-bridge`（16+ 引用）无术语表词条或指针。

---

## 6. CLAUDE.md（本次新写文件）自带 2 处问题

1. 试运行链写成 **6 skills**；testing-strategy 要求 9 → 低估 DoD（属 C5 一部分）。
2. 称「manifest wins」，但 manifest 自身不一致（C4）且对 AGENTS.md 来源沉默（H2）→ 应补「AGENTS.md 规范正文见 plan §9」。

---

## 7. 根因与最高杠杆修复

**根因：** 文档在不同时间写就，「最终全集」与「v0.1 子集」从未显式分层。几乎每个 CRITICAL/HIGH 都是「树/计划/PRD 给全集，manifest 给子集，无人说明谁是谁」。

**单一最高杠杆修复：**
> 新增一条「**Full target vs v0.1 subset**」约定 —— 宣布 `v0.1-manifest.zh.md` 为 **v0.1 唯一真源**；把每个目录树 / plan / PRD 列表重标为「最终全集」；再据此逐一对齐 C2/C3/C4/C5。

此一项即可清掉 C1–C5 + H3 + 数个 MEDIUM。

---

## 8. 建议执行顺序（优先级）

1. 落「full vs v0.1 subset」约定，定 manifest 为唯一真源（解 C1）。
2. 对齐模板 22 vs 27，给保留的模板补字段骨架（解 C4）。
3. 补 6 个过薄 P0 skill 规格到全 schema 深度（解 H1）。
4. 选定唯一 Boss Rush 试运行定义（链 + 产出集），四处对齐（解 C5）。
5. 把 AGENTS.md 正文从 plan §9 提升进 manifest，修过时路径（解 H2）。
6. 收紧 3 个 check 契约：定义「核心文档」集、统一 startup-prompt 必含字段 + 扫描目标、给 check-v0.1-manifest 写「无游戏代码」文件模式（解 MEDIUM）。
7. 修 skill-naming：plan §8 的 `music-sfx-brief`/`publishing-readiness`（解 C3）；skill-pack §6 批次对齐 manifest（解 C2）。
8. 补 LICENSE + CHANGELOG（后者已是发布门要求）。
9. 修 CLAUDE.md 自带 2 处（链 6→9、引 plan §9）。
10. 清 LOW 项。

---

## 9. 统计

- CRITICAL **5** · HIGH **3** · MEDIUM **8** · LOW **6**
- 阻塞 v0.1 scaffolding 的核心：C1–C5 + H1–H3。
- 双语/链接/术语层：**0 个 CRITICAL/HIGH**，仅 2 个 MEDIUM（均源于「Skill Pack」未入术语表）。

> 本报告为审计记录，未修改任何设计文档。如需英文对照版可生成 `REVIEW.en.md`。
