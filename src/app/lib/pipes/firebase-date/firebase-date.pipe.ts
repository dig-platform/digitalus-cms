import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

@Pipe({
  name: 'firebaseDate'
})
export class FirebaseDatePipe implements PipeTransform {
  // https://day.js.org/docs/en/parse/string-format
  defaultFormat = 'MM-DD-YYYY h:mmA';

  transform(value: {seconds: number; nanoseconds: number}, ...args: string[]): string {
    let [format] = args;
    if (! format) {
      format = this.defaultFormat;
    }

    const date = dayjs(value.seconds * 1000);
    return format === 'from-now' ? date.fromNow() : date.format(format);
  }

}
