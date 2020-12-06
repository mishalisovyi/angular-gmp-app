import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutePath } from './enums/app-route-path.enum';
import { authRoutes } from './pages/auth/auth.routes';
import { coursesRoutes } from './pages/courses/courses.routes';

const routes: Routes = [
  ...authRoutes,
  ...coursesRoutes,
  { path: '', redirectTo: AppRoutePath.Courses, pathMatch: 'full' },
  { path: '**', redirectTo: AppRoutePath.Courses },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
