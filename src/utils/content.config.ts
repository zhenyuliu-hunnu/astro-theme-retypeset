import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml, { type Tag } from 'sanitize-html'

export type Post = CollectionEntry<'posts'>

export async function getPosts(isArchivePage = false) {
  const posts = await getCollection('posts', ({ data }) => {
    return import.meta.env.DEV || !data.draft
  })

  // 按发布日期降序排序
  return posts.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf())
}

// 获取所有标签及其对应的文章
export async function getPostsByTags() {
  const posts = await getPosts()
  const tagMap = new Map<string, Post[]>()

  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, [])
      }
      tagMap.get(tag)?.push(post)
    })
  })

  return tagMap
}

// 获取指定标签的所有文章
export async function getPostsByTag(tag: string) {
  const posts = await getPosts()
  return posts.filter(post => post.data.tags?.includes(tag))
}

// 获取所有标签列表
export async function getAllTags() {
  const posts = await getPosts()
  const tags = new Set<string>()

  posts.forEach((post) => {
    post.data.tags?.forEach(tag => tags.add(tag))
  })

  return Array.from(tags)
}
