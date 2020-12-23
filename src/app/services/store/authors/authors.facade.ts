import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { AuthorsState, getCourses } from '@app/store/authors';
import { requestGetAuthors } from '@app/store/authors/actions/authors.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthorsFacade {
  authors$ = this.store.select(getCourses);

  constructor(private store: Store<AuthorsState>) { }

  getAuthors() {
    this.store.dispatch(requestGetAuthors());
  }
}
