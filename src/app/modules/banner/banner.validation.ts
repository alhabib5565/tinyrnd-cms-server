import { z } from 'zod';
// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
// const ACCEPTED_IMAGE_TYPES = [
//   'image/jpeg',
//   'image/jpg',
//   'image/png',
//   'image/webp',
// ];

export const createBannerValidationSchema = z.object({
  //   image: z
  //     .instanceof(File, { message: 'Please select an image file.' })
  //     .refine(file => file.size <= MAX_FILE_SIZE, {
  //       message:
  //         'The image is too large. Please choose an image smaller than 5MB',
  //     })
  //     .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
  //       message: 'Please upload a valid image file (JPEG, PNG, or WebP).',
  //     }),
  title: z
    .string({ required_error: 'Title is required.' })
    .min(5, 'Title must be at least 5 characters long.')
    .max(50, 'Title must not exceed 50 characters.'),
});

export const BannerValidation = {
  createBannerValidationSchema,
};
