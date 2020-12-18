import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthModule } from '@app/entities/auth';

import { LoginPageComponent } from '.';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthModule,
  ],
  declarations: [
    LoginPageComponent,
  ],
})
export class AuthPagesModule { }
