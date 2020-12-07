import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesModule } from '@app/entities/courses/courses.module';

import { CourseAddPageComponent } from './course-add-page.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesModule,
  ],
  declarations: [ CourseAddPageComponent ],
})
export class CoursesAddPageModule { }
