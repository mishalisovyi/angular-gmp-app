import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Course } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: [ './courses-page.component.scss' ],
})
export class CoursesPageComponent implements OnInit {
  courses$: Observable<Course[]>;
  iconPlus: IconDefinition = faPlusCircle;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.getCourses();
  }

  onCourseSearch(searchString: string) {
    // tslint:disable-next-line: no-console
    console.log('On course search: ', searchString);
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
    this.courses$ = this.coursesService.getCourses();
  }
}
