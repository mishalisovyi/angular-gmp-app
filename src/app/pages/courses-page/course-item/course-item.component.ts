import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '@app/models/course.model';

import { faCalendar, faClock, faPen, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: [ './course-item.component.scss' ],
})
export class CourseItemComponent {
  @Input() public course: Course;
  @Output() public courseDelete: EventEmitter<number>;

  public clockIcon: IconDefinition = faClock;
  public calendarIcon: IconDefinition = faCalendar;
  public editCourseIcon: IconDefinition = faPen;
  public deleteCourseIcon: IconDefinition = faTrash;

  constructor() {
    this.courseDelete = new EventEmitter<number>();
  }

  deleteCourseHandler(courseId: number) {
    this.courseDelete.emit(courseId);
  }
}
