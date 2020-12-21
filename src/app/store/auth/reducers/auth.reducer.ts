import { createReducer, on } from '@ngrx/store';

import * as AuthActions from '@app/store/auth/actions/auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  isAuthenticated: boolean,
  userName: string,
  authToken: string,
}

export const initialState: AuthState = {
  isAuthenticated: false,
  userName: '',
  authToken: '',
};

const handleSetAuthData = ({} = initialState, payload: AuthState) => payload;

export const authReducer = createReducer(
  initialState,

  on(AuthActions.setAuthData, handleSetAuthData),
);

export const selectAuthenticationStatus = ({ isAuthenticated }: AuthState) => isAuthenticated;
export const selectUserName = ({ userName }: AuthState) => userName;
export const selectAuthToken = ({ authToken }: AuthState) => authToken;
