import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
  <header className="header-grid">
    <div className="header">
      <ul className="header__nav">
        <Link to="/">
          <li>Início</li>
        </Link>
        <li>~</li>
        <Link to="/galeria">
          <li>Galeria</li>
        </Link>
        <li>~</li>
        <a href="#aulas">
          <li>Aulas</li>
        </a>
        <li>~</li>
        <a href="#parceiros">
          <li>Parceiros</li>
        </a>
        <li>~</li>
        <Link to="/contato">
          <li>Contato</li>
        </Link>
      </ul>
      <div className="header__brand">Logo</div>
    </div>
  </header>
);

export default Header;
