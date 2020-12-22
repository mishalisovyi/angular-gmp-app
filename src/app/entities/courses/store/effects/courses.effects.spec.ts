import { TestBed } from '@angular/core/testing';

import { provideMockActions } from '@ngrx/effects/testing';

import { Observable } from 'rxjs';

import { mockCoursesServiceProvider } from '@app/services';
import { mockRouterProvider } from '@app/util/util-test';

import { CoursesEffects } from './courses.effects';

describe('CoursesEffects', () => {
  const actions$: Observable<any> = null;
  let effects: CoursesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoursesEffects,
        provideMockActions(() => actions$),
        mockCoursesServiceProvider,
        mockRouterProvider,
      ],
    });

    effects = TestBed.inject(CoursesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
