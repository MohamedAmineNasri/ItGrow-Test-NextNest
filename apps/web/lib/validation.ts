import { z } from "zod";

export const BlogFormSchema = z.object({
  blog_title: z.string().min(1, "Blog title is required"),
  blog_category: z.string().min(1, "Blog category is required"),
  blog_content: z.string().min(1, "Blog content is required"),
});
