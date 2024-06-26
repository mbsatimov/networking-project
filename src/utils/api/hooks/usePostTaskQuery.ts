import { useMutation } from '@tanstack/react-query';

import type { PostTaskRequestConfig } from '@/utils/api';
import { postTask } from '@/utils/api';

export const usePostTaskMutation = (
  settings?: MutationSettings<PostTaskRequestConfig, typeof postTask>,
) =>
  useMutation({
    mutationKey: ['postTask'],
    mutationFn: ({ params, config }) =>
      postTask({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
