import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app.routes';
import { authRoutes } from './pages/auth/auth.routes';
import { coursesRoutes } from './pages/courses/courses.routes';

const routes: Routes = [
  ...authRoutes,
  ...coursesRoutes,
  ...appRoutes,
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
