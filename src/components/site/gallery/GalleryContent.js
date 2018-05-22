import React, { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Lightbox from 'lightbox-react';
import randomColor from 'randomcolor';
import ScrollAnimation from 'react-animate-on-scroll';
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
          {/* <InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore={true || false}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
    {items} // <-- This is the content you want to load
</InfiniteScroll> */}
          {items.map(item => {
            return item.imageFile ? (
              <div className="gallery-page__overlay-image" key={item.id}>
                <img
                  className="gallery-page__image"
                  src={item.imageFile}
                  alt="Fotos e Videos"
                  onClick={() => this.isOpen(item.cont)}
                />
              </div>
            ) : (
              <div
                className={`gallery-page__overlay-video ${
                  item.position === 'vertical' ? ' gallery-page__span-row' : ' '
                }`}
                key={item.id}
              >
                <video
                  className="gallery-page__video"
                  src={item.videoFile}
                  onClick={() => this.isOpen(item.cont)}
                  controls
                />
              </div>
            );
          })}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={
              images[selected].imageFile ? (
                images[selected].imageFile
              ) : (
                <video
                  className={`light-video ${
                    images[selected].position === 'vertical'
                      ? ' light-video__vertical'
                      : ' '
                  }`}
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
