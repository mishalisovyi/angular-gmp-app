import { createAction, props } from '@ngrx/store';

import { LoginData } from '@app/interfaces/parameters';
import { AuthState } from '@app/store/auth';

export const retrieveInitialAuthData = createAction('[Auth] Retrieve initial data');
export const setAuthData = createAction('[Auth] Set data', props<AuthState>());

export const requestLogin = createAction('[Auth] Login request', props<LoginData>());
export const loginSuccess = createAction('[Auth] Login success', props<AuthState>());
export const loginFailure = createAction('[Auth] Login failure', props<{ errorMessage: string }>());

export const logout = createAction('[Auth] Logout');
