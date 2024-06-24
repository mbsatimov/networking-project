import { $api } from '@/utils/api';

type PostSubContractorParams = Omit<SubContractor, 'id'>;
export type PostSubContractorRequestConfig = RequestConfig<PostSubContractorParams>;

export const postSubContractor = ({ params, config }: PostSubContractorRequestConfig) =>
  $api.post('subContractors', params, config);
