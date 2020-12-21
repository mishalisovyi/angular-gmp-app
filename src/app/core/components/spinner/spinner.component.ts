import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getLoadingStatus, LoadingState } from '@app/store/loading';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: [ './spinner.component.scss' ],
})
export class SpinnerComponent {
  isLoading$: Observable<boolean>

  constructor(private store: Store<LoadingState>) {
    this.isLoading$ = this.store.select(getLoadingStatus);
  }
}
