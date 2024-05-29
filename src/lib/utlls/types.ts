import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  queryType: z.string({ message: "Please select a query type" }),
  message: z.string().min(1, { message: "This field is required" }),
  terms: z.boolean().refine((val) => val === true, {
    message: "To submit this form, please consent to being contacted",
  }),
});

export type FormFields = z.infer<typeof formSchema>;
