import { Directive, HostBinding, Input } from '@angular/core';

const FOURTEEN_DAYS_IN_MILLISECONDS = 1000 * 60 * 60 * 24 * 14;
export const COLORS = {
  BLUE: '#009ECC',
  GREEN: '#67A300',
  TRANSPARENT: 'transparent',
}

const getColorByDate = (courseCreationDateString: string) => {
  const courseCreationTimestamp = new Date(courseCreationDateString).valueOf();
  const nowTimestamp = new Date().valueOf();

  if (courseCreationTimestamp > nowTimestamp) {
    return COLORS.BLUE;
  }

  if (courseCreationTimestamp < nowTimestamp && courseCreationTimestamp >= nowTimestamp - FOURTEEN_DAYS_IN_MILLISECONDS) {
    return COLORS.GREEN;
  }

  return COLORS.TRANSPARENT;
}

@Directive({
  selector: '[appAvailabilityStatus]',
})
export class AvailabilityStatusDirective {

  @HostBinding('style.border-color')
  borderColor = COLORS.TRANSPARENT;

  @Input() set availabilityDate(dateString: string) {
    this.borderColor = getColorByDate(dateString);
  }
}
