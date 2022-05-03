import { Pipe, PipeTransform } from '@angular/core';

import { Item } from 'src/app/core/models/youtube-api.model';

@Pipe({
  name: 'sortingWord',
})
export class SortingWordPipe implements PipeTransform {
  transform(value: Item[], word: string): Item[] {
    return value.filter((item: Item) => {
      const title: string = item.snippet.title.toLowerCase();

      return title.includes(word.toLowerCase());
    });
  }
}
