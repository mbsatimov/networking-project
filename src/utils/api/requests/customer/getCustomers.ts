import { $api } from '@/utils/api';

type GetCustomersRequestConfig = RequestConfig | void;

export const getCustomers = (requestConfig?: GetCustomersRequestConfig) =>
  $api.get<Customer[]>('customers', requestConfig?.config);
