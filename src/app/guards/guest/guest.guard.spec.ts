import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { AppRoutePath } from '@app/enums';
import { mockRouterProvider, MockStore, mockStoreProvider } from '@app/util/util-test';

import { GuestGuard } from './guest.guard';

describe('GuestGuard', () => {
  let guard: GuestGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        mockRouterProvider,
        mockStoreProvider,
      ],
    });
    guard = TestBed.inject(GuestGuard);
    router = TestBed.inject(Router);
  });

  beforeEach(() => MockStore.select.and.returnValue(of(true)));

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should trigger navigation to courses in case if authorized', waitForAsync(() => {
    (guard.canActivate() as Observable<boolean>).subscribe(() => {
      expect(router.navigate).toHaveBeenCalledWith([ AppRoutePath.Courses ]);
    })
  }));
});
