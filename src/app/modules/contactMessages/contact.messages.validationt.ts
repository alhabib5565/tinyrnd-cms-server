import { z } from 'zod';

export const contactMessageValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  contactNumber: z.string(),
  message: z.string().min(1, 'Message is required'),
});
