import { TestBed, waitForAsync } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should properly handle login', waitForAsync(() => {
    const mockEmail = 'test@mail.com';
    const mockPassword = 'abc123';

    const localStorageSetItemSpy = spyOn(localStorage, 'setItem');

    service.login$(mockEmail, mockPassword).subscribe(() => {
      expect(localStorageSetItemSpy).toHaveBeenCalledTimes(2);
    })
  }));

  it('should properly handle logout', waitForAsync(() => {
    const localStorageRemoveItemSpy = spyOn(localStorage, 'removeItem');

    service.logout$().subscribe(() => {
      expect(localStorageRemoveItemSpy).toHaveBeenCalledTimes(2);
    })
  }));
});
