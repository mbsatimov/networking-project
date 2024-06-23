import { $api } from '@/utils/api';

type PostProductParams = Omit<Product, 'id'>;
export type PostProductRequestConfig = RequestConfig<PostProductParams>;

export const postProduct = ({ params, config }: PostProductRequestConfig) =>
  $api.post('products', params, config);
