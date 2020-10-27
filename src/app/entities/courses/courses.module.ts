import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CourseItemComponent } from './course-item/course-item.component';
import { LoadMorePanelComponent } from './load-more-panel/load-more-panel.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    CourseItemComponent,
    LoadMorePanelComponent,
  ],
  exports: [
    CourseItemComponent,
    LoadMorePanelComponent,
  ],
})
export class CoursesModule { }
