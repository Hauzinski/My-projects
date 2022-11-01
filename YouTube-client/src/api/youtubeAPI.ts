import axios from 'axios';

import { Id, VideoDataInterface } from '../models/youtubeAPI.models';
import apiKey from './youtubeAPI.keys';

const apiURL = 'https://youtube.googleapis.com/youtube/v3';

async function getVideoDataByID(id: string) {
  const params = {
    key: apiKey,
    part: 'snippet,statistics',
    id,
  };

  try {
    const response = await axios.get(`${apiURL}/videos`, { params });
    const { data }: { data: VideoDataInterface } = response;
    return data.items;
  } catch {
    return [];
  }
}

async function getVideoData(text: string, order: string, maxResults: string, pageToken: string) {
  const searchText = text.trim().toLocaleLowerCase().replace(/ /gi, '+');
  const params = {
    key: apiKey,
    part: 'snippet',
    type: 'video',
    order,
    maxResults,
    pageToken,
    q: searchText,
  };

  try {
    const response = await axios.get(`${apiURL}/search`, { params });
    const { data }: { data: VideoDataInterface } = response;
    const videoIDs = data.items.map((item) => (item.id as Id).videoId);
    const pageTokens = [data.prevPageToken, data.nextPageToken];

    return {
      videoData: await getVideoDataByID(videoIDs.join(',')),
      pageTokens: pageTokens.map((value) => value || ''),
    };
  } catch {
    return {
      videoData: [],
      pageTokens: ['', ''],
    };
  }
}

export { getVideoDataByID, getVideoData };
