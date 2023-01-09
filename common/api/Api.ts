/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface SignUpRequestDto {
  /**
   * 이메일
   * @example "exsample@ex.com"
   */
  email: string;
  /**
   * 패스워드
   * @example "1234Asdf!@#$"
   */
  password: string;
  /**
   * 유저네임
   * @example "NickName"
   */
  username: string;
  /**
   * 폰번호
   * @example "01012345678"
   */
  phone: string;
  /**
   * sms동의여부
   * @example "Y"
   */
  smsYn: string;
  /**
   * 페북 내 사이트
   * @example "string"
   */
  facebookHref: string;
  /**
   * 페북 내 사이트
   * @example "string"
   */
  instagramHref: string;
  /**
   * 개인 사이트
   * @example "h t t p s : / / individual.com"
   */
  individualHref: string;
}

export type SignInRequestDto = object;

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title 고양이 좋아요
 * @version 1.0
 * @contact
 *
 * 저는 고양이파입니다.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name AppControllerGetHello
   * @request GET:/
   */
  appControllerGetHello = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: 'GET',
      ...params,
    });

  api = {
    /**
     * No description
     *
     * @name SwaggerApiDocsControllerGetSwaggerApiDocs
     * @request GET:/api/v1/swagger/api-docs
     */
    swaggerApiDocsControllerGetSwaggerApiDocs: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/swagger/api-docs`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description 전체 게시판을 페이지네이션으로 가져옵니다. size는 한번에 가져올 페이지엘리먼트의 수를 의미합니다.
     *
     * @tags 게시판 API
     * @name PostControllerGetAll
     * @summary 게시판 API
     * @request GET:/api/v1/post/all
     */
    postControllerGetAll: (
      query: {
        page: number;
        size: number;
      },
      data: any,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/api/v1/post/all`,
        method: 'GET',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 게시판을 생성합니다. title과 content가 필요합니다.
     *
     * @tags 게시판 API
     * @name PostControllerCreate
     * @summary 게시판 API
     * @request POST:/api/v1/post/create
     * @secure
     */
    postControllerCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/v1/post/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 이메일과 비밀번호를 받아서 회원가입을 진행합니다. 회원가입 완료시 true가 반환됩니다.
     *
     * @tags 유저 인증 API
     * @name AuthControllerSignUp
     * @summary 회원가입 API
     * @request POST:/api/v1/auth/signup
     */
    authControllerSignUp: (data: SignUpRequestDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/v1/auth/signup`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 유저 인증 API
     * @name AuthControllerSignIn
     * @request POST:/api/v1/auth/signin
     */
    authControllerSignIn: (data: SignInRequestDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/auth/signin`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 유저 인증 API
     * @name AuthControllerVerifyUser
     * @request POST:/api/v1/auth/verify
     * @secure
     */
    authControllerVerifyUser: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/auth/verify`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 유저 인증 API
     * @name AuthControllerOauthGoogle
     * @request POST:/api/v1/auth/oauth/google
     * @secure
     */
    authControllerOauthGoogle: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/auth/oauth/google`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 유저 인증 API
     * @name AuthControllerOauthNaver
     * @request POST:/api/v1/auth/oauth/naver
     * @secure
     */
    authControllerOauthNaver: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/auth/oauth/naver`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 유저 인증 API
     * @name AuthControllerPostTest
     * @request POST:/api/v1/auth/test
     */
    authControllerPostTest: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/auth/test`,
        method: 'POST',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 유저 인증 API
     * @name UserControllerGetMyInfo
     * @request GET:/api/v1/user/myinfo
     * @secure
     */
    userControllerGetMyInfo: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/user/myinfo`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
}
