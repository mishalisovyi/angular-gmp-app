import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course } from '@app/interfaces/course.interface';

import { SharedModule } from '../../../../../../shared/shared.module';
import { getFixtureDebugElementBySelector, getFixtureDebugElementsArrayBySelector } from '../../../../../../util/util';
import { ShowCourseStatusDirective } from '../../../../directives/show-course-status/show-course-status.directive';
import { CourseItemComponent } from '../../course-item.component';

@Component({
  template: `<app-course-item [course]="course" (courseDeleted)="onCourseDelete($event)"></app-course-item>`,
})
class HostComponent {
  courseIdMarkedForDeletion: number;
  course: Course = {
    id: 1,
    title: 'Test title',
    creationDate: new Date(),
    duration: 100,
    description: 'Test description',
    topRated: true,
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
        ShowCourseStatusDirective,
      ],
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
