import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCourseItemComponent, MockLoadMorePanelComponent } from '@app/entities/courses';
import { ConfirmMessage } from '@app/enums';
import { ConfirmService, CoursesService, mockConfirmServiceProvider, mockCoursesServiceProvider } from '@app/services';
import { OrderByPipe, SearchInputComponent } from '@app/shared';
import { getFixtureDebugElementBySelector, mockActivatedRouteProvider, mockRouterProvider } from '@app/util/util-test';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoursesPageComponent, PAGE_SIZE } from './courses-page.component';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let componentFixture: ComponentFixture<CoursesPageComponent>;
  let coursesService: CoursesService;
  let confirmService: ConfirmService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FontAwesomeModule ],
      declarations: [
        CoursesPageComponent,
        SearchInputComponent,
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
    confirmService = TestBed.inject(ConfirmService);

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

  it('should proper handle course add event', () => {
    const onCourseAddSpy = spyOn(component, 'onCourseAddClick').and.callThrough();
    getFixtureDebugElementBySelector(componentFixture, '.button.button--large.button--blue').triggerEventHandler('click', null);

    expect(onCourseAddSpy).toHaveBeenCalled();
  });

  it('should proper handle course delete event', () => {
    const confirmSpy = spyOn(confirmService, 'confirm').and.callThrough();
    component.onCourseDelete(1);

    expect(confirmSpy).toHaveBeenCalledWith(ConfirmMessage.DeleteCourse);
  });

  it('should proper handle course load more event', () => {
    const loadCoursesPageSpy = spyOn(coursesService, 'loadCoursesPage').and.callThrough();

    component.onLoadMore();

    expect(component.coursesListNewPageStartIndex).toBe(PAGE_SIZE);
    expect(loadCoursesPageSpy).toHaveBeenCalledWith({
      textFragment: component.textFragment,
      count: PAGE_SIZE,
      start: component.coursesListNewPageStartIndex,
    })
  });
});
