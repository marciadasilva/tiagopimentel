import React from 'react';
import { connect } from 'react-redux';

import VideosListItem from './VideosListItem';
import selectVideos from '../../../selectors/videos';

export const VideosList = props => (
  <div className="content-container">
    <div className="list-body">
      {props.videos.length === 0 ? (
        <div className="list-item list-item--message">
          <span>Nenhum video cadastrado</span>
        </div>
      ) : (
        props.videos.map(video => {
          return <VideosListItem key={video.id} {...video} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    videos: selectVideos(state.videos, state.filters)
  };
};

export default connect(mapStateToProps)(VideosList);
