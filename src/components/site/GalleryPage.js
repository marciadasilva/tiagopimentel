import React, { Fragment } from 'react';
import Header from './Header';
import GalleryTitle from './gallery/GalleryTitle';
import GalleryContent from './gallery/GalleryContent';
import GalleryFilters from './gallery/GalleryFilters';
import Footer from './Footer';

import SlideMenu from './SlideMenu';

class IndexPage extends React.Component {
  componentDidMount() {
    document.title = 'Tiago Pimentel - Galeria';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  componentWillUnmount() {
    document.title = 'Tiago Pimentel';
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
            <section className="gallery-page">
              <GalleryTitle />
              <GalleryFilters />
              <GalleryContent />
            </section>
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default IndexPage;
