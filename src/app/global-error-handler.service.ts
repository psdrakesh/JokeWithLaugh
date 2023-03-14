import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler{

    constructor(){}

    handleError(error: Error|HttpErrorResponse): void {
        console.log('GlobalHerrorHandlerService')
        console.log(error);
        
    }
}