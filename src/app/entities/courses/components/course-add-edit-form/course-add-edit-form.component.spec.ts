import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutePath } from '@app/enums/app-route-path.enum';
import { CoursesService } from '@app/services/courses/courses.service';
import { mockCoursesServiceProvider } from '@app/services/courses/courses.service.mock';
import { MockDurationInputComponent } from '@app/shared/components/duration-input/duration-input.component.mock';
import { getFixtureDebugElementBySelector, mockActivatedRouteProvider, mockRouterProvider } from '@app/util/util-test';

import { CourseAddEditFormComponent } from './course-add-edit-form.component';

describe('CourseAddEditFormComponent', () => {
  let component: CourseAddEditFormComponent;
  let fixture: ComponentFixture<CourseAddEditFormComponent>;
  let coursesService: CoursesService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        CourseAddEditFormComponent,
        MockDurationInputComponent,
      ],
      providers: [
        mockCoursesServiceProvider,
        mockRouterProvider,
        mockActivatedRouteProvider,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    coursesService = TestBed.inject(CoursesService);
    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(CourseAddEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly react on form submitting (edit course)', () => {
    const createCourseSpy = spyOn(coursesService, 'update').and.callThrough();

    getFixtureDebugElementBySelector(fixture, '.course-add-edit-form').triggerEventHandler('submit', null);

    expect(createCourseSpy).toHaveBeenCalledWith(component.courseId, component.courseData)
  });

  it('should properly react on course creation/updating cancel', () => {
    getFixtureDebugElementBySelector(fixture, '.button.button--large.button--gray').triggerEventHandler('click', null);

    expect(router.navigate).toHaveBeenCalledWith([ AppRoutePath.Courses ])
  });
});
