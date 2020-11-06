import { mockCourses } from '../../../services/courses.service.mock';
import { OrderByPipe } from './order-by.pipe';

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
    const pipeResult = pipe.transform([ ...mockCourses ], 'creationDate', 'desc');
    const [ firstDate, secondDate, thirdDate ] = pipeResult.map(({ creationDate }) => creationDate);

    expect(firstDate > secondDate && secondDate > thirdDate).toBeTrue();
  });
});
