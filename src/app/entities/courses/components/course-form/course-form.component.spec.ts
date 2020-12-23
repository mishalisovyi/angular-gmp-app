import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { of } from 'rxjs';

import { AppRoutePath } from '@app/enums';
import { mockCourses } from '@app/services';
import { MockDateInputComponent, MockDurationInputComponent, MockMultiAutocompleteInputComponent, TimeDurationPipe } from '@app/shared';
import { getFixtureDebugElementBySelector, mockActivatedRouteProvider, mockRouterProvider, MockStore, mockStoreProvider } from '@app/util/util-test';

import { CourseFormComponent } from './course-form.component';

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        CourseFormComponent,
        MockDurationInputComponent,
        MockDateInputComponent,
        MockMultiAutocompleteInputComponent,
        TimeDurationPipe,
      ],
      providers: [
        FormBuilder,
        mockRouterProvider,
        mockActivatedRouteProvider,
        mockStoreProvider,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    component.courseId = 1;

    MockStore.select.and.returnValue(of(mockCourses[0]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly react on form submitting (edit course)', () => {
    const courseEditEmitSpy = spyOn(component.courseEdit, 'emit');

    component.onSubmit();

    expect(courseEditEmitSpy).toHaveBeenCalledWith({ courseId: component.courseId, courseData: component.courseForm.value });
  });

  it('should properly react on course creation/updating cancel', () => {
    getFixtureDebugElementBySelector(fixture, '.button.button--large.button--gray').triggerEventHandler('click', null);

    expect(router.navigate).toHaveBeenCalledWith([ AppRoutePath.Courses ])
  });
});
