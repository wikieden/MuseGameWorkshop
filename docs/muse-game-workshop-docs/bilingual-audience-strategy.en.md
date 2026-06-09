# Muse Game Workshop Bilingual Audience Strategy

Version: v0.1

Language: English

## 1. Design Decision

Muse Game Workshop will serve two audience groups: Chinese-speaking users and English-speaking users. The design must not treat English docs as machine-translated Chinese docs, and it must not treat Chinese docs as literal translations of English terminology.

Core decision:

> One workflow core, two user-facing surfaces.

The underlying workflow, skill slugs, template fields, evidence records, and quality gates stay stable. User-facing docs, examples, prompts, terminology explanations, and onboarding should be shaped separately for Chinese and English audiences.

## 2. Audience Groups

### 2.1 Chinese-Speaking Users

Chinese-speaking users include:

- Chinese game industry practitioners.
- Chinese indie game developers.
- Small-team producers, game designers, artists, programmers, technical artists, audio creators, QA owners, and release owners.
- Users who want to use AI coding tools and creative AI tools for Godot or Unreal projects.

Chinese-facing docs should prefer terms that Chinese game teams naturally understand, such as 立项, 预研, 垂直切片, 关卡灰盒, 玩法原型, 测试, 打磨, and 上线准备. English terms can remain, but the first mention in Chinese-facing docs should map to a Chinese game-industry term.

### 2.2 English-Speaking Users

English-speaking users include:

- Solo indie developers.
- Small teams using Godot or Unreal.
- Designers, artists, programmers, audio creators, QA owners, and release owners who understand common English game-production terms.
- Teams using Codex, Claude Code, Kiro CLI, opencode, or other AI coding tools alongside creative AI tools.

English-facing docs should use natural English game-production language: concept, pre-production, prototype, vertical slice, production, playtest, polish, QA, release, and postmortem. Do not force Chinese explanations into the main English copy unless the document is specifically about terminology mapping, localization, or China-market context.

## 3. Product Principles

### 3.1 Same Workflow Core

These should stay consistent across languages:

- Workflow skill slugs such as `game-intake`, `mechanic-spec`, `asset-brief`, and `playtest-report`.
- Template field structure and meaning.
- Review gates.
- Evidence records.
- Asset provenance records.
- P0 / P1 / P2 scope.
- Engine-neutral mappings for Godot and Unreal.

Slugs and filenames should use stable English kebab-case so tooling, scripts, and references do not break when language changes.

### 3.2 Localized Surface

These should be localized for the target audience:

- README and getting started copy.
- Example prompts.
- Tutorials and quick starts.
- Terminology explanations.
- Template instructional text.
- Examples for release, store pages, trailers, community, and localization.
- Cultural risks, fonts, text length, platform context, and player expectations.

Chinese docs should read like production docs written for Chinese game teams. English docs should read like production docs written for English-speaking game teams.

### 3.3 Translation Is Not Localization

Translation converts language. Localization makes the work understandable and executable for a target audience.

Chinese and English docs may use different examples:

- Chinese examples may use production terms and handoff habits common in Chinese teams.
- English examples may use wording common in the global indie scene.
- Platform examples can vary by context, including Steam, itch.io, TapTap, WeGame, or other channels, but no regional platform should become the default universal target.
- Store, community, marketing, and compliance outputs must declare target region and target language.

## 4. Documentation Rules

### 4.1 Paired Documents

Core documents must exist in pairs:

- `*.zh.md` for Chinese-speaking users.
- `*.en.md` for English-speaking users.

The pair should keep the same structure, decision points, and version status where possible. The wording does not need to match sentence by sentence.

### 4.2 Terminology Rules

- Core project terms must be mapped in `terminology-glossary.zh.md` / `terminology-glossary.en.md`.
- In Chinese-facing docs, new English terms should use `English / Chinese industry term` on first mention.
- In English-facing docs, keep the main copy natural in English; put Chinese mappings in the glossary, terminology notes, or localization sections.
- If a new term has no Chinese game-industry mapping, update the glossary before using it elsewhere.

### 4.3 Starting Prompt Rules

Every project starting prompt should declare:

- Target language.
- Target audience.
- Locale.
- Terminology source.
- Whether paired Chinese and English outputs are required.

Example:

```text
Target language: English.
Target audience: English-speaking indie developers and small game teams.
Locale: en-US unless otherwise stated.
First read the bilingual audience strategy and terminology glossary, then produce the design summary and execution plan.
```

## 5. Template Rules

Future templates should include minimal metadata:

```md
## Metadata

- Language:
- Target Audience:
- Locale:
- Platform Region:
- Terminology Source:
- Paired Document:
```

This helps:

- Prevent AI tools from guessing the output language.
- Prevent Chinese docs from sounding like literal English translations.
- Prevent English docs from being overloaded with Chinese explanations.
- Let localization, store readiness, community, and release checklists reason about regional context.

## 6. UX And Onboarding

Muse Game Workshop should ask users to choose language and production context early:

1. Chinese entry: Chinese docs, Chinese prompts, Chinese game-industry terms first.
2. English entry: English docs, English prompts, English game-production language first.
3. Bilingual team entry: core outputs can be paired, but every artifact should declare primary language and review language.

Onboarding should not only ask "which AI tool are you using?" It should also ask:

- Should this output be in Chinese or English?
- Which game-production terminology does the team use?
- What are the target release regions and player languages?
- Is this artifact an internal production doc, or player/store/community-facing copy?

## 7. AI Tool Behavior

AI coding tools and creative AI tools must follow these rules inside the workflow:

- Preserve the upstream document language by default.
- If the user specifies an output language, the latest user instruction wins.
- Chinese output should use Chinese game-industry terms, not awkward literal translations.
- English output should use English game-production terms and avoid inserting Chinese explanations into main copy.
- Translation, localization, LQA, font checks, and UI overflow checks are production workflow tasks, not simple text replacement.
- Store pages, trailers, community posts, and AI usage disclosures must record target language and target region.

## 8. Testing

Bilingual design needs dedicated tests:

- Paired document existence checks.
- README and package indexes must route to both Chinese and English paths.
- Starting prompts must include target language and target audience.
- Chinese docs must pass Chinese game-industry terminology checks.
- English docs must pass natural English production-language checks.
- Templates must include language, audience, and locale metadata.
- The same Boss Rush fixture must produce Chinese and English design summaries.
- Localization outputs must record fonts, text length, platform region, and cultural risks.

## 9. Current Decisions

- `zh` docs are not subordinate to `en` docs.
- `en` docs are not translations of `zh` docs.
- Both languages share the same workflow core.
- Chinese user experience prioritizes Chinese game-industry terms.
- English user experience prioritizes English game-production terms.
- The glossary is the bridge between the two user languages, not a reading burden for English docs.
