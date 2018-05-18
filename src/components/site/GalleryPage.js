import React, { Fragment } from 'react';
import Header from './Header';
import GalleryTitle from './gallery/GalleryTitle';
import Footer from './Footer';

import SlideMenu from './SlideMenu';

class IndexPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <div id="outer-container ">
          <SlideMenu
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-container'}
          />
          <div id="page-wrap">
            <Header />
            <GalleryTitle />
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default IndexPage;
