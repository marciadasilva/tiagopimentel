import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div className="gallery">
      <span className="gallery__name">Galeria</span>
      <h3 className="gallery__title">Veja nossas fotos</h3>
      <span className="gallery__icon">----------</span>
      <div className="gallery__list">
        <div className="gallery__image gallery-img1" />
        <div className="gallery__image gallery-img2" />
        <div className="gallery__image gallery-img3" />
        <div className="gallery__image gallery-img4" />
      </div>
      <div>
        <Link to="/" className="button button--home">
          Ver mais
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
