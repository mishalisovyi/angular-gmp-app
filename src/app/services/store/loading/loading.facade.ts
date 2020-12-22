import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { getLoadingStatus, LoadingState } from '@app/store/loading';
import { startLoading, stopLoading } from '@app/store/loading/actions/loading.actions';

@Injectable({
  providedIn: 'root',
})
export class LoadingFacade {
  isLoading$ = this.store.select(getLoadingStatus)

  constructor(private store: Store<LoadingState>) { }

  startLoading() {
    this.store.dispatch(startLoading());
  }

  stopLoading() {
    this.store.dispatch(stopLoading());
  }
}
