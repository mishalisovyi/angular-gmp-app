import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutePath } from '@app/enums/app-route-path.enum';
import { Course } from '@app/interfaces/entities/course.interface';

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

  onCourseEditClick(courseId: number, courseTitle: string) {
    this.navigateToCourseEditPage(courseId, courseTitle);
  }

  onCourseDeleteClick(courseId: number) {
    this.emitCourseDeletedEvent(courseId);
  }

  private navigateToCourseEditPage(courseId: number, courseTitle: string) {
    this.router.navigate([ `${AppRoutePath.Courses}/${courseId}` ], {
      state: { breadcrumbsStepTitle: courseTitle },
    });
  }

  private emitCourseDeletedEvent(courseId: number) {
    this.courseDeleted.emit(courseId);
  }
}
