import { useQuery } from '@tanstack/react-query';

import { getCustomers } from '@/utils/api';

export const useGetCustomersQuery = (settings?: QuerySettings<typeof getCustomers>) =>
  useQuery({
    queryKey: ['getCustomers'],
    queryFn: () => getCustomers({ config: settings?.config }),
    ...settings?.options,
  });
