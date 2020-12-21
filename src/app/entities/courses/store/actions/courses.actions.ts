import { createAction, props } from '@ngrx/store';

import { Course, CourseData } from '@app/interfaces/entities';
import { CoursesListData } from '@app/interfaces/parameters';

export const loadCourses = createAction('[Courses] Load', props<CoursesListData>());
export const loadCoursesPage = createAction('[Courses] Load page', props<CoursesListData>());

export const getCourseById = createAction('[Courses] Get by ID', props<{ id: number }>());

export const deleteCourse = createAction('[Courses] Delete', props<{ id: number }>());
export const deleteCourseSuccess = createAction('[Courses] Delete success', props<{ id: number }>());

export const createCourse = createAction('[Courses] Create', props<CourseData>());
export const updateCourse = createAction('[Courses] Update', props<{ courseId: number, courseData: CourseData }>());

export const setCourses = createAction('[Courses] Set courses data', (courses: Course[]) => ({ courses }));
export const resetCourses = createAction('[Courses] Reset courses data', (courses: Course[]) => ({ courses }));
