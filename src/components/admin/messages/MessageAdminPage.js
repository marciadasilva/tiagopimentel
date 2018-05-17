import React from 'react';

import MenuAdmin from '../MenuAdmin';
import MessagesSummary from './MessagesSummary';
import MessagesList from './MessagesList';

const MessagesAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <MessagesSummary />
      <MessagesList />
    </section>
  </main>
);

export default MessagesAdminPage;
