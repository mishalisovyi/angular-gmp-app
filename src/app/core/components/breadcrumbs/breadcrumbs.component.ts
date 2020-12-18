import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { BreadcrumbsStep } from '@app/interfaces/helpers';
import { BreadcrumbsService } from '@app/services';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: [ './breadcrumbs.component.scss' ],
})
export class BreadcrumbsComponent {
  showBreadcrumbs$: Observable<boolean>;
  breadcrumbsSteps$: Observable<BreadcrumbsStep[]>;

  constructor(private breadcrumbsService: BreadcrumbsService) {
    this.showBreadcrumbs$ = this.breadcrumbsService.showBreadcrumbs$;
    this.breadcrumbsSteps$ = this.breadcrumbsService.breadcrumbsSteps$;
  }
}
