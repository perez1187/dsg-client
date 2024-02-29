import axios from 'axios';

export function getAxiosInstance(url = '') {
  const baseURL = url || process.env.REACT_APP_API_URL;

  const baseAxios = axios.create({
    baseURL,
    timeout: 30000,
    timeoutErrorMessage: 'Time out!',
  });

  if (typeof window !== 'undefined') {
    baseAxios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  return baseAxios;
}
