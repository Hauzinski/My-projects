import axios from 'axios';

import { Id, VideoDataInterface } from './youtubeAPI.types';

const API_URL = 'https://youtube.googleapis.com/youtube/v3';
const API_KEY = process.env.APP_API_KEY;

async function getVideoDataByID(id: string) {
  const params = {
    key: API_KEY,
    part: 'snippet,statistics',
    id,
  };

  try {
    const response = await axios.get(`${API_URL}/videos`, { params });
    const { data }: { data: VideoDataInterface } = response;
    return data.items;
  } catch {
    return [];
  }
}

async function getVideoData(text: string, order: string, maxResults: string, pageToken: string) {
  const searchText = text.trim().toLocaleLowerCase().replace(/ /gi, '+');
  const params = {
    key: API_KEY,
    part: 'snippet',
    type: 'video',
    order,
    maxResults,
    pageToken,
    q: searchText,
  };

  try {
    const response = await axios.get(`${API_URL}/search`, { params });
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
