import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { updateCourse } from '@app/entities/courses/store/actions/courses.actions';
import { CoursesState } from '@app/entities/courses/store/reducers/courses.reducer';
import { CourseEditData } from '@app/interfaces/parameters';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: [ './course-edit-page.component.scss' ],
})
export class CourseEditPageComponent {
  constructor(private store: Store<CoursesState>) { }

  onCourseEdit({ courseId, courseData }: CourseEditData) {
    this.store.dispatch(updateCourse({ courseId, courseData }));
  }
}
