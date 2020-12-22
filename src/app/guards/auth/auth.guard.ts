import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AppRoutePath } from '@app/enums';
import { AuthFacade } from '@app/services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authFacade: AuthFacade) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authFacade.isAuthenticated$.pipe(tap(isAuthenticated => {
      if (!isAuthenticated) {
        this.router.navigate([ AppRoutePath.Login ]);
      }
    }));
  }
}
