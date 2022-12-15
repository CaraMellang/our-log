import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { jwtIntercepter, responseInterceptor, tokenInterceptor } from '@common/httpInterceptor';

/**
 *  * Basic
 *  * Security scheme type:  HTTP
 *  * HTTP Authorization Scheme  basic
 */

export const axiosHeaders = {
  'Api-Key': 'bWlyaW06MTIzNA==',
  withCredentials: true,
};

export const axiosSetting = {
  baseURL: process.env.BASE_URL,
  scheme: process.env.NEXT_PUBLIC_SCHEME,
  host: process.env.NEXT_PUBLIC_HOST,
  port: process.env.NEXT_PUBLIC_PORT,
  server() {
    // return `${this.scheme}://${this.host}${this.port ? `:${this.port}` : ''}/api/v1`;
    return `${this.scheme}://${this.host}${this.port ? `:${this.port}` : ''}/api/v1`;
  },
};

export const api = Axios.create({
  baseURL: axiosSetting.server(),
  headers: axiosHeaders,
});
triggerInterceptors();

export const GET = async <T = any>(url: string, { params = {}, headers = {} } = {}): Promise<T> => {
  try {
    const response = await api.get(url, { params, headers });
    return response.data;
  } catch (error: any) {
    return handleError(error);
  }
};

export const POST = async <T = any>(url: string, data: object = {}, config: AxiosRequestConfig = {}) => {
  try {
    const response = await api.post<T>(url, data, config);
    return response.data;
  } catch (error: any) {
    return handleError(error);
  }
};

export const POST_TO_ALL_DATA = async <T = any>(url: string, data: object = {}, config: AxiosRequestConfig = {}) => {
  try {
    const response = await api.post<T>(url, data, config);
    return response;
  } catch (error: any) {
    return handleError(error);
  }
};

export const PUT = async <T = any>(url: string, data: object = {}, { params = {}, headers = {} } = {}) => {
  try {
    const response = await api.put<T>(url, data, { params, headers });
    return response.data;
  } catch (error: any) {
    return handleError(error);
  }
};

export const DELETE = async (url: string, data: object = {}) => {
  try {
    const response = await api.delete(url, { data });
    return response.data;
  } catch (error: any) {
    return handleError(error);
  }
};

const handleError = (error: AxiosError | any) => {
  if (error.response) {
    throw error.response;
  }

  throw error;
};

function triggerInterceptors() {
  // request interceptors
  jwtIntercepter();

  // response interceptors
  responseInterceptor();
  tokenInterceptor();
}
