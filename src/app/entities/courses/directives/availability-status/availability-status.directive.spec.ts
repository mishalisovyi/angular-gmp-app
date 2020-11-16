import { AvailabilityStatusDirective, COLORS } from './availability-status.directive';

const CURRENT_DATE = new Date();
const ONE_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

const OLD_DATE = new Date(CURRENT_DATE.getTime() - ONE_DAY_IN_MILLISECONDS * 30);
const RECENT_DATE = new Date(CURRENT_DATE.getTime() - ONE_DAY_IN_MILLISECONDS * 7);
const FUTURE_DATE = new Date(CURRENT_DATE.getTime() + ONE_DAY_IN_MILLISECONDS * 7);

describe('AvailabilityStatusDirective', () => {
  let directive: AvailabilityStatusDirective;

  beforeEach(() => {
    directive = new AvailabilityStatusDirective();
  })

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should properly set border color (case #1)', () => {
    directive.availabilityDate = OLD_DATE;

    expect(directive.borderColor).toBe(COLORS.TRANSPARENT);
  });

  it('should properly set border color (case #2)', () => {
    directive.availabilityDate = RECENT_DATE;

    expect(directive.borderColor).toBe(COLORS.GREEN);
  });

  it('should properly set border color (case #3)', () => {
    directive.availabilityDate = FUTURE_DATE;

    expect(directive.borderColor).toBe(COLORS.BLUE);
  });
});
