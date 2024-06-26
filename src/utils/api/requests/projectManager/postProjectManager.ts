import { $api } from '@/utils/api';

type PostProjectManagerParams = Omit<ProjectManager, 'id'>;
export type PostProjectManagerRequestConfig = RequestConfig<PostProjectManagerParams>;

export const postProjectManager = ({ params, config }: PostProjectManagerRequestConfig) =>
  $api.post('projectManagers', params, config);
