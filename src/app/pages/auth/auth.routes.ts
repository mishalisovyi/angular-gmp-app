import { Routes } from '@angular/router';

import { AppRoutePath } from '@app/enums/app-route-path.enum';

import { LoginPageComponent } from '.';

export const authRoutes: Routes = [
  { path: AppRoutePath.Login, component: LoginPageComponent },
];
