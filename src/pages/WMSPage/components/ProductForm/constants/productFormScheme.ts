import * as z from 'zod';

export const productFormScheme = () =>
  z.object({
    name: z.string().min(1, {
      message: 'Name is required.',
    }),
    description: z.string().nullable(),
    quantity: z.string().refine((val) => +val > 0, {
      message: 'Quantity should be greater than 0.',
    }),
    phoneNumber: z
      .string()
      .min(13, 'Invalid phone number')
      .refine((val) => val.startsWith('+998'), {
        message: 'Phone number must start with +998.',
      }),
    price: z.string().min(1, { message: 'Price is required' }),
  });

export type ProductFormScheme = z.infer<ReturnType<typeof productFormScheme>>;
