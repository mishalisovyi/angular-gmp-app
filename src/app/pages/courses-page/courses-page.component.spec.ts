import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockConfirmServiceProvider } from '@app/services/confirm/confirm.service.mock';
import { CoursesService } from '@app/services/courses/courses.service';
import { mockCoursesServiceProvider } from '@app/services/courses/courses.service.mock';
import { getFixtureDebugElementBySelector, mockRouterProvider } from '@app/util/util-test';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MockCourseItemComponent } from '../../entities/courses/components/course-item/course-item.component.mock';
import { MockLoadMorePanelComponent } from '../../entities/courses/components/load-more-panel/load-more-panel.component.mock';
import { MockSearchInputComponent } from '../../shared/components/search-input/search-input.component.mock';
import { OrderByPipe } from '../../shared/pipes/order-by/order-by.pipe';
import { CoursesPageComponent } from './courses-page.component';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let componentFixture: ComponentFixture<CoursesPageComponent>;
  let coursesService: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FontAwesomeModule ],
      declarations: [
        CoursesPageComponent,
        MockSearchInputComponent,
        MockCourseItemComponent,
        MockLoadMorePanelComponent,
        OrderByPipe,
      ],
      providers: [
        mockCoursesServiceProvider,
        mockConfirmServiceProvider,
        mockRouterProvider,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    coursesService = TestBed.inject(CoursesService);

    componentFixture = TestBed.createComponent(CoursesPageComponent);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call method from service for courses loading', () => {
    const getCoursesSpy = spyOn(coursesService, 'getList').and.callThrough();
    component.ngOnInit();

    expect(getCoursesSpy).toHaveBeenCalled();
  });

  it('should proper handle course search event', () => {
    const onCourseSearchSpy = spyOn(component, 'onCourseSearch').and.callThrough();
    const textForSearch = 'test'
    getFixtureDebugElementBySelector(componentFixture, '#course-search-button').triggerEventHandler('click', textForSearch);

    expect(onCourseSearchSpy).toHaveBeenCalledWith(textForSearch);
  });

  it('should proper handle course add event', () => {
    const onCourseAddSpy = spyOn(component, 'onCourseAddClick').and.callThrough();
    getFixtureDebugElementBySelector(componentFixture, '.button.button--large.button--blue').triggerEventHandler('click', null);

    expect(onCourseAddSpy).toHaveBeenCalled();
  });

  it('should proper handle course delete event', () => {
    const onCourseDeleteSpy = spyOn(component, 'onCourseDelete').and.callThrough();
    const idForDelete = 343
    getFixtureDebugElementBySelector(componentFixture, '#course-delete-button').triggerEventHandler('click', idForDelete);

    expect(onCourseDeleteSpy).toHaveBeenCalledWith(idForDelete);
  });

  it('should proper handle course load more event', () => {
    const onLoadMoreSpy = spyOn(component, 'onLoadMore').and.callThrough();
    getFixtureDebugElementBySelector(componentFixture, '#load-more-courses-button').triggerEventHandler('click', null);

    expect(onLoadMoreSpy).toHaveBeenCalled();
  });
});
