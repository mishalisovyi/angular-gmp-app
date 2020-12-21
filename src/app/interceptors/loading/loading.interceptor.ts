import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoadingState } from '@app/store/loading';
import { startLoading, stopLoading } from '@app/store/loading/actions/loading.actions';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private store: Store<LoadingState>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.store.dispatch(startLoading())

    return next.handle(request).pipe(finalize(() => this.store.dispatch(stopLoading())));
  }
}
