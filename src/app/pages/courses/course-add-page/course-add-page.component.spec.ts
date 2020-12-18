import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MockCourseFormComponent } from '@app/entities/courses';
import { CoursesService, mockCourses, mockCoursesServiceProvider } from '@app/services';
import { mockRouterProvider } from '@app/util/util-test';

import { CourseAddPageComponent } from './course-add-page.component';

describe('CourseAddPageComponent', () => {
  let component: CourseAddPageComponent;
  let fixture: ComponentFixture<CourseAddPageComponent>;
  let coursesService: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        MockCourseFormComponent,
        CourseAddPageComponent,
      ],
      providers: [
        mockCoursesServiceProvider,
        mockRouterProvider,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddPageComponent);
    coursesService = TestBed.inject(CoursesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle course creation', () => {
    const coursesServiceCreateSpy = spyOn(coursesService, 'create').and.callThrough();
    const [ mockCourseData ] = mockCourses;

    component.onCourseCreate(mockCourseData);

    expect(coursesServiceCreateSpy).toHaveBeenCalled();
  });
});
