import { Component, Input } from '@angular/core';

import { BreadcrumbsStep } from '@app/interfaces/helpers/breadcrumbs-step.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: [ './breadcrumbs.component.scss' ],
})
export class BreadcrumbsComponent {
  @Input() steps: BreadcrumbsStep[];
}
