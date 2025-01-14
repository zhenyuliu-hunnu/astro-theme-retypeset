import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    published: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    lang: z.string().optional().default(''),
    slug: z.string().optional().default(''),
    pin: z.boolean().optional().default(false),
  }),
})
export const collections = {
  posts: postsCollection,
}
