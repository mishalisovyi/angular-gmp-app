import { Pipe, PipeTransform } from '@angular/core';

enum Order {
  Asc = 'asc',
  Desc = 'desc',
}

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], field: string, order: string = Order.Asc): any[] {
    if (!Array.isArray(array)) {
      return [];
    }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return order === Order.Asc ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return order === Order.Asc ? 1 : -1;
      }

      return 0;
    });

    return array;
  }
}
