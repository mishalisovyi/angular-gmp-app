import { Component, EventEmitter, Input, Output } from '@angular/core';

import { faCalendar, faClock, faPen, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Course } from '../../../../interfaces/course.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: [ './course-item.component.scss' ],
})
export class CourseItemComponent {
  @Input() course: Course;
  @Output() courseDeleted: EventEmitter<number>;

  clockIcon: IconDefinition = faClock;
  calendarIcon: IconDefinition = faCalendar;
  editCourseIcon: IconDefinition = faPen;
  deleteCourseIcon: IconDefinition = faTrash;

  constructor() {
    this.courseDeleted = new EventEmitter<number>();
  }

  onCourseDeleteClick(courseId: number) {
    this.courseDeleted.emit(courseId);
  }
}
