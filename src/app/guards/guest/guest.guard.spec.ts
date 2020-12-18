import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AppRoutePath } from '@app/enums';
import { AuthService, mockAuthServiceProvider } from '@app/services';
import { mockRouterProvider } from '@app/util/util-test';

import { GuestGuard } from './guest.guard';

describe('GuestGuard', () => {
  let guard: GuestGuard;
  let router: Router;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        mockRouterProvider,
        mockAuthServiceProvider,
      ],
    });
    guard = TestBed.inject(GuestGuard);
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should trigger navigation to courses in case if authorized', waitForAsync(() => {
    authService.login({ login: 'test', password: 'test' })
      .pipe(switchMap(() => guard.canActivate() as Observable<boolean>))
      .subscribe(() => {
        expect(router.navigate).toHaveBeenCalledWith([ AppRoutePath.Courses ]);
      })
  }));
});
