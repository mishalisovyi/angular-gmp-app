import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { HttpResponse } from '@app/interfaces/helpers/status-code.interface';
import { LoginData } from '@app/interfaces/parameters/login-data.interface';

export const LOCAL_STORAGE_USERNAME_KEY = 'angular_gmp_app_username';
export const LOCAL_STORAGE_AUTH_TOKEN_KEY = 'angular_gmp_app_auth_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated$$: BehaviorSubject<boolean>;
  private userName$$: BehaviorSubject<string>;

  constructor() {
    this.initAuthSubjects();
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticated$$.asObservable();
  }

  get userName$(): Observable<string> {
    return this.userName$$.asObservable();
  }

  login({ username, password }: LoginData): Observable<HttpResponse> {
    this.setUserDataToLocalStorage(username, this.generateFakeToken(username, password));
    this.emitAuthData();

    return of({ statusCode: 200 });
  }

  logout(): Observable<HttpResponse> {
    this.removeUserDataFromLocalStorage();
    this.emitAuthData();

    return of({ statusCode: 200 });
  }

  private initAuthSubjects() {
    this.isAuthenticated$$ = new BehaviorSubject<boolean>(this.isLocalStorageContainsUserData());
    this.userName$$ = new BehaviorSubject<string>(this.getUserNameFromLocalStorage());
  }

  private setUserDataToLocalStorage(username: string, token: string) {
    localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, username);
    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, token);
  }

  private generateFakeToken(username: string, password: string): string {
    return btoa(`${username}.${password}`);
  }

  private emitAuthData() {
    this.emitIsAuthenticatedValue();
    this.emitUserInfoValue();
  }

  private removeUserDataFromLocalStorage() {
    localStorage.removeItem(LOCAL_STORAGE_USERNAME_KEY);
    localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
  }

  private isLocalStorageContainsUserData(): boolean {
    return !!localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY) && !!localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
  }

  private getUserNameFromLocalStorage(): string {
    return localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY);
  }

  private emitIsAuthenticatedValue() {
    this.isAuthenticated$$.next(this.isLocalStorageContainsUserData());
  }

  private emitUserInfoValue() {
    this.userName$$.next(this.getUserNameFromLocalStorage());
  }
}
