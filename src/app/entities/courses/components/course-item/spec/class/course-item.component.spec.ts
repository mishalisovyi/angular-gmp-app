import { CourseItemComponent } from '@app/entities/courses';
import { mockRouter } from '@app/util/util-test';

describe('CourseItemComponent', () => {
  const courseItem = new CourseItemComponent(mockRouter() as any);

  it('should emit `courseDeleted` event when call `onCourseDeleteClick` method', () => {
    const courseDeletedEmitSpy = spyOn(courseItem.courseDeleted, 'emit');
    const mockCourseId = 1;

    courseItem.onCourseDeleteClick(mockCourseId);

    expect(courseDeletedEmitSpy).toHaveBeenCalledWith(mockCourseId);
  });
});
