import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoadingService } from '@app/services/loading/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.startLoading();

    return next.handle(request).pipe(finalize(() => this.loadingService.stopLoading()));
  }
}