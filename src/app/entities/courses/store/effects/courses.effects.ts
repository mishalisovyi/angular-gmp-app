import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import {
  createCourseFailure,
  createCourseSuccess,
  deleteCourseFailure,
  deleteCourseSuccess,
  getCoursesFailure,
  getCoursesPageFailure,
  requestCreateCourse,
  requestDeleteCourse,
  requestGetCourses,
  requestGetCoursesPage,
  requestUpdateCourse,
  resetCourses,
  setCourses,
  updateCourseFailure,
  updateCourseSuccess,
} from '@app/entities/courses/store/actions/courses.actions';
import { AppRoutePath, ErrorMessage } from '@app/enums';
import { CoursesService } from '@app/services';

@Injectable()
export class CoursesEffects {

  constructor(private actions$: Actions, private router: Router, private coursesService: CoursesService) { }

  @Effect()
  requestGetCourses$ = this.actions$.pipe(
    ofType(requestGetCourses),
    switchMap(({ start, count, sort, textFragment }) => this.coursesService.loadCoursesPage({ start, count, sort, textFragment }).pipe(
      map(courses => resetCourses(courses)),
      catchError(({ error }) => of(getCoursesFailure({ errorMessage: `${ErrorMessage.CoursesGet}: ${error}` })))),
    ),
  );

  @Effect({ dispatch: false })
  getCoursesFailure$ = this.actions$.pipe(
    ofType(getCoursesFailure),
    tap(({ errorMessage }) => alert(errorMessage)),
  );

  @Effect()
  requestGetCoursesPage$ = this.actions$.pipe(
    ofType(requestGetCoursesPage),
    switchMap(({ start, count, sort, textFragment }) => this.coursesService.loadCoursesPage({ start, count, sort, textFragment }).pipe(
      map(courses => setCourses(courses)),
      catchError(({ error }) => of(getCoursesPageFailure({ errorMessage: `${ErrorMessage.CoursesGet}: ${error}` })))),
    ),
  );

  @Effect({ dispatch: false })
  getCoursesPageFailure$ = this.actions$.pipe(
    ofType(getCoursesPageFailure),
    tap(({ errorMessage }) => alert(errorMessage)),
  );

  @Effect()
  requestDeleteCourse$ = this.actions$.pipe(
    ofType(requestDeleteCourse),
    switchMap(({ id }) => this.coursesService.delete(id).pipe(
      map(() => deleteCourseSuccess({ id })),
      catchError(({ error }) => of(deleteCourseFailure({ errorMessage: `${ErrorMessage.CourseDelete}: ${error}` })))),
    ),
  );

  @Effect({ dispatch: false })
  deleteCourseFailure$ = this.actions$.pipe(
    ofType(deleteCourseFailure),
    tap(({ errorMessage }) => alert(errorMessage)),
  );

  @Effect()
  requestCreateCourse$ = this.actions$.pipe(
    ofType(requestCreateCourse),
    switchMap(courseData => this.coursesService.create(courseData).pipe(
      map(() => createCourseSuccess()),
      catchError(({ error }) => of(createCourseFailure({ errorMessage: `${ErrorMessage.CourseCreate}: ${error}` })))),
    ),
  )

  @Effect({ dispatch: false })
  createCourseSuccess$ = this.actions$.pipe(
    ofType(createCourseSuccess),
    tap(() => this.router.navigate([ AppRoutePath.Courses ])),
  );

  @Effect({ dispatch: false })
  createCourseFailure$ = this.actions$.pipe(
    ofType(createCourseFailure),
    tap(({ errorMessage }) => alert(errorMessage)),
  );

  @Effect()
  requestUpdateCourse$ = this.actions$.pipe(
    ofType(requestUpdateCourse),
    switchMap(({ courseId, courseData }) => this.coursesService.update(courseId, courseData).pipe(
      map(() => updateCourseSuccess()),
      catchError(({ error }) => of(updateCourseFailure({ errorMessage: `${ErrorMessage.CourseEdit}: ${error}` })))),
    ),
  )

  @Effect({ dispatch: false })
  updateCourseSuccess$ = this.actions$.pipe(
    ofType(updateCourseSuccess),
    tap(() => this.router.navigate([ AppRoutePath.Courses ])),
  );

  @Effect({ dispatch: false })
  updateCourseFailure$ = this.actions$.pipe(
    ofType(updateCourseFailure),
    tap(({ errorMessage }) => alert(errorMessage)),
  );
}
