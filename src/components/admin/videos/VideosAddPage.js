import React from 'react';
import { connect } from 'react-redux';

import MenuAdmin from '../MenuAdmin';
import VideosForm from './VideosForm';
import { startAddVideo } from '../../../actions/videos';

export class VideosAddPage extends React.Component {
  onSubmit = product => {
    this.props.startAddVideo(product);
    this.props.history.push('/admin/videos');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Adicionar Video</h1>
            </div>
          </div>
          <div className="content-container">
            <VideosForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddVideo: video => dispatch(startAddVideo(video))
});

export default connect(undefined, mapDispatchToProps)(VideosAddPage);
