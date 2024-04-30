import { defineCollection, z } from 'astro:content'
import { Categories } from '../config.ts'

const slugs = Categories.map(c => c.slug)
const categories = z.enum(slugs as [string, ...string[]])
const posts = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        cardImage: z.string(),
        category: categories,
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
    }),
})

export const collections = { posts }
