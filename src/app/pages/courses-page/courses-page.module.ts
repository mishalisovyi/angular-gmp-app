import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesModule } from '../../entities/courses/courses.module';
import { SharedModule } from '../../shared/shared.module';
import { CoursesPageComponent } from './courses-page.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesModule,
    SharedModule,
  ],
  declarations: [ CoursesPageComponent ],
  exports: [ CoursesPageComponent ],
})
export class CoursesPageModule { }
