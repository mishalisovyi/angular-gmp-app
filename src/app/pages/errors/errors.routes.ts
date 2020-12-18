import { Routes } from '@angular/router';

import { AppRoutePath } from '@app/enums';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const errorsRoutes: Routes = [
  {
    path: AppRoutePath.Empty,
    redirectTo: AppRoutePath.NotFound,
  },
  {
    path: AppRoutePath.NotFound,
    component: NotFoundPageComponent,
  },
];
