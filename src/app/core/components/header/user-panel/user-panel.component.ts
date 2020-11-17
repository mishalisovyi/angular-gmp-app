import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AppRoutePath } from '@app/enums/app-route-path.enum';
import { AuthService } from '@app/services/auth/auth.service';

import { faSignOutAlt, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: [ './user-panel.component.scss' ],
})
export class UserPanelComponent {
  @Input() userName$: Observable<string>;

  iconUser: IconDefinition = faUser;
  iconSignOut: IconDefinition = faSignOutAlt;

  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    this.authService.logout$().subscribe(
      () => this.router.navigate([ AppRoutePath.Login ]),
      () => alert('An error has occured during the logging out'),
    );
  }
}
