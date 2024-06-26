import { $api } from '@/utils/api';

type GetTasksRequestConfig = RequestConfig | void;

export const getTasks = (requestConfig?: GetTasksRequestConfig) =>
  $api.get<Task[]>('tasks', requestConfig?.config);
