import { $api } from '@/utils/api';

type PostGenContractorParams = Omit<GenContractor, 'id'>;
export type PostGenContractorRequestConfig = RequestConfig<PostGenContractorParams>;

export const postGenContractor = ({ params, config }: PostGenContractorRequestConfig) =>
  $api.post('genContractors', params, config);
