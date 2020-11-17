import { TestBed, waitForAsync } from '@angular/core/testing';

import { ConfirmService } from '@app/services/confirm/confirm.service';

describe('ConfirmService', () => {
  let service: ConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should properly show confirm pop up', waitForAsync(() => {
    const windowConfirmSpy = spyOn(window, 'confirm');
    const mockMessage = 'some test message';

    service.confirm$(mockMessage).subscribe(() => {
      expect(windowConfirmSpy).toHaveBeenCalledWith(mockMessage);
    })
  }));
});
