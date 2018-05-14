import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import selectVideos from '../../../selectors/videos';

export const VideosSummary = ({ videoCount, videosTotal }) => {
  const videoWord =
    videoCount === 1
      ? `${videoCount} video cadastrado`
      : `${videoCount} videos cadastrados`;

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          {videoCount === 0 ? 'Nenhum video cadastrado' : videoWord}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/admin/videos/create">
            Adicionar video
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleVideos = selectVideos(state.videos, state.filters);

  return {
    videoCount: visibleVideos.length
  };
};

export default connect(mapStateToProps)(VideosSummary);
