import { ActionReducerMap } from '@ngrx/store';

import { authFeatureKey, authReducer, AuthState } from '@app/store/auth';
import { authorsFeatureKey, authorsReducer, AuthorsState } from '@app/store/authors';
import { loadingFeatureKey, loadingReducer, LoadingState } from '@app/store/loading';

export interface RootState {
  [authFeatureKey]: AuthState,
  [authorsFeatureKey]: AuthorsState,
  [loadingFeatureKey]: LoadingState,
}

export const reducers: ActionReducerMap<RootState> = {
  [authFeatureKey]: authReducer,
  [loadingFeatureKey]: loadingReducer,
  [authorsFeatureKey]: authorsReducer,
};
