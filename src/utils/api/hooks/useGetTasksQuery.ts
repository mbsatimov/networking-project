import { useQuery } from '@tanstack/react-query';

import { getTasks } from '@/utils/api';

export const useGetTasksQuery = (settings?: QuerySettings<typeof getTasks>) =>
  useQuery({
    queryKey: ['getTasks'],
    queryFn: () => getTasks({ config: settings?.config }),
    ...settings?.options,
  });
