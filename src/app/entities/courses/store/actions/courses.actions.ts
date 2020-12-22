import { createAction, props } from '@ngrx/store';

import { Course, CourseData } from '@app/interfaces/entities';
import { CoursesListData } from '@app/interfaces/parameters';

export const requestGetCourses = createAction('[Courses] Get request', props<CoursesListData>());
export const getCoursesFailure = createAction('[Courses] Get failure', props<{ errorMessage: string }>());

export const requestGetCoursesPage = createAction('[Courses] Get page request', props<CoursesListData>());
export const getCoursesPageFailure = createAction('[Courses] Get page failure', props<{ errorMessage: string }>());

export const getCourseById = createAction('[Courses] Get by ID', props<{ id: number }>());

export const requestDeleteCourse = createAction('[Courses] Delete request', props<{ id: number }>());
export const deleteCourseSuccess = createAction('[Courses] Delete success', props<{ id: number }>());
export const deleteCourseFailure = createAction('[Courses] Delete failure', props<{ errorMessage: string }>());

export const requestCreateCourse = createAction('[Courses] Create request', props<CourseData>());
export const createCourseSuccess = createAction('[Courses] Create success');
export const createCourseFailure = createAction('[Courses] Create failure', props<{ errorMessage: string }>());

export const requestUpdateCourse = createAction('[Courses] Update request', props<{ courseId: number, courseData: CourseData }>());
export const updateCourseSuccess = createAction('[Courses] Update success');
export const updateCourseFailure = createAction('[Courses] Update failure', props<{ errorMessage: string }>());

export const setCourses = createAction('[Courses] Set courses data', (courses: Course[]) => ({ courses }));
export const resetCourses = createAction('[Courses] Reset courses data', (courses: Course[]) => ({ courses }));
