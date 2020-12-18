import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCourseItemComponent, MockLoadMorePanelComponent } from '@app/entities/courses';
import { CoursesService, mockConfirmServiceProvider, mockCoursesServiceProvider } from '@app/services';
import { MockSearchInputComponent, OrderByPipe } from '@app/shared';
import { getFixtureDebugElementBySelector, mockActivatedRouteProvider, mockRouterProvider } from '@app/util/util-test';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
        mockActivatedRouteProvider,
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
