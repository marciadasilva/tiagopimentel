import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = props => (
  <div className="notfound">
    <div className="notfound__card">
      <div className="notfound__title">Página não encontrada!</div>
      <div className="notfound__buttons">
        <Link to="/" className="button">
          Início
        </Link>
        <button className="button" onClick={() => props.history.goBack()}>
          Voltar
        </button>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
