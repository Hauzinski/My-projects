import { Routes, Route, Navigate } from 'react-router-dom';

import MainPage from '../pages/MainPage/MainPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
