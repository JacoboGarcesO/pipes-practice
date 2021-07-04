import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPassword'
})
export class FormatPasswordPipe implements PipeTransform {

  transform(value: string, format: boolean = true): string {
    return format ? '*'.repeat(value.length) : value;
  }
}
