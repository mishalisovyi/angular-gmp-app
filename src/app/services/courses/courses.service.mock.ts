import { of, Subject } from 'rxjs';

import { Course } from '@app/interfaces/entities/course.interface';

import { CoursesService } from './courses.service';

export const mockCourses = [ {
  id: 1,
  name: 'Video Course 1. Name 1',
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  length: 59,
  date: new Date('1995-12-17T03:24:00').toISOString(),
  isTopRated: true,
  authors: [
    {
      id: '1',
      name: 'test 1',
    },
  ],
}, {
  id: 2,
  name: 'Video Course 2. Name 2',
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  length: 94,
  date: new Date().toISOString(),
  isTopRated: false,
  authors: [
    {
      id: '2',
      name: 'test 2',
    },
  ],
}, {
  id: 3,
  name: 'Video Course 3. Name 3',
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  length: 94,
  date: new Date('2000-12-17T03:24:00').toISOString(),
  isTopRated: true,
  authors: [
    {
      id: '3',
      name: 'test 3',
    },
  ],
} ]

class MockCoursesService {
  private courses$$ = new Subject<Course[]>();

  getList() {
    return this.courses$$.asObservable();
  }

  loadCoursesPage() {
    this.courses$$.next(mockCourses);
  }

  getById() {
    return of(mockCourses[0])
  }

  delete() {
    return of({ statusCode: 200 })
  }

  create() {
    return of({ statusCode: 200 })
  }

  update() {
    return of({ statusCode: 200 })
  }
}

export const mockCoursesServiceProvider = { provide: CoursesService, useClass: MockCoursesService }
