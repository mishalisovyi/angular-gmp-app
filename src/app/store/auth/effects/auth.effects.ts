import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AppRoutePath, ErrorMessage } from '@app/enums';
import { AuthService } from '@app/services';
import { loginFailure, loginSuccess, logout, requestLogin, retrieveInitialAuthData, setAuthData } from '@app/store/auth/actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router, private authService: AuthService) { }

  @Effect()
  retrieveInitialAuthData$ = this.actions$.pipe(
    ofType(retrieveInitialAuthData),
    map(() => setAuthData(this.authService.retrieveInitialAuthData())),
  );

  @Effect()
  loginRequest$ = this.actions$.pipe(
    ofType(requestLogin),
    switchMap(({ login: userName, password }) => this.authService.login({ login: userName, password }).pipe(
      map(({ token: authToken }) => loginSuccess({ userName, authToken })),
      catchError(({ error }) => of(loginFailure({ errorMessage: `${ErrorMessage.Login}: ${error}` }))),
    )),
  );

  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType(loginSuccess),
    tap(() => this.router.navigate([ AppRoutePath.Courses ])),
    map(authData => setAuthData(authData)),
  );

  @Effect({ dispatch: false })
  loginFailure$ = this.actions$.pipe(
    ofType(loginFailure),
    tap(({ errorMessage }) => alert(errorMessage)),
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(logout),
    tap(() => this.authService.logout()),
    tap(() => this.router.navigate([ AppRoutePath.Login ])),
    map(() => setAuthData({ userName: '', authToken: '' })),
  );
}
