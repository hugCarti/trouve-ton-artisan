import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(datas: any[], filterOrder: string): any[] {

    return datas.filter(data =>
      data.name.toLowerCase().includes(filterOrder.toLowerCase())
    );
  }
}
