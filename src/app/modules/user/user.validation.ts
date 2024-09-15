import { z } from 'zod';

export const createUserValidationSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' }),
  designation: z
    .string()
    .min(1, { message: 'Designation must be at least 1 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
  role: z
    .string({ required_error: 'Role is required' })
    .min(1, 'Role is required'),
});
export const UserValidation = {
  createUserValidationSchema,
};
