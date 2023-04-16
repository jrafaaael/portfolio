import { z } from "astro:content";

export const projectSchema = {
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    contribution: z.array(z.string()),
  }),
};

type Project = typeof projectSchema.schema;
export type ProjectSchema = z.infer<Project>;