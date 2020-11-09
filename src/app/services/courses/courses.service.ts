import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

import { Course } from '@app/interfaces/course.interface';
import { LoadingService } from '@app/services/loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private loadingService: LoadingService) { }

  getCourses$(): Observable<Course[]> {
    this.loadingService.startLoading();

    return of([ {
      id: 1,
      title: 'Video Course 1. Name 1',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 59,
      creationDate: new Date(2020, 8, 12),
      topRated: true,
    }, {
      id: 2,
      title: 'Video Course 2. Name 2',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 94,
      creationDate: new Date(2020, 11, 31),
      topRated: true,
    }, {
      id: 3,
      title: 'Video Course 3. Name 3',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 125,
      creationDate: new Date(2020, 9, 30),
      topRated: true,
    }, {
      id: 4,
      title: 'Video Course 4. Name 4',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 137,
      creationDate: new Date(2020, 10, 31),
      topRated: false,
    }, {
      id: 5,
      title: 'Video Course 5. Name 5',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 169,
      creationDate: new Date(2020, 9, 31),
      topRated: false,
    }, {
      id: 6,
      title: 'Video Course 6. Name 6',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 192,
      creationDate: new Date(2020, 2, 23),
      topRated: false,
    } ]).pipe(
      delay(2000),
      finalize(() => this.loadingService.stopLoading()),
    );
  }
}
