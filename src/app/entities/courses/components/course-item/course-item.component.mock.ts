import { Component, Input } from '@angular/core';

import { Course } from '@app/interfaces/entities';

@Component({
  selector: 'app-course-item',
  template: '',
})
export class MockCourseItemComponent {
  @Input() course: Course;
}
