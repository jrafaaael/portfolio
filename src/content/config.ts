import { defineCollection } from "astro:content";
import { projectSchema } from "./project/schema";

const projectCollection = defineCollection(projectSchema);

export const collections = {
  project: projectCollection,
};
