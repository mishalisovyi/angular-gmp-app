import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoursesEffects } from '@app/entities/courses/store/effects/courses.effects';
import { coursesFeatureKey, coursesReducer } from '@app/entities/courses/store/reducers/courses.reducer';
import { SharedModule } from '@app/shared/shared.module';

import { AvailabilityStatusDirective, CourseFormComponent, CourseItemComponent, LoadMorePanelComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(coursesFeatureKey, coursesReducer),
    EffectsModule.forFeature([ CoursesEffects ]),
  ],
  declarations: [
    CourseFormComponent,
    CourseItemComponent,
    LoadMorePanelComponent,
    AvailabilityStatusDirective,
  ],
  exports: [
    CourseFormComponent,
    CourseItemComponent,
    LoadMorePanelComponent,
  ],
})
export class CoursesModule { }
