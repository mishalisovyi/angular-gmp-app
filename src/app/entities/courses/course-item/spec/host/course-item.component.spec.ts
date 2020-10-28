import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { Course } from '@app/interfaces/course.interface';

import { SharedModule } from '../../../../../shared/shared.module';
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
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    hostComponentFixture = TestBed.createComponent(HostComponent);
    hostComponent = hostComponentFixture.componentInstance;
    childComponent = hostComponentFixture.debugElement.query(By.css('app-course-item')).componentInstance
    hostComponentFixture.detectChanges();
  });

  it('should create child component', () => {
    expect(childComponent).toBeTruthy();
  });

  it('should properly handle course deletion', () => {
    const onCourseDeleteSpy = spyOn(hostComponent, 'onCourseDelete');

    const [ , deleteButton ] = hostComponentFixture.debugElement.queryAll(By.css('.button.button--small.button--blue'))
    deleteButton.triggerEventHandler('click', null);

    expect(onCourseDeleteSpy).toHaveBeenCalledWith(hostComponent.course.id);
  });
});
