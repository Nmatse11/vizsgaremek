import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoverflow'
})
export class TextoverflowPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
