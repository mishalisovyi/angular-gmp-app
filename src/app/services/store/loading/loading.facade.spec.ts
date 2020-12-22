import { TestBed } from '@angular/core/testing';

import { mockStoreProvider } from '@app/util/util-test';

import { LoadingFacade } from './loading.facade';

describe('LoadingFacade', () => {
  let service: LoadingFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ mockStoreProvider ],
    });
    service = TestBed.inject(LoadingFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
