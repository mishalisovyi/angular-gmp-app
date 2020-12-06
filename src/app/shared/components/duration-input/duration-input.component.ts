import { Component } from '@angular/core';

import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: [ './duration-input.component.scss' ],
})
export class DurationInputComponent {
  clockIcon = faClock;
  durationValue = 0;
}
