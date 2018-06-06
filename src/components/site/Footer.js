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
          <p className="footer__text">
            Professor de Boxe, Muai Thay e Jiu-Jitsu a X anos, na cidade de
            Ijuí.
          </p>
        </div>
        <div className="footer__item">
          <h4 className="footer__title">Endereço</h4>
          <ul className="footer__text">
            <li>
              <i className="fas fa-angle-right" /> Marechal Mallet, 111 - Ijuí
            </li>
            <li>
              <i className="fas fa-angle-right" /> Endereço Sogi, 111 - Ijuí
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <h4 className="footer__title">Contato</h4>
          <ul className="footer__text">
            <li>
              <i className="fas fa-angle-right" /> (55) 99165-0027
            </li>
            <li>
              <Link to="/contato" className="footer__link">
                <i className="fas fa-angle-right" /> Mais informações
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <h4 className="footer__title">Links</h4>
          <ul className="footer__text">
            <li>
              <Link to="/" className="footer__link">
                <i className="fas fa-angle-right" /> Início
              </Link>
            </li>
            <li>
              <Link to="/galeria" className="footer__link">
                <i className="fas fa-angle-right" /> Galeria
              </Link>
            </li>
            <li>
              <Link to="/programas" className="footer__link">
                <i className="fas fa-angle-right" /> Programas
              </Link>
            </li>
            <li>
              <Link to="/cronograma" className="footer__link">
                <i className="fas fa-angle-right" /> Cronograma
              </Link>
            </li>
            <li>
              <Link to="/login" className="footer__link">
                <i className="fas fa-angle-right" /> Login
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
