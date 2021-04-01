export interface IResponseHandler {
    handleHttpResults(response: any, request?: any): any;
    handleHttpError(error: any): void;
}