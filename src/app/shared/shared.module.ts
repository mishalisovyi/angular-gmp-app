import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchInputComponent } from './components/search-input/search-input.component';
import { TimeDurationPipe } from './pipes/time-duration.pipe';

@NgModule({
  imports: [ FormsModule ],
  declarations: [
    TimeDurationPipe,
    SearchInputComponent,
  ],
  exports: [
    TimeDurationPipe,
    SearchInputComponent,
    FontAwesomeModule,
  ],
})
export class SharedModule { }
