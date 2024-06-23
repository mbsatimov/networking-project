import * as z from 'zod';

export const employeeFormScheme = () =>
  z.object({
    name: z.string().min(1, {
      message: 'Name is required.',
    }),
    surname: z.string().min(1, {
      message: 'Name is required.',
    }),
    phoneNumber: z
      .string()
      .min(13, 'Invalid phone number')
      .refine((val) => val.startsWith('+998'), {
        message: 'Phone number must start with +998.',
      }),
    department: z.string(),
  });

export type EmployeeFormScheme = z.infer<ReturnType<typeof employeeFormScheme>>;