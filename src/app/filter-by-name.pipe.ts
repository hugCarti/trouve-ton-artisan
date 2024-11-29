import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(datas: any[], filterOrder: string): any[] {
    if (!datas || !filterOrder) {
      return datas; // Si `datas` ou `filterOrder` est invalide, retourne la liste originale
    }

    return datas.filter(data =>
      data.name.toLowerCase().includes(filterOrder.toLowerCase())
    );
  }
}