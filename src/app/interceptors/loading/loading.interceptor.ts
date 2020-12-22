import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoadingFacade } from '@app/services';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingFacade: LoadingFacade) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingFacade.startLoading();

    return next.handle(request).pipe(finalize(() => this.loadingFacade.stopLoading()));
  }
}
