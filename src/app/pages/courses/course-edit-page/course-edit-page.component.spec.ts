import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCourseAddEditFormComponent } from '@app/entities/courses/components/course-add-edit-form/course-add-edit-form.component.mock';

import { CourseEditPageComponent } from './course-edit-page.component';

describe('CourseEditPageComponent', () => {
  let component: CourseEditPageComponent;
  let fixture: ComponentFixture<CourseEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MockCourseAddEditFormComponent,
        CourseEditPageComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
