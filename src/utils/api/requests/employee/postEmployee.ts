import { $api } from '@/utils/api';

type PostEmployeeParams = Omit<Employee, 'id'>;
export type PostEmployeeRequestConfig = RequestConfig<PostEmployeeParams>;

export const postEmployee = ({ params, config }: PostEmployeeRequestConfig) =>
  $api.post('employees', params, config);
