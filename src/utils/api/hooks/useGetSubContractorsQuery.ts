import { useQuery } from '@tanstack/react-query';

import { getSubContractors } from '@/utils/api';

export const useGetSubContractorsQuery = (settings?: QuerySettings<typeof getSubContractors>) =>
  useQuery({
    queryKey: ['getSubContractors'],
    queryFn: () => getSubContractors({ config: settings?.config }),
    ...settings?.options,
  });
