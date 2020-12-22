import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCourseFormComponent } from '@app/entities/courses';
import { requestUpdateCourse } from '@app/entities/courses/store/actions/courses.actions';
import { mockCourses } from '@app/services';
import { MockStore, mockStoreProvider } from '@app/util/util-test';

import { CourseEditPageComponent } from './course-edit-page.component';

describe('CourseEditPageComponent', () => {
  let component: CourseEditPageComponent;
  let fixture: ComponentFixture<CourseEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MockCourseFormComponent,
        CourseEditPageComponent,
      ],
      providers: [ mockStoreProvider ],
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

  it('should handle course edition', () => {
    const [ mockCourseData ] = mockCourses;
    const mockCourseId = 1;

    component.onCourseEdit({ courseId: mockCourseId, courseData: mockCourseData });

    expect(MockStore.dispatch).toHaveBeenCalledWith(requestUpdateCourse({ courseId: mockCourseId, courseData: mockCourseData }));
  });
});
