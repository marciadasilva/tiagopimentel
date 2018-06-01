import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SlideMenu from '../SlideMenu';

class Schedule extends React.Component {
  componentDidMount() {
    document.title = 'Tiago Pimentel - Contato';
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    document.title = 'Tiago Pimentel';
  }
  render() {
    return (
      <div id="outer-container ">
        <SlideMenu
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
        <div id="page-wrap">
          <Header />
          <main className="schedule-page">Cronograma</main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Schedule;
