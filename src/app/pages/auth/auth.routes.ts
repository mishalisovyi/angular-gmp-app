import { Routes } from '@angular/router';

import { AppRoutePath } from '@app/enums';

import { LoginPageComponent } from '.';

export const authRoutes: Routes = [
  {
    path: AppRoutePath.Empty,
    redirectTo: AppRoutePath.Login,
  },
  {
    path: AppRoutePath.Login,
    component: LoginPageComponent,
  },
];
