import { ComponentFixture, TestBed } from '@angular/core/testing';

import { getFixtureDebugElementsArrayBySelector, mockRouterProvider } from '@app/util/util-test';

import { SharedModule } from '../../../../../../shared/shared.module';
import { AvailabilityStatusDirective } from '../../../../directives/availability-status/availability-status.directive';
import { CourseItemComponent } from '../../course-item.component';

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
