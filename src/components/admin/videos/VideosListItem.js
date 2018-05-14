import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const VideosListItem = ({ id, videoFile }) => (
  <Link className="list-item" to={`/admin/videos/edit/${id}`}>
    <video className="list-item__video" src={videoFile} controls />
  </Link>
);

export default VideosListItem;
