import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';

import { throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AppRoutePath, ErrorMessage } from '@app/enums';
import { AuthService } from '@app/services';
import { loginStart, logoutStart, retrieveInitialAuthData, setAuthData } from '@app/store/auth/actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router, private authService: AuthService) { }

  @Effect()
  retrieveInitialAuthData$ = this.actions$.pipe(
    ofType(retrieveInitialAuthData),
    map(() => setAuthData(this.authService.retrieveInitialAuthData())),
  );

  loginStart$ = createEffect(() => {
    let userName = '';
    let authToken = '';

    return this.actions$.pipe(
      ofType(loginStart),
      switchMap(({ login, password }) => {
        userName = login;

        return this.authService.login({ login, password })
      }),
      catchError(({ error }) => {
        alert(`${ErrorMessage.Login}: ${error}`);

        return throwError(error);
      }),
      tap(({ token }) => authToken = token),
      tap(() => this.router.navigate([ AppRoutePath.Courses ])),
      map(() => setAuthData({ isAuthenticated: true, userName, authToken })),
    );
  })

  @Effect()
  logoutStart$ = this.actions$.pipe(
    ofType(logoutStart),
    tap(() => this.authService.logout()),
    tap(() => this.router.navigate([ AppRoutePath.Login ])),
    map(() => setAuthData({ isAuthenticated: false, userName: '', authToken: '' })),
  );
}
