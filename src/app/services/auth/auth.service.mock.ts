import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService, LOCAL_STORAGE_AUTH_TOKEN_KEY, LOCAL_STORAGE_USERNAME_KEY } from '@app/services/auth/auth.service';

const MOCK_LOGIN = 'test';
const MOCK_TOKEN = 'test';

class MockAuthService {
  login() {
    return of({}).pipe(tap(() => this.setUserDataToLocalStorage(MOCK_LOGIN, MOCK_TOKEN)));
  }

  logout() {
    return of({});
  }

  get authToken(): string {
    return localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY) || '';
  }

  private setUserDataToLocalStorage(username: string, token: string) {
    localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, username);
    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, token);
  }
}

export const mockAuthServiceProvider = { provide: AuthService, useClass: MockAuthService }
