import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { take, tap } from 'rxjs/operators';

import { AppRoutePath, ErrorMessage } from '@app/enums';
import { CourseEditData } from '@app/interfaces/parameters';
import { CoursesService } from '@app/services';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: [ './course-edit-page.component.scss' ],
})
export class CourseEditPageComponent {
  constructor(private router: Router, private coursesService: CoursesService) { }

  onCourseEdit({ courseId, courseData }: CourseEditData) {
    this.coursesService.update(courseId, courseData).pipe(
      take(1),
      tap(
        () => this.navigateToCoursesList(),
        () => alert(ErrorMessage.CourseEdit),
      ),
    ).subscribe();
  }

  private navigateToCoursesList() {
    this.router.navigate([ AppRoutePath.Courses ]);
  }
}
