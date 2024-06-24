import { $api } from '@/utils/api';

type GetSubContractorsRequestConfig = RequestConfig | void;

export const getSubContractors = (requestConfig?: GetSubContractorsRequestConfig) =>
  $api.get<SubContractor[]>('subContractors', requestConfig?.config);
