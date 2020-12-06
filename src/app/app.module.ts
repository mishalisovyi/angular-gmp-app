import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SearchByPipe } from '@app/shared/pipes/search-by/search-by.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginPageModule } from './pages/auth/login-page/login-page.module';
import { CoursesAddPageModule } from './pages/courses/course-add-page/course-add-page.module';
import { CoursesPageModule } from './pages/courses/courses-page/courses-page.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoursesAddPageModule,
    CoursesPageModule,
    LoginPageModule,
  ],
  providers: [ SearchByPipe ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
