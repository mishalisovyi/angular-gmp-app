import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-multi-autocomplete-input',
  template: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MockMultiAutocompleteInputComponent),
      multi: true,
    },
  ],
})
export class MockMultiAutocompleteInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() hint = '';
  @Input() placeholder = '';
  @Input() errorMessage = '';
  @Input() showError = false;
  @Input() arrayForSearch: any[] = [];

  writeValue() { }

  registerOnChange() { }

  registerOnTouched() { }
}
