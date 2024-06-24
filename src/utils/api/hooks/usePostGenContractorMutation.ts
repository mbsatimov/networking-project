import { useMutation } from '@tanstack/react-query';

import type { PostGenContractorRequestConfig } from '@/utils/api';
import { postGenContractor } from '@/utils/api';

export const usePostGenContractorMutation = (
  settings?: MutationSettings<PostGenContractorRequestConfig, typeof postGenContractor>,
) =>
  useMutation({
    mutationKey: ['postGenContractor'],
    mutationFn: ({ params, config }) =>
      postGenContractor({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
