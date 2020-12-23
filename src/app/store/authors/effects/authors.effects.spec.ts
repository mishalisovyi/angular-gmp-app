import { TestBed } from '@angular/core/testing';

import { provideMockActions } from '@ngrx/effects/testing';

import { Observable } from 'rxjs';

import { mockAuthorsServiceProvider } from '@app/services';

import { AuthorsEffects } from './authors.effects';

describe('AuthorsEffects', () => {
  const actions$: Observable<any> = null;
  let effects: AuthorsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthorsEffects,
        provideMockActions(() => actions$),
        mockAuthorsServiceProvider,
      ],
    });

    effects = TestBed.inject(AuthorsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
