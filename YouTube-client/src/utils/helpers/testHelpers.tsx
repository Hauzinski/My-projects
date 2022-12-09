import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../store/store';

function renderWithRedux(component: JSX.Element) {
  return <Provider store={store}>{component}</Provider>;
}

function renderWithRouter(component: JSX.Element) {
  return <BrowserRouter>{component}</BrowserRouter>;
}

export { renderWithRedux, renderWithRouter };
