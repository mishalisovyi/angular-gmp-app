import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '@env/environment';

import { LoginData } from '@app/interfaces/parameters';
import { HttpResponseCode, LoginResponse } from '@app/interfaces/responses';

export const LOCAL_STORAGE_USERNAME_KEY = 'angular_gmp_app_username';
export const LOCAL_STORAGE_AUTH_TOKEN_KEY = 'angular_gmp_app_auth_token';

const { APIUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated$$: BehaviorSubject<boolean>;
  private userName$$: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.initAuthSubjects();
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticated$$.asObservable();
  }

  get userName$(): Observable<string> {
    return this.userName$$.asObservable();
  }

  get authToken(): string {
    return localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY) || '';
  }

  login({ login, password }: LoginData) {
    return this.http.post<LoginResponse>(`${APIUrl}/auth/login`, { login, password }).pipe(
      catchError(({ error }) => throwError(error)),
      tap(({ token }) => this.setUserDataToLocalStorage(login, token)),
      tap(() => this.emitAuthData()),
    )
  }

  logout(): Observable<HttpResponseCode> {
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
