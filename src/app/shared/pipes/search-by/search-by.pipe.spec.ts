import { mockCourses } from '@app/services';
import { SearchByPipe } from '@app/shared';

describe('SearchByPipe', () => {
  let pipe: SearchByPipe;

  beforeEach(() => {
    pipe = new SearchByPipe()
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should properly handle case with non-array input', () => {
    const pipeResult = pipe.transform({ foo: 'bar' } as any, { field: 'foo', searchString: 'test' });

    expect(pipeResult).toEqual([]);
  });

  it('should properly search for passed string parameter', () => {
    const pipeResult = pipe.transform([ ...mockCourses ], { field: 'title', searchString: '1' });
    const firstCourse = mockCourses.find(({ title }) => title.includes('1'));

    expect(pipeResult).toEqual([ firstCourse ]);
  });
});
