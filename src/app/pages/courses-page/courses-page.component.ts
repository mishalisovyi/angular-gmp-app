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

  courseSearchIsHandled = false;
  courseAddingIsHandled = false;
  courseDeletingIsHandled = false;
  loadMoreCoursesIsHandled = false;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.getCourses();
  }

  onCourseSearch(searchString: string) {
    // tslint:disable-next-line: no-console
    console.log('On course search: ', searchString);
    this.courseSearchIsHandled = true;
  }

  onCourseAddClick() {
    // tslint:disable-next-line: no-console
    console.log('On course add');
    this.courseAddingIsHandled = true;
  }

  onCourseDelete(courseId: number) {
    // tslint:disable-next-line: no-console
    console.log('On course delete: ', courseId);
    this.courseDeletingIsHandled = true;
  }

  onLoadMore() {
    // tslint:disable-next-line: no-console
    console.log('On load more');
    this.loadMoreCoursesIsHandled = true;
  }

  private getCourses() {
    this.courses$ = this.coursesService.getCourses();
  }
}
