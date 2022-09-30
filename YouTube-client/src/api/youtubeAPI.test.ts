import { expect, test } from '@jest/globals';

import { getVideoData } from './youtubeAPI';

test('YouTube API Test: Request test', async () => {
  const searchText = 'React Jest';
  const videoOrder = 'relevance';
  const maxResultsPerPage = '24';
  const pageToken = '';
  const data = await getVideoData(searchText, videoOrder, maxResultsPerPage, pageToken);

  expect(data.videoData.length).toBe(24);
  expect(data.pageTokens.length).toBe(2);
  expect(data.pageTokens[0]).toBe('');
});
