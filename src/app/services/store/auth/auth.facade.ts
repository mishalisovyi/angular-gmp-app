import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { LoginData } from '@app/interfaces/parameters';
import { AuthState, getAuthenticationStatus, getAuthToken, getUserName } from '@app/store/auth';
import { logout, requestLogin, retrieveInitialAuthData } from '@app/store/auth/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  isAuthenticated$ = this.store.select(getAuthenticationStatus);
  userName$ = this.store.select(getUserName);
  authToken$ = this.store.select(getAuthToken);

  constructor(private store: Store<AuthState>) { }

  retrieveInitialAuthData() {
    this.store.dispatch(retrieveInitialAuthData());
  }

  login(loginData: LoginData) {
    this.store.dispatch(requestLogin(loginData));
  }

  logout() {
    this.store.dispatch(logout());
  }
}
