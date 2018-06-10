import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => (
  <footer className="footer">
    <section className="social__wrapper">
      <div className="social">
        <p className="social__title">Redes Sociais</p>
        <ul className="social__list">
          <li>
            <a
              className="social__link"
              href="https://www.facebook.com/tiago.pimentelbengochea"
              target="blank"
            >
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a
              className="social__link"
              href="https://www.instagram.com/pimenteltiago_/"
              target="blank"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section className="footer__content">
      <div className="footer__wrapper">
        <div className="footer__item">
          <h4 className="footer__title">Sobre</h4>
          <p className="footer__text footer__text--pb">
            Professor de Boxe, Muai Thay e Jiu-Jitsu a X anos, na cidade de
            Ijuí.
          </p>
        </div>
        <div className="footer__item">
          <h4 className="footer__title">Endereço</h4>
          <ul className="footer__text footer__text--pb">
            <li>
              <i className="fas fa-map" /> Rua Marechal Malet - Centro, Ijuí -
              RS, 98700-000
            </li>
            <li>
              <i className="fas fa-map" /> Rua Benjamin Constant, 917 - Centro,
              Ijuí - RS, 98700-000
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <h4 className="footer__title">Contato</h4>
          <ul className="footer__text footer__text--pb">
            <li>
              <i className="fas fa-phone" data-fa-transform="rotate-90" /> (55)
              99165-0027
            </li>
            <li>
              <Link to="/contato" className="footer__link">
                <i className="fas fa-comments" /> Mais informações
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <h4 className="footer__title">Links</h4>
          <ul className="footer__text">
            <li>
              <Link to="/" className="footer__link">
                <i className="fas fa-home" /> Início
              </Link>
            </li>
            <li>
              <Link to="/galeria" className="footer__link">
                <i className="fas fa-camera" /> Galeria
              </Link>
            </li>
            <li>
              <Link to="/programas" className="footer__link">
                &nbsp;<i className="fas fa-dollar-sign" /> Programas
              </Link>
            </li>
            <li>
              <Link to="/cronograma" className="footer__link">
                <i className="far fa-calendar-alt" /> Cronograma
              </Link>
            </li>
            <li>
              <Link to="/login" className="footer__link">
                <i className="fas fa-user" /> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="footer__devs">
      <p>
        Desenvolvido por
        <Link to="/">
          <span> Marcia da Silva </span>
        </Link>
        e
        <Link to="/">
          <span> Igor Haugg </span>
        </Link>
        2018 &copy;
      </p>
    </section>
  </footer>
);

export default Footer;
