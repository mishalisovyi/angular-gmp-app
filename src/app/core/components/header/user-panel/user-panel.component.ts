import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { AppRoutePath } from '@app/enums';
import { SubscriptionService } from '@app/services';
import { AuthState, getAuthenticationStatus, getUserName } from '@app/store/auth';
import { logoutStart } from '@app/store/auth/actions/auth.actions';

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

  constructor(private router: Router, private store: Store<AuthState>, private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subscribeOnRouterEvents();
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.store.select(getAuthenticationStatus);
  }

  get userName$(): Observable<string> {
    return this.store.select(getUserName)
  }

  logout() {
    this.store.dispatch(logoutStart());
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
