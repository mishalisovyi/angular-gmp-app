import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { filter, switchMap, take, tap } from 'rxjs/operators';

import { ConfirmMessage } from '@app/enums/confirm-message.enum';
import { ErrorMessage } from '@app/enums/error-message.enum';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Course } from '../../interfaces/entities/course.interface';
import { ConfirmService } from '../../services/confirm/confirm.service';
import { CoursesService } from '../../services/courses/courses.service';
import { LoadingService } from '../../services/loading/loading.service';

const FIELD_NAME_FOR_COURSE_SEARCH = 'title';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: [ './courses-page.component.scss' ],
})
export class CoursesPageComponent implements OnInit {
  isLoading$: Observable<boolean>;
  courses$: Observable<Course[]>;
  iconPlus: IconDefinition = faPlusCircle;

  constructor(private coursesService: CoursesService, private loadingService: LoadingService, private confirmService: ConfirmService) {
    this.isLoading$ = this.loadingService.loading$;
  }

  ngOnInit() {
    this.getCourses();
  }

  onCourseSearch(searchString: string) {
    this.courses$ = this.coursesService.getList({ field: FIELD_NAME_FOR_COURSE_SEARCH, searchString });
  }

  onCourseAddClick() {
    // tslint:disable-next-line: no-console
    console.log('On course add');
  }

  onCourseDelete(courseId: number) {
    this.confirmService.confirm(ConfirmMessage.DeleteCourse)
      .pipe(
        filter(confirm => confirm),
        switchMap(() => this.coursesService.delete(courseId)),
        tap(() => this.getCourses()),
        take(1),
      )
      .subscribe({
        error: () => alert(ErrorMessage.CourseDelete),
      });
  }

  onLoadMore() {
    // tslint:disable-next-line: no-console
    console.log('On load more');
  }

  private getCourses() {
    this.courses$ = this.coursesService.getList();
  }
}
