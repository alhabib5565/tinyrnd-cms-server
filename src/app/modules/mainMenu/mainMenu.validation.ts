import { z } from 'zod';

const createMainMenuValidation = z.object({
  label: z.string().min(1, 'Menu label is required'),
  URL: z.string(),
  dropdown: z
    .array(
      z.object({
        label: z.string().min(1, 'Dropdown item label is required'),
        URL: z.string().min(1, 'Dropdown item URL is required'),
        order: z.number(),
      }),
    )
    .optional(),
});

export const MainMenuValidation = {
  createMainMenuValidation,
};
