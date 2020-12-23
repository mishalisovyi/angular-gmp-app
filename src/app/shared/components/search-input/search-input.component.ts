import { AfterViewInit, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';

import { SubscriptionService } from '@app/services';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: [ './search-input.component.scss' ],
  providers: [ SubscriptionService ],
})
export class SearchInputComponent implements AfterViewInit {
  private searchTerm$$ = new Subject<string>();

  searchControl = new FormControl();

  constructor(private subscriptionService: SubscriptionService) { }

  ngAfterViewInit() {
    this.listenToInputKeyupEvent();
  }

  get searchTermChanged(): Observable<string> {
    return this.searchTerm$$.asObservable();
  }

  private listenToInputKeyupEvent() {
    this.subscriptionService.register = this.searchControl.valueChanges.pipe(
      filter(value => value.length >= 3 || !value.length),
      debounceTime(400),
      distinctUntilChanged(),
      tap(value => this.searchTerm$$.next(value)),
    ).subscribe()
  }
}
