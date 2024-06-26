import { $api } from '@/utils/api';

type PostLoginParams = { phoneNumber: string; password: string };
export type PostLoginRequestConfig = RequestConfig<PostLoginParams>;

export const postLogin = ({ params, config }: PostLoginRequestConfig) =>
  $api.post<{ token: string }>('auth/login', params, config);
