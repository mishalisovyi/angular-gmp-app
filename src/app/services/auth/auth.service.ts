import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

import { environment } from '@env/environment';

import { LoginData } from '@app/interfaces/parameters';
import { HttpResponseCode, LoginResponse } from '@app/interfaces/responses';
import { LoadingService } from '@app/services/loading/loading.service';
import { APP_STORAGE } from '@app/services/storage/storage.service';

export const LOCAL_STORAGE_USERNAME_KEY = 'angular_gmp_app_username';
export const LOCAL_STORAGE_AUTH_TOKEN_KEY = 'angular_gmp_app_auth_token';

const { APIUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated$$: BehaviorSubject<boolean>;
  private userName$$: BehaviorSubject<string>;

  constructor(private http: HttpClient, @Inject(APP_STORAGE) private storage: Storage, private loadingService: LoadingService) {
    this.initAuthSubjects();
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticated$$.asObservable();
  }

  get userName$(): Observable<string> {
    return this.userName$$.asObservable();
  }

  get authToken(): string {
    return this.storage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY) || '';
  }

  login({ login, password }: LoginData) {
    this.loadingService.startLoading();

    return this.http.post<LoginResponse>(`${APIUrl}/auth/login`, { login, password }).pipe(
      catchError(({ error }) => throwError(error)),
      tap(({ token }) => this.setUserDataToLocalStorage(login, token)),
      tap(() => this.emitAuthData()),
      finalize(() => this.loadingService.stopLoading()),
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
    this.storage.setItem(LOCAL_STORAGE_USERNAME_KEY, username);
    this.storage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, token);
  }

  private emitAuthData() {
    this.emitIsAuthenticatedValue();
    this.emitUserInfoValue();
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

  private emitIsAuthenticatedValue() {
    this.isAuthenticated$$.next(this.isLocalStorageContainsUserData());
  }

  private emitUserInfoValue() {
    this.userName$$.next(this.getUserNameFromLocalStorage());
  }
}
