import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const worlds = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/worlds' }),
  schema: z.object({
    name: z.string(),
    worldId: z.string(),
    author: z.string(),
    description: z.string(),
    imageUrl: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    addedDate: z.string(),
    lastUpdated: z.string().optional(),
  }),
});

const avatars = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/avatars' }),
  schema: z.object({
    name: z.string(),
    character: z.string(),
    series: z.string(),
    description: z.string(),
    imageUrl: z.string().optional(),
    creatorName: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = { worlds, avatars };
