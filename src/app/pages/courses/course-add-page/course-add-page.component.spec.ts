import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCourseFormComponent } from '@app/entities/courses';
import { createCourse } from '@app/entities/courses/store/actions/courses.actions';
import { mockCourses } from '@app/services';
import { MockStore, mockStoreProvider } from '@app/util/util-test';

import { CourseAddPageComponent } from './course-add-page.component';

describe('CourseAddPageComponent', () => {
  let component: CourseAddPageComponent;
  let fixture: ComponentFixture<CourseAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MockCourseFormComponent,
        CourseAddPageComponent,
      ],
      providers: [ mockStoreProvider ],
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

  it('should handle course creation', () => {
    const [ mockCourseData ] = mockCourses;

    component.onCourseCreate(mockCourseData);

    expect(MockStore.dispatch).toHaveBeenCalledWith(createCourse(mockCourseData));
  });
});
