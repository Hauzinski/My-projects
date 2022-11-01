import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../store/store';

export function renderWithRedux(component: JSX.Element) {
  return <Provider store={store}>{component}</Provider>;
}

export function renderWithRouter(component: JSX.Element) {
  return <BrowserRouter>{component}</BrowserRouter>;
}
