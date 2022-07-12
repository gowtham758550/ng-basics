import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, retry, throwError } from 'rxjs';
import { HttpLogger } from './http-logger.service';

// enum Loglevel {
//     Error = 0,
// }
@Injectable()
export class NetLogger implements HttpInterceptor {

    constructor(
        private logger: HttpLogger
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = "token returned from a service";
        // clones the request with authorization token
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        // sends the cloned request with added headers
        return next.handle(req)
            .pipe(
                // retry on failure
                retry(2),

                // handle errors
                catchError((error: HttpErrorResponse) => {
                    return throwError(error);
                }),

                // final 
                finalize(() => {
                    const profilingMsg = `${req.method} ${req.urlWithParams}`
                    this.logger.log(profilingMsg);
                })
            )
    }
}