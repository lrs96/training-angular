import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: unknown[], args?: any): unknown {

    if(value.length === 0 || args === undefined) {
      return value
    }

    let filtro = args.toLocaleLowerCase();
    return value.filter( 
      v => v.toLocaleString().indexOf(filtro) != -1
    )
  }

}
