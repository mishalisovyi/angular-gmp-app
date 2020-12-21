import { ActionReducerMap } from '@ngrx/store';

import { authFeatureKey, authReducer, AuthState } from '@app/store/auth';
import { loadingFeatureKey, loadingReducer, LoadingState } from '@app/store/loading';

export interface RootState {
  [authFeatureKey]: AuthState
  [loadingFeatureKey]: LoadingState
}

export const reducers: ActionReducerMap<RootState> = {
  [authFeatureKey]: authReducer,
  [loadingFeatureKey]: loadingReducer,
};
