import { Component } from '@angular/core';

import { faSignOutAlt, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: [ './user-actions.component.scss' ],
})
export class UserActionsComponent {
  public iconUser: IconDefinition = faUser;
  public iconSignOut: IconDefinition = faSignOutAlt;

  constructor() { }
}
