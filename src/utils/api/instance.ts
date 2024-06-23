import axios from 'axios';

export const $api = axios.create({
  baseURL: 'https://mclass.uz/api/v1',
  withCredentials: true,
});
