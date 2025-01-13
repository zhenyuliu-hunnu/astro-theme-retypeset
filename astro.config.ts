import type { ThemeConfig } from './src/types'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import swup from '@swup/astro'
import compress from 'astro-compress'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
// Rehype
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
// Remark
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import remarkGithubAdmonitions from 'remark-github-admonitions-to-directives'
import remarkMath from 'remark-math'
import remarkSectionize from 'remark-sectionize'
//
import UnoCSS from 'unocss/astro'
import { themeConfig } from './src/config'
import { AdmonitionComponent } from './src/plugins/rehype-component-admonition.ts'
import { GithubCardComponent } from './src/plugins/rehype-component-github-card.ts'
import { parseDirectiveNode } from './src/plugins/remark-directive-rehype.ts'
import { remarkExcerpt } from './src/plugins/remark-excerpt.ts'
import { remarkReadingTime } from './src/plugins/remark-reading-time.ts'

const { url }: { url: ThemeConfig['site']['url'] } = themeConfig.site

export default defineConfig({
  site: url,
  base: '/',
  trailingSlash: 'always',
  integrations: [
    UnoCSS({ injectReset: true }),
    mdx(),
    sitemap(),
    robotsTxt(),
    compress(),
    swup({
      theme: false,
      animationClass: 'transition-swup-',
      cache: true,
      preload: true,
      accessibility: true,
      smoothScrolling: true,
      updateHead: true,
      updateBodyClass: true,
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkReadingTime,
      remarkExcerpt,
      remarkGithubAdmonitions,
      remarkDirective,
      remarkDirectiveRehype,
      remarkSectionize,
      parseDirectiveNode,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      rehypePrettyCode,
      [
        rehypeComponents,
        {
          components: {
            github: GithubCardComponent,
            note: (x: any, y: any) => AdmonitionComponent(x, y, 'note'),
            tip: (x: any, y: any) => AdmonitionComponent(x, y, 'tip'),
            important: (x: any, y: any) => AdmonitionComponent(x, y, 'important'),
            caution: (x: any, y: any) => AdmonitionComponent(x, y, 'caution'),
            warning: (x: any, y: any) => AdmonitionComponent(x, y, 'warning'),
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              'className': ['anchor-icon'],
              'data-pagefind-ignore': true,
            },
            children: [{ type: 'text', value: '#' }],
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener', 'noreferrer'],
        },
      ],
    ],
  },
})
