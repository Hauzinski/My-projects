import axios from 'axios';

import { VideoDataInterface } from '../models/youtubeAPI.model';

const apiKey = 'AIzaSyBWrP4EwVwKHY2ZJXm4o0oa_z4j4ttE7hA';
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
async function getVideoData(text: string, order: string, maxResults: string, pageToken = '') {
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
    const videoIDs = data.items.map((item) => item.id.videoId);
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
