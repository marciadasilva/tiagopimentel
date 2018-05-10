import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/admin/HomePage';
import CategoryAdminPage from '../components/admin/categories/CategoryAdminPage';
import CategoryAddPage from '../components/admin/categories/CategoryAddPage';
import CategoryEditPage from '../components/admin/categories/CategoryEditPage';
import ProductAdminPage from '../components/admin/products/ProductAdminPage';
import ProductAddPage from '../components/admin/products/ProductAddPage';
import ProductEditPage from '../components/admin/products/ProductEditPage';
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
          path="/admin/category"
          component={CategoryAdminPage}
          exact={true}
        />
        <PrivateRoute
          path="/admin/category/create"
          component={CategoryAddPage}
        />
        <PrivateRoute
          path="/admin/category/edit/:id"
          component={CategoryEditPage}
        />
        <PrivateRoute
          path="/admin/product"
          component={ProductAdminPage}
          exact={true}
        />
        <PrivateRoute path="/admin/product/create" component={ProductAddPage} />
        <PrivateRoute
          path="/admin/product/edit/:id"
          component={ProductEditPage}
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
