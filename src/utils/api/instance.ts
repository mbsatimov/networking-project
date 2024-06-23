import axios from 'axios';

export const $api = axios.create({
  baseURL: 'http://classbox.uz/api/v1',
  withCredentials: true,
});
