import { Routes } from '@angular/router';

import { AppRoutePath } from '@app/enums/app-route-path.enum';
import { GuestGuard } from '@app/guards/guest/guest.guard';

import { LoginPageComponent } from '.';

export const authRoutes: Routes = [ {
  path: AppRoutePath.Login,
  component: LoginPageComponent,
  canActivate: [ GuestGuard ],
  data: {
    showBreadcrumbs: false,
  },
} ];
