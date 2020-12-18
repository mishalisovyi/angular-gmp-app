import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityStatusDirective, CourseItemComponent } from '@app/entities/courses';
import { SharedModule } from '@app/shared/shared.module';
import { getFixtureDebugElementsArrayBySelector, mockRouterProvider } from '@app/util/util-test';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [
        CourseItemComponent,
        AvailabilityStatusDirective,
      ],
      providers: [ mockRouterProvider ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);

    component = fixture.componentInstance;
    component.course = {
      id: 1,
      title: 'Test title',
      creationDate: new Date().toISOString(),
      duration: 100,
      description: 'Test description',
      topRated: true,
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly handle course deletion', () => {
    const onCourseDeleteClickSpy = spyOn(component, 'onCourseDeleteClick');

    const [ , deleteButton ] = getFixtureDebugElementsArrayBySelector(fixture, '.button.button--small.button--blue');
    deleteButton.triggerEventHandler('click', null);

    expect(onCourseDeleteClickSpy).toHaveBeenCalledWith(component.course.id);
  });
});
