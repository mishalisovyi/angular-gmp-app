import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-message',
  templateUrl: './no-data-message.component.html',
  styleUrls: [ './no-data-message.component.scss' ],
})
export class NoDataMessageComponent {
  @Input() message = 'No data';
}
