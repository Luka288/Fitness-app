import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastSeen',
})
export class LastSeenPipe implements PipeTransform {
  transform(value: string): string {
    const inputDate = new Date(value);
    const today = new Date();

    const userInput = new Date(
      inputDate.getFullYear(),
      inputDate.getMonth(),
      inputDate.getDate()
    );

    const now = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    const msDiff = now.getTime() - userInput.getTime();
    const differenceInDays = Math.floor(msDiff / (1000 * 60 * 60 * 24));

    if (differenceInDays === 0) return 'Last seen: Today';
    if (differenceInDays === 1) return 'Last seen: Yesterday';
    if (differenceInDays < 7) return `Last seen: ${differenceInDays} days ago`;

    return 'Last seen: ' + inputDate.toLocaleDateString('en-GB');
  }
}
