import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  template: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MockDateInputComponent),
      multi: true,
    },
  ],
})
export class MockDateInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() hint = '';
  @Input() errorMessage = '';
  @Input() showError = false;

  writeValue() { }

  registerOnChange() { }

  registerOnTouched() { }
}
