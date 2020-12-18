import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';

import { AvailabilityStatusDirective, CourseFormComponent, CourseItemComponent, LoadMorePanelComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
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
