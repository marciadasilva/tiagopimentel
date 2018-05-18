import React from 'react';

const GalleryTitle = () => {
  return (
    <section className="gallery-page">
      <h2 className="gallery-page__title">Fotos e Vídeos</h2>
      <span className="gallery-page__icon">---------------</span>
      <p className="gallery-page__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptate cum exercitationem, nostrum aliquam pariatur repudiandae at eligendi nobis qui minima.
      </p>

      <div className="gallery-page__content">
        <div>
          <img
            className="gallery-page__image"
            src="/images/gallery1.jpg"
            alt="Fotos e Videos"
          />
        </div>
        <div>
          <img
            className="gallery-page__image"
            src="/images/gallery1.jpg"
            alt="Fotos e Videos"
          />
        </div>
        <div>
          <img
            className="gallery-page__image"
            src="/images/gallery1.jpg"
            alt="Fotos e Videos"
          />
        </div>
        <div>
          <img
            className="gallery-page__image"
            src="/images/gallery1.jpg"
            alt="Fotos e Videos"
          />
        </div>
        <div>
          <img
            className="gallery-page__image"
            src="/images/gallery1.jpg"
            alt="Fotos e Videos"
          />
        </div>
      </div>
    </section>
  );
};

export default GalleryTitle;
