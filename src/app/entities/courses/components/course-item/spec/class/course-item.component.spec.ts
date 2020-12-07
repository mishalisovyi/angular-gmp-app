import { mockRouter } from '@app/util/util-test';

import { CourseItemComponent } from '../../course-item.component';

describe('CourseItemComponent', () => {
  const courseItem = new CourseItemComponent(mockRouter() as any);

  it('should emit `courseDeleted` event when call `onCourseDeleteClick` method', () => {
    const courseDeletedEmitSpy = spyOn(courseItem.courseDeleted, 'emit');
    const mockCourseId = 1;

    courseItem.onCourseDeleteClick(mockCourseId);

    expect(courseDeletedEmitSpy).toHaveBeenCalledWith(mockCourseId);
  });
});
