import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';

import { of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { createCourse, deleteCourse, deleteCourseSuccess, loadCourses, loadCoursesPage, resetCourses, setCourses, updateCourse } from '@app/entities/courses/store/actions/courses.actions';
import { AppRoutePath, ErrorMessage } from '@app/enums';
import { CoursesService } from '@app/services';

@Injectable()
export class CoursesEffects {

  constructor(private actions$: Actions, private router: Router, private coursesService: CoursesService) { }

  @Effect()
  loadCourses$ = this.actions$.pipe(
    ofType(loadCourses),
    switchMap(({ start, count, sort, textFragment }) => this.coursesService.loadCoursesPage({ start, count, sort, textFragment })),
    catchError(({ error }) => {
      alert(`${ErrorMessage.CoursesGet}: ${error}`);

      return of([]);
    }),
    map(courses => resetCourses(courses)),
  );

  @Effect()
  loadCoursesPage$ = this.actions$.pipe(
    ofType(loadCoursesPage),
    switchMap(({ start, count, sort, textFragment }) => this.coursesService.loadCoursesPage({ start, count, sort, textFragment })),
    catchError(({ error }) => {
      alert(`${ErrorMessage.CoursesGet}: ${error}`);

      return of([]);
    }),
    map(courses => setCourses(courses)),
  );

  deleteCourse$ = createEffect(() => {
    let courseId = null;

    return this.actions$.pipe(
      ofType(deleteCourse),
      switchMap(({ id }) => {
        courseId = id;

        return this.coursesService.delete(courseId);
      }),
      catchError(({ error }) => {
        alert(`${ErrorMessage.CourseDelete}: ${error}`);

        return throwError(error);
      }),
      map(() => deleteCourseSuccess({ id: courseId })),
    );
  })

  @Effect({ dispatch: false })
  createCourse$ = this.actions$.pipe(
    ofType(createCourse),
    switchMap(courseData => this.coursesService.create(courseData)),
    catchError(({ error }) => {
      alert(`${ErrorMessage.CourseCreate}: ${error}`);

      return throwError(error);
    }),
    tap(() => this.router.navigate([ AppRoutePath.Courses ])),
  )

  @Effect({ dispatch: false })
  editCourse$ = this.actions$.pipe(
    ofType(updateCourse),
    switchMap(({ courseId, courseData }) => this.coursesService.update(courseId, courseData)),
    catchError(({ error }) => {
      alert(`${ErrorMessage.CourseEdit}: ${error}`);

      return throwError(error);
    }),
    tap(() => this.router.navigate([ AppRoutePath.Courses ])),
  )
}
