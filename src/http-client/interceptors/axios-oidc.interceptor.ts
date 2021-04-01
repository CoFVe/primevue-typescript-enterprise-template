/* eslint-disable no-prototype-builtins */
import { IHttpInterceptor } from './http-interceptor.interface';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { store } from '@/store';
import { AxiosResponseHandler } from '../handlers/axios-response.handler';

export class AxiosOidcInterceptor implements IHttpInterceptor {
    constructor(private readonly axiosResponseHandler: AxiosResponseHandler){}

    requestInterceptor(): void {
        axios.interceptors.request.use((request: AxiosRequestConfig) => {
            request.params = {
              ...request.params,
              //'api-version': env.apiVersion
            };
            try {
              const tokenStored = (store as any).state.oidcStore.access_token;
              if (tokenStored) {
                request.headers.Authorization = `Bearer ${tokenStored}`;
              }
            } catch {
              return request;
            }
            
            return request;
          });
    }
    responseInterceptor() {
        axios.interceptors.response.use((response: AxiosResponse) => {
            return this.axiosResponseHandler.handleHttpResults(response);
          }, (error: any) => {
            if ( error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
                return Promise.reject(error);
            }
            this.axiosResponseHandler.handleHttpError(error);
            return Promise.reject(error);
          });
    }

}