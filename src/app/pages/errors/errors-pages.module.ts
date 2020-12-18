import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { ErrorsRoutingModule, NotFoundPageComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    SharedModule,
  ],
  declarations: [ NotFoundPageComponent ],
})
export class ErrorsPagesModule { }
