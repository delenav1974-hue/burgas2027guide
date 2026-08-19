import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('Burgas 2027 Local Team'),
    image: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = {
  'news': newsCollection,
};
