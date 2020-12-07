import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { take, tap } from 'rxjs/operators';

import { AppRoutePath } from '@app/enums/app-route-path.enum';
import { ErrorMessage } from '@app/enums/error-message.enum';
import { CourseData } from '@app/interfaces/entities/course.interface';
import { CoursesService } from '@app/services/courses/courses.service';
import { getDatePartFromIsoDateString, getFormattedCurrentDate, isValueIntegerNumber, parseStringToIntegerNumber } from '@app/util/util';

const INITIAL_COURSE_DATA = {
  title: '',
  description: '',
  duration: 0,
  creationDate: getFormattedCurrentDate(),
  topRated: false,
}

@Component({
  selector: 'app-course-add-edit-form',
  templateUrl: './course-add-edit-form.component.html',
  styleUrls: [ './course-add-edit-form.component.scss' ],
})
export class CourseAddEditFormComponent implements OnInit {
  courseData: CourseData = null;
  courseId: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    this.extractCourseIdFromRouteParams();
    this.setInitialCourseData();
    this.handleCourseLoading();
  }

  get isEditingMode(): boolean {
    return isValueIntegerNumber(this.courseId);
  }

  onSubmit() {
    this.submitMethodFactory()();
  }

  onCancel() {
    this.navigateToCoursesList();
  }

  private extractCourseIdFromRouteParams() {
    this.courseId = parseStringToIntegerNumber(this.activatedRoute.snapshot.params.id);
  }

  private setInitialCourseData() {
    this.setCourseData(INITIAL_COURSE_DATA);
  }

  private handleCourseLoading() {
    if (this.isEditingMode) {
      this.getCourseById(this.courseId);
    }
  }

  private submitMethodFactory(): () => void {
    return this.isEditingMode ? this.editCourse.bind(this) : this.createCourse.bind(this);
  }

  private navigateToCoursesList() {
    this.router.navigate([ AppRoutePath.Courses ]);
  }

  private setCourseData(courseData: CourseData) {
    this.courseData = { ...courseData, creationDate: getDatePartFromIsoDateString(courseData.creationDate) };
  }

  private getCourseById(id: number) {
    this.coursesService.getById(id).pipe(
      take(1),
      tap(
        course => this.setCourseData(course),
        () => alert(ErrorMessage.CourseGet),
      ),
    ).subscribe();
  }

  private editCourse() {
    this.coursesService.update(this.courseId, this.courseData).pipe(
      take(1),
      tap(
        () => this.navigateToCoursesList(),
        () => alert(ErrorMessage.CourseEdit),
      ),
    ).subscribe();
  }

  private createCourse() {
    this.coursesService.create(this.courseData).pipe(
      take(1),
      tap(
        () => this.navigateToCoursesList(),
        () => alert(ErrorMessage.CourseCreate),
      ),
    ).subscribe()
  }
}
