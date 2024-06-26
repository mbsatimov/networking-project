/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';

import { LOCAL_STORAGE_KEY } from '@/utils/constants';

export const $api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8080/api/v1/',
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN);
  if (!token) return config;
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && error.config && !originalRequest._isRetry) {
      originalRequest._isRetry = true;

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/refresh`, {
          withCredentials: true,
        });

        localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, response.data.accessToken);

        return $api.request(originalRequest);
      } catch {
        localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN);
        window.location.pathname = '/login';
      }
    }

    if (error?.response?.data) throw error.response.data;

    throw error;
  },
);
