import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import store from './store/store';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.BASENAME}>
      <App />
    </BrowserRouter>
  </Provider>
);
