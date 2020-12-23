import { TestBed } from '@angular/core/testing';

import { mockStoreProvider } from '@app/util/util-test';

import { AuthorsFacade } from './authors.facade';

describe('AuthorsFacade', () => {
  let service: AuthorsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ mockStoreProvider ],
    });
    service = TestBed.inject(AuthorsFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
