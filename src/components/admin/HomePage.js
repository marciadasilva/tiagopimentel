import React from 'react';
import MenuAdmin from './MenuAdmin';

const HomePage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      {/* <div className="dashboard__image-home" /> */}
      <img
        className="dashboard__image-home"
        src="/images/dashboard.jpg"
        alt="dashboard background"
      />
    </section>
  </main>
);

export default HomePage;
