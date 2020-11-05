import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  template: '<button id="course-search-button" (click)="onSearchButtonClick($event)"></button>',
})
export class MockSearchInputComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();

  onSearchButtonClick(e: string) {
    this.search.emit(e);
  }
}
