import { Route, Routes } from 'react-router-dom';

import './assets/styles/common.scss';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<p>404: Page not found.</p>} />
      </Routes>
      <Footer />
    </>
  );
}
