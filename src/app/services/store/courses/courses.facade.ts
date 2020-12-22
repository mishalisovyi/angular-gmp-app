import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getCourseById, getCourses } from '@app/entities/courses/store';
import {
  requestCreateCourse,
  requestDeleteCourse,
  requestGetCourses,
  requestGetCoursesPage,
  requestUpdateCourse,
} from '@app/entities/courses/store/actions/courses.actions';
import { CoursesState } from '@app/entities/courses/store/reducers/courses.reducer';
import { Course, CourseData } from '@app/interfaces/entities';
import { CourseEditData, CoursesListData } from '@app/interfaces/parameters';

@Injectable({
  providedIn: 'root',
})
export class CoursesFacade {
  courses$ = this.store.select(getCourses);

  constructor(private store: Store<CoursesState>) { }

  loadCourses(coursesListData: CoursesListData) {
    this.store.dispatch(requestGetCourses(coursesListData));
  }

  loadCoursesPage(coursesListData: CoursesListData) {
    this.store.dispatch(requestGetCoursesPage(coursesListData));
  }

  getCourseById(id: number): Observable<Course> {
    return this.store.select(getCourseById, { courseId: id });
  }

  createCourse(courseData: CourseData) {
    this.store.dispatch(requestCreateCourse(courseData));
  }

  deleteCourse(id: number) {
    this.store.dispatch(requestDeleteCourse({ id }));
  }

  updateCourse({ courseId, courseData }: CourseEditData) {
    this.store.dispatch(requestUpdateCourse({ courseId, courseData }));
  }
}
