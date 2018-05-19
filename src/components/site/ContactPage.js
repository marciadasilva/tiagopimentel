import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './contact/MainContent';
import SlideMenu from './SlideMenu';

class ContactPage extends React.Component {
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
            <MainContent />
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContactPage;
