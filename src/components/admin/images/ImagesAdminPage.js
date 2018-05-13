import React from 'react';

import MenuAdmin from '../MenuAdmin';
import ImagesList from './ImagesList';
import ImagesListFilters from './ImagesListFilters';
import ImagesSummary from './ImagesSummary';

const ImagesAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <ImagesSummary />
      <ImagesListFilters />
      <ImagesList />
    </section>
  </main>
);

export default ImagesAdminPage;
