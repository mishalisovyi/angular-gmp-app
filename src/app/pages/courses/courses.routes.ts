import { Routes } from '@angular/router';

import { AppRoutePath } from '@app/enums';
import { getStaticBreadcrumbsStepsByRoutePath } from '@app/util/util';

import { CourseAddPageComponent, CourseEditPageComponent, CoursesPageComponent } from '.';

export const coursesRoutes: Routes = [
  {
    path: AppRoutePath.Empty,
    data: {
      breadcrumbsSteps: getStaticBreadcrumbsStepsByRoutePath(AppRoutePath.Courses),
    },
    component: CoursesPageComponent,
  },
  {
    path: AppRoutePath.Add,
    data: {
      breadcrumbsSteps: getStaticBreadcrumbsStepsByRoutePath(AppRoutePath.Add),
    },
    component: CourseAddPageComponent,
  },
  {
    path: AppRoutePath.Edit,
    data: {
      breadcrumbsSteps: getStaticBreadcrumbsStepsByRoutePath(AppRoutePath.Edit),
    },
    component: CourseEditPageComponent,
  },
];
