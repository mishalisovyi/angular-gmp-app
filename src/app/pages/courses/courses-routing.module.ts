import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { coursesRoutes } from './courses.routes';

@NgModule({
  imports: [ RouterModule.forChild(coursesRoutes) ],
  exports: [ RouterModule ],
})
export class CoursesRoutingModule { }
