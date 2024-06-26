import { useMutation } from '@tanstack/react-query';

import type { PutCompleteTaskRequestConfig } from '@/utils/api';
import { putCompleteTask } from '@/utils/api';

export const usePutCompleteTaskMutation = (
  settings?: MutationSettings<PutCompleteTaskRequestConfig, typeof putCompleteTask>,
) =>
  useMutation({
    mutationKey: ['putCompleteTask'],
    mutationFn: ({ params, config }) =>
      putCompleteTask({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
