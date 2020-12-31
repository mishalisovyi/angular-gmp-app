import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@env/environment';

import { AuthInterceptor } from '@app/interceptors/auth/auth.interceptor';
import { LoadingInterceptor } from '@app/interceptors/loading/loading.interceptor';
import { reducers } from '@app/store';
import { AuthEffects } from '@app/store/auth/effects/auth.effects';
import { AuthorsEffects } from '@app/store/authors/effects/authors.effects';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Language } from './enums';
import { createTranslateLoader } from './util/util';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: Language.En,
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [ HttpClient ],
      },
    }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ AuthEffects, AuthorsEffects ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
