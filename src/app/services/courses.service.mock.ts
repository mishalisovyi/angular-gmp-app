import { of } from 'rxjs';

import { CoursesService } from './courses.service';

const mockCourses = [ {
  id: 1,
  title: 'Video Course 1. Name 1',
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  duration: 59,
  creationDate: new Date(),
}, {
  id: 2,
  title: 'Video Course 2. Name 2',
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  duration: 94,
  creationDate: new Date(),
} ]

class MockCoursesService {
  getCourses$() {
    return of(mockCourses);
  }
}

export const mockCoursesServiceProvider = { provide: CoursesService, useClass: MockCoursesService }
