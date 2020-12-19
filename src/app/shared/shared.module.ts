import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DurationInputComponent, MessageComponent, OrderByPipe, SearchInputComponent, TimeDurationPipe } from '.';

@NgModule({
  imports: [
    FontAwesomeModule,
    FormsModule,
  ],
  declarations: [
    TimeDurationPipe,
    OrderByPipe,
    DurationInputComponent,
    SearchInputComponent,
    MessageComponent,
  ],
  exports: [
    TimeDurationPipe,
    OrderByPipe,
    DurationInputComponent,
    SearchInputComponent,
    MessageComponent,
    FontAwesomeModule,
  ],
})
export class SharedModule { }
