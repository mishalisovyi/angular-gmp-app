import { createReducer, on } from '@ngrx/store';

import * as LoadingActions from '@app/store/loading/actions/loading.actions';

export const loadingFeatureKey = 'loading';

export interface LoadingState {
  isLoading: boolean;
}

export const initialState: LoadingState = {
  isLoading: false,
};

const handleLoadingStart = () => ({ isLoading: true });
const handleLoadingStop = () => ({ isLoading: false });

export const loadingReducer = createReducer(
  initialState,

  on(LoadingActions.startLoading, handleLoadingStart),
  on(LoadingActions.stopLoading, handleLoadingStop),
);

export const selectLoadingStatus = ({ isLoading }: LoadingState) => isLoading;
