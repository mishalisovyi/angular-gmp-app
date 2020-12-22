import { createFeatureSelector, createSelector } from '@ngrx/store';

import { loadingFeatureKey, loadingReducer, LoadingState, selectLoadingStatus } from '@app/store/loading/reducers/loading.reducer';

/**
 * Selectors
 */
const selectLoadingState = createFeatureSelector<LoadingState>(loadingFeatureKey);
export const getLoadingStatus = createSelector(selectLoadingState, selectLoadingStatus);

/**
 * Reducers
 */
export { loadingReducer };

/**
 * State interface
 */
export { LoadingState };

/**
 * Feature key
 */
export { loadingFeatureKey };
