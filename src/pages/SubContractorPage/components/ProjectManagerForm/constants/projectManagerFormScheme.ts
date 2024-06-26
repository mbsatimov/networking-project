import * as z from 'zod';

export const projectManagerFormScheme = () =>
  z.object({
    name: z.string().min(1, {
      message: 'Name is required.',
    }),
    phoneNumber: z
      .string()
      .min(13, 'Invalid phone number')
      .refine((val) => val.startsWith('+998'), {
        message: 'Phone number must start with +998.',
      }),
    password: z.string().min(8, 'Password must be at least 8 characters'),
  });

export type ProjectManagerFormScheme = z.infer<ReturnType<typeof projectManagerFormScheme>>;
