import { Routes } from '@angular/router';

import { LayoutComponent } from './core';
import { AppRoutePath } from './enums';
import { AuthGuard, GuestGuard } from './guards';

export const appRoutes: Routes = [
  {
    path: AppRoutePath.Empty,
    children: [
      {
        path: AppRoutePath.Empty,
        component: LayoutComponent,
        canActivate: [ AuthGuard ],
        children: [
          {
            path: AppRoutePath.Empty,
            redirectTo: AppRoutePath.Courses,
            pathMatch: 'full',
          },
          {
            path: AppRoutePath.Courses,
            loadChildren: async () => (await import('app/pages/courses/courses-pages.module')).CoursesPagesModule,
          },
        ],
      },
      {
        path: AppRoutePath.Empty,
        canActivate: [ GuestGuard ],
        children: [
          {
            path: AppRoutePath.Empty,
            loadChildren: async () => (await import('app/pages/auth/auth-pages.module')).AuthPagesModule,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: AppRoutePath.Error,
  },
  {
    path: AppRoutePath.Error,
    loadChildren: async () => (await import('app/pages/errors/errors-pages.module')).ErrorsPagesModule,
  },
];
