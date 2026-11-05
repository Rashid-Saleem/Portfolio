import { z } from "zod";

import { budgetOptions, projectTypeOptions } from "./data";

/**
 * Shared validation schema for the contact form.
 * Imported by BOTH the client form and the `/api/contact` route,
 * so client-side and server-side validation can never drift.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name (at least 2 characters)." })
    .max(80, { message: "Name must be under 80 characters." }),
  email: z
    .email({ message: "Please enter a valid email address." })
    .max(120, { message: "Email must be under 120 characters." }),
  projectType: z.enum(projectTypeOptions, {
    message: "Please select a project type.",
  }),
  budget: z
    .union([z.enum(budgetOptions), z.literal("")])
    .optional(),
  message: z
    .string()
    .trim()
    .min(20, {
      message: "Tell me a little more — at least 20 characters.",
    })
    .max(2000, { message: "Message must be under 2000 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/** Shape the API persists (budget normalized to null when empty) */
export type ContactPayload = {
  name: string;
  email: string;
  projectType: string;
  budget: string | null;
  message: string;
};
