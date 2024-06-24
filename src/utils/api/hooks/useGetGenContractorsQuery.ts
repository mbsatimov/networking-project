import { useQuery } from '@tanstack/react-query';

import { getGenContractors } from '@/utils/api';

export const useGetGenContractorsQuery = (settings?: QuerySettings<typeof getGenContractors>) =>
  useQuery({
    queryKey: ['getGenContractors'],
    queryFn: () => getGenContractors({ config: settings?.config }),
    ...settings?.options,
  });
