import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { AppRoutePath } from '@app/enums';
import { mockRouterProvider, MockStore, mockStoreProvider } from '@app/util/util-test';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        mockRouterProvider,
        mockStoreProvider,
      ],
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  beforeEach(() => MockStore.select.and.returnValue(of(false)))

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should trigger navigation to login in case if not authorized', waitForAsync(() => {
    (guard.canActivate() as Observable<boolean>).subscribe(() => {
      expect(router.navigate).toHaveBeenCalledWith([ AppRoutePath.Login ])
    })
  }));
});
