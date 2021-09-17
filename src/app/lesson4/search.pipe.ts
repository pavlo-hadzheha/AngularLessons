import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: string[], field: string, sort: string): string[] {
    let out: Array<string> = [];
    if (!field) {
      out = value;
    } else {
      out = value.filter(name => name.toLowerCase().includes(field.toLowerCase()));
    }
    console.log(sort === "sort" ? out.sort() : out);
    
    return sort === "sort" ? out.sort() : out;
  }

}
