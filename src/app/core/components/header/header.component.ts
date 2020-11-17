import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '@app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent {
  constructor(private authService: AuthService) { }

  get showUserPanel$(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }

  get userName$(): Observable<string> {
    return this.authService.userName$;
  }
}
