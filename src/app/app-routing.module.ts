import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutePath } from './enums/app-route-path.enum';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';

const routes: Routes = [
  { path: AppRoutePath.Courses, component: CoursesPageComponent },
  { path: '', redirectTo: AppRoutePath.Courses, pathMatch: 'full' },
  { path: '**', redirectTo: AppRoutePath.Courses },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
