import React from 'react';

import MenuAdmin from '../MenuAdmin';
import VideosList from './VideosList';
import VideosListFilters from './VideosListFilters';
import VideosSummary from './VideosSummary';

const VideosAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <VideosSummary />
      <VideosListFilters />
      <VideosList />
    </section>
  </main>
);

export default VideosAdminPage;
