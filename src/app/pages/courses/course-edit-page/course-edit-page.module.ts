import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesModule } from '@app/entities/courses/courses.module';

import { CourseEditPageComponent } from './course-edit-page.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesModule,
  ],
  declarations: [ CourseEditPageComponent ],
})
export class CoursesEditPageModule { }
