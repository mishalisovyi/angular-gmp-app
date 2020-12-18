import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesModule } from '@app/entities/courses/courses.module';
import { SharedModule } from '@app/shared/shared.module';

import { CourseAddPageComponent, CourseEditPageComponent, CoursesPageComponent } from '.';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoursesModule,
    CoursesRoutingModule,
    SharedModule,
  ],
  declarations: [
    CoursesPageComponent,
    CourseAddPageComponent,
    CourseEditPageComponent,
  ],
})
export class CoursesPagesModule { }
