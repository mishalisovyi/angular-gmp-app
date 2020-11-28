import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { MessageComponent } from './components/message/message.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { SearchByPipe } from './pipes/search-by/search-by.pipe';
import { TimeDurationPipe } from './pipes/time-duration/time-duration.pipe';

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
