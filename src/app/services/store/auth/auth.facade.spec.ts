import { TestBed } from '@angular/core/testing';

import { mockStoreProvider } from '@app/util/util-test';

import { AuthFacade } from './auth.facade';

describe('AuthFacade', () => {
  let service: AuthFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ mockStoreProvider ],
    });
    service = TestBed.inject(AuthFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
