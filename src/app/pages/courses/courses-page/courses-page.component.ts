import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { AppRoutePath, ConfirmMessage } from '@app/enums';
import { Course } from '@app/interfaces/entities';
import { ConfirmService, CoursesFacade, SubscriptionService } from '@app/services';
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
    private coursesFacade: CoursesFacade,
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
        tap(() => this.coursesFacade.deleteCourse(id)),
      )
      .subscribe();
  }

  onLoadMore() {
    this.setNextCoursesPageParameters();
    this.loadCoursesPage();
  }

  private subscribeOnCoursesList() {
    this.courses$ = this.coursesFacade.courses$;
  }

  private getCoursesList() {
    this.coursesFacade.loadCourses({
      textFragment: this.textFragment,
      count: PAGE_SIZE,
      start: this.coursesListNewPageStartIndex,
    });
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
    this.coursesFacade.loadCoursesPage({
      textFragment: this.textFragment,
      count: PAGE_SIZE,
      start: this.coursesListNewPageStartIndex,
    });
  }

  private onCourseSearch(textFragment: string) {
    this.setTextFragment(textFragment);
    this.resetPaginationParameters();
    this.getCoursesList();
  }

  private setTextFragment(textFragment: string) {
    this.textFragment = textFragment;
  }

  private resetPaginationParameters() {
    this.coursesListNewPageStartIndex = 0;
  }
}
