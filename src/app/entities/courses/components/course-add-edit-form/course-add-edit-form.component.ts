import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { take } from 'rxjs/operators';

import { AppRoutePath } from '@app/enums/app-route-path.enum';
import { CoursesService } from '@app/services/courses/courses.service';
import { DurationInputComponent } from '@app/shared/components/duration-input/duration-input.component';
import { getFormattedCurrentDate } from '@app/util/util';

@Component({
  selector: 'app-course-add-edit-form',
  templateUrl: './course-add-edit-form.component.html',
  styleUrls: [ './course-add-edit-form.component.scss' ],
})
export class CourseAddEditFormComponent {
  title = '';
  description = '';
  creationDate = getFormattedCurrentDate();

  @ViewChild('durationInput') durationInput: DurationInputComponent;

  constructor(private router: Router, private coursesService: CoursesService) { }

  get duration() {
    return this.durationInput.durationValue;
  }

  onSubmit() {
    this.createCourse();
  }

  onCancel() {
    this.navigateToCoursesList();
  }

  private createCourse() {
    this.coursesService.create({
      title: this.title,
      description: this.description,
      creationDate: new Date(this.creationDate),
      duration: this.duration,
      topRated: false,
    })
      .pipe(take(1))
      .subscribe(
        () => this.navigateToCoursesList(),
        () => alert('An error has occured during the course creation'),
      )
  }

  private navigateToCoursesList() {
    this.router.navigate([ AppRoutePath.Courses ]);
  }
}
