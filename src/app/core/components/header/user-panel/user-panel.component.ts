import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

import { AppRoutePath } from '@app/enums/app-route-path.enum';
import { ErrorMessage } from '@app/enums/error-message.enum';
import { AuthService } from '@app/services/auth/auth.service';
import { SubscriptionService } from '@app/services/subscription/subscription.service';

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

  constructor(private router: Router, private authService: AuthService, private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subscribeOnRouterEvents();
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }

  get userName$(): Observable<string> {
    return this.authService.userName$;
  }

  logout() {
    this.authService.logout()
      .pipe(
        take(1),
        tap(
          () => this.navigateToLoginPage(),
          () => alert(ErrorMessage.Logout),
        ),
      )
      .subscribe();
  }

  private subscribeOnRouterEvents() {
    this.subscriptionService.register = this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        tap(({ url }: NavigationEnd) => this.checkIfShowUserPanel(url)),
      )
      .subscribe();
  }

  private navigateToLoginPage() {
    this.router.navigate([ AppRoutePath.Login ]);
  }

  private checkIfShowUserPanel(url: string) {
    this.showUserPanel = url !== `/${AppRoutePath.Login}`
  }
}
