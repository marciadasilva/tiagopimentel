import React from 'react';
import { connect } from 'react-redux';

import ImagesListItem from './ImagesListItem';
import selectImages from '../../../selectors/images';

export const ImagesList = props => (
  <div className="content-container">
    <div className="list-body">
      {props.images.length === 0 ? (
        <div className="list-item list-item--message">
          <span>Nenhuma imagem cadastrada</span>
        </div>
      ) : (
        props.images.map(image => {
          return <ImagesListItem key={image.id} {...image} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    images: selectImages(state.images, state.filters)
  };
};

export default connect(mapStateToProps)(ImagesList);
