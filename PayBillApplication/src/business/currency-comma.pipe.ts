import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyComma',
})
export class CurrencyCommaPipe implements PipeTransform {
  transform(value: number): unknown {
    return value ? value.toLocaleString() : value;
  }
}
