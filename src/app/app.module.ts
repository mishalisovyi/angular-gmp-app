import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SearchByPipe } from '@app/shared/pipes/search-by/search-by.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesPageModule } from './pages/courses-page/courses-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoursesPageModule,
    LoginPageModule,
  ],
  providers: [ SearchByPipe ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
