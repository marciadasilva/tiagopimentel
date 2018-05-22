import React from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export class VideosForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.video ? props.video.description : '',
      category: props.video ? props.video.category : 'thai',
      videoFile: props.video ? props.video.videoFile : '',
      createdAt: props.video ? moment(props.video.createdAt) : moment(),
      showLoading: false,
      error: '',
      oldVideo: null
    };
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onCategoryChange = e => {
    const category = e.target.value;
    this.setState(() => ({ category }));
  };
  onUploadStart = () => this.setState({ showLoading: true });
  onUploadSuccess = filename => {
    if (this.props.editForm) {
      this.setState({ oldVideo: this.state.videoFile });
    }
    // if (
    //   filename.endsWith('.jpeg') ||
    //   filename.endsWith('.jpg') ||
    //   filename.endsWith('.png') ||
    //   filename.endsWith('.gif')
    // ) {
    firebase
      .storage()
      .ref('videos')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ videoFile: url, showLoading: false }));
    // } else {
    //   this.setState({
    //     showLoading: false,
    //     error:
    //       'Erro! Video inválido, selecione um video no formato: jpeg, jpg ou png.'
    //   });
    // }
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.category || !this.state.videoFile) {
      this.setState(() => ({
        error: 'Por favor, selecione uma videom e uma categoria.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit(
        {
          description: this.state.description,
          category: this.state.category,
          videoFile: this.state.videoFile,
          createdAt: this.state.createdAt.valueOf()
        },
        this.state.oldVideo
      );
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}

        <input
          type="text"
          placeholder="Descrição (opcional)"
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <select
          className="select"
          onChange={this.onCategoryChange}
          value={this.state.category}
        >
          <option key="thai" value="thai">
            Muay Thai
          </option>
          <option key="jiujitsu" value="jiujitsu">
            Jiu Jitsu
          </option>
        </select>

        <label className="label button">
          Selecionar video
          <FileUploader
            accept="video/*"
            name="video"
            randomizeFilename
            hidden
            storageRef={firebase.storage().ref('videos')}
            onUploadStart={this.onUploadStart}
            onUploadSuccess={this.onUploadSuccess}
          />
        </label>

        {this.state.showLoading && (
          <div className="loader__small">
            <img className="loader__image" src="/images/loader.gif" />
          </div>
        )}

        {this.state.videoFile && (
          <video
            className="list-item__video"
            src={this.state.videoFile}
            controls
          />
        )}

        <div>
          {this.state.category &&
            this.state.videoFile && (
              <button className="button">
                {this.props.editForm ? 'Salvar' : 'Adicionar'}
              </button>
            )}
        </div>
      </form>
    );
  }
}

export default VideosForm;
