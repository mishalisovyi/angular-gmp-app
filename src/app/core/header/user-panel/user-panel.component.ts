import { Component } from '@angular/core';

import { faSignOutAlt, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: [ './user-panel.component.scss' ],
})
export class UserPanelComponent {
  iconUser: IconDefinition = faUser;
  iconSignOut: IconDefinition = faSignOutAlt;
}
