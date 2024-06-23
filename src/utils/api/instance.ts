import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const $api = axios.create({
  baseURL: 'http://localhost:8090/api/v1',
  withCredentials: true,
});
