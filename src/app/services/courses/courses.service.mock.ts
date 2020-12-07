import { of } from 'rxjs';

import { CoursesService } from './courses.service';

export const mockCourses = [ {
  id: 1,
  title: 'Video Course 1. Name 1',
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  duration: 59,
  creationDate: new Date('1995-12-17T03:24:00').toISOString(),
  topRated: true,
}, {
  id: 2,
  title: 'Video Course 2. Name 2',
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  duration: 94,
  creationDate: new Date().toISOString(),
  topRated: false,
}, {
  id: 3,
  title: 'Video Course 3. Name 3',
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  duration: 94,
  creationDate: new Date('2000-12-17T03:24:00').toISOString(),
  topRated: true,
} ]

class MockCoursesService {
  getList() {
    return of(mockCourses);
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
