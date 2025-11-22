import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const meta = defineCollection({
  loader: glob({
    pattern: ['*.md'],
    base: './src/meta',
  }),
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = { meta }
