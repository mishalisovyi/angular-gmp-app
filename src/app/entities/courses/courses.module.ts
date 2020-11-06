import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { LoadMorePanelComponent } from './components/load-more-panel/load-more-panel.component';
import { ShowCourseStatusDirective } from './directives/show-course-status/show-course-status.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    CourseItemComponent,
    LoadMorePanelComponent,
    ShowCourseStatusDirective,
  ],
  exports: [
    CourseItemComponent,
    LoadMorePanelComponent,
  ],
})
export class CoursesModule { }
