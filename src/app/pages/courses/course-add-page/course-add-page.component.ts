import { Component } from '@angular/core';

import { CourseData } from '@app/interfaces/entities';
import { CoursesFacade } from '@app/services';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: [ './course-add-page.component.scss' ],
})
export class CourseAddPageComponent {
  constructor(private coursesFacade: CoursesFacade) { }

  onCourseCreate(courseData: CourseData) {
    this.coursesFacade.createCourse(courseData);
  }
}
