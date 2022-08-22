import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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
