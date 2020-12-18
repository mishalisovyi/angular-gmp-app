import { Component, Input } from '@angular/core';

import { BreadcrumbsStep } from '@app/interfaces/helpers/breadcrumbs-step.interface';

@Component({
  selector: 'app-breadcrumbs',
  template: '',
})
export class MockBreadcrumbsComponent {
  @Input() steps: BreadcrumbsStep[];
}
