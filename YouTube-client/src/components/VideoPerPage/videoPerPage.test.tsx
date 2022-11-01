import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRedux, renderWithRouter } from '../../utils/helpers/testHelpers';
import VideoPerPageComponent from './VideoPerPage';

describe('Component test: VideoPerPage', () => {
  it("default render component with 'relevance' option", () => {
    const { container, getByDisplayValue } = render(renderWithRedux(renderWithRouter(<VideoPerPageComponent />)));
    const select = container.querySelector('.select') as HTMLSelectElement;

    expect(container.querySelector('.video-per-page')).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(container.querySelectorAll('option').length).toBe(4);
    expect(getByDisplayValue('24')).toBeInTheDocument();
  });

  it('select option', async () => {
    const { getByRole, getByDisplayValue } = render(renderWithRedux(renderWithRouter(<VideoPerPageComponent />)));
    expect(getByDisplayValue('24')).toBeInTheDocument();

    await userEvent.selectOptions(getByRole('combobox'), '48');
    expect(getByDisplayValue('48')).toBeInTheDocument();

    await userEvent.selectOptions(getByRole('combobox'), '12');
    expect(getByDisplayValue('12')).toBeInTheDocument();
  });
});
