import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRedux } from '../../utils/helpers/testHelpers';
import AppLanguageComponent from './AppLanguage';

describe('Component test: AppLanguageComponent', () => {
  it("default render component with 'en' option", () => {
    const { container, getByDisplayValue } = render(renderWithRedux(<AppLanguageComponent />));
    const select = container.querySelector('.select') as HTMLSelectElement;

    expect(container.querySelector('.app-language')).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(container.querySelectorAll('option').length).toBe(2);
    expect(getByDisplayValue('en')).toBeInTheDocument();
  });

  it('select option', async () => {
    const { getByRole, getByDisplayValue } = render(renderWithRedux(<AppLanguageComponent />));
    expect(getByDisplayValue('en')).toBeInTheDocument();

    await userEvent.selectOptions(getByRole('combobox'), 'ru');
    expect(getByDisplayValue('ru')).toBeInTheDocument();

    await userEvent.selectOptions(getByRole('combobox'), 'en');
    expect(getByDisplayValue('en')).toBeInTheDocument();
  });
});
