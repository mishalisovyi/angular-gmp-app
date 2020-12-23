import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
  ],
})
export class MaterialModule { }
