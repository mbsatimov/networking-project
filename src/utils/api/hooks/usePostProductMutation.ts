import { useMutation } from '@tanstack/react-query';

import type { PostProductRequestConfig } from '@/utils/api';
import { postProduct } from '@/utils/api';

export const usePostProductMutation = (
  settings?: MutationSettings<PostProductRequestConfig, typeof postProduct>,
) =>
  useMutation({
    mutationKey: ['postProduct'],
    mutationFn: ({ params, config }) =>
      postProduct({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
