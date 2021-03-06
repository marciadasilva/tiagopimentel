import React, { Fragment } from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/admin/HomePage';
import ImagesAdminPage from '../components/admin/images/ImagesAdminPage';
import ImagesAddPage from '../components/admin/images/ImagesAddPage';
import ImagesEditPage from '../components/admin/images/ImagesEditPage';
import VideosAdminPage from '../components/admin/videos/VideosAdminPage';
import VideosAddPage from '../components/admin/videos/VideosAddPage';
import VideosEditPage from '../components/admin/videos/VideosEditPage';
import MessageAdminPage from '../components/admin/messages/MessageAdminPage';
import HelpAdminPage from '../components/admin/help/HelpAdminPage';
import IndexPage from '../components/site/IndexPage';
import GalleryPage from '../components/site/GalleryPage';
import GalleryPageWithId from '../components/site/GalleryPageWithId';
import ContactPage from '../components/site/ContactPage';
import JiuJitsu from '../components/site/classes/JiuJitsu';
import MuayThai from '../components/site/classes/MuayThai';
import Private from '../components/site/classes/Private';
import PriceList from '../components/site/priceList/PriceList';
import Schedule from '../components/site/schedule/Schedule';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SpecialRoute from './SpecialRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Fragment>
      <Switch>
        <PublicRoute path="/" component={IndexPage} exact={true} />
        <PublicRoute path="/galeria" component={GalleryPage} exact={true} />
        <PublicRoute path="/galeria/:id" component={GalleryPageWithId} />
        <PublicRoute path="/contato" component={ContactPage} />
        <PublicRoute path="/jiujitsu" component={JiuJitsu} />
        <PublicRoute path="/muaythai" component={MuayThai} />
        <PublicRoute path="/particular" component={Private} />
        <PublicRoute path="/programas" component={PriceList} />
        <PublicRoute path="/cronograma" component={Schedule} />

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
          path="/admin/videos"
          component={VideosAdminPage}
          exact={true}
        />
        <PrivateRoute path="/admin/videos/create" component={VideosAddPage} />
        <PrivateRoute
          path="/admin/videos/edit/:id"
          component={VideosEditPage}
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
    </Fragment>
  </Router>
);

export default AppRouter;
