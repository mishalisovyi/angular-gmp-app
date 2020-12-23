import { AbstractControl, Validator } from '@angular/forms';

export class MultiAutocompleteInputValidator implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value && control.value.length < 1) {
      return { minLength: true };
    }

    return null;
  }
}
