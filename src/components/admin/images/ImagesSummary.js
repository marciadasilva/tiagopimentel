import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import selectImages from '../../../selectors/images';

export const ImagesSummary = ({ imageCount, imagesTotal }) => {
  const imageWord =
    imageCount === 1
      ? `${imageCount} imagem cadastrada`
      : `${imageCount} imagens cadastradas`;

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          {imageCount === 0 ? 'Nenhuma imagem cadastrada' : imageWord}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/admin/images/create">
            Adicionar imagem
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleImages = selectImages(state.images, state.filters);

  return {
    imageCount: visibleImages.length
  };
};

export default connect(mapStateToProps)(ImagesSummary);
