import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { environment } from '@env/environment';

import { Course, CourseData } from '@app/interfaces/entities';
import { CoursesListData } from '@app/interfaces/parameters';

const { APIUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses$$ = new Subject<Course[]>();

  constructor(private http: HttpClient) { }

  getList() {
    return this.courses$$.asObservable();
  }

  loadCoursesPage({ start = 0, count = 5, sort = 'date', textFragment = '' }: CoursesListData) {
    const params = new HttpParams()
      .set('start', start.toString())
      .set('count', count.toString())
      .set('sort', sort)
      .set('textFragment', textFragment);

    return this.http.get<Course[]>(`${APIUrl}/courses`, { params })
  }

  create(courseData: CourseData) {
    return this.http.post<Course[]>(`${APIUrl}/courses`, courseData)
  }

  update(courseId: number, newCourseData: CourseData) {
    return this.http.patch<Course>(`${APIUrl}/courses/${courseId}`, newCourseData)
  }

  delete(courseId: number) {
    return this.http.delete<{}>(`${APIUrl}/courses/${courseId}`)
  }
}
