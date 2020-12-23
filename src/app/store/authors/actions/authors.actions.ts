import { createAction, props } from '@ngrx/store';

import { Author } from '@app/interfaces/entities/author.interface';

export const requestGetAuthors = createAction('[Authors] Get request');
export const getAuthorsSuccess = createAction('[Authors] Get success', props<{ authors: Author[] }>());
export const getAuthorsFailure = createAction('[Authors] Get failure', props<{ errorMessage: string }>());
