import React from 'react';
import { Link } from 'react-router-dom';

const PriceList = () => {
  return (
    <section className="price-list" id="aulas">
      <div className="price-list__container">
        <h3 className="price-list__title">Programas</h3>
        <div className="price-list__cards">
          <div className="price-list__item">
            <div className="price-list__category price-list__category-img1">
              Muay Thai
            </div>
            <ul className="price-list__list">
              <li className="price-list__features">
                <p>Treinos de Muay thai todas as segundas, quartas e sábados</p>
                <span>3x</span> na semana: <span>R$ 90,00</span>
              </li>
              <li className="price-list__features">
                <span>2x</span> na semana: <span>R$ 80,00</span>
              </li>
              <li className="price-list__features">
                <span>1x</span> na semana: <span>R$ 70,00</span>
              </li>
            </ul>
            <div className="button__site--margin price-list__button">
              <Link to="/" className="button__site ">
                <span>Contato</span>
              </Link>
            </div>
          </div>
          <div className="price-list__item">
            <div className="price-list__category price-list__category-img2">
              Jiu Jitsu
            </div>
            <ul className="price-list__list">
              <li className="price-list__features">
                <p>
                  Treinos de Jiu Jitsu todas as segundas, terças, quartas,
                  quintas e sábados
                </p>
                <span>3x</span> na semana: <span>R$ 90,00</span>
              </li>
              <li className="price-list__features">
                <span>2x</span> na semana: <span>R$ 80,00</span>
              </li>
              <li className="price-list__features">
                <span>1x</span> na semana: <span>R$ 70,00</span>
              </li>
            </ul>
            <div className="button__site--margin price-list__button">
              <Link to="/" className="button__site ">
                <span>Contato</span>
              </Link>
            </div>
          </div>
          <div className="price-list__item">
            <div className="price-list__category price-list__category-img3">
              Particular
            </div>
            <ul className="price-list__list">
              <li className="price-list__features">
                <p>Treinos a combinar com o professor</p>
                <span>1h</span> na semana: <span>R$ XX,00</span>
              </li>
            </ul>
            <div className="button__site--margin price-list__button">
              <Link to="/" className="button__site ">
                <span>Contato</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
