import React from 'react';
// import HiOutlineHandThumbUp from 'react-icons/hi';
import {
  HiOutlineThumbUp, HiOutlineThumbDown, HiThumbUp, HiThumbDown,
} from 'react-icons/hi';
import Badge from './Badge';
import ThumbsDown from './ThumbsDown';
import ThumbsUp from './ThumbsUp';

function CardThread() {
  return (
    <article className="card-thread">
      <div className="header-thread">
        <h2 className="name-thread">Rinto Saputro</h2>
        <span className="time-thread">20 menit yang lalu</span>
      </div>
      <h3 className="title">Judul Thread</h3>
      <p className="description">
        article description di sini ya gess
        article description di sini ya gess
        article description di sini ya gess
        article description di sini ya gess
      </p>
      <Badge>Category</Badge>
      <div>
        <ThumbsUp />
        <ThumbsDown />
      </div>
    </article>
  );
}

export default CardThread;
