import { useMutation } from '@tanstack/react-query';

import type { PostSubContractorRequestConfig } from '@/utils/api';
import { postSubContractor } from '@/utils/api';

export const usePostSubContractorMutation = (
  settings?: MutationSettings<PostSubContractorRequestConfig, typeof postSubContractor>,
) =>
  useMutation({
    mutationKey: ['postSubContractor'],
    mutationFn: ({ params, config }) =>
      postSubContractor({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
