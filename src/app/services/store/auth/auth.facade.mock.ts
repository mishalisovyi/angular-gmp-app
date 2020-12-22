import { of } from 'rxjs';

import { AuthFacade } from './auth.facade';

const mockAuthFacade = (isAuthenticated: boolean) => ({
  isAuthenticated$: of(isAuthenticated),
  userName$: of('test username'),
  authToken$: of('test auth token'),

  retrieveInitialAuthData() { },

  login() { },

  logout() { },
})

export const mockAuthFacadeProviderForUser = { provide: AuthFacade, useValue: mockAuthFacade(true) }
export const mockAuthFacadeProviderForGuest = { provide: AuthFacade, useValue: mockAuthFacade(false) }
