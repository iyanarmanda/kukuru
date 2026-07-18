# 🍣Kukuru  
![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen) 
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue) 
[![DeepWiki](https://img.shields.io/badge/DeepWiki-saicaca%2Ffuwari-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==)](https://deepwiki.com/saicaca/fuwari)

A static blog template built with [Astro](https://astro.build), forked/inspired from [Fuwari](https://github.com/saicaca/fuwari).

[**🖥️ Live Demo**](https://kukuru.netlify.app)

![Preview Image](https://raw.githubusercontent.com/iyanarmanda/resource/main/kukuru/home.png)

## ✨ Features

- [x] Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- [x] Smooth animations and page transitions
- [x] Light / dark mode
- [x] Customizable theme colors & banner
- [x] Responsive design
- [x] Search functionality with [Pagefind](https://pagefind.app/)
- [x] [Markdown extended features](https://github.com/iyanarmanda/kukuru?tab=readme-ov-file#-markdown-extended-syntax)
- [x] Table of contents
- [x] RSS feed

## 🚀 Getting Started

1. Create your blog repository:
    - [Generate a new repository](https://github.com/iyanarmanda/kukuru/generate) from this template or fork this repository.
    - Or run one of the following commands (*soon*):
       ```sh
       npm create kukuru@latest
       yarn create kukuru
       pnpm create kukuru@latest
       bun create kukuru@latest
       deno run -A npm:create-kukuru@latest
       ```
2. To edit your blog locally, clone your repository, run `pnpm install` to install dependencies.
    - Install [pnpm](https://pnpm.io) `npm install -g pnpm` if you haven't.
3. Edit the config file `src/config.ts` to customize your blog.
4. Run `pnpm new-post <filename>` to create a new post and edit it in `src/content/posts/`.
5. Deploy your blog to Vercel, Netlify, GitHub Pages, etc. following [the guides](https://docs.astro.build/en/guides/deploy/). You need to edit the site configuration in `astro.config.mjs` before deployment.

## 📝 Frontmatter of Posts

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
ogImage: /media/images/cover.webp   # by default is empty and use `image` frontmatter if it from public directories or url.
draft: false
lang: jp      # Set only if the post's language differs from the site's language in `config.ts`
---
```

## 🧩 Markdown Extended Syntax

In addition to Astro's default support for [GitHub Flavored Markdown](https://github.github.com/gfm/), several extra Markdown features are included:

- Admonitions ([Preview and Usage](https://iyanarmanda.github.io/kukuru/posts/markdown-extended/#admonitions))
- GitHub repository cards ([Preview and Usage](https://iyanarmanda.github.io/kukuru/posts/markdown-extended/#github-repository-cards))
- Enhanced code blocks with Expressive Code ([Preview](https://iyanarmanda.github.io/kukuru/posts/expressive-code/) / [Docs](https://expressive-code.com/))

## ⚡ Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                              |
|:---------------------------|:----------------------------------------------------|
| `pnpm install`             | Installs dependencies                               |
| `pnpm dev`                 | Starts local dev server at `localhost:4321`         |
| `pnpm build`               | Build your production site to `./dist/`             |
| `pnpm preview`             | Preview your build locally, before deploying        |
| `pnpm check`               | Run checks for errors in your code                  |
| `pnpm format`              | Format your code using Biome                        |
| `pnpm new-post <filename>` | Create a new post                                   |
| `pnpm astro ...`           | Run CLI commands like `astro add`, `astro check`    |
| `pnpm astro --help`        | Get help using the Astro CLI                        |
| `pnpm prepare`             | Install dev tools like huksy and playwright         |

## 🗺️ Roadmap

> ( ***?** ) *this mean TBD (**To Be Determined**)*

> ( ***!** ) *this mean BREAKING CHANGE*

- [ ] Performance, Dependency & Architecture Optimization
    - [x] Optimization of style dependencies **!**
        - [x] Rewrite **Stylus** to **SASS/SCSS**
        - [x] Migration from Tailwind v3 to **Tailwind v4**
        - [x] Remove **PostCSS** plugins
    - [ ] CSS Optimization
        - [ ] Refactor & reconfigure base style of `main.css`, `variables.scss` **!**
        - [ ] Refactor `mermaid.css`
        - [ ] Simplify `giscus-*.css`
    - [ ] Reconfiguring DevDependencies
        - [x] Reconfiguring **TypeScript** config
        - [ ] Reconfiguring **Biome** rules **!**
        - [x] Add **Svelte** check
    - [ ] Optimazation of JS and **Svelte** islands
    - [x] Migration from Astro v5 toward Astro **v6** or **v7** **!**
    - [x] Dependencies update (*Major Bump*)
        - [x] `@iconify/svelte@5.2.2`
        - [x] `remark-directive@4.0.0`
        - [x] `remark-github-admonitions-to-directives@2.1.0`
        - [x] `remark-directive-rehype@1.0.0`
        - [x] `@expressive-code 0.44.0`
        - [x] `astro-expressive-code@0.44.0`
        - [x] `@tailwindcss/typography@0.5.20`
        - [x] `katex@0.17.0`
        - [x] `sharp@0.35.3`
    - [ ] Expand **Husky** utilities
    - [ ] Add and reconfigure **Dependabot**
    - [ ] Page load performance
        - [x] Image lazy load
        - [ ] Minimize icon bundle
- [ ] Feature Adjustments
    - [ ] Blog features
        - [ ] Add comment feature
            - [x] **Giscus**
            - [ ] **Discus**
            - [ ] **Twikoo**
        - [ ] Add **mdx** support **!**
            - [ ] Image embed with local path
        - [x] Music embed with iframe
        - [ ] GitHub file card **?**
        - [ ] External site embed
        - [x] Table row colours and horizontal scroll bar
        - [ ] **Mermaid**
            - [x] Integrate using **playwright** and **rehype-mermaid**
            - [ ] Fix UI bug
            - [ ] Expand mermaid features
        - [ ] Unlisted post (accessible via direct URL only) **?**
        - [ ] swup navigation progress bar for load content
        - [ ] Responsive for large screens
        - [ ] Carousel images
        - [ ] Updated date on license
    - [x] New pages
        - [x] 404 (*Not Found*) page
        - [x] Friends page
    - [x] **@astrojs/partytown**
        - [x] Google Analytics (**GA4**)
    - [x] Improve meta tags and open graph tags
    - [ ] Layout/base adjustment
        - [ ] Nested category **?**
        - [ ] **i18n** adjustment
            - [ ] Multilingual support (*including content*) with switch on navbar
            - [x] Add **french** translation
        - [ ] Round avatar option
        - [ ] Remove paginator for single page
        - [ ] Music album under the tag list **?**
    - [ ] Restyle homepage and route **?**
        - [ ] Post pinning feature **!**
        - [ ] "About" page become root and renamed to "Home"

## 📄 License

This project is licensed under the MIT License.

> This project is inspired and forked from [saicaca/fuwari](https://github.com/saicaca/fuwari)