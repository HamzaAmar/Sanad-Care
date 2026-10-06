import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.email("Invalid email address").max(254),
  subject: z.string().trim().min(2, "Subject must be at least 2 characters").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
