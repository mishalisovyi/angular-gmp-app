import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: [ './search-input.component.scss' ],
})
export class SearchInputComponent {
  @Output() search: EventEmitter<string>;

  searchString = '';

  constructor() {
    this.search = new EventEmitter<string>()
  }

  onSearchClick() {
    this.search.emit(this.searchString);
  }
}
