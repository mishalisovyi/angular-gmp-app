import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-load-more-panel',
  templateUrl: './load-more-panel.component.html',
  styleUrls: [ './load-more-panel.component.scss' ],
})
export class LoadMorePanelComponent {
  @Output() loadMore: EventEmitter<void>;

  constructor() {
    this.loadMore = new EventEmitter<void>();
  }

  onLoadMore() {
    this.loadMore.emit();
  }
}
