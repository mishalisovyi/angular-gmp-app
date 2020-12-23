import { createFeatureSelector, createSelector } from '@ngrx/store';

import { authorsFeatureKey, authorsReducer, AuthorsState, selectAuthors } from '@app/store/authors/reducers/authors.reducer';

/**
 * Selectors
 */
const selectAuthorsState = createFeatureSelector<AuthorsState>(authorsFeatureKey);
export const getCourses = createSelector(selectAuthorsState, selectAuthors);

/**
 * Reducers
 */
export { authorsReducer };

/**
 * State interface
 */
export { AuthorsState };

/**
 * Feature key
 */
export { authorsFeatureKey };
