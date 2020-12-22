import { Component } from '@angular/core';

import { CourseEditData } from '@app/interfaces/parameters';
import { CoursesFacade } from '@app/services';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: [ './course-edit-page.component.scss' ],
})
export class CourseEditPageComponent {
  constructor(private coursesFacade: CoursesFacade) { }

  onCourseEdit({ courseId, courseData }: CourseEditData) {
    this.coursesFacade.updateCourse({ courseId, courseData });
  }
}
