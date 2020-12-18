import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { take, tap } from 'rxjs/operators';

import { AppRoutePath, ErrorMessage } from '@app/enums';
import { CourseData } from '@app/interfaces/entities';
import { CoursesService } from '@app/services';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: [ './course-add-page.component.scss' ],
})
export class CourseAddPageComponent {
  constructor(private router: Router, private coursesService: CoursesService) { }

  onCourseCreate(courseData: CourseData) {
    this.coursesService.create(courseData).pipe(
      take(1),
      tap(
        () => this.navigateToCoursesList(),
        () => alert(ErrorMessage.CourseCreate),
      ),
    ).subscribe()
  }

  private navigateToCoursesList() {
    this.router.navigate([ AppRoutePath.Courses ]);
  }
}
