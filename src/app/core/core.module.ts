import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { UserActionsComponent } from './header/user-actions/user-actions.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [
    HeaderComponent,
    LogoComponent,
    UserActionsComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class CoreModule { }
