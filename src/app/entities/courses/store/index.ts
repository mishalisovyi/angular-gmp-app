import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { coursesFeatureKey, coursesReducer, CoursesState, selectCourseById, selectCourses } from '@app/entities/courses/store/reducers/courses.reducer';

interface CoursesFeatureState {
  [coursesFeatureKey]: CoursesState
}

export const reducers: ActionReducerMap<CoursesFeatureState> = {
  [coursesFeatureKey]: coursesReducer,
};

const selectCoursesState = createFeatureSelector<CoursesState>(coursesFeatureKey);
export const getCourses = createSelector(selectCoursesState, selectCourses);
export const getCourseById = createSelector(selectCoursesState, selectCourseById);
