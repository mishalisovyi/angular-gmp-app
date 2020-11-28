import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutePath } from './enums/app-route-path.enum';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { CourseAddPageComponent } from './pages/courses/course-add-page/course-add-page.component';
import { CoursesPageComponent } from './pages/courses/courses-page/courses-page.component';

const routes: Routes = [
  { path: AppRoutePath.CourseAdd, component: CourseAddPageComponent },
  { path: AppRoutePath.Courses, component: CoursesPageComponent },
  { path: AppRoutePath.Login, component: LoginPageComponent },
  { path: '', redirectTo: AppRoutePath.Courses, pathMatch: 'full' },
  { path: '**', redirectTo: AppRoutePath.Courses },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
