import { $api } from '@/utils/api';

type PostCustomerParams = Omit<Customer, 'id'>;
export type PostCustomerRequestConfig = RequestConfig<PostCustomerParams>;

export const postCustomer = ({ params, config }: PostCustomerRequestConfig) =>
  $api.post('customers', params, config);
