import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { createCourse } from '@app/entities/courses/store/actions/courses.actions';
import { CoursesState } from '@app/entities/courses/store/reducers/courses.reducer';
import { CourseData } from '@app/interfaces/entities';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: [ './course-add-page.component.scss' ],
})
export class CourseAddPageComponent {
  constructor(private store: Store<CoursesState>) { }

  onCourseCreate(courseData: CourseData) {
    this.store.dispatch(createCourse(courseData))
  }
}
