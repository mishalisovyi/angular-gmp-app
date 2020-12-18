import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DurationInputComponent, MessageComponent, OrderByPipe, SearchByPipe, SearchInputComponent, TimeDurationPipe } from '.';

@NgModule({
  imports: [
    FontAwesomeModule,
    FormsModule,
  ],
  declarations: [
    TimeDurationPipe,
    OrderByPipe,
    SearchByPipe,
    DurationInputComponent,
    SearchInputComponent,
    MessageComponent,
  ],
  exports: [
    TimeDurationPipe,
    OrderByPipe,
    SearchByPipe,
    DurationInputComponent,
    SearchInputComponent,
    MessageComponent,
    FontAwesomeModule,
  ],
})
export class SharedModule { }
