import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCourseAddEditFormComponent } from '@app/entities/courses/components/course-add-edit-form/course-add-edit-form.component.mock';

import { CourseAddPageComponent } from './course-add-page.component';

describe('CourseAddPageComponent', () => {
  let component: CourseAddPageComponent;
  let fixture: ComponentFixture<CourseAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MockCourseAddEditFormComponent,
        CourseAddPageComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
