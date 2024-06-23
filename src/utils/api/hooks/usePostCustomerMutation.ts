import { useMutation } from '@tanstack/react-query';

import type { PostCustomerRequestConfig } from '@/utils/api';
import { postCustomer } from '@/utils/api';

export const usePostCustomerMutation = (
  settings?: MutationSettings<PostCustomerRequestConfig, typeof postCustomer>,
) =>
  useMutation({
    mutationKey: ['postCustomer'],
    mutationFn: ({ params, config }) =>
      postCustomer({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
