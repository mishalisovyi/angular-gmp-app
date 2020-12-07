import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { BreadcrumbsStep } from './interfaces/helpers/breadcrumbs-step.interface';
import { BreadcrumbsService } from './services/breadcrumbs/breadcrumbs.service';
import { SubscriptionService } from './services/subscription/subscription.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  providers: [ SubscriptionService ],
})
export class AppComponent {
  showBreadcrumbs$: Observable<boolean>;
  breadcrumbsSteps$: Observable<BreadcrumbsStep[]>;

  constructor(private breadcrumbsService: BreadcrumbsService) {
    this.initBreadcrumbsStreams();
  }

  private initBreadcrumbsStreams() {
    this.showBreadcrumbs$ = this.breadcrumbsService.showBreadcrumbs$;
    this.breadcrumbsSteps$ = this.breadcrumbsService.breadcrumbsSteps$;
  }
}
