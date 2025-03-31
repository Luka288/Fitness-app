import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformStr',
})
export class TransformStrPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(/_/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
