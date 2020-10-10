import { NgModule } from '@angular/core';

import { CoursesPageComponent } from './courses-page.component';
import { ActionsSectionComponent } from './actions-section/actions-section.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { LoadMorePanelComponent } from './/load-more-panel/load-more-panel.component';

@NgModule({
  declarations: [
    CoursesPageComponent,
    ActionsSectionComponent,
    CourseItemComponent,
    LoadMorePanelComponent
  ],
  exports: [CoursesPageComponent]
})
export class CoursesPageModule { }
