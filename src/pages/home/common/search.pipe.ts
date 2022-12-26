import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any, value: any, key: any): any {
    value.forEach((name, index) => {
      if (name) {
        list = list.filter((item) => {
          console.log(item[key[2]],value[2], item[key[2]],value[3])
          return (key[index]!=='age' ? item[key[index]]?.toString().toLowerCase().indexOf(name.toString().toLowerCase()) !== -1:item[key[2]]>=value[2] && item[key[2]]<=value[3])
        });
      }
    });
    return list;
  }

}
