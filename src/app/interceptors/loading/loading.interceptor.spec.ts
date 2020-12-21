import { TestBed } from '@angular/core/testing';

import { mockStoreProvider } from '@app/util/util-test';

import { LoadingInterceptor } from './loading.interceptor';

describe('LoadingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadingInterceptor,
      mockStoreProvider,
    ],
  }));

  it('should be created', () => {
    const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
