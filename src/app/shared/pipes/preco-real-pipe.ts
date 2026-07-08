import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precoReal',
})
export class PrecoRealPipe implements PipeTransform {
  transform(valor: number): string {
    return 'R$' + valor.toFixed(2);
  }
}
