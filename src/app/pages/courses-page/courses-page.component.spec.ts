import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Course } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';
import { MockCoursesService } from '../../services/courses.service.mock';
import { CoursesPageComponent } from './courses-page.component';

@Component({ selector: 'app-search-input' })
class StubSearchInputComponent { }

@Component({ selector: 'app-course-item' })
class StubCourseItemComponent {
  @Input() course: Course;
}

@Component({ selector: 'app-load-more-panel' })
class StubLoadMorePanelComponent { }

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;
  let coursesService: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FontAwesomeModule ],
      declarations: [
        CoursesPageComponent,
        StubSearchInputComponent,
        StubCourseItemComponent,
        StubLoadMorePanelComponent,
      ],
      providers: [ { provide: CoursesService, useValue: MockCoursesService } ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    coursesService = TestBed.inject(CoursesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call method from service for courses loading', () => {
    const getCoursesSpy = spyOn(coursesService, 'getCourses');
    component.ngOnInit();

    expect(getCoursesSpy).toHaveBeenCalled();
  });

  it('should proper handle course search event', () => {
    component.onCourseSearch('test');

    expect(component.courseSearchIsHandled).toBeTrue();
  });

  it('should proper handle course add event', () => {
    component.onCourseAddClick();

    expect(component.courseAddingIsHandled).toBeTrue();
  });

  it('should proper handle course delete event', () => {
    component.onCourseDelete(1);

    expect(component.courseDeletingIsHandled).toBeTrue();
  });

  it('should proper handle course load more event', () => {
    component.onLoadMore();

    expect(component.loadMoreCoursesIsHandled).toBeTrue();
  });
});
