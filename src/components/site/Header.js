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
        <Link to="/">
          <li>Galeria</li>
        </Link>
        <li>~</li>
        <Link to="/">
          <li>Aulas</li>
        </Link>
        <li>~</li>
        <Link to="/">
          <li>Patrocinadores</li>
        </Link>
        <li>~</li>
        <Link to="/">
          <li>Contato</li>
        </Link>
      </ul>
      <div className="header__brand">Logo</div>
    </div>
  </header>
);

export default Header;
