import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { getCourses } from '@app/entities/courses/store';
import { deleteCourse, loadCourses, loadCoursesPage } from '@app/entities/courses/store/actions/courses.actions';
import { CoursesState } from '@app/entities/courses/store/reducers/courses.reducer';
import { AppRoutePath, ConfirmMessage } from '@app/enums';
import { Course } from '@app/interfaces/entities';
import { ConfirmService, SubscriptionService } from '@app/services';
import { SearchInputComponent } from '@app/shared';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const PAGE_SIZE = 5;

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: [ './courses-page.component.scss' ],
  providers: [ SubscriptionService ],
})
export class CoursesPageComponent implements OnInit, AfterViewInit {
  @ViewChild(SearchInputComponent) searchInputComponent: SearchInputComponent;

  courses$: Observable<Course[]>;
  iconPlus: IconDefinition = faPlusCircle;
  coursesListNewPageStartIndex = 0;

  textFragment = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<CoursesState>,
    private confirmService: ConfirmService,
    private subscriptionService: SubscriptionService,
  ) { }

  ngOnInit() {
    this.subscribeOnCoursesList();
    this.getCoursesList();
  }

  ngAfterViewInit() {
    this.listenToSearchTermChangedEvent();
  }

  onCourseAddClick() {
    this.navigateToCourseAddPage();
  }

  onCourseDelete(id: number) {
    this.confirmService.confirm(ConfirmMessage.DeleteCourse)
      .pipe(
        filter(confirm => confirm),
        tap(() => this.store.dispatch(deleteCourse({ id }))),
      )
      .subscribe();
  }

  onLoadMore() {
    this.setNextCoursesPageParameters();
    this.loadCoursesPage();
  }

  private subscribeOnCoursesList() {
    this.courses$ = this.store.select(getCourses);
  }

  private getCoursesList() {
    this.store.dispatch(loadCourses({
      textFragment: this.textFragment,
      count: PAGE_SIZE,
      start: this.coursesListNewPageStartIndex,
    }));
  }

  private listenToSearchTermChangedEvent() {
    this.subscriptionService.register = this.searchInputComponent.searchTermChanged.pipe(
      tap(searchTerm => this.onCourseSearch(searchTerm)),
    ).subscribe();
  }

  private navigateToCourseAddPage() {
    this.router.navigate([ AppRoutePath.Add ], { relativeTo: this.activatedRoute });
  }

  private setNextCoursesPageParameters() {
    this.coursesListNewPageStartIndex = this.coursesListNewPageStartIndex + PAGE_SIZE;
  }

  private loadCoursesPage() {
    this.store.dispatch(loadCoursesPage({
      textFragment: this.textFragment,
      count: PAGE_SIZE,
      start: this.coursesListNewPageStartIndex,
    }));
  }

  private onCourseSearch(textFragment: string) {
    this.setTextFragment(textFragment);
    this.resetPaginationParameters();
    this.searchCourses();
  }

  private setTextFragment(textFragment: string) {
    this.textFragment = textFragment;
  }

  private resetPaginationParameters() {
    this.coursesListNewPageStartIndex = 0;
  }

  private searchCourses() {
    this.store.dispatch(loadCourses({
      textFragment: this.textFragment,
      count: PAGE_SIZE,
      start: this.coursesListNewPageStartIndex,
    }))
  }
}
