import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const values = value.split(' ');
    let result = '';

    for (const valorCamelCase of values) {
      result += this.capitalize(valorCamelCase) + ' ';
    }
    return result;
  }

  capitalize(value: string) {
    return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
  }

}
