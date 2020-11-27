import { of } from 'rxjs';

import { AuthService } from '@app/services/auth/auth.service';

class MockAuthService {
  login() {
    return of({});
  }

  logout() {
    return of({});
  }

  get isAuthenticated$() {
    return of(true);
  }
}

export const mockAuthServiceProvider = { provide: AuthService, useClass: MockAuthService }
