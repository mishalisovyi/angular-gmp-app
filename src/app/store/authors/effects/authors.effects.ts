import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ErrorMessage } from '@app/enums';
import { AuthorsService } from '@app/services/authors/authors.service';
import { getAuthorsFailure, getAuthorsSuccess, requestGetAuthors } from '@app/store/authors/actions/authors.actions';

@Injectable()
export class AuthorsEffects {

  constructor(private actions$: Actions, private authorsService: AuthorsService) {}

  @Effect()
  loginRequest$ = this.actions$.pipe(
    ofType(requestGetAuthors),
    switchMap(() => this.authorsService.getList().pipe(
      map(authors => getAuthorsSuccess({ authors })),
      catchError(({ error }) => of(getAuthorsFailure({ errorMessage: `${ErrorMessage.AuthorsGet}: ${error}` }))),
    )),
  );

  @Effect({ dispatch: false })
  getCoursesFailure$ = this.actions$.pipe(
    ofType(getAuthorsFailure),
    tap(({ errorMessage }) => alert(errorMessage)),
  );
}
