import { IHttpInterceptor } from './interceptors/http-interceptor.interface';

export function initializeHttpClient(httpInterceptor: IHttpInterceptor) {
    httpInterceptor.requestInterceptor();
    httpInterceptor.responseInterceptor();
}