import { Routes } from '@angular/router';

import { NotFoundPageComponent } from '@app/pages/core/not-found-page/not-found-page.component';

import { AppRoutePath } from './enums/app-route-path.enum';

export const appRoutes: Routes = [ {
  path: '',
  redirectTo: AppRoutePath.Courses,
  pathMatch: 'full',
}, {
  path: '**',
  component: NotFoundPageComponent,
  data: {
    showBreadcrumbs: false,
  },
} ];
