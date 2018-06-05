import React, { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Lightbox from 'lightbox-react';
import randomColor from 'randomcolor';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux';
import selectImages from '../../../selectors/images';
import selectVideos from '../../../selectors/videos';

import { withRouter } from 'react-router-dom';

class GalleryContent extends React.Component {
  state = {
    item: ''
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    const items = this.props.images
      .concat(this.props.videos)
      .sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
      })
      .map((item, i) => {
        return { ...item, cont: i };
      });
    this.setState({
      item: items.filter(item => item.id === id)
    });
  }

  render() {
    const gallery = this.state.item;
    return (
      <Lightbox
        mainSrc={
          gallery[0] ? (
            gallery[0].imageFile ? (
              gallery[0].imageFile
            ) : (
              <video
                className={`light-video ${
                  gallery[0].position === 'vertical'
                    ? ' light-video__vertical'
                    : ' '
                }`}
                src={gallery[0].videoFile}
                autoPlay
                controls
              />
            )
          ) : (
            undefined
          )
        }
        imageTitle={gallery.description}
        onCloseRequest={() => this.props.history.push('/galeria')}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
    videos: state.videos
  };
};

export default connect(mapStateToProps)(withRouter(GalleryContent));
