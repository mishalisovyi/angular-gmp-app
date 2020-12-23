import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { tap } from 'rxjs/operators';

import { AppRoutePath } from '@app/enums';
import { CourseData } from '@app/interfaces/entities';
import { CourseEditData } from '@app/interfaces/parameters';
import { CoursesFacade, SubscriptionService } from '@app/services';
import { AuthorsFacade } from '@app/services/store/authors/authors.facade';
import { MultiAutocompleteInputValidator } from '@app/shared';
import { getDatePartFromIsoDateString, getFormattedCurrentDate, isValueIntegerNumber, parseStringToIntegerNumber } from '@app/util/util';

const INITIAL_COURSE_DATA = {
  name: '',
  description: '',
  length: 1,
  date: getFormattedCurrentDate(),
  authors: [],
  isTopRated: false,
}

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: [ './course-form.component.scss' ],
  providers: [ SubscriptionService ],
})
export class CourseFormComponent implements OnInit {
  courseId: number;

  courseForm: FormGroup;
  formIsSubmitted = false;

  authors$ = this.authorsFacade.authors$;

  @Output() courseEdit = new EventEmitter<CourseEditData>();
  @Output() courseCreate = new EventEmitter<CourseData>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private coursesFacade: CoursesFacade,
    private authorsFacade: AuthorsFacade,
    private subscriptionService: SubscriptionService,
  ) { }

  ngOnInit() {
    this.extractCourseIdFromRouteParams();
    this.buildCourseForm();
    this.setInitialCourseData();
    this.handleCourseLoading();
  }

  get isEditingMode(): boolean {
    return isValueIntegerNumber(this.courseId);
  }

  onSubmit() {
    this.formIsSubmitted = true;

    if (this.courseForm.valid) {
      this.emitFormSubmitData();
    };
  }

  onCancel() {
    this.navigateToCoursesList();
  }

  private extractCourseIdFromRouteParams() {
    this.courseId = parseStringToIntegerNumber(this.activatedRoute.snapshot.params.id);
  }

  private buildCourseForm() {
    this.courseForm = this.formBuilder.group({
      name: [ '', [ Validators.required, Validators.maxLength(50) ] ],
      description: [ '', [ Validators.required, Validators.maxLength(500) ] ],
      date: [ '', [ Validators.required ] ],
      length: [ 0, [ Validators.required, Validators.min(1) ] ],
      authors: [ [], [ new MultiAutocompleteInputValidator() ] ],
    });
  }

  private setInitialCourseData() {
    this.courseForm.patchValue(INITIAL_COURSE_DATA);
  }

  private handleCourseLoading() {
    if (this.isEditingMode) {
      this.getCourseById(this.courseId);
    }
  }

  private emitFormSubmitData() {
    return this.isEditingMode
      ? this.courseEdit.emit({ courseId: this.courseId, courseData: { ...this.courseForm.value } })
      : this.courseCreate.emit({ ...this.courseForm.value });
  }

  private navigateToCoursesList() {
    this.router.navigate([ AppRoutePath.Courses ]);
  }

  private setCourseData(courseData: CourseData) {
    this.courseForm.patchValue({ ...courseData, date: getDatePartFromIsoDateString(courseData.date) });
  }

  private getCourseById(id: number) {
    this.subscriptionService.register = this.coursesFacade.getCourseById(id)
      .pipe(tap(course => this.setCourseData(course)))
      .subscribe();
  }
}
