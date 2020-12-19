import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { take, tap } from 'rxjs/operators';

import { AppRoutePath, ErrorMessage } from '@app/enums';
import { CourseData } from '@app/interfaces/entities';
import { CourseEditData } from '@app/interfaces/parameters';
import { CoursesService } from '@app/services';
import { getDatePartFromIsoDateString, getFormattedCurrentDate, isValueIntegerNumber, parseStringToIntegerNumber } from '@app/util/util';

const INITIAL_COURSE_DATA = {
  name: '',
  description: '',
  length: 0,
  date: getFormattedCurrentDate(),
  isTopRated: false,
}

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: [ './course-form.component.scss' ],
})
export class CourseFormComponent implements OnInit {
  courseData: CourseData = null;
  courseId: number;

  @Output() courseEdit = new EventEmitter<CourseEditData>();
  @Output() courseCreate = new EventEmitter<CourseData>();

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
    this.emitFormSubmitData();
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

  private emitFormSubmitData() {
    return this.isEditingMode
      ? this.courseEdit.emit({ courseId: this.courseId, courseData: this.courseData })
      : this.courseCreate.emit(this.courseData);
  }

  private navigateToCoursesList() {
    this.router.navigate([ AppRoutePath.Courses ]);
  }

  private setCourseData(courseData: CourseData) {
    this.courseData = { ...courseData, date: getDatePartFromIsoDateString(courseData.date) };
  }

  private getCourseById(id: number) {
    this.coursesService.getById(id).pipe(
      take(1),
      tap(
        course => this.setCourseData(course),
        ({ error }) => alert(`${ErrorMessage.CourseGet}: ${error}`),
      ),
    ).subscribe();
  }
}
