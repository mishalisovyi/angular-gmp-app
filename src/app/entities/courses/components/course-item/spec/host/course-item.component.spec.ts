import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityStatusDirective, CourseItemComponent } from '@app/entities/courses';
import { Course } from '@app/interfaces/entities';
import { SharedModule } from '@app/shared/shared.module';
import { getFixtureDebugElementBySelector, getFixtureDebugElementsArrayBySelector, mockRouterProvider } from '@app/util/util-test';

@Component({
  template: `<app-course-item [course]="course" (courseDeleted)="onCourseDelete($event)"></app-course-item>`,
})
class HostComponent {
  courseIdMarkedForDeletion: number;
  course: Course = {
    id: 1,
    name: 'Test title',
    date: new Date().toISOString(),
    length: 100,
    description: 'Test description',
    isTopRated: true,
  };

  onCourseDelete(courseId: number) {
    this.courseIdMarkedForDeletion = courseId;
  }
}

describe('CourseItemComponent', () => {
  let hostComponent: HostComponent;
  let childComponent: CourseItemComponent;
  let hostComponentFixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [
        CourseItemComponent,
        HostComponent,
        AvailabilityStatusDirective,
      ],
      providers: [ mockRouterProvider ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    hostComponentFixture = TestBed.createComponent(HostComponent);
    hostComponent = hostComponentFixture.componentInstance;
    childComponent = getFixtureDebugElementBySelector(hostComponentFixture, 'app-course-item').componentInstance
    hostComponentFixture.detectChanges();
  });

  it('should create child component', () => {
    expect(childComponent).toBeTruthy();
  });

  it('should properly handle course deletion', () => {
    const onCourseDeleteSpy = spyOn(hostComponent, 'onCourseDelete');

    const [ , deleteButton ] = getFixtureDebugElementsArrayBySelector(hostComponentFixture, '.button.button--small.button--blue');
    deleteButton.triggerEventHandler('click', null);

    expect(onCourseDeleteSpy).toHaveBeenCalledWith(hostComponent.course.id);
  });
});
