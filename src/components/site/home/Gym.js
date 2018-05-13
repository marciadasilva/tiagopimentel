import React from 'react';

const Gym = () => {
  return (
    <div className="gym">
      <div className="gym__list">
        <div className="gym__img gym__img--1" />
        <div className="gym__text">
          <span className="gym__name">Academia</span>
          <h3 className="gym__title">Union Team</h3>
          <span className="gym__icon">----------</span>
          <p className="gym__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            nulla beatae eius vitae est, saepe debitis aperiam! Quaerat, iste,
            eius.
          </p>
        </div>
      </div>
      <div className="gym__list">
        <div className="gym__text">
          <span className="gym__name">Academia</span>
          <h3 className="gym__title">Sogi</h3>
          <span className="gym__icon">----------</span>
          <p className="gym__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            nulla beatae eius vitae est, saepe debitis aperiam! Quaerat, iste,
            eius.
          </p>
        </div>
        <div className="gym__img gym__img--2" />
      </div>
    </div>
  );
};

export default Gym;
