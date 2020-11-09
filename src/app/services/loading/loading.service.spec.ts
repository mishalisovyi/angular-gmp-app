import { TestBed, waitForAsync } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should properly handle loading start', waitForAsync(() => {
    service.startLoading();

    service.loading$.subscribe(loading => expect(loading).toBeTrue())
  }));

  it('should properly handle loading stop', waitForAsync(() => {
    service.startLoading();
    service.stopLoading();

    service.loading$.subscribe(loading => expect(loading).toBeFalse())
  }));
});
