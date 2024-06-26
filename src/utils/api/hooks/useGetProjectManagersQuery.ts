import { useQuery } from '@tanstack/react-query';

import { getProjectManagers } from '@/utils/api';

export const useGetProjectManagersQuery = (settings?: QuerySettings<typeof getProjectManagers>) =>
  useQuery({
    queryKey: ['getProjectManagers'],
    queryFn: () => getProjectManagers({ config: settings?.config }),
    ...settings?.options,
  });
