import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesModule } from '@app/entities/courses/courses.module';
import { SharedModule } from '@app/shared/shared.module';

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
