import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Course } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses/courses.service';
import { LoadingService } from '../../services/loading/loading.service';
import { SearchByPipe } from '../../shared/pipes/search-by/search-by.pipe';

const FIELD_NAME_FOR_COURSE_SEARCH = 'title';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: [ './courses-page.component.scss' ],
  providers: [ SearchByPipe ],
})
export class CoursesPageComponent implements OnInit {
  isLoading$: Observable<boolean>;
  courses: Course[];
  coursesForDisplay: Course[];
  iconPlus: IconDefinition = faPlusCircle;

  constructor(private coursesService: CoursesService, private searchByPipe: SearchByPipe, private loadingService: LoadingService) {
    this.isLoading$ = this.loadingService.loading$;
  }

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
    this.coursesService.getCourses$().subscribe(
      courses => {
        this.courses = courses;
        this.coursesForDisplay = courses;
      },
      () => alert('An error has occured during the courses loading'),
    );
  }
}
