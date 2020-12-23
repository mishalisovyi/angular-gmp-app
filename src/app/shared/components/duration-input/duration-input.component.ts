import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: [ './duration-input.component.scss' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true,
    },
  ],
})
export class DurationInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() hint = '';
  @Input() placeholder = '';
  @Input() errorMessage = '';
  @Input() showError = false;

  duration: number;

  clockIcon = faClock;

  onChange: (value: number) => void;

  /**
   * Mandatory methods for implementing of ControlValueAccessor interface
   */
  writeValue(duration: number) {
    this.duration = duration;
  }

  registerOnChange(onChange: (value: number) => void) {
    this.onChange = onChange;
  }

  registerOnTouched() { }

  /**
   * Custom component methods
   */
  onDurationValueChanged(duration: number) {
    this.duration = duration;
    this.onChange(duration);
  }
}
