import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthModule } from '@app/entities/auth/auth.module';

import { LoginPageComponent } from './login-page.component';

@NgModule({
  imports: [
    AuthModule,
    CommonModule,
  ],
  declarations: [ LoginPageComponent ],
})
export class LoginPageModule { }
