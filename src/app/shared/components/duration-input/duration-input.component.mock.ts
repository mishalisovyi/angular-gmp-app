import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration-input',
  template: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MockDurationInputComponent),
      multi: true,
    },
  ],
})
export class MockDurationInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() hint = '';
  @Input() placeholder = '';
  @Input() errorMessage = '';
  @Input() showError = false;

  writeValue() { }

  registerOnChange() { }

  registerOnTouched() { }
}
