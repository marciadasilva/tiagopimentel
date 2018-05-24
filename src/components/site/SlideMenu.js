import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const SlideMenu = () => {
  return (
    <Menu menuClassName={'slide-menu'}>
      <Link to="/" className="slide-menu__item">
        <span>Início</span>
      </Link>
      <Link to="/galeria" className="slide-menu__item">
        <span>Galeria</span>
      </Link>
      <a href="#aulas" className="slide-menu__item">
        <span>Aulas</span>
      </a>
      <a href="#parceiros" className="slide-menu__item">
        <span>Parceiros</span>
      </a>
      <Link to="/contato" className="slide-menu__item">
        <span>Contato</span>
      </Link>
    </Menu>
  );
};

export default SlideMenu;
