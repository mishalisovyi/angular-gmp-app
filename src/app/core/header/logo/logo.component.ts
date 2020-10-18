import { Component } from '@angular/core';

import { faPlayCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: [ './logo.component.scss' ],
})
export class LogoComponent {
  public iconPlay: IconDefinition = faPlayCircle;

  constructor() { }
}
