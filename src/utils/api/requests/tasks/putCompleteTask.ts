import { $api } from '@/utils/api';

type PutCompleteTaskParams = Pick<Task, 'id'>;
export type PutCompleteTaskRequestConfig = RequestConfig<PutCompleteTaskParams>;

export const putCompleteTask = ({ params, config }: PutCompleteTaskRequestConfig) =>
  $api.put('tasks', params, config);
