import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutePath } from './enums/app-route-path.enum';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: AppRoutePath.Courses, component: CoursesPageComponent },
  { path: AppRoutePath.Login, component: LoginPageComponent },
  { path: '', redirectTo: AppRoutePath.Login, pathMatch: 'full' },
  { path: '**', redirectTo: AppRoutePath.Login },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
