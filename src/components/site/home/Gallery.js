import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectImages from '../../../selectors/images';

class Gallery extends React.Component {
  render() {
    return (
      <section className="gallery">
        {/* <span className="gallery__name">Galeria</span> */}
        <h3 className="gallery__title">Veja nossas fotos</h3>
        <span className="gallery__icon">----------</span>
        <div className="gallery__list">
          {this.props.images
            .slice(
              0,
              this.props.images.length >= 4 ? 4 : this.props.images.length
            )
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
    );
  }
}

const mapStateToProps = state => ({
  images: selectImages(state.images, state.filters)
});

export default connect(mapStateToProps)(Gallery);
