import { api } from '@common/httpClient';
import { HttpError } from '@common/errors';
import { AxiosResponse } from 'axios';

export const responseInterceptor = () => {
  api.interceptors.response.use(
    (response: AxiosResponse<any, any>): AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | any => {
      if ((!!response && response.status < 200) || response.status > 299) {
        return HttpError.fromRequest(response);
      }

      return response;
    },
  );
};
