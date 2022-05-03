import { Pipe, PipeTransform } from '@angular/core';

import { Item } from 'src/app/core/models/youtube-api.model';

@Pipe({
  name: 'sortingView',
})
export class SortingViewPipe implements PipeTransform {
  transform(value: Item[], type: string): Item[] {
    if (!type) {
      return value;
    }

    return value.sort((a, b) => {
      if (parseInt(a!.statistics!.viewCount) > parseInt(b!.statistics!.viewCount)) {
        return type && type === 'decrease' ? 1 : -1;
      }
      if (parseInt(a!.statistics!.viewCount) < parseInt(b!.statistics!.viewCount)) {
        return type && type === 'decrease' ? -1 : 1;
      }
      return 0;
    });
  }
}
