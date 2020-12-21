import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AppRoutePath } from '@app/enums';
import { AuthState, getAuthenticationStatus } from '@app/store/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AuthState>) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(getAuthenticationStatus).pipe(tap(isAuthenticated => {
      if (!isAuthenticated) {
        this.router.navigate([ AppRoutePath.Login ]);
      }
    }));
  }
}
