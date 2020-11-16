import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Course } from '../../interfaces/course.interface';
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
  coursesForDisplay: Course[];
  iconPlus: IconDefinition = faPlusCircle;

  constructor(private coursesService: CoursesService, private loadingService: LoadingService) {
    this.isLoading$ = this.loadingService.loading$;
  }

  ngOnInit() {
    this.getCourses();
  }

  onCourseSearch(searchString: string) {
    this.courses$ = this.coursesService.getCourses$({ field: FIELD_NAME_FOR_COURSE_SEARCH, searchString });
  }

  onCourseAddClick() {
    // tslint:disable-next-line: no-console
    console.log('On course add');
  }

  onCourseDelete(courseId: number) {
    // tslint:disable-next-line: no-console
    console.log('On course delete: ', courseId);
  }

  onLoadMore() {
    // tslint:disable-next-line: no-console
    console.log('On load more');
  }

  private getCourses() {
    this.courses$ = this.coursesService.getCourses$();
  }
}
