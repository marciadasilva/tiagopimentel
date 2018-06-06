import React from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export class ImagesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.image ? props.image.description : '',
      category: props.image ? props.image.category : 'thai',
      imageFile: props.image ? props.image.imageFile : '',
      createdAt: props.image ? moment(props.image.createdAt) : moment(),
      showLoading: false,
      error: '',
      oldImage: null
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
      this.setState({ oldImage: this.state.imageFile });
    }
    if (
      filename.endsWith('.jpeg') ||
      filename.endsWith('.jpg') ||
      filename.endsWith('.png') ||
      filename.endsWith('.gif')
    ) {
      firebase
        .storage()
        .ref('images')
        .child(filename)
        .getDownloadURL()
        .then(url => this.setState({ imageFile: url, showLoading: false }));
    } else {
      this.setState({
        showLoading: false,
        error:
          'Erro! Imagem inválida, selecione uma imagem no formato: jpeg, jpg ou png.'
      });
    }
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.category || !this.state.imageFile) {
      this.setState(() => ({
        error: 'Por favor, selecione uma imagem e uma categoria.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit(
        {
          description: this.state.description,
          category: this.state.category,
          imageFile: this.state.imageFile,
          createdAt: this.state.createdAt.valueOf()
        },
        this.state.oldImage
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
            Jiu-Jitsu
          </option>
        </select>

        <label className="label button">
          Selecionar imagem
          <FileUploader
            accept="image/*"
            name="image"
            randomizeFilename
            hidden
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.onUploadStart}
            onUploadSuccess={this.onUploadSuccess}
          />
        </label>

        {this.state.showLoading && (
          <div className="loader__small">
            <img className="loader__image" src="/images/loader.gif" />
          </div>
        )}

        {this.state.imageFile && (
          <img className="list-item__image" src={this.state.imageFile} />
        )}

        <div>
          {this.state.category &&
            this.state.imageFile && (
              <button className="button">
                {this.props.editForm ? 'Salvar' : 'Adicionar'}
              </button>
            )}
        </div>
      </form>
    );
  }
}

export default ImagesForm;
