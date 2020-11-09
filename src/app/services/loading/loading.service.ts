import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject$$ = new BehaviorSubject(false);

  get loading$(): Observable<boolean> {
    return this.loadingSubject$$.asObservable();
  }

  startLoading() {
    this.loadingSubject$$.next(true);
  }

  stopLoading() {
    this.loadingSubject$$.next(false);
  }
}
