import * as z from 'zod';

export const taskFormScheme = () =>
  z.object({
    name: z.string().min(1, {
      message: 'Name is required.',
    }),
    description: z.string(),
    priority: z.string().min(1, {
      message: 'Priority is required.',
    }),
  });

export type TaskFormScheme = z.infer<ReturnType<typeof taskFormScheme>>;
