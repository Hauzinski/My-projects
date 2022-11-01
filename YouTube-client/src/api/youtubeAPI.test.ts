import axios from 'axios';

import { getVideoDataByID, getVideoData } from './youtubeAPI';

jest.mock('axios');

describe('API test: YouTube API Test', () => {
  let responseVideoID = {};
  let responseVideoRequest = {};

  beforeAll(() => {
    responseVideoID = {
      data: {
        items: [
          {
            id: 'videoId1',
          },
          {
            id: 'videoId2',
          },
          {
            id: 'videoId3',
          },
        ],
      },
    };

    responseVideoRequest = {
      data: {
        nextPageToken: 'nextPageToken',
        items: [
          {
            id: {
              videoId: 'videoId1',
            },
          },
          {
            id: {
              videoId: 'videoId2',
            },
          },
          {
            id: {
              videoId: 'videoId3',
            },
          },
        ],
      },
    };
  });

  test('getVideoDataByID: success request', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce(responseVideoID);
    const data = await getVideoDataByID('mockID');

    expect(data.length).toEqual(3);
    expect(data[0].id).toEqual('videoId1');
    expect(data[1].id).toEqual('videoId2');
    expect(data[2].id).toEqual('videoId3');
  });

  test('getVideoDataByID: failed request', async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error('Error'));
    expect(await getVideoDataByID('mockID')).toEqual([]);
  });

  test('getVideoData: success request', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce(responseVideoRequest).mockResolvedValueOnce(responseVideoID);
    const data = await getVideoData('search text', 'relevance', '24', '');

    expect(data.videoData.length).toEqual(3);
    expect(data.videoData[0].id).toEqual('videoId1');
    expect(data.videoData[1].id).toEqual('videoId2');
    expect(data.videoData[2].id).toEqual('videoId3');
    expect(data.pageTokens).toEqual(['', 'nextPageToken']);
  });

  test('getVideoData: failed request 1', async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error('Error'));
    const data = await getVideoData('search text', 'relevance', '24', '');

    expect(data.videoData).toEqual([]);
    expect(data.pageTokens).toEqual(['', '']);
  });

  test('getVideoData: failed request 2', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce(responseVideoRequest).mockRejectedValueOnce(new Error('Error'));
    const data = await getVideoData('search text', 'relevance', '24', '');

    expect(data.videoData).toEqual([]);
    expect(data.pageTokens).toEqual(['', 'nextPageToken']);
  });
});
