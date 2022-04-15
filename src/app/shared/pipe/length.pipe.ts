import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let valor = parseInt(value) ;
    if(valor > 1000){
      return 'large';
    }
    if(valor < 100){
      return "small";
    }else{
      return "normal";
    }
    return null;
  }

}
