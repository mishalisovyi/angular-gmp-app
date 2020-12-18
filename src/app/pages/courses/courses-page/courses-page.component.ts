import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, filter, scan, switchMap, take, tap } from 'rxjs/operators';

import { AppRoutePath, ConfirmMessage, ErrorMessage } from '@app/enums';
import { Course } from '@app/interfaces/entities';
import { ConfirmService, CoursesService, LoadingService } from '@app/services';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const PAGE_SIZE = 5;

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: [ './courses-page.component.scss' ],
})
export class CoursesPageComponent implements OnInit {
  isLoading$: Observable<boolean>;
  courses$: Observable<Course[]>;
  iconPlus: IconDefinition = faPlusCircle;
  coursesListNewPageStartIndex = 0;

  textFragment = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    private confirmService: ConfirmService,
  ) {
    this.isLoading$ = this.loadingService.loading$;
  }

  ngOnInit() {
    this.refreshCoursesList();
  }

  onCourseSearch(textFragment: string) {
    this.setTextFragment(textFragment);
    this.refreshCoursesList();
  }

  onCourseAddClick() {
    this.navigateToCourseAddPage();
  }

  onCourseDelete(courseId: number) {
    this.confirmService.confirm(ConfirmMessage.DeleteCourse)
      .pipe(
        filter(confirm => confirm),
        switchMap(() => this.coursesService.delete(courseId)),
        tap(
          () => this.refreshCoursesList(),
          () => alert(ErrorMessage.CourseDelete),
        ),
        take(1),
      )
      .subscribe();
  }

  onLoadMore() {
    this.setNextCoursesPageParameters();
    this.loadCoursesPage();
  }

  private refreshCoursesList() {
    this.resetPaginationParameters();
    this.getCourses();
    this.loadCoursesPage();
  }

  private setTextFragment(textFragment: string) {
    this.textFragment = textFragment;
  }

  private navigateToCourseAddPage() {
    this.router.navigate([ AppRoutePath.Add ], { relativeTo: this.activatedRoute });
  }

  private setNextCoursesPageParameters() {
    this.coursesListNewPageStartIndex = this.coursesListNewPageStartIndex + PAGE_SIZE;
  }

  private loadCoursesPage() {
    this.coursesService.loadCoursesPage({
      textFragment: this.textFragment,
      count: PAGE_SIZE,
      start: this.coursesListNewPageStartIndex,
    })
  }

  private resetPaginationParameters() {
    this.coursesListNewPageStartIndex = 0;
  }

  private getCourses() {
    this.courses$ = this.coursesService.getList().pipe(
      scan((coursesList, newCoursesPage) => [ ...coursesList, ...newCoursesPage ], []),
      catchError(({ error }) => {
        alert(`${ErrorMessage.CoursesGet}: ${error}`)

        return of([]);
      }),
    );
  }
}
