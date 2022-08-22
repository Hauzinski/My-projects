import axios from 'axios';

import { VideoDataInterface } from '../models/youtubeAPI.model';

const apiKey = 'AIzaSyBWrP4EwVwKHY2ZJXm4o0oa_z4j4ttE7hA';

async function getVideoDataByID(id: string) {
  const url = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet,statistics&id=${id}`;

  try {
    const response = await axios.get(url);
    const { data }: { data: VideoDataInterface } = response;
    return data.items;
  } catch {
    return [];
  }
}

async function getVideoData(text: string) {
  const maxResults = 24;
  const searchText = text.trim().toLocaleLowerCase().replace(/ /gi, '+');
  const url = `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&maxResults=${maxResults}&q=${searchText}`;

  try {
    const response = await axios.get(url);
    const { data }: { data: VideoDataInterface } = response;
    const videoIDs = data.items.map((item) => item.id.videoId);

    return await getVideoDataByID(videoIDs.join(','));
  } catch {
    return [];
  }
}

export { getVideoDataByID, getVideoData };
