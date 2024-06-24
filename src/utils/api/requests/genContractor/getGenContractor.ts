import { $api } from '@/utils/api';

type GetGenContractorsRequestConfig = RequestConfig | void;

export const getGenContractors = (requestConfig?: GetGenContractorsRequestConfig) =>
  $api.get<GenContractor[]>('genContractors', requestConfig?.config);
