import { createFeatureSelector, createSelector } from '@ngrx/store';

import { authFeatureKey, authReducer, AuthState, selectAuthenticationStatus, selectAuthToken, selectUserName } from '@app/store/auth/reducers/auth.reducer';

/**
 * Selectors
 */
const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);
export const getAuthenticationStatus = createSelector(selectAuthState, selectAuthenticationStatus);
export const getUserName = createSelector(selectAuthState, selectUserName);
export const getAuthToken = createSelector(selectAuthState, selectAuthToken);

/**
 * Reducers
 */
export { authReducer };

/**
 * State interface
 */
export { AuthState };

/**
 * Feature key
 */
export { authFeatureKey };
