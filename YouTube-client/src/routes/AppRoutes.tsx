import { Routes, Route, Navigate } from 'react-router-dom';

import VideoPage from '../pages/VideoPage/VideoPage';
import VideoSearchPage from '../pages/VideoSearchPage/VideoSearchPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<VideoSearchPage />} />
      <Route path="/videos/:id" element={<VideoPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
