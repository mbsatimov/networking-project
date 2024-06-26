import * as z from 'zod';

export const loginFormScheme = () =>
  z.object({
    phoneNumber: z
      .string()
      .min(13, 'Invalid phone number')
      .refine((val) => val.startsWith('+998'), {
        message: 'Phone number must start with +998.',
      }),
    password: z.string().min(5, 'Password must be at least 5 characters'),
  });

export type LoginFormScheme = z.infer<ReturnType<typeof loginFormScheme>>;
