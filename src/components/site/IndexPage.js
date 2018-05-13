import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './home/Hero';
import ClassesList from './home/ClassesList';
import Gym from './home/Gym';
import Partnership from './home/Partnership';
import Gallery from './home/Gallery';

class IndexPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <div className="grid-hero">
          <Header />
          <Hero />
          <ClassesList />
        </div>
        <Gym />
        <Partnership />
        <Gallery />
        <Footer />
      </Fragment>
    );
  }
}

export default IndexPage;
