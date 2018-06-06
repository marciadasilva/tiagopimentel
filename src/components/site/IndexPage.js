import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './home/Hero';
import ClassesList from './home/ClassesList';
import Gym from './home/Gym';
import Partnership from './home/Partnership';
import Gallery from './home/Gallery';
import PriceList from './home/PriceList';
import Schedule from './home/Schedule';
import Maps from './home/Maps';
import SlideMenu from './SlideMenu';

class IndexPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
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
            <section className="grid-hero">
              <Header />
              <Hero />
              <ClassesList />
            </section>
            <Gym />
            <Partnership />
            <Gallery />
            <PriceList />
            <Schedule />
            <Maps width={'100vw'} />
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default IndexPage;
