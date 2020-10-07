import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { UserActionsComponent } from './header/user-actions/user-actions.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    UserActionsComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
