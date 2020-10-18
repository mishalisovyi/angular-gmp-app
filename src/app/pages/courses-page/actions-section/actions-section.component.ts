import { Component } from '@angular/core';

import { faPlusCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-actions-section',
  templateUrl: './actions-section.component.html',
  styleUrls: [ './actions-section.component.scss' ],
})
export class ActionsSectionComponent {
  public iconPlus: IconDefinition = faPlusCircle;
  public searchString = '';

  constructor() { }

  public searchCourseHandler() {
    // tslint:disable-next-line: no-console
    console.log(this.searchString);
  }
}
