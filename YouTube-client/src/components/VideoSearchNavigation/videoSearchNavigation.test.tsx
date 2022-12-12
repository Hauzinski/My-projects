import React from 'react';

import { render } from '@testing-library/react';

import { renderWithRedux, renderWithRouter } from '../../utils/helpers/testHelpers';
import VideoSearchNavigationComponent from './VideoSearchNavigation';

describe('Component test: VideoSearchNavigation', () => {
  it('default render component with disabled navigation buttons', () => {
    const { container, getAllByRole, getByLabelText } = render(
      renderWithRedux(renderWithRouter(<VideoSearchNavigationComponent />))
    );

    expect(container.querySelector('.nav')).toBeInTheDocument();
    expect(getAllByRole('button').length).toBe(2);
    expect(getByLabelText('Previous page')).toBeInTheDocument();
    expect(getByLabelText('Next page')).toBeInTheDocument();
    expect(getByLabelText('Previous page')).toHaveAttribute('disabled');
  });
});
