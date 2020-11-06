import { Component, OnInit } from '@angular/core';

import { finalize } from 'rxjs/operators';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Course } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';
import { SearchByPipe } from '../../shared/pipes/search-by/search-by.pipe';

const FIELD_NAME_FOR_COURSE_SEARCH = 'title';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: [ './courses-page.component.scss' ],
  providers: [ SearchByPipe ],
})
export class CoursesPageComponent implements OnInit {
  courses: Course[];
  coursesForDisplay: Course[];
  iconPlus: IconDefinition = faPlusCircle;

  loading: boolean;

  constructor(private coursesService: CoursesService, public searchByPipe: SearchByPipe) { }

  ngOnInit() {
    this.getCourses();
  }

  onCourseSearch(searchString: string) {
    this.coursesForDisplay = this.searchByPipe.transform(this.courses, FIELD_NAME_FOR_COURSE_SEARCH, searchString);
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
    this.loading = true;

    this.coursesService.getCourses$()
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        courses => {
          this.courses = courses;
          this.coursesForDisplay = courses;
        },
        () => alert('An error has occured during the courses loading'),
      );
  }
}
