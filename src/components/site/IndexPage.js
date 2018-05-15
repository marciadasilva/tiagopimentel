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

class IndexPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
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
        <Maps />
        <Footer />
      </Fragment>
    );
  }
}

export default IndexPage;
