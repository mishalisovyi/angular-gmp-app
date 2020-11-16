import { Pipe, PipeTransform } from '@angular/core';

export interface SearchByPipeParams {
  field: string,
  searchString: string,
}

@Pipe({
  name: 'searchBy',
})
export class SearchByPipe implements PipeTransform {
  transform(array: any[], { field, searchString }: SearchByPipeParams): any[] {
    if (!Array.isArray(array)) {
      return [];
    }

    const filteredArray = array.filter(item => item[field].toLowerCase().includes(searchString.toLowerCase()));

    return filteredArray;
  }
}
