import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Partnership = () => {
  return (
    <section className="partnership" id="parceiros">
      {/* <span className="partnership__name">Sobre nós</span> */}
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <h3 className="partnership__title">Academias Parceiras</h3>
      </ScrollAnimation>
      <span className="partnership__icon" />
      <div className="partnership__list">
        <div className="partnership__item">
          <div className="partnership__image p-image1" />
          <span className="partnership__name">Black King</span>
          <span className="partnership__instructors">Mestre da acadêmia</span>
          <span className="partnership__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            possimus unde delectus. Iure, quidem, laudantium.
          </span>
        </div>
        <div className="partnership__item">
          <div className="partnership__image p-image2" />
          <span className="partnership__name">Fight Team</span>
          <span className="partnership__instructors">Mestre da acadêmia</span>
          <span className="partnership__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            possimus unde delectus. Iure, quidem, laudantium.
          </span>
        </div>
        <div className="partnership__item">
          <div className="partnership__image p-image3" />
          <span className="partnership__name">Cicero Costha</span>
          <span className="partnership__instructors">Mestre da acadêmia</span>
          <span className="partnership__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            possimus unde delectus. Iure, quidem, laudantium.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
