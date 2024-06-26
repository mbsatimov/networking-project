import { useMutation } from '@tanstack/react-query';

import type { PostProjectManagerRequestConfig } from '@/utils/api';
import { postProjectManager } from '@/utils/api';

export const usePostProjectManagerMutation = (
  settings?: MutationSettings<PostProjectManagerRequestConfig, typeof postProjectManager>,
) =>
  useMutation({
    mutationKey: ['postProjectManager'],
    mutationFn: ({ params, config }) =>
      postProjectManager({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
