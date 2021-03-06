import { createAction, props } from '@ngrx/store';

import { Author } from '@app/interfaces/entities/author.interface';

export const requestGetAuthors = createAction('[Authors] Get all request');
export const getAuthorsSuccess = createAction('[Authors] Get all success', props<{ authors: Author[] }>());
export const getAuthorsFailure = createAction('[Authors] Get all failure', props<{ errorMessage: string }>());
