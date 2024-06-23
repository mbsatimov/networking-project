import axios from 'axios';

export const $api = axios.create({
  baseURL: 'http://176.117.79.51:8090/api/v1',
  withCredentials: true,
});
