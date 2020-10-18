import { Component } from '@angular/core';

@Component({
  selector: 'app-load-more-panel',
  templateUrl: './load-more-panel.component.html',
  styleUrls: [ './load-more-panel.component.scss' ],
})
export class LoadMorePanelComponent {
  constructor() { }

  public loadMoreHandler() {
    // tslint:disable-next-line: no-console
    console.log('Load more');
  }
}
