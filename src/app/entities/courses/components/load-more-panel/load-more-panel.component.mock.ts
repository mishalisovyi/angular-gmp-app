import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-load-more-panel',
  template: '<button id="load-more-courses-button" (click)="onLoadMoreClick()"></button>',
})
export class MockLoadMorePanelComponent {
  @Output() loadMore: EventEmitter<void> = new EventEmitter();

  onLoadMoreClick() {
    this.loadMore.emit();
  }
}
