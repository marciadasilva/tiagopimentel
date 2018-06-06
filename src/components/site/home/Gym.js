import React from 'react';

const Gym = () => {
  return (
    <section className="gym">
      <div className="gym__list">
        <div className="gym__img gym__img--1" />
        <div className="gym__text">
          <span className="gym__name">Academia</span>
          <h3 className="gym__title">CT Tiago Pimentel</h3>
          <span className="gym__icon">----------</span>
          <p className="gym__description">
            Academia preparada para treinos de Jiu Jitsu e Muay Thai. As aulas
            são direcionadas para você que já é um lutador, quer se tornar um,
            ou apenas se manter em forma.<br />
            Atletas de todos os niveis e experiências são bem vindos!
          </p>
        </div>
      </div>
      <div className="gym__list">
        <div className="gym__text">
          <span className="gym__name">Academia</span>
          <h3 className="gym__title">Sogi</h3>
          <span className="gym__icon">----------</span>
          <p className="gym__description">
            A Sociedade Ginástica Ijuí disponibiliza aos seus associados
            diversas modalidades de esportes, dentre elas o Jiu Jitsu e Muay
            Thai, que são ensinadas pelo professor Tiago Pimentel.
          </p>
        </div>
        <div className="gym__img gym__img--2" />
      </div>
    </section>
  );
};

export default Gym;
