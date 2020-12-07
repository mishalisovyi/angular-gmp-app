import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AppRoutePath } from '@app/enums/app-route-path.enum';
import { AuthService } from '@app/services/auth/auth.service';
import { mockRouterProvider } from '@app/util/util-test';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ mockRouterProvider ],
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should trigger navigation to login in case if not authorized', waitForAsync(() => {
    authService.logout()
      .pipe(switchMap(() => guard.canActivate() as Observable<boolean>)).subscribe(() => {
        expect(router.navigate).toHaveBeenCalledWith([ AppRoutePath.Login ])
      })
  }));
});
