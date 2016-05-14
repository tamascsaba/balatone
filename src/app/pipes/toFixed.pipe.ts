import {Pipe} from '@angular/core';

@Pipe({name: 'toFixed'})
export class ToFixedPipe {
  transform (input: number, digits: string = '2') {
    return input.toFixed(parseInt(digits, 10));
  }
}
