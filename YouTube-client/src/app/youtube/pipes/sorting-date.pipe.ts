import { Pipe, PipeTransform } from '@angular/core';

import { Item } from 'src/app/core/models/youtube-api.model';

@Pipe({
  name: 'sortingDate',
  pure: false,
})
export class SortingDatePipe implements PipeTransform {
  transform(value: Item[], type: string): Item[] {
    if (!type) {
      return value;
    }

    return value.sort((a, b) => {
      if (Date.parse(a.snippet.publishedAt) > Date.parse(b.snippet.publishedAt)) {
        return type && type === 'decrease' ? 1 : -1;
      }
      if (Date.parse(a.snippet.publishedAt) < Date.parse(b.snippet.publishedAt)) {
        return type && type === 'decrease' ? -1 : 1;
      }
      return 0;
    });
  }
}
