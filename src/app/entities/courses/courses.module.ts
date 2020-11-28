import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { CourseAddEditFormComponent } from './components/course-add-edit-form/course-add-edit-form.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { LoadMorePanelComponent } from './components/load-more-panel/load-more-panel.component';
import { AvailabilityStatusDirective } from './directives/availability-status/availability-status.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    CourseAddEditFormComponent,
    CourseItemComponent,
    LoadMorePanelComponent,
    AvailabilityStatusDirective,
  ],
  exports: [
    CourseAddEditFormComponent,
    CourseItemComponent,
    LoadMorePanelComponent,
  ],
})
export class CoursesModule { }
