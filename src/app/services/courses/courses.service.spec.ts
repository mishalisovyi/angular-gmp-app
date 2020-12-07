import { TestBed, waitForAsync } from '@angular/core/testing';

import { Course } from '@app/interfaces/entities/course.interface';
import { mockCourses } from '@app/services/courses/courses.service.mock';
import { SearchByPipe } from '@app/shared/pipes/search-by/search-by.pipe';

import { CoursesService } from './courses.service';

const MOCK_COURSE_DATA = {
  title: 'Video Course 1. Name 1',
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  duration: 59,
  creationDate: new Date().toISOString(),
  topRated: true,
}

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ SearchByPipe ],
    });
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load courses list', waitForAsync(() => {
    service.getList().subscribe((courses: Course[]) => {
      expect(courses.length).toBeGreaterThan(0);
    })
  }));

  it('should create course', waitForAsync(() => {
    const [ mockCourse ] = mockCourses;

    service.create(mockCourse).subscribe(() => {
      expect(service.COURSES).toContain(mockCourse);
    })
  }));

  it('should return course by ID', waitForAsync(() => {
    const testCourseId = 1;
    const mockCourse = mockCourses.find(({ id }) => id === testCourseId)

    service.COURSES = [ ...mockCourses ]

    service.getById(testCourseId).subscribe(course => {
      expect(course).toEqual(mockCourse);
    })
  }));

  it('should update course', waitForAsync(() => {
    const testCourseId = 2;

    service.COURSES = [ ...mockCourses ]

    service.update(testCourseId, MOCK_COURSE_DATA).subscribe(() => {
      const updatedCourse = service.COURSES.find(({ id }) => id === testCourseId)
      expect(updatedCourse).toEqual({ id: testCourseId, ...MOCK_COURSE_DATA });
    })
  }));

  it('should delete course', waitForAsync(() => {
    const testCourseId = 1;
    const mockCourse = mockCourses.find(({ id }) => id === testCourseId)

    service.COURSES = [ ...mockCourses ]

    service.delete(testCourseId).subscribe(() => {
      expect(service.COURSES).not.toContain(mockCourse);
    })
  }));
});
