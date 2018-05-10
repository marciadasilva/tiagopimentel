import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './home/Hero';
import ClassesList from './home/ClassesList';

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
        <Footer />
      </Fragment>
    );
  }
}

export default IndexPage;
