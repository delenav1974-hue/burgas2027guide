import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
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
