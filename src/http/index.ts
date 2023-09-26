import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:537';

const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
});

$api.interceptors.response.use((config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;

      try {
        const response = await axios.get(`${BASE_URL}/refresh`, { withCredentials: true });

        localStorage.setItem('token', response.data.accessToken);

        return $api.request(originalRequest);
      } catch (e) {
        console.log('Not authorized');
      }
    }

    throw error;
  });

export default $api;
