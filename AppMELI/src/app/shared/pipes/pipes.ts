import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyPipe' })
export class CurrencyPipe implements PipeTransform {
    transform(value): any {
        switch (value) {
            case 'ARS':
                return '$';
            case 'U$D':
                return 'U$D ';
            default:
                return value;
        }
    }
}

@Pipe({name: 'amountPipe'})
export class AmountPipe implements PipeTransform {
   transform (value: number): string {
    const newValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");    

    return newValue;
   }
}

@Pipe({name: 'decimalsPipe'})
export class DecimalsPipe implements PipeTransform {
   transform (value: number): string {

    return value.toString() === '0' ? '00' : value.toString();
   }
}

@Pipe({name: 'conditionPipe'})
export class ConditionPipe implements PipeTransform {
   transform (value: string): string {
    switch (value) {
        case 'used':
            return 'usado';
        case 'new':
            return 'nuevo';
        default:
            return value;
        }
    }
}