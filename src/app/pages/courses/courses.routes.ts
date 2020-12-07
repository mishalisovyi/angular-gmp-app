import { Routes } from '@angular/router';

import { AppRoutePath } from '@app/enums/app-route-path.enum';
import { AuthGuard } from '@app/guards/auth/auth.guard';
import { getStaticBreadcrumbsStepsByRoutePath } from '@app/util/util';

import { CourseAddPageComponent, CourseEditPageComponent, CoursesPageComponent } from '.';

export const coursesRoutes: Routes = [ {
  path: AppRoutePath.CourseAdd,
  component: CourseAddPageComponent,
  canActivate: [ AuthGuard ],
  data: {
    showBreadcrumbs: true,
    breadcrumbsSteps: getStaticBreadcrumbsStepsByRoutePath(AppRoutePath.CourseAdd),
  },
}, {
  path: AppRoutePath.CourseEdit,
  component: CourseEditPageComponent,
  canActivate: [ AuthGuard ],
  data: {
    showBreadcrumbs: true,
    breadcrumbsSteps: getStaticBreadcrumbsStepsByRoutePath(AppRoutePath.CourseEdit),
  },
}, {
  path: AppRoutePath.Courses,
  component: CoursesPageComponent,
  canActivate: [ AuthGuard ],
  data: {
    showBreadcrumbs: true,
    breadcrumbsSteps: getStaticBreadcrumbsStepsByRoutePath(AppRoutePath.Courses),
  },
} ];
