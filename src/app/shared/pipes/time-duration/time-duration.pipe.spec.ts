import { TimeDurationPipe } from './time-duration.pipe';

describe('TimeDurationPipe', () => {
  let pipe: TimeDurationPipe;

  beforeEach(() => {
    pipe = new TimeDurationPipe()
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should properly transform input value (case #1)', () => {
    const sampleInputValue = 43;
    const sampleResultValue = '43min';
    const resultValue = pipe.transform(sampleInputValue);

    expect(resultValue).toBe(sampleResultValue);
  });

  it('should properly transform input value (case #2)', () => {
    const sampleInputValue = 88;
    const sampleResultValue = '1h 28min';
    const resultValue = pipe.transform(sampleInputValue);

    expect(resultValue).toBe(sampleResultValue);
  });
});
