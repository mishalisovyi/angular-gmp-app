import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { TimeDurationPipe } from './pipes/time-duration.pipe';

@NgModule({
  imports: [ FontAwesomeModule ],
  declarations: [
    BreadcrumbsComponent,
    TimeDurationPipe,
  ],
  exports: [
    BreadcrumbsComponent,
    TimeDurationPipe,
    FontAwesomeModule,
  ],
})
export class SharedModule { }
