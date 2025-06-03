import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    imageUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});


const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    imageUrl: z.string().optional(),
    projectUrl: z.string().url().optional(),
    published: z.boolean().default(true),
    order: z.number().optional(),
    featured: z.boolean().optional().default(false),
  }),
});


export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};