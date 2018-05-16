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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            repellendus ea aliquam, perferendis similique autem adipisci aliquid
            et vitae. Suscipit!
          </p>
        </div>
        <div className="footer__item">
          <h4 className="footer__title">Endereço</h4>
          <ul className="footer__text">
            <li>Telefone</li>
            <li>Endereço</li>
          </ul>
        </div>
        <div className="footer__item">
          <h4 className="footer__title">Contato</h4>
          <p className="footer__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
            consectetur.
          </p>
        </div>
        <div className="footer__item">
          <h4 className="footer__title">Ultima div</h4>
          <p className="footer__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint vero
            ex dicta ipsum laborum consectetur?
          </p>
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
