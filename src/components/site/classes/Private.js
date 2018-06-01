import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SlideMenu from '../SlideMenu';
import { Link } from 'react-router-dom';

class Private extends React.Component {
  componentDidMount() {
    document.title = 'Tiago Pimentel - Particulares';
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
          <main className="classes-page">
            <h2 className="classes-page__title">Aulas Particulares</h2>
            <span className="classes-page__icon">---------------</span>
            <div className="classes-page__description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate cum exercitationem, nostrum aliquam pariatur
                repudiandae at eligendi nobis qui minima. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Voluptate cum
                exercitationem, nostrum aliquam pariatur repudiandae at eligendi
                nobis qui minima.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate cum exercitationem, nostrum aliquam pariatur
                repudiandae at eligendi nobis qui minima. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Voluptate cum
                exercitationem, nostrum aliquam pariatur repudiandae at eligendi
                nobis qui minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Voluptate cum exercitationem, nostrum aliquam
                pariatur repudiandae at eligendi nobis qui minima. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Voluptate cum
                exercitationem, nostrum aliquam pariatur repudiandae at eligendi
                nobis qui minima.
              </p>
            </div>

            <section className="classes-page__gallery-list">
              <h3 className="classes-page__title">Outras Aulas</h3>
              <div className="classes-page__others">
                <Link to="/jiujitsu">JiuJitsu</Link>
                <Link to="/muaythai">Muay Thai</Link>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Private;
