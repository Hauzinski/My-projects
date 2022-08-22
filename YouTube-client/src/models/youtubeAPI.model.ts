export interface VideoDataInterface {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Item {
  kind: string;
  etag: string;
  id: string & Id;
  snippet: Snippet;
  statistics: Statistics & undefined;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId?: string;
  liveBroadcastContent: string;
  publishTime?: string;
  localized?: Localized;
  defaultAudioLanguage?: string;
  defaultLanguage?: string;
}

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high?: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount?: string;
  favoriteCount: string;
  commentCount: string;
}
