import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRedux, renderWithRouter } from '../../utils/helpers/testHelpers';
import VideoOrderComponent from './VideoOrder';

describe('Component test: VideoOrder', () => {
  it("default render component with 'relevance' option", () => {
    const { container, getByDisplayValue } = render(renderWithRedux(renderWithRouter(<VideoOrderComponent />)));
    const select = container.querySelector('.select') as HTMLSelectElement;

    expect(container.querySelector('.video-order')).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(container.querySelectorAll('option').length).toBe(6);
    expect(getByDisplayValue('relevance')).toBeInTheDocument();
  });

  it('select option', async () => {
    const { getByRole, getByDisplayValue } = render(renderWithRedux(renderWithRouter(<VideoOrderComponent />)));
    expect(getByDisplayValue('relevance')).toBeInTheDocument();

    await userEvent.selectOptions(getByRole('combobox'), 'viewCount');
    expect(getByDisplayValue('view count')).toBeInTheDocument();

    await userEvent.selectOptions(getByRole('combobox'), 'rating');
    expect(getByDisplayValue('rating')).toBeInTheDocument();
  });
});
