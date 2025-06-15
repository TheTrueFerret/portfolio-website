import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


const workExperienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/work-experience" }),
  schema: z.object({
    company: z.string(),
    image: z.string().optional(),
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});


const educationExperienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/education-experience" }),
  schema: z.object({
    company: z.string(),
    image: z.string().optional(),
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});


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
  work: workExperienceCollection,
  education: educationExperienceCollection,
  blog: blogCollection,
  projects: projectCollection,
};