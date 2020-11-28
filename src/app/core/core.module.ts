import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { UserPanelComponent } from './components/header/user-panel/user-panel.component';
import { SpinnerImageComponent } from './components/spinner/spinner-image/spinner-image.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    LogoComponent,
    UserPanelComponent,
    FooterComponent,
    SpinnerComponent,
    SpinnerImageComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
  ],
})
export class CoreModule { }
