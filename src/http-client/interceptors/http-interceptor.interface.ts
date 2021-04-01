export interface IHttpInterceptor {
    requestInterceptor(): void;
    responseInterceptor(): void;
}