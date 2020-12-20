import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

import { SubscriptionService } from '@app/services';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: [ './search-input.component.scss' ],
  providers: [ SubscriptionService ],
})
export class SearchInputComponent implements AfterViewInit {
  @Output() search = new EventEmitter<string>()

  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>

  private searchTerm$$ = new Subject<string>();

  constructor(private subscriptionService: SubscriptionService) { }

  ngAfterViewInit() {
    this.listenToInputKeyupEvent();
  }

  get searchTermChanged(): Observable<string> {
    return this.searchTerm$$.asObservable();
  }

  private listenToInputKeyupEvent() {
    this.subscriptionService.register = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map(event => (event.target as HTMLInputElement).value),
      filter(value => value.length >= 3 || !value.length),
      debounceTime(400),
      distinctUntilChanged(),
      tap(value => this.searchTerm$$.next(value)),
    ).subscribe()
  }

}
