import { useQuery } from '@tanstack/react-query';

import { getEmployees } from '@/utils/api';

export const useGetEmployeesQuery = (settings?: QuerySettings<typeof getEmployees>) =>
  useQuery({
    queryKey: ['getEmployees'],
    queryFn: () => getEmployees({ config: settings?.config }),
    ...settings?.options,
  });
