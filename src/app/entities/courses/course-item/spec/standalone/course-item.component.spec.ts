import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SharedModule } from '../../../../../shared/shared.module';
import { CourseItemComponent } from '../../course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CourseItemComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);

    component = fixture.componentInstance;
    component.course = {
      id: 1,
      title: 'Test title',
      creationDate: new Date(),
      duration: 100,
      description: 'Test description',
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly handle course deletion', () => {
    const onCourseDeleteClickSpy = spyOn(component, 'onCourseDeleteClick');

    const [ , deleteButton ] = fixture.debugElement.queryAll(By.css('.button.button--small.button--blue'))
    deleteButton.triggerEventHandler('click', null);

    expect(onCourseDeleteClickSpy).toHaveBeenCalledWith(component.course.id);
  });
});
