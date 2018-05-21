import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Gym = () => {
  return (
    <section className="gym">
      <div className="gym__list">
        <div className="gym__img gym__img--1" />
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <div className="gym__text">
            <span className="gym__name">Academia</span>
            <h3 className="gym__title">Union Team</h3>
            <span className="gym__icon">----------</span>
            <p className="gym__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis nulla beatae eius vitae est, saepe debitis aperiam!
              Quaerat, iste, eius.
            </p>
          </div>
        </ScrollAnimation>
      </div>
      <div className="gym__list">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <div className="gym__text">
            <span className="gym__name">Academia</span>
            <h3 className="gym__title">Sogi</h3>
            <span className="gym__icon">----------</span>
            <p className="gym__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis nulla beatae eius vitae est, saepe debitis aperiam!
              Quaerat, iste, eius.
            </p>
          </div>
        </ScrollAnimation>
        <div className="gym__img gym__img--2" />
      </div>
    </section>
  );
};

export default Gym;
