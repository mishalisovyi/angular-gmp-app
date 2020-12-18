import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [ LoginFormComponent ],
  exports: [ LoginFormComponent ],
})
export class AuthModule { }
