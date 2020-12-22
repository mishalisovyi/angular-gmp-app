import { createReducer, on } from '@ngrx/store';

import * as CoursesActions from '@app/entities/courses/store/actions/courses.actions';
import { Course } from '@app/interfaces/entities';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
  courses: Course[]
}

export const initialState: CoursesState = {
  courses: [],
};

const handleSetCoursesData = (state: CoursesState, { courses }) => ({
  ...state,
  courses: [ ...state.courses, ...courses ],
});

const handleResetCoursesData = (state: CoursesState, { courses }) => ({
  ...state,
  courses,
});

const handleDeleteCourseSuccess = (state: CoursesState, { id: courseId }) => ({
  ...state,
  courses: [ ...state.courses.filter(({ id }) => id !== courseId) ],
})

export const coursesReducer = createReducer(
  initialState,

  on(CoursesActions.setCourses, handleSetCoursesData),
  on(CoursesActions.resetCourses, handleResetCoursesData),
  on(CoursesActions.deleteCourseSuccess, handleDeleteCourseSuccess),
);

export const selectCourses = ({ courses }: CoursesState) => [ ...courses ];
export const selectCourseById = ({ courses }: CoursesState, { courseId }) => courses.find(({ id }) => id === courseId);
