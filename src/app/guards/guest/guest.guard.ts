import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppRoutePath } from '@app/enums';
import { AuthService } from '@app/services';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated$.pipe(
      tap(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigate([ AppRoutePath.Courses ]);
        }
      }),
      map(isAuthenticated => !isAuthenticated));
  }
}
