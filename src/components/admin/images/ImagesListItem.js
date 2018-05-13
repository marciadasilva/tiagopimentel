import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ImagesListItem = ({ id, imageFile }) => (
  <Link className="list-item" to={`/admin/images/edit/${id}`}>
    <img className="list-item__image" src={imageFile} />
  </Link>
);

export default ImagesListItem;
