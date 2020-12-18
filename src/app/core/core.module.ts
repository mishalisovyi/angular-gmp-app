import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';

import {
  BreadcrumbsComponent,
  FooterComponent,
  HeaderComponent,
  LayoutComponent,
  LogoComponent,
  SpinnerComponent,
  SpinnerImageComponent,
  UserPanelComponent,
} from '.';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    UserPanelComponent,
    LayoutComponent,
    SpinnerImageComponent,
    SpinnerComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    SpinnerComponent,
  ],
})
export class CoreModule { }
