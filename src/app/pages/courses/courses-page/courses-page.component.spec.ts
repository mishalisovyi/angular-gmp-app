import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCourseItemComponent, MockLoadMorePanelComponent } from '@app/entities/courses';
import { requestGetCourses, requestGetCoursesPage } from '@app/entities/courses/store/actions/courses.actions';
import { ConfirmMessage } from '@app/enums';
import { ConfirmService, mockConfirmServiceProvider } from '@app/services';
import { OrderByPipe, SearchInputComponent } from '@app/shared';
import { getFixtureDebugElementBySelector, mockActivatedRouteProvider, mockRouterProvider, MockStore, mockStoreProvider } from '@app/util/util-test';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoursesPageComponent, PAGE_SIZE } from './courses-page.component';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let componentFixture: ComponentFixture<CoursesPageComponent>;
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
        mockConfirmServiceProvider,
        mockActivatedRouteProvider,
        mockRouterProvider,
        mockStoreProvider,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    confirmService = TestBed.inject(ConfirmService);

    componentFixture = TestBed.createComponent(CoursesPageComponent);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch load courses action', () => {
    component.ngOnInit();

    expect(MockStore.dispatch).toHaveBeenCalledWith(
      requestGetCourses({
        textFragment: component.textFragment,
        count: PAGE_SIZE,
        start: component.coursesListNewPageStartIndex,
      }));
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
    component.onLoadMore();

    expect(component.coursesListNewPageStartIndex).toBe(PAGE_SIZE);
    expect(MockStore.dispatch).toHaveBeenCalledWith(
      requestGetCoursesPage({
        textFragment: component.textFragment,
        count: PAGE_SIZE,
        start: component.coursesListNewPageStartIndex,
      }))
  });
});
