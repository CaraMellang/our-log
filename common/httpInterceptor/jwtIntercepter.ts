import { api } from '@common/httpClient';
// import { localStore } from '@common/storage';
import { AxiosRequestConfig } from 'axios';

export const jwtIntercepter = () => {
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // TODO: api endpoint 정해지면 수정
      const isApi = config.url?.includes('api/v1') || true;
      if (isApi) {
        const accessToken = localStorage.getItem('ACCESS_TOKEN');

        if (accessToken) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`,
          };
        } else {
          // TODO: 이걸 안넣으면 Bearer undefined로 들어가는 문제가 있었음 (로그인 안했을 때) -> 어디선가 헤더 주입해주는 곳이 있는지 확인 필요
          config.headers = {
            ...config.headers,
            Authorization: '',
          };
        }
      }

      return config;
    },
    (err) => {
      return Promise.reject(err);
    },
  );
};
