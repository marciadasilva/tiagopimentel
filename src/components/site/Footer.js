import React from 'react';
// import { SocialIcon } from 'react-social-icons';

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
              <i className="fab fa-facebook" />
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
  </footer>
);

export default Footer;
