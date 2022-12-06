// Not used

import { Item, Thumbnails } from '../models/youtubeAPI.models';

export default function getVideoImageThumbnail(data: Item) {
  const imageSizes = ['maxres', 'standard', 'high', 'medium'];

  const maxImageSize = imageSizes.find((value: string) => {
    return Object.prototype.hasOwnProperty.call(data.snippet.thumbnails, value);
  });

  return String(
    maxImageSize ? data.snippet.thumbnails[maxImageSize as keyof Thumbnails]?.url : data.snippet.thumbnails.default
  );
}