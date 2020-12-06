import { Routes } from '@angular/router';

import { AppRoutePath } from '@app/enums/app-route-path.enum';

import { CourseAddPageComponent, CoursesPageComponent } from '.';

export const coursesRoutes: Routes = [
  { path: AppRoutePath.CourseAdd, component: CourseAddPageComponent },
  { path: AppRoutePath.Courses, component: CoursesPageComponent },
];
