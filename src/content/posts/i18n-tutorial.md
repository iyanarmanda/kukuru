---
title: i18n Translation Tutorial
published: 2026-07-24
description: A guide to create post with i18n translation.
tags: [Translation, Blogging, Demo]
category: Guides
draft: false
---

## Translation in Post

Here is a simple routing illustration for using multi language for posts:

```
src/content/posts/
├── post-1.md
├── post-2/
    ├── index.md
    └── cover.webp
├── post-3.md
├── ja/
    ├── post-1.md
    └── post-2/
        ├── index.md
        └── cover.webp
└── zh-CN/
    └── post-1.md
```

In root of `posts` directory, it uses the default language (`siteConfig.lang`) for posts. Create a new directory for locale tag like `ja/`, `zh-CN`, etc. The Markdown filename for post must match across languages to link translation. The system will do the rest.

`src/config.ts`:

```ts
export const siteConfig: SiteConfig = {
	lang: "en", // default locale
	supportedLangs: ["en", "ja", "zh_CN"], // selected locales in website
};
```

`siteConfig.SupportedLangs` list (`src/types/config.ts`):

```ts
export type ConfigLang =
	| "en"
	| "zh_CN"
	| "zh_TW"
	| "ja"
	| "ko"
	| "es"
	| "th"
	| "vi"
	| "tr"
	| "id"
	| "fr"
	| "fa";
```

Supported Locales:

> See [posts/translation-example](https://iyanarmanda.github.io/kukuru/posts/translation-example/). (Shows English as default, Japanese, and Simplified Chinese for example)

> And see [ja/posts/guide](https://iyanarmanda.github.io/kukuru/ja/posts/guide/). (For translation with cover image)

## Translation in About & Friends Pages

The `spec` content follows the exact same pattern as `post`

```
src/content/spec/
├── about.md
├── friends.md
├── ja/
    ├── about.md
    └── friends.md
└── zh-CN/
    ├── about.md
    └── friends.md
```

> See [about](https://iyanarmanda.github.io/kukuru/about/) and [friends](https://iyanarmanda.github.io/kukuru/friends/). (English, Japanese, and Simplified Chinese)

---

:::note
rtl (*right to left*) system for **Persian** (Farsi) translation **not set up properly**.
:::