import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { environment } from '@env/environment';

import { CoursesService } from './courses.service';
import { mockCourses } from './courses.service.mock';

const { APIUrl } = environment;

describe('CoursesService', () => {
  let service: CoursesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(CoursesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load courses page', waitForAsync(() => {
    const mockStart = 0;
    const mockCount = 5;
    const mockSort = 'date';
    const mockTextFragment = 'test';

    const endpointURL = `${APIUrl}/courses?start=${mockStart}&count=${mockCount}&sort=${mockSort}&textFragment=${mockTextFragment}`;

    service.getList().subscribe(response => expect(response).toEqual(mockCourses))
    service.loadCoursesPage({ start: mockStart, count: mockCount, sort: mockSort, textFragment: mockTextFragment })

    const coursesPageRequest = httpTestingController.expectOne(endpointURL);
    expect(coursesPageRequest.request.method).toBe('GET');

    coursesPageRequest.flush(mockCourses);
  }));

  it('should create course', waitForAsync(() => {
    const [ mockCourseData ] = mockCourses;
    const endpointURL = `${APIUrl}/courses`;

    service.create(mockCourseData).subscribe();

    const coursesCreateRequest = httpTestingController.expectOne(endpointURL);
    expect(coursesCreateRequest.request.method).toBe('POST');
    expect(coursesCreateRequest.request.body).toEqual(mockCourseData);
  }));

  it('should return course by ID', waitForAsync(() => {
    const testCourseId = 1;
    const [ mockResponseCourse ] = mockCourses;
    const endpointURL = `${APIUrl}/courses/${testCourseId}`;

    service.getById(testCourseId).subscribe(response => expect(response).toEqual(mockResponseCourse))

    const courseByIdRequest = httpTestingController.expectOne(endpointURL);
    expect(courseByIdRequest.request.method).toBe('GET');

    courseByIdRequest.flush(mockResponseCourse);
  }));

  it('should update course', waitForAsync(() => {
    const testCourseId = 2;
    const [ mockRequestBodyCourse, mockResponseCourse ] = mockCourses;
    const endpointURL = `${APIUrl}/courses/${testCourseId}`;

    service.update(testCourseId, mockRequestBodyCourse).subscribe(response => expect(response).toEqual(mockResponseCourse));

    const courseUpdateRequest = httpTestingController.expectOne(endpointURL);
    expect(courseUpdateRequest.request.method).toBe('PATCH');
    expect(courseUpdateRequest.request.body).toEqual(mockRequestBodyCourse);

    courseUpdateRequest.flush(mockResponseCourse);
  }));

  it('should delete course', waitForAsync(() => {
    const testCourseId = 1;
    const endpointURL = `${APIUrl}/courses/${testCourseId}`;

    service.delete(testCourseId).subscribe();

    const courseDeleteRequest = httpTestingController.expectOne(endpointURL);
    expect(courseDeleteRequest.request.method).toBe('DELETE');
  }));
});
