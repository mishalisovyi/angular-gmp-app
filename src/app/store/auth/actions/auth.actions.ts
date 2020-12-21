import { createAction, props } from '@ngrx/store';

import { LoginData } from '@app/interfaces/parameters';
import { AuthState } from '@app/store/auth';

export const retrieveInitialAuthData = createAction('[Auth] Retrieve initial data');
export const setAuthData = createAction('[Auth] Set data', props<AuthState>());
export const loginStart = createAction('[Auth] Login start', props<LoginData>());
export const logoutStart = createAction('[Auth] Logout start');
