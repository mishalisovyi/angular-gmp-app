import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { LoadingService } from '@app/services/loading/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: [ './spinner.component.scss' ],
})
export class SpinnerComponent {
  isLoading$: Observable<boolean>

  constructor(private loadingService: LoadingService) {
    this.isLoading$ = this.loadingService.loading$;
  }
}
