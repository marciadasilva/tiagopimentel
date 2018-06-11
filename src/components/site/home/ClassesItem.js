import React from 'react';
import { Link } from 'react-router-dom';

const ClassesItem = props => {
  let backgroundImage = {
    backgroundImage: 'url(' + props.imgUrl + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div className="classes__item" style={backgroundImage}>
      <p className="classes__title">Aulas</p>
      <p className="classes__name">{props.name}</p>
      <p className="classes__description">{props.description}</p>
      <div>
        <Link to={`${props.link}`} className="button button--home">
          {props.cta}
        </Link>
      </div>
    </div>
  );
};

export default ClassesItem;
