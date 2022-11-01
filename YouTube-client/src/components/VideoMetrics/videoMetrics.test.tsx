import React from 'react';

import { render } from '@testing-library/react';

import VideoMetricsComponent from './VideoMetrics';

const data = { viewCount: '257', likeCount: '22570', favoriteCount: '1100000', commentCount: 'null' };

it('Component test: VideoMetrics', () => {
  const { container, getByText } = render(<VideoMetricsComponent data={data} />);
  expect(container.querySelectorAll('.logo').length).toBe(4);
  expect(getByText('257')).toBeInTheDocument();
  expect(getByText('22.6 K')).toBeInTheDocument();
  expect(getByText('1.1 M')).toBeInTheDocument();
  expect(getByText('-')).toBeInTheDocument();
});
