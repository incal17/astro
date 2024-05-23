import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        banner: image(),

        // This banner will be shown in blog lists(/posts) if provided.
        banner2: image().optional(),

        // The article OG cover, if not provided, use summary card, otherwise summary_large_image
        ogImage: image().refine(img => img.width >= 1200 && img.height >= 630, {
            message: 'OpenGraph image must be at least 1200 X 630 pixels!',
        }).or(z.string()).optional(),

        category: z.string(),
        pubDate: z.coerce.date(),

        // Should the article be added to SELECTED POSTS? will be displayed on the /posts page if true.
        selected: z.boolean().optional(),

        tags: z.array(z.string()).optional(),

        // not use, just record this value since its from my previous blog system
        updatedDate: z.coerce.date().optional(),
        oldViewCount: z.number().optional(),
    }),
})

const categoryCollection = defineCollection({
    type: 'content',
    schema: () => z.object({
        title: z.string(),
        description: z.string(),
    }),
})

export const collections = { posts, categories: categoryCollection }
