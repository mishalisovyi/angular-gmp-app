import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy',
})
export class SearchByPipe implements PipeTransform {
  transform(array: any[], field: string, searchString: string): any[] {
    if (!Array.isArray(array)) {
      return [];
    }

    const filteredArray = array.filter(item => item[field].toLowerCase().includes(searchString.toLowerCase()));

    return filteredArray;
  }
}
