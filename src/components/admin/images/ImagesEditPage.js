import React from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';

import ImagesForm from './ImagesForm';
import MenuAdmin from '../MenuAdmin';
import { startEditImage, startRemoveImage } from '../../../actions/images';

export class ImagesEditPage extends React.Component {
  onSubmit = (image, oldImage) => {
    this.props.startEditImage(this.props.image.id, image, oldImage);
    this.props.history.push('/admin/images');
  };
  onRemove = () => {
    confirmAlert({
      title: 'Confirmar',
      message: 'Você tem certeza que deseja remover esta imagem?',
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
    this.props.startRemoveImage({ id: this.props.image.id });
    this.props.history.push('/admin/images');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Editar Imagem</h1>
            </div>
          </div>
          <div className="content-container">
            <ImagesForm
              image={this.props.image}
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
  image: state.images.find(image => image.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditImage: (id, image, oldImage) =>
    dispatch(startEditImage(id, image, oldImage)),
  startRemoveImage: data => dispatch(startRemoveImage(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesEditPage);
