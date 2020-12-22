import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { AppRoutePath } from '@app/enums';
import { AuthFacade, SubscriptionService } from '@app/services';

import { faSignInAlt, faSignOutAlt, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: [ './user-panel.component.scss' ],
  providers: [ SubscriptionService ],
})
export class UserPanelComponent implements OnInit {
  iconUser: IconDefinition = faUser;
  iconSignOut: IconDefinition = faSignOutAlt;
  iconSignIn: IconDefinition = faSignInAlt;

  showUserPanel = false;

  constructor(private router: Router, private subscriptionService: SubscriptionService, private authFacade: AuthFacade) { }

  ngOnInit() {
    this.subscribeOnRouterEvents();
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.authFacade.isAuthenticated$;
  }

  get userName$(): Observable<string> {
    return this.authFacade.userName$;
  }

  logout() {
    this.authFacade.logout();
  }

  private subscribeOnRouterEvents() {
    this.subscriptionService.register = this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        tap(({ url }: NavigationEnd) => this.checkIfShowUserPanel(url)),
      )
      .subscribe();
  }

  private checkIfShowUserPanel(url: string) {
    this.showUserPanel = url !== `/${AppRoutePath.Login}`
  }
}
