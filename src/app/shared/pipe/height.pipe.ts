import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let valor = parseInt(value) ;
    if(valor > 200){
      return 'high';
    }
    if(valor < 100){
      return "low";
    }else{
      return "normal";
    }
    return null;
  }

}
