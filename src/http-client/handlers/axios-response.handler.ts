import { IResponseHandler } from './response-handler.interface';
import { AxiosResponse } from 'axios';

export class AxiosResponseHandler implements IResponseHandler {
    handleHttpResults(response: any): AxiosResponse {
        return response;
    }
    handleHttpError(error: any): void {
        if((error.message as string).indexOf('status code 404') > 0) {
            window.location.href = '/not-found';        
        }
    }
}