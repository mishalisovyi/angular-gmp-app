import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: [ './courses-page.component.scss' ],
})
export class CoursesPageComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  public courses: Course[];

  constructor() { }

  ngOnChanges() {
    // tslint:disable-next-line: no-console
    console.log('OnChanges');
  }

  ngOnInit() {
    // tslint:disable-next-line: no-console
    console.log('OnInit');

    this.populateCoursesArray();
  }

  ngDoCheck() {
    // tslint:disable-next-line: no-console
    console.log('DoCheck');
  }

  ngAfterContentInit() {
    // tslint:disable-next-line: no-console
    console.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    // tslint:disable-next-line: no-console
    console.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    // tslint:disable-next-line: no-console
    console.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    // tslint:disable-next-line: no-console
    console.log('AfterViewChecked');
  }

  ngOnDestroy() {
    // tslint:disable-next-line: no-console
    console.log('OnDestroy');
  }

  public onCourseDelete(courseId: number) {
    // tslint:disable-next-line: no-console
    console.log('Delete course with id: ', courseId);
  }

  private populateCoursesArray() {
    this.courses = [ {
      id: 1,
      title: 'Video Course 1. Name 1',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 59,
      creationDate: new Date(),
    }, {
      id: 2,
      title: 'Video Course 2. Name 2',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 94,
      creationDate: new Date(),
    }, {
      id: 3,
      title: 'Video Course 3. Name 3',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 125,
      creationDate: new Date(),
    }, {
      id: 4,
      title: 'Video Course 4. Name 4',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 137,
      creationDate: new Date(),
    }, {
      id: 5,
      title: 'Video Course 5. Name 5',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 169,
      creationDate: new Date(),
    }, {
      id: 6,
      title: 'Video Course 6. Name 6',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 192,
      creationDate: new Date(),
    } ]
  }
}
