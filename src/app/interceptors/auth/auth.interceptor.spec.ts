import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { of } from 'rxjs';

import { environment } from '@env/environment';

import { mockAuthServiceProvider } from '@app/services/auth/auth.service.mock';
import { CoursesService } from '@app/services/courses/courses.service';
import { MockStore, mockStoreProvider } from '@app/util/util-test';

import { AuthInterceptor, AUTH_HEADER_KEY } from './auth.interceptor';

const { APIUrl } = environment;

describe('AuthInterceptor', () => {
  let coursesService: CoursesService;
  let interceptor: AuthInterceptor;
  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [
      AuthInterceptor,
      CoursesService,
      mockAuthServiceProvider,
      mockStoreProvider,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },
    ],
  }));

  beforeEach(() => {
    coursesService = TestBed.inject(CoursesService);
    interceptor = TestBed.inject(AuthInterceptor)
    httpTestingController = TestBed.inject(HttpTestingController);

    MockStore.select.and.returnValue(of('mock auth token'))
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should append auth headers to existing request', waitForAsync(() => {
    const testCourseId = 1;
    const endpointURL = `${APIUrl}/courses/${testCourseId}`;

    coursesService.delete(testCourseId).subscribe();

    const courseByIdRequest = httpTestingController.expectOne(endpointURL);
    expect(courseByIdRequest.request.headers.has(AUTH_HEADER_KEY)).toBeTrue();
    expect(courseByIdRequest.request.headers.get(AUTH_HEADER_KEY)).toContain('Bearer');
  }));
});
