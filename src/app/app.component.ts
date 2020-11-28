import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  get showBreadcrumbs$(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }
}
