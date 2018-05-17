import React from 'react';
import MenuAdmin from '../MenuAdmin';

const HelpAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <div className="help__content dashboard__image-home">
        <div className="help__box">
          <h2 className="help__title">Contact</h2>
          <p className="help__email">igor-haugg@hotmail.com</p>
          <p className="help__email">marcia.dasilva1410@gmail.com</p>
        </div>
      </div>
    </section>
  </main>
);

export default HelpAdminPage;
