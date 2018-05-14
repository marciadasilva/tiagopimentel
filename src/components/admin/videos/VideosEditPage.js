import React from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';

import VideosForm from './VideosForm';
import MenuAdmin from '../MenuAdmin';
import { startEditVideo, startRemoveVideo } from '../../../actions/videos';

export class VideosEditPage extends React.Component {
  onSubmit = (video, oldVideo) => {
    this.props.startEditVideo(this.props.video.id, video, oldVideo);
    this.props.history.push('/admin/videos');
  };
  onRemove = () => {
    confirmAlert({
      title: 'Confirmar',
      message: 'Você tem certeza que deseja remover este video?',
      buttons: [
        {
          label: 'Remover',
          onClick: () => this.onClickRemove()
        },
        {
          label: 'Cancelar'
        }
      ]
    });
  };
  onClickRemove = () => {
    this.props.startRemoveVideo({ id: this.props.video.id });
    this.props.history.push('/admin/videos');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Editar Video</h1>
            </div>
          </div>
          <div className="content-container">
            <VideosForm
              video={this.props.video}
              onSubmit={this.onSubmit}
              editForm={true}
            />
            <button
              className="button button--secondary"
              onClick={this.onRemove}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  video: state.videos.find(video => video.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditVideo: (id, video, oldVideo) =>
    dispatch(startEditVideo(id, video, oldVideo)),
  startRemoveVideo: data => dispatch(startRemoveVideo(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosEditPage);
