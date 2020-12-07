import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SearchByPipe } from '@app/shared/pipes/search-by/search-by.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginPageModule } from './pages/auth/login-page/login-page.module';
import { NotFoundPageModule } from './pages/core/not-found-page/not-found-page.module';
import { CoursesAddPageModule, CoursesEditPageModule, CoursesPageModule } from './pages/courses';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoursesAddPageModule,
    CoursesEditPageModule,
    CoursesPageModule,
    LoginPageModule,
    NotFoundPageModule,
  ],
  providers: [ SearchByPipe ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
