import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { NotFoundPageComponent } from './not-found-page.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ NotFoundPageComponent ],
})
export class NotFoundPageModule { }
