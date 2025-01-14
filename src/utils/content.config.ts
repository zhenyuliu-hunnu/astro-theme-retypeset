import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'

export type Post = CollectionEntry<'posts'>
export type PostData = Post['data']
export type PostsGroupByYear = Map<number, Post[]>

// Get all posts and sort by publish date
export async function getPosts() {
  const posts = await getCollection(
    'posts',
    ({ data }: Post) => import.meta.env.DEV || !data.draft,
  )

  return posts.sort((a: Post, b: Post) =>
    b.data.published.valueOf() - a.data.published.valueOf(),
  )
}

// Group posts by tags
export async function sortPostsByTags() {
  const posts = await getPosts()
  const tagMap = new Map<string, Post[]>()

  posts.forEach((post: Post) => {
    if (post.data.tags && post.data.tags.length > 0) {
      post.data.tags.forEach((tag: string) => {
        if (!tagMap.has(tag)) {
          tagMap.set(tag, [])
        }
        tagMap.get(tag)?.push(post)
      })
    }
  })

  return tagMap
}

// Get posts by specific tag
export async function getPostsByTag(tag: string) {
  const posts = await getPosts()

  return posts.filter((post: Post) =>
    post.data.tags?.includes(tag),
  )
}

// Get all tags list
export async function getAllTags() {
  const posts = await getPosts()
  const tags = new Set<string>()

  posts.forEach((post: Post) => {
    post.data.tags?.forEach((tag: string) =>
      tags.add(tag),
    )
  })

  return Array.from(tags)
}

// Group posts by year and sort
export async function getPostsByYear(): Promise<PostsGroupByYear> {
  const posts = await getPosts()
  const yearMap = new Map<number, Post[]>()

  // Group by year
  posts.forEach((post: Post) => {
    const year = post.data.published.getFullYear()
    if (!yearMap.has(year)) {
      yearMap.set(year, [])
    }
    yearMap.get(year)?.push(post)
  })

  // Sort posts within each year
  yearMap.forEach((yearPosts) => {
    yearPosts.sort((a: Post, b: Post) => {
      const aDate = a.data.published
      const bDate = b.data.published
      const monthDiff = bDate.getMonth() - aDate.getMonth()

      if (monthDiff !== 0) {
        return monthDiff
      }
      return bDate.getDate() - aDate.getDate()
    })
  })

  return new Map([...yearMap.entries()].sort((a, b) => b[0] - a[0]))
}
