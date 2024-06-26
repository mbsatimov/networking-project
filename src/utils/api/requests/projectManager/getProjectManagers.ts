import { $api } from '@/utils/api';

type GetProjectManagerRequestConfig = RequestConfig | void;

export const getProjectManagers = (requestConfig?: GetProjectManagerRequestConfig) =>
  $api.get<SubContractor[]>('projectManager', requestConfig?.config);
