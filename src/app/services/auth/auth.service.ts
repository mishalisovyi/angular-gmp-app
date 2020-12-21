import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';

import { environment } from '@env/environment';

import { LoginData } from '@app/interfaces/parameters';
import { LoginResponse } from '@app/interfaces/responses';
import { APP_STORAGE } from '@app/services/storage/storage.service';
import { AuthState } from '@app/store/auth';

export const LOCAL_STORAGE_USERNAME_KEY = 'angular_gmp_app_username';
export const LOCAL_STORAGE_AUTH_TOKEN_KEY = 'angular_gmp_app_auth_token';

const { APIUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(APP_STORAGE) private storage: Storage, private http: HttpClient) { }

  login({ login, password }: LoginData) {
    return this.http.post<LoginResponse>(`${APIUrl}/auth/login`, { login, password }).pipe(
      tap(({ token }) => this.setUserDataToLocalStorage(login, token)),
    )
  }

  logout() {
    this.removeUserDataFromLocalStorage();
  }

  retrieveInitialAuthData(): AuthState {
    return {
      isAuthenticated: this.isLocalStorageContainsUserData(),
      userName: this.getUserNameFromLocalStorage(),
      authToken: this.getAuthTokenFromLocalStorage(),
    }
  }

  private setUserDataToLocalStorage(username: string, token: string) {
    this.storage.setItem(LOCAL_STORAGE_USERNAME_KEY, username);
    this.storage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, token);
  }

  private removeUserDataFromLocalStorage() {
    this.storage.removeItem(LOCAL_STORAGE_USERNAME_KEY);
    this.storage.removeItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
  }

  private isLocalStorageContainsUserData(): boolean {
    return !!this.storage.getItem(LOCAL_STORAGE_USERNAME_KEY) && !!this.storage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
  }

  private getUserNameFromLocalStorage(): string {
    return this.storage.getItem(LOCAL_STORAGE_USERNAME_KEY);
  }

  private getAuthTokenFromLocalStorage() {
    return this.storage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
  }
}
