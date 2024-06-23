import { useQuery } from '@tanstack/react-query';

import { getProducts } from '@/utils/api';

export const useGetProductsQuery = (settings?: QuerySettings<typeof getProducts>) =>
  useQuery({
    queryKey: ['getProducts'],
    queryFn: () => getProducts({ config: settings?.config }),
    ...settings?.options,
  });
