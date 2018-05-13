import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/admin/HomePage';
import ImagesAdminPage from '../components/admin/images/ImagesAdminPage';
import ImagesAddPage from '../components/admin/images/ImagesAddPage';
import ImagesEditPage from '../components/admin/images/ImagesEditPage';
import MessageAdminPage from '../components/admin/messages/MessageAdminPage';
import HelpAdminPage from '../components/admin/help/HelpAdminPage';
import IndexPage from '../components/site/IndexPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SpecialRoute from './SpecialRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={IndexPage} exact={true} />
        {/* duplicar o de cima e fazer o novo */}
        <SpecialRoute path="/login" component={LoginPage} />
        <PrivateRoute path="/admin" component={HomePage} exact={true} />

        <PrivateRoute
          path="/admin/images"
          component={ImagesAdminPage}
          exact={true}
        />
        <PrivateRoute path="/admin/images/create" component={ImagesAddPage} />
        <PrivateRoute
          path="/admin/images/edit/:id"
          component={ImagesEditPage}
        />
        <PrivateRoute
          path="/admin/messages"
          component={MessageAdminPage}
          exact={true}
        />
        <PrivateRoute
          path="/admin/help"
          component={HelpAdminPage}
          exact={true}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
