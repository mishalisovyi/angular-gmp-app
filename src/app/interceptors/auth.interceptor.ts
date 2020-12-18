import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '@app/services/auth/auth.service';

export const AUTH_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  private decorateRequestWithAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      headers: !!this.authService.authToken
        ? request.headers.set(AUTH_HEADER_KEY, `Bearer ${this.authService.authToken}`)
        : request.headers,
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.decorateRequestWithAuthHeader(request));
  }
}
