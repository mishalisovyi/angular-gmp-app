import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy',
})
export class SearchByPipe implements PipeTransform {
  transform(array: any[], field: string, searchString: string): any[] {
    if (!Array.isArray(array)) {
      return [];
    }

    const filteredArray = array.filter(item => {
      return item[field].includes(searchString)
        || item[field].toLowerCase().includes(searchString)
        || item[field].toUpperCase().includes(searchString);
    });

    return filteredArray;
  }
}
