import React from 'react';

const Partnership = () => {
  return (
    <div className="partnership">
      <span className="partnership__name">Sobre nós</span>
      <h3 className="partnership__title">Quem somos e o que fazemos</h3>
      <span className="partnership__icon">----------</span>
      <div className="partnership__list">
        <div className="partnership__item">
          <div className="partnership__image p-image1" />
          <span className="partnership__name">Black King</span>
          <span className="partnership__instructors">Macacão</span>
          <span className="partnership__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            possimus unde delectus. Iure, quidem, laudantium.
          </span>
        </div>
        <div className="partnership__item">
          <div className="partnership__image p-image2" />
          <span className="partnership__name">Fight Team</span>
          <span className="partnership__instructors">Minhoquinha</span>
          <span className="partnership__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            possimus unde delectus. Iure, quidem, laudantium.
          </span>
        </div>
        <div className="partnership__item">
          <div className="partnership__image p-image3" />
          <span className="partnership__name">Cicero Costha</span>
          <span className="partnership__instructors">Ortiz Cardoso</span>
          <span className="partnership__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            possimus unde delectus. Iure, quidem, laudantium.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
