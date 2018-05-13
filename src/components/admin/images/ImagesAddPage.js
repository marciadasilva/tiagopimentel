import React from 'react';
import { connect } from 'react-redux';
import ImagesForm from './ImagesForm';
import { startAddImage } from '../../../actions/images';
import MenuAdmin from '../MenuAdmin';

export class ImagesAddPage extends React.Component {
  onSubmit = product => {
    this.props.startAddImage(product);
    this.props.history.push('/admin/images');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Adicionar Imagem</h1>
            </div>
          </div>
          <div className="content-container">
            <ImagesForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddImage: image => dispatch(startAddImage(image))
});

export default connect(undefined, mapDispatchToProps)(ImagesAddPage);
