import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '@app/services/auth/auth.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: [ './breadcrumbs.component.scss' ],
})
export class BreadcrumbsComponent {
  constructor(private authService: AuthService) { }

  get showComponent$(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }
}
