import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { UserPanelComponent } from './header/user-panel/user-panel.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    LogoComponent,
    UserPanelComponent,
    FooterComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class CoreModule { }
