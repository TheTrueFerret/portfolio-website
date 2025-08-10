import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


const experienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/experience" }),
  schema: z.array(z.object({
    company: z.string(),
    image: z.string().optional(),
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
    isWork: z.boolean(),
  })),
});


const techCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/tech" }),
  schema: z.array(z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
  })),
})


const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    imageUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});


const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
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
  experience: experienceCollection,
  tech: techCollection,
  blog: blogCollection,
  projects: projectCollection,
};