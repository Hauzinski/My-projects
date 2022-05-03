import { Pipe, PipeTransform } from '@angular/core';

import { Item, Thumbnails } from 'src/app/core/models/youtube-api.model';

@Pipe({
  name: 'videoImageThumbnail',
})
export class VideoImageThumbnailPipe implements PipeTransform {
  transform(item: Item): string {
    const hasOwnProperty = function (obj: Item, property: string) {
      return obj.snippet.thumbnails.hasOwnProperty(property);
    };

    const properties = ['maxres', 'standard', 'high', 'medium'];

    const property = properties.find((value: string) => {
      return hasOwnProperty(item, value);
    });

    if (property) {
      return item.snippet.thumbnails[property as keyof Thumbnails]!.url;
    } else {
      return item.snippet.thumbnails.default.url;
    }
  }
}
