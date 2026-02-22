import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1, "Name is required"),
  neighborhood: z.string().min(1, "Please select your neighborhood"),
  passType: z.enum(["ikon", "epic", "indy", "other", "none"]),
  tripsLastSeason: z.enum(["0-5", "6-10", "11-20", "20+"]),
  depositIntent: z.boolean(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
