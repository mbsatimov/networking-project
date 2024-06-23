import { $api } from '@/utils/api';

type GetEmployeesRequestConfig = RequestConfig | void;

export const getEmployees = (requestConfig?: GetEmployeesRequestConfig) =>
  $api.get<Employee[]>('employees', requestConfig?.config);
