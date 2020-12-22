import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { LoadingFacade } from '@app/services';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: [ './spinner.component.scss' ],
})
export class SpinnerComponent {
  isLoading$: Observable<boolean>

  constructor(private loadingFacade: LoadingFacade) {
    this.isLoading$ = this.loadingFacade.isLoading$;
  }
}
