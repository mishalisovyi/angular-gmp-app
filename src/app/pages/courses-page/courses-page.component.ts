import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Course } from '../../interfaces/course.interface';
import { ConfirmService } from '../../services/confirm/confirm.service';
import { CoursesService } from '../../services/courses/courses.service';
import { LoadingService } from '../../services/loading/loading.service';

const FIELD_NAME_FOR_COURSE_SEARCH = 'title';
const DELETE_COURSE_CONFIRM_MESSAGE = 'Do you really want to delete this course?';

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
    this.courses$ = this.coursesService.getList$({ field: FIELD_NAME_FOR_COURSE_SEARCH, searchString });
  }

  onCourseAddClick() {
    // tslint:disable-next-line: no-console
    console.log('On course add');
  }

  onCourseDelete(courseId: number) {
    let deletionConfirmed = false;

    this.confirmService.confirm$(DELETE_COURSE_CONFIRM_MESSAGE)
      .pipe(switchMap((confirm: boolean) => {
        deletionConfirmed = confirm;

        return deletionConfirmed ? this.coursesService.delete$(courseId) : of({});
      }))
      .subscribe(
        () => {
          if (deletionConfirmed) {
            this.getCourses()
          }
        },
        () => alert('An error has occured during the courses deleting'),
      );
  }

  onLoadMore() {
    // tslint:disable-next-line: no-console
    console.log('On load more');
  }

  private getCourses() {
    this.courses$ = this.coursesService.getList$();
  }
}
