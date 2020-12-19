import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutePath } from '@app/enums';
import { Course } from '@app/interfaces/entities';

import { faCalendar, faClock, faPen, faStar, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: [ './course-item.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent {
  @Input() course: Course;
  @Output() courseDeleted: EventEmitter<number>;

  clockIcon: IconDefinition = faClock;
  calendarIcon: IconDefinition = faCalendar;
  editCourseIcon: IconDefinition = faPen;
  deleteCourseIcon: IconDefinition = faTrash;
  topRatedIcon: IconDefinition = faStar;

  constructor(private router: Router) {
    this.courseDeleted = new EventEmitter<number>();
  }

  onCourseEditClick({ id: courseId, name: courseName }: Course) {
    this.navigateToCourseEditPage(courseId, courseName);
  }

  onCourseDeleteClick(courseId: number) {
    this.courseDeleted.emit(courseId);
  }

  private navigateToCourseEditPage(courseId: number, courseTitle: string) {
    this.router.navigate([ `${AppRoutePath.Courses}/${courseId}` ], {
      state: { breadcrumbsStepTitle: courseTitle },
    });
  }
}
