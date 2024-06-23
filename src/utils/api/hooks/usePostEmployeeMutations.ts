import { useMutation } from '@tanstack/react-query';

import type { PostEmployeeRequestConfig } from '@/utils/api';
import { postEmployee } from '@/utils/api';

export const usePostEmployeeMutation = (
  settings?: MutationSettings<PostEmployeeRequestConfig, typeof postEmployee>,
) =>
  useMutation({
    mutationKey: ['postEmployee'],
    mutationFn: ({ params, config }) =>
      postEmployee({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
