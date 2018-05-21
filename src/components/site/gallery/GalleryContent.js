import React, { Fragment } from 'react';
import Lightbox from 'lightbox-react';
import ScrollAnimation from 'react-animate-on-scroll';
import randomColor from 'randomcolor';
import { connect } from 'react-redux';
import selectImages from '../../../selectors/images';
import selectVideos from '../../../selectors/videos';

class GalleryContent extends React.Component {
  state = {
    isOpen: false,
    selected: 0
  };
  isOpen = selected => {
    this.setState({ isOpen: true, selected });
  };

  randomColor = () => {
    return {
      luminosity: 'random', //'light'
      hue: 'random', // 'blue' 'green' random
      format: 'rgba',
      alpha: 1
    };
  };

  render() {
    const { isOpen, selected } = this.state;

    const items = this.props.images
      .concat(this.props.videos)
      .sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
      })
      .map((item, i) => {
        return { ...item, cont: i };
      });

    const images = Array.from(items);

    return (
      <Fragment>
        <div className="gallery-page__content">
          {/* <ScrollAnimation
           animateIn="fadeInUp"
           animateOnce={true}
           delay={250}*/}
          {items.map(item => {
            return item.imageFile ? (
              <div
                className="gallery-page__overlay-image"
                key={item.id}
                style={{ background: randomColor() }}
              >
                <img
                  className="gallery-page__image"
                  src={item.imageFile}
                  alt="Fotos e Videos"
                  onClick={() => this.isOpen(item.cont)}
                />
                <i className="fas fa-camera fa-4x gallery-page__image-icon" />
              </div>
            ) : (
              <div
                className="gallery-page__overlay-video"
                key={item.id}
                style={{ background: randomColor() }}
              >
                <video
                  className="gallery-page__video"
                  src={item.videoFile}
                  onClick={() => this.isOpen(item.cont)}
                  controls
                />
                <i className="fas fa-video fa-4x gallery-page__video-icon" />
              </div>
            );
          })}
        </div>
        {/* </ScrollAnimation> */}
        {isOpen && (
          <Lightbox
            mainSrc={
              images[selected].imageFile ? (
                images[selected].imageFile
              ) : (
                <video
                  className="light-video"
                  src={images[selected].videoFile}
                  autoPlay
                  controls
                />
              )
            }
            imageTitle={images[selected].description}
            nextSrc={images[(selected + 1) % images.length]}
            prevSrc={images[(selected - 1 + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                selected:
                  (this.state.selected + (images.length - 1)) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                selected: (this.state.selected + 1) % images.length
              })
            }
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  images: selectImages(state.images, state.filters),
  videos: selectVideos(state.videos, state.filters)
});

export default connect(mapStateToProps)(GalleryContent);
