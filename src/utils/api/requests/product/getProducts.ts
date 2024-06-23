import { $api } from '@/utils/api';

type GetProductsRequestConfig = RequestConfig | void;

export const getProducts = (requestConfig?: GetProductsRequestConfig) =>
  $api.get<Product[]>('products', requestConfig?.config);
