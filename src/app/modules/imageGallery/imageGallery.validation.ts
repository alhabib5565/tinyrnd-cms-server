import { z } from 'zod';

const createImageValidationSchema = z.object({
  caption: z.string().min(1, 'Caption is required'),
});

export const ImageValidation = {
  createImageValidationSchema,
};
