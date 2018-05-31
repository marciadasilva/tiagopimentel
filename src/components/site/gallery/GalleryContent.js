import React, { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Lightbox from 'lightbox-react';
import randomColor from 'randomcolor';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux';
import selectImages from '../../../selectors/images';
import selectVideos from '../../../selectors/videos';

class GalleryContent extends React.Component {
  state = {
    isOpen: false,
    selected: 0,
    start: 0,
    end: 6,
    arrayItems: Array.from({}),
    allItems: {},
    hasMore: true
  };

  componentDidMount() {
    const items = this.props.images
      .concat(this.props.videos)
      .sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
      })
      .map((item, i) => {
        return { ...item, cont: i };
      });
    this.setState({
      allItems: items,
      arrayItems: Array.from(items.slice(this.state.start, this.state.end)),
      start: 6,
      end: 12
    });
  }

  isOpen = selected => {
    this.setState({ isOpen: true, selected });
  };

  loadMore = () => {
    if (this.state.arrayItems.length >= this.state.allItems.length) {
      this.setState({ hasMore: false });
      return;
    }
    setTimeout(() => {
      this.setState({
        arrayItems: this.state.arrayItems.concat(
          Array.from(
            this.state.allItems.slice(this.state.start, this.state.end)
          )
        ),
        start: this.state.start + 6,
        end: this.state.end + 6
      });
    }, 500);
  };

  render() {
    const { isOpen, selected } = this.state;
    const { sortBy, category, visualization } = this.props.filters;
    const gallery = Array.from(
      this.state.arrayItems
        .filter(item => {
          return category === '' || category === 'all'
            ? item
            : item.category === category;
        })
        .filter(item => {
          return visualization === '' || visualization === 'all'
            ? item
            : visualization === 'images'
              ? item.imageFile && item
              : item.videoFile && item;
        })
        .map((item, i) => {
          return { ...item, cont: i };
        })
    );

    return (
      <Fragment>
        <InfiniteScroll
          dataLength={this.state.arrayItems.length}
          next={this.loadMore}
          hasMore={this.state.hasMore}
          loader={
            <div className="loader__small gallery-page__message">
              <img className="loader__image" src="/images/loader.gif" />
            </div>
          }
        >
          <div className="gallery-page__content">
            {this.state.arrayItems
              .filter(item => {
                return category === '' || category === 'all'
                  ? item
                  : item.category === category;
              })
              .filter(item => {
                return visualization === '' || visualization === 'all'
                  ? item
                  : visualization === 'images'
                    ? item.imageFile && item
                    : item.videoFile && item;
              })
              .map((item, i) => {
                return { ...item, cont: i };
              })
              .map(item => {
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
                      item.position === 'vertical'
                        ? ' gallery-page__span-row'
                        : ' '
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
              })
              .sort((a, b) => {
                if (sortBy === 'date') {
                  return a.createdAt < b.createdAt ? 1 : -1;
                } else if (sortBy === 'dateReverse') {
                  return a.createdAt < b.createdAt ? -1 : 1;
                }
              })}
          </div>
        </InfiniteScroll>
        {isOpen && (
          <Lightbox
            mainSrc={
              gallery[selected].imageFile ? (
                gallery[selected].imageFile
              ) : (
                <video
                  className={`light-video ${
                    gallery[selected].position === 'vertical'
                      ? ' light-video__vertical'
                      : ' '
                  }`}
                  src={gallery[selected].videoFile}
                  autoPlay
                  controls
                />
              )
            }
            imageTitle={gallery[selected].description}
            nextSrc={gallery[(selected + 1) % gallery.length]}
            prevSrc={
              gallery[(selected - 1 + gallery.length - 1) % gallery.length]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                selected:
                  (this.state.selected + (gallery.length - 1)) % gallery.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                selected: (this.state.selected + 1) % gallery.length
              })
            }
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: selectImages(state.images, state.filters),
    videos: selectVideos(state.videos, state.filters),
    filters: state.filters
  };
};

export default connect(mapStateToProps)(GalleryContent);

// const items = this.props.images
//   .concat(this.props.videos)
//   .sort((a, b) => {
//     return a.createdAt < b.createdAt ? 1 : -1;
//   })
//   .map((item, i) => {
//     return { ...item, cont: i };
//   });
