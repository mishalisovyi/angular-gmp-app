import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

import {
  DateInputComponent,
  DurationInputComponent,
  MessageComponent,
  MultiAutocompleteInputComponent,
  OrderByPipe,
  SearchInputComponent,
  TimeDurationPipe,
} from '.';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule,
  ],
  declarations: [
    TimeDurationPipe,
    OrderByPipe,
    DateInputComponent,
    DurationInputComponent,
    SearchInputComponent,
    MessageComponent,
    MultiAutocompleteInputComponent,
  ],
  exports: [
    TimeDurationPipe,
    OrderByPipe,
    DateInputComponent,
    DurationInputComponent,
    SearchInputComponent,
    MessageComponent,
    MultiAutocompleteInputComponent,
    FontAwesomeModule,
    MaterialModule,
    TranslateModule,
  ],
})
export class SharedModule { }
