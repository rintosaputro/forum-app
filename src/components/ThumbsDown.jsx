import React from 'react';
import { HiOutlineThumbDown, HiThumbDown } from 'react-icons/hi';
import PropTypes from 'prop-types';

function ThumbsDown({ totalThumbs = 0, isActive }) {
  return (

    <button className="thumbs" title="dislike">
      {isActive ? <HiThumbDown color="#f56382" size="17px" /> : <HiOutlineThumbDown size="17px" />}
      <span className="total-thumbs">{totalThumbs}</span>
    </button>
  );
}

ThumbsDown.propTypes = {
  totalThumbs: PropTypes.number,
  isActive: PropTypes.bool,
};

export default ThumbsDown;
