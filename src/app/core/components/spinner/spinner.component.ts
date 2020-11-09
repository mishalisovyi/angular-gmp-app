import { Component } from '@angular/core';

import { LoadingService } from '@app/services/loading/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: [ './spinner.component.scss' ],
})
export class SpinnerComponent {
  constructor(public loadingService: LoadingService) { }
}
