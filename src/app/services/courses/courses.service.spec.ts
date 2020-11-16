import { TestBed, waitForAsync } from '@angular/core/testing';

import { Course } from '@app/interfaces/course.interface';
import { SearchByPipe } from '@app/shared/pipes/search-by/search-by.pipe';

import { CoursesService } from './courses.service';

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
    service.getCourses$().subscribe((courses: Course[]) => {
      expect(courses.length).toBeGreaterThan(0);
    })
  }));
});
