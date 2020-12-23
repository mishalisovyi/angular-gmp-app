import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Author } from '@app/interfaces/entities/author.interface';

@Component({
  selector: 'app-multi-autocomplete-input',
  templateUrl: './multi-autocomplete-input.component.html',
  styleUrls: [ './multi-autocomplete-input.component.scss' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiAutocompleteInputComponent),
      multi: true,
    },
  ],
})
export class MultiAutocompleteInputComponent {
  @Input() label = '';
  @Input() hint = '';
  @Input() placeholder = '';
  @Input() errorMessage = '';
  @Input() showError = false;
  @Input() arrayForSearch: any[] = [];

  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;

  itemSearchControl = new FormControl();
  onChange: (items: Author[]) => void;

  selectedItems = [];
  separatorKeysCodes: number[] = [ ENTER, COMMA ];
  filteredItems$: Observable<any[]>;

  constructor() {
    this.filteredItems$ = this.itemSearchControl.valueChanges.pipe(
      startWith(''),
      map((item: string) => item ? this.filter(item) : this.arrayForSearch.slice()),
    );
  }

  /**
   * Mandatory methods for implementing of ControlValueAccessor interface
   */
  writeValue(authors: Author[]) {
    this.selectedItems = [ ...authors ];
  }

  registerOnChange(onChange: (items: Author[]) => void) {
    this.onChange = onChange;
  }

  registerOnTouched() { }

  /**
   * Custom component methods
   */
  onItemRemoved(itemId: string) {
    this.selectedItems = this.selectedItems.filter(({ id }) => itemId !== id);
    this.onChange(this.selectedItems);
  }

  onInputTokenEnd(event: MatChipInputEvent) {
    const input = event.input;

    if (input) {
      input.value = '';
    }

    this.itemSearchControl.setValue(null);
  }

  onItemSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedItems.push(this.arrayForSearch.find(({ name }) => name === event.option.viewValue));
    this.searchInput.nativeElement.value = '';
    this.itemSearchControl.setValue(null);
    this.onChange(this.selectedItems);
  }

  private filter(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.arrayForSearch.filter(item => item.name.toLowerCase().includes(filterValue));
  }
}
