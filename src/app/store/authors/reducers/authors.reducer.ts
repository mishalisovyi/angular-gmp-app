import { createReducer, on } from '@ngrx/store';

import { Author } from '@app/interfaces/entities/author.interface';
import * as AuthorsActions from '@app/store/authors/actions/authors.actions';

export const authorsFeatureKey = 'authors';

export interface AuthorsState {
  authors: Author[];
}

export const initialState: AuthorsState = {
  authors: [],
};

const handleGetAuthorsSuccess = (state: AuthorsState, { authors }) => ({
  ...state,
  authors,
});

export const authorsReducer = createReducer(
  initialState,

  on(AuthorsActions.getAuthorsSuccess, handleGetAuthorsSuccess),
);

export const selectAuthors = ({ authors }: AuthorsState) => [ ...authors ];
