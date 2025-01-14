import type { APIContext } from 'astro'
import themeConfig from '@/config'
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import

const parser = new MarkdownIt()
const { title, description, url } = themeConfig.site
const { language } = themeConfig.global

export async function GET(_context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => {
    return !data.draft // 只包含非草稿文章
  })

  return rss({
    title,
    description,
    site: url,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.published, // 使用 published 而不是 pubDate
      description: post.data.description,
      link: `/posts/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    })),
    customData: `<language>${language}</language>`,
  })
}
