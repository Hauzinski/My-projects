import { lazy, Suspense } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

const VideoSearchPage = lazy(() => import('../pages/VideoSearchPage/VideoSearchPage'));
const VideoPage = lazy(() => import('../pages/VideoPage/VideoPage'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<VideoSearchPage />} />
        <Route path="/videos/:id" element={<VideoPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
