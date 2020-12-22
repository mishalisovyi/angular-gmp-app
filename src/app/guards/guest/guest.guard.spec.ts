import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AppRoutePath } from '@app/enums';
import { mockAuthFacadeProviderForUser } from '@app/services';
import { mockRouterProvider } from '@app/util/util-test';

import { GuestGuard } from './guest.guard';

describe('GuestGuard', () => {
  let guard: GuestGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        mockRouterProvider,
        mockAuthFacadeProviderForUser,
      ],
    });
    guard = TestBed.inject(GuestGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should trigger navigation to courses in case if authorized', waitForAsync(() => {
    (guard.canActivate() as Observable<boolean>).subscribe(() => {
      expect(router.navigate).toHaveBeenCalledWith([ AppRoutePath.Courses ]);
    })
  }));
});
