import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AppRoutePath } from '@app/enums';
import { mockAuthFacadeProviderForGuest } from '@app/services';
import { mockRouterProvider } from '@app/util/util-test';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        mockRouterProvider,
        mockAuthFacadeProviderForGuest,
      ],
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should trigger navigation to login in case if not authorized', waitForAsync(() => {
    (guard.canActivate() as Observable<boolean>).subscribe(() => {
      expect(router.navigate).toHaveBeenCalledWith([ AppRoutePath.Login ])
    })
  }));
});
