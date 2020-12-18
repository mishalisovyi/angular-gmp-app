import { Component, EventEmitter, Input, Output } from '@angular/core';

import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: [ './duration-input.component.scss' ],
})
export class DurationInputComponent {
  clockIcon = faClock;

  @Input() duration = 0;
  @Output() durationChange = new EventEmitter<number>();

  onDurationChange(duration: number) {
    this.setDuration(duration);
    this.durationChange.emit(this.duration);
  }

  private setDuration(duration: number) {
    this.duration = duration;
  }
}
