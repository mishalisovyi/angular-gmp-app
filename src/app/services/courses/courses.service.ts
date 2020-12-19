import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { finalize, take, tap } from 'rxjs/operators';

import { environment } from '@env/environment';

import { Course, CourseData } from '@app/interfaces/entities';
import { CoursesListData } from '@app/interfaces/parameters';

import { LoadingService } from '../loading/loading.service';

const { APIUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses$$ = new Subject<Course[]>();

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  getList() {
    return this.courses$$.asObservable();
  }

  loadCoursesPage({ start = 0, count = 5, sort = 'date', textFragment = '' }: CoursesListData) {
    this.loadingService.startLoading();

    const params = new HttpParams()
      .set('start', start.toString())
      .set('count', count.toString())
      .set('sort', sort)
      .set('textFragment', textFragment);

    this.http.get<Course[]>(`${APIUrl}/courses`, { params }).pipe(
      take(1),
      tap(courses => this.courses$$.next(courses)),
      finalize(() => this.loadingService.stopLoading()),
    ).subscribe();
  }

  create(courseData: CourseData) {
    this.loadingService.startLoading();

    return this.http.post<Course[]>(`${APIUrl}/courses`, courseData).pipe(finalize(() => this.loadingService.stopLoading()))
  }

  getById(courseId: number) {
    this.loadingService.startLoading();

    return this.http.get<Course>(`${APIUrl}/courses/${courseId}`).pipe(finalize(() => this.loadingService.stopLoading()))
  }

  update(courseId: number, newCourseData: CourseData) {
    this.loadingService.startLoading();

    return this.http.patch<Course>(`${APIUrl}/courses/${courseId}`, newCourseData).pipe(finalize(() => this.loadingService.stopLoading()))
  }

  delete(courseId: number) {
    this.loadingService.startLoading();

    return this.http.delete<{}>(`${APIUrl}/courses/${courseId}`).pipe(finalize(() => this.loadingService.stopLoading()))
  }
}
