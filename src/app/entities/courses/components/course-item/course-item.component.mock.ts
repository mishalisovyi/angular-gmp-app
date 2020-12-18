import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../../../../interfaces/entities/course.interface';

@Component({
  selector: 'app-course-item',
  template: '<button id="course-delete-button" (click)="onDeleteButtonClick($event)"></button>',
})
export class MockCourseItemComponent {
  @Input() course: Course;
  @Output() courseDeleted: EventEmitter<number> = new EventEmitter();

  onDeleteButtonClick(e: any) {
    this.courseDeleted.emit(e);
  }
}
