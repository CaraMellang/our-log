import { REFRESH_TOKEN, ACCESS_TOKEN } from '@common/constant';
import { api, POST } from '@common/httpClient';
// import { localStore } from '@common/storage';
import { AxiosError } from 'axios';
import { STATUS_CODE } from 'types/fetch';

interface ErrorResponse {
  success: boolean;
  status: number;
  message: string;
  data: string | object;
}

interface Response {
  config: any;
  data: ErrorResponse;
  headers: any;
  request: any;
  status: number;
  statusText: string;
}

export const tokenInterceptor = () => {
  api.interceptors.response.use(
    (response) => response,
    async (err: AxiosError<Response>) => {
      const { response } = err;
      if (response?.status === STATUS_CODE.ACCESS_TOKEN_EXPIRED) {
        const authorization = localStorage.getItem(ACCESS_TOKEN);
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);

        if (!!authorization && !!refreshToken) {
          const res = await getNewToken(authorization, refreshToken);
          const newAccessToken = res.data.accessToken;
          localStorage.setItem(ACCESS_TOKEN, newAccessToken);
        }
      } else {
        return Promise.reject(err);
      }
    },
  );

  const getNewToken = async (accessToken: string, refreshToken: string) => {
    return await POST(`/auth/token/refresh`, {
      accessToken: `Bearer ${accessToken}`,
      refreshToken: refreshToken,
    }).catch((err) => {
      if (err.status === STATUS_CODE.REFRESH_TOKEN_EXPIRED) {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
      }

      return Promise.reject(err);
    });
  };
};
