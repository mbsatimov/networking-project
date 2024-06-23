import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const $api = axios.create({
  baseURL: 'http://176.117.79.51/api/v1',
  withCredentials: true,
});
