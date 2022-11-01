import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from '../../utils/helpers/testHelpers';
import VideoItem from './VideoItem';

const data = {
  kind: 'youtube#video',
  etag: 'eGqZQwVj7LjBMCSKDUjPWYLuzfk',
  id: 'E1cklb4aeXA',
  snippet: {
    publishedAt: '2022-10-18T16:00:11Z',
    channelId: 'UCFbNIlppjAuEX4znoulh0Cw',
    title: 'Video title',
    description: 'Video description',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/E1cklb4aeXA/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/E1cklb4aeXA/mqdefault.jpg',
        width: 320,
        height: 180,
      },
    },
    channelTitle: 'Chanel title',
    liveBroadcastContent: 'none',
    localized: {
      title: 'Video title',
      description: 'Video description',
    },
    defaultAudioLanguage: 'en-US',
  },
  statistics: {
    viewCount: '61571',
    likeCount: '3380',
    favoriteCount: '0',
    commentCount: '208',
  },
};

describe('Component test: VideoItem', () => {
  it('render component', () => {
    const { container, getByText, getByAltText } = render(renderWithRouter(<VideoItem data={data} />));

    expect(getByText(/more.../i)).toBeInTheDocument();
    expect(getByText(/video title/i)).toBeInTheDocument();
    expect(getByAltText(/video title/i)).toBeInTheDocument();
    expect(container.querySelector('.video-metrics')).toBeInTheDocument();
    expect(container.querySelector('.video-item-button')).toBeInTheDocument();
  });

  it('click button', async () => {
    const { container } = render(renderWithRouter(<VideoItem data={data} />));
    const button = container.querySelector('.video-item-button') as HTMLButtonElement;

    await userEvent.click(button);
    screen.debug();
  });
});
