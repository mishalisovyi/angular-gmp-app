import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter, tap } from 'rxjs/operators';

import { AppRoutePath } from './enums/app-route-path.enum';
import { SubscriptionService } from './services/subscription/subscription.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  providers: [ SubscriptionService ],
})
export class AppComponent implements OnInit {
  showBreadcrumbs = false;

  constructor(private router: Router, private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subscribeOnRouterEvents();
  }

  private subscribeOnRouterEvents() {
    this.subscriptionService.register = this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        tap(({ url }: NavigationEnd) => this.checkIfShowBreadcrumbs(url)),
      )
      .subscribe()
  }

  private checkIfShowBreadcrumbs(url: string) {
    this.showBreadcrumbs = url !== `/${AppRoutePath.Login}`
  }
}
