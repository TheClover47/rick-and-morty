import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform { //Sort by any property

  transform(value: any[], order: any = '', column: string = ''): any[] {
    if (!value || order === '' || !order) { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    if (!column || column === '') { // sort 1d array
      if(order==='asc'){return value.sort()}
      else{return value.sort().reverse();}
    }
    return orderBy(value, [column], [order]);
  }

}
