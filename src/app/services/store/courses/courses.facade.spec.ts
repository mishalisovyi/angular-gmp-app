import { TestBed } from '@angular/core/testing';

import { mockStoreProvider } from '@app/util/util-test';

import { CoursesFacade } from './courses.facade';

describe('CoursesFacade', () => {
  let service: CoursesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ mockStoreProvider ],
    });
    service = TestBed.inject(CoursesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
