import { z } from "zod";

// Define the schema for form validation
export const contactSchema = z.object({
  name: z.string().min(2, "First name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  // token: z.string().min(1, "Please verify that you are not a robot"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
