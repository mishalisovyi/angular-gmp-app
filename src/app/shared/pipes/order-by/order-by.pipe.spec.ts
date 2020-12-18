import { mockCourses } from '@app/services';
import { OrderByPipe } from '@app/shared';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe()
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should properly handle case with non-array input', () => {
    const pipeResult = pipe.transform({ foo: 'bar' } as any, 'foo', 'asc');

    expect(pipeResult).toEqual([]);
  });

  it('should properly sort income array', () => {
    const pipeResult = pipe.transform([ ...mockCourses ], 'date', 'desc');
    const [ firstDate, secondDate, thirdDate ] = pipeResult.map(({ date }) => date);

    expect(firstDate > secondDate && secondDate > thirdDate).toBeTrue();
  });
});
