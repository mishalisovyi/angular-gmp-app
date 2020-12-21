import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { AuthState, getAuthToken } from '@app/store/auth';

export const AUTH_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<AuthState>) { }

  private addAuthHeaders(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      headers: !!token
        ? request.headers.set(AUTH_HEADER_KEY, `Bearer ${token}`)
        : request.headers,
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(getAuthToken).pipe(
      take(1),
      switchMap(token => next.handle(this.addAuthHeaders(request, token)),
    ));
  }
}
