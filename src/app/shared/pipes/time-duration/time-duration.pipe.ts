import { Pipe, PipeTransform } from '@angular/core';

import { isNumberNegative, isValueNotIntegerNumber } from '@app/util/util';

@Pipe({
  name: 'timeDuration',
})
export class TimeDurationPipe implements PipeTransform {
  transform(value: number): string {
    if (isValueNotIntegerNumber(value) || isNumberNegative(value)) {
      return '0min';
    }

    if (value < 60) {
      return `${value}min`;
    }

    return `${Math.floor(value / 60)}h ${value % 60}min`;
  }
}
