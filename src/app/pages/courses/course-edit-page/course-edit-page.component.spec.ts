import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MockCourseFormComponent } from '@app/entities/courses';
import { CoursesService, mockCourses, mockCoursesServiceProvider } from '@app/services';
import { mockRouterProvider } from '@app/util/util-test';

import { CourseEditPageComponent } from './course-edit-page.component';

describe('CourseEditPageComponent', () => {
  let component: CourseEditPageComponent;
  let fixture: ComponentFixture<CourseEditPageComponent>;
  let coursesService: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        MockCourseFormComponent,
        CourseEditPageComponent,
      ],
      providers: [
        mockCoursesServiceProvider,
        mockRouterProvider,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditPageComponent);
    coursesService = TestBed.inject(CoursesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle course edition', () => {
    const coursesServiceCreateSpy = spyOn(coursesService, 'update').and.callThrough();
    const [ mockCourseData ] = mockCourses;
    const mockCourseId = 1;

    component.onCourseEdit({ courseId: mockCourseId, courseData: mockCourseData });

    expect(coursesServiceCreateSpy).toHaveBeenCalled();
  });
});
