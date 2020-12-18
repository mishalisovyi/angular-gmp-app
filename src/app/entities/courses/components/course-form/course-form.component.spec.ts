import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutePath } from '@app/enums';
import { mockCoursesServiceProvider } from '@app/services';
import { MockDurationInputComponent } from '@app/shared/components/duration-input/duration-input.component.mock';
import { getFixtureDebugElementBySelector, mockActivatedRouteProvider, mockRouterProvider } from '@app/util/util-test';

import { CourseFormComponent } from './course-form.component';

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        CourseFormComponent,
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
    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    component.courseId = 1;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly react on form submitting (edit course)', () => {
    const courseEditEmitSpy = spyOn(component.courseEdit, 'emit');

    component.onSubmit();

    expect(courseEditEmitSpy).toHaveBeenCalledWith({ courseId: component.courseId, courseData: component.courseData });
  });

  it('should properly react on course creation/updating cancel', () => {
    getFixtureDebugElementBySelector(fixture, '.button.button--large.button--gray').triggerEventHandler('click', null);

    expect(router.navigate).toHaveBeenCalledWith([ AppRoutePath.Courses ])
  });
});
