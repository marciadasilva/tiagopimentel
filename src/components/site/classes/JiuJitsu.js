import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import SlideMenu from "../SlideMenu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import selectImages from "../../../selectors/images";

class JiuJitsu extends React.Component {
  componentDidMount() {
    document.title = "Tiago Pimentel - JiuJitsu";
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    document.title = "Tiago Pimentel";
  }
  render() {
    return (
      <div id="outer-container ">
        <SlideMenu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <Header />
          <main className="classes-page">
            <h2 className="classes-page__title">Jiu Jitsu</h2>
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
                nobis qui minima. Voluptate cum exercitationem, nostrum aliquam
                pariatur repudiandae at eligendi nobis qui minima. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Voluptate cum
                exercitationem, nostrum aliquam pariatur repudiandae at eligendi
                nobis qui minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Voluptate cum exercitationem, nostrum aliquam
                pariatur repudiandae at eligendi nobis qui minima.
              </p>
            </div>

            <section>
              <h3>Últimos treinos</h3>
              <div className="gallery__list">
                {this.props.images
                  .slice(
                    0,
                    this.props.images.length >= 4 ? 4 : this.props.images.length
                  )
                  .filter(image => image.category === "jiujitsu")
                  .map(image => {
                    return (
                      <div key={image.id}>
                        <div className="">
                          <img
                            className="gallery__image"
                            src={image.imageFile}
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div>
                <Link to="/galeria" className="button button--home">
                  Ver mais
                </Link>
              </div>
            </section>
            <section>
              <h3>Outras Aulas</h3>
              <div>Aula de Muay Thai</div>
              <div>Aula Particular</div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: selectImages(state.images, state.filters)
});

export default connect(mapStateToProps)(JiuJitsu);
