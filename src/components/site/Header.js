import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = props => (
  <header className="header-grid">
    <div className="header">
      <ul className="header__nav">
        <NavLink
          className="header__nav-hover"
          exact
          to="/"
          activeClassName="header__nav-selected"
        >
          <li className="header__nav--item">Início</li>
        </NavLink>
        <li>~</li>
        <NavLink
          className="header__nav-hover"
          to="/galeria"
          activeClassName="header__nav-selected"
        >
          <li className="header__nav--item">Galeria</li>
        </NavLink>
        <li>~</li>
        <a className="header__nav-hover" href="/#programas">
          <li className="header__nav--item">Programas</li>
        </a>
        <li>~</li>
        <a className="header__nav-hover" href="/#cronograma">
          <li className="header__nav--item">Cronograma</li>
        </a>
        <li>~</li>
        <NavLink
          className="header__nav-hover"
          to="/contato"
          activeClassName="header__nav-selected"
        >
          <li className="header__nav--item">Contato</li>
        </NavLink>
      </ul>
      <Link to="/" className="header__brand">
        Logo
      </Link>
    </div>
  </header>
);

export default Header;
