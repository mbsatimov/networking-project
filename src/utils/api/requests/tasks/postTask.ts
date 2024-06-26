import { $api } from '@/utils/api';

type PostTaskParams = Omit<Task, 'id' | 'ownerId' | 'managerId' | 'isDone'>;
export type PostTaskRequestConfig = RequestConfig<PostTaskParams>;

export const postTask = ({ params, config }: PostTaskRequestConfig) =>
  $api.post('tasks', params, config);
