import { TestBed } from '@angular/core/testing';

import { provideMockActions } from '@ngrx/effects/testing';

import { Observable } from 'rxjs';

import { mockAuthServiceProvider } from '@app/services';
import { mockRouterProvider } from '@app/util/util-test';

import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
  const actions$: Observable<any> = null;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        mockAuthServiceProvider,
        mockRouterProvider,
      ],
    });

    effects = TestBed.inject(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
