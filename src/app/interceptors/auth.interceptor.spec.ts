import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { switchMap } from 'rxjs/operators';

import { environment } from '@env/environment';

import { AuthService } from '@app/services/auth/auth.service';
import { mockAuthServiceProvider } from '@app/services/auth/auth.service.mock';
import { CoursesService } from '@app/services/courses/courses.service';

import { AuthInterceptor, AUTH_HEADER_KEY } from './auth.interceptor';

const MOCK_LOGIN = 'login';
const MOCK_PASSWORD = 'password';

const { APIUrl } = environment;

describe('AuthInterceptor', () => {
  let authService: AuthService;
  let coursesService: CoursesService;
  let interceptor: AuthInterceptor;
  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [
      AuthInterceptor,
      CoursesService,
      mockAuthServiceProvider,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },
    ],
  }));

  beforeEach(() => {
    authService = TestBed.inject(AuthService);
    coursesService = TestBed.inject(CoursesService);
    interceptor = TestBed.inject(AuthInterceptor)
    httpTestingController = TestBed.inject(HttpTestingController);
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

    authService.login({ login: MOCK_LOGIN, password: MOCK_PASSWORD })
      .pipe(switchMap(() => coursesService.getById(testCourseId)))
      .subscribe();

    const courseByIdRequest = httpTestingController.expectOne(endpointURL);
    expect(courseByIdRequest.request.headers.has(AUTH_HEADER_KEY)).toBeTrue();
    expect(courseByIdRequest.request.headers.get(AUTH_HEADER_KEY)).toContain('Bearer');
  }));
});
